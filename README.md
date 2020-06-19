# TypeSuite™
TypeSuite™ is a TypeScript client for the NetSuite [SuiteTalk Web Services
API](https://www.netsuite.com/portal/developers/resources/suitetalk-documentation.shtml).

**Note: TypeSuite is currently in alpha and subject to [several limitations](#current-limitations). There are still
several features to add and bugs to fix, and there will likely be breaking changes. We'd love to get your feedback
to get it out of alpha ASAP.**

TypeSuite was built by the team at [Stedi](https://www.stedi.com), a platform for B2B trade. If you're using
TypeSuite to improve how your business operates, we'd love to hear from you.

# Usage

## Installation

You can install TypeSuite via npm:

```sh
npm install --save git+https://github.com/StediInc/TypeSuite.git
```

Or add it to your `package.json` manually.

## Quickstart

```ts
import { Configuration, TypeSuiteClient } from "typesuite";

// You can fetch your credentials from your NetSuite instance
// We recommend storing them somewhere secure like AWS Secrets Manager
const config: Configuration = {
  account: "NetSuite Account ID",
  apiVersion: "NetSuite API Version",
  token: {
    consumerKey: "NetSuite Consumer Key",
    consumerSecret: "NetSuite Consumer Secret",
    tokenKey: "NetSuite Token Key",
    tokenSecret: "NetSuite Token Secret",
  },
};

// Create NetSuite client using above credentials
const client = new TypeSuiteClient(config);
```

## API Details

### Configuration

The `Configuration` object holds generic NetSuite configuration information, including the account ID and auth
credentials, API version information, and can even contain shared query options, if desired.

```ts
const config: Configuration = {
  account: "NetSuite Account ID",
  apiVersion: "2019_2",
  token: {
    ...
  },
};
```

#### API Version

Currently, TypeSuite only supports the [2019_2 WSDL](https://webservices.netsuite.com/wsdl/v2019_2_0/netsuite.wsdl);
therefore, the only acceptable configuration option for `apiVersion` is `"2019_2"`.

We aim to support additional API versions in future versions of TypeSuite, and will update the docs accordingly.

#### Authentication

TypeSuite uses [NetSuite Token Based Auth (TBA)](https://docs.oracle.com/cloud/latest/netsuitecs_gs/NSATH/NSATH.pdf),
which requires a `consumerKey`, `consumerSecret`, `tokenKey`, and `tokenSecret`. 

```ts
const config: Configuration = {
  account: "...",
  apiVersion: "...",
  token: {
    consumerKey: "NetSuite Consumer Key",
    consumerSecret: "NetSuite Consumer Secret",
    tokenKey: "NetSuite Token Key",
    tokenSecret: "NetSuite Token Secret",
  },
};
```

### Reading from NetSuite

#### Searching for Records

You can search NetSuite for all records of a certain type (e.g. a `_purchaseOrder`), matching all other criteria
(e.g. a status of "pending receipt") in a given time period:

```ts
// Add additional imports from our API version
import { SearchRequest } from "typesuite/2019_2/platform_messages";
import { TransactionSearchAdvanced } from "typesuite/2019_2/transactions_sales";

// Set up the correct time you'd like to start the search from
const dateTime = ZonedDateTime.of(LocalDateTime.parse("2020-01-01T00:00"), ZoneId.UTC);
const isoFormatter = new DateTimeFormatterBuilder().appendInstant(3).toFormatter(ResolverStyle.STRICT);

// Construct the search request
const searchAdvancedRequest = new SearchRequest({
  searchRecord: new TransactionSearchAdvanced({
    columns: {
      basic: {
        internalId: [{}],
      },
      itemJoin: {
        internalId: [{}],
      },
    },
    criteria: {
      basic: {
        closed: false,
        mainLine: true,
        status: {
          operator: "anyOf",
          searchValue: ["_purchaseOrderPendingReceipt"],
        },
        type: {
          operator: "anyOf",
          searchValue: ["_purchaseOrder"],
        },
        dateCreated: {
          operator: "after",
          searchValue: dateTime.format(isoFormatter),
        },
      },
    },
  }),
});

// Perform NetSuite Search
const response: any = await client
  .search(searchAdvancedRequest)
  .catch((error: any) => {
    console.log("Error during search");
    throw error;
  });

// Do interesting things with the response
console.log("Found %d purchase orders", response.searchResult.totalRecords);
```

Note that this will return the record references, not the actual record. You'll need to fetch a record,
as shown below, to get the full contents.

#### Resolving a Record

You can fetch an individual record (e.g. a particular purchase order) from NetSuite:

```ts
// Add additional imports
import { GetRequest } from "typesuite/2019_2/platform_messages";
import { PurchaseOrder } from "typesuite/2019_2/transactions_purchases";

// Create a PO GET request
const getRequest = new GetRequest({
    baseRef: new RecordRef({
      internalId: "NetSuite Document ID",
      type: "purchaseOrder"
    }),
  });

// Perform the request
const response = await client
  .get(getRequest)
  .catch(function (error: any) {
    console.log("Error fetching purchaseOrder");
    throw error;
  });

// Cast the response record appropriately
const purchaseOrder = response.readResponse.record as PurchaseOrder;
```

### Writing to NetSuite

While TypeSuite currently supports types that can be written back to NetSuite, we don't yet have examples. Stay tuned
for more!

### A note on instantiated objects vs object literals

Building requests to the NetSuite SuiteTalk API frequently involves instantiating quite a few objects.  In order to
minimize the amount of code required to build all the necessary objects, in many cases an object literal can be
provided instead of a fully instantiated object.  There are two cases where a fully instantiated object is
required.  The first case is the outermost object, typically the Request object, which must be created by calling
the class' constructor. In the example below, a `SearchRequest` is explicitly instantiated via `new`.

```ts
const SearchRequest = new SearchRequest({
  ...
  });
```

The second case where a fully instantiated object is required is where you provide an object that is a subclass of
type that is expected for that field.  For example, `SearchRequest` has single field called `searchRecord` whose
type is `PlatformCore.SearchRecord`.  `PlatformCore.SearchRecord` is an abstract type that isn't meant to be used
directly.  Instead, you provide one of its subclasses, which includes `TransactionSearchBasic`.  In order for the
correct xml for this request to be generated, you must provide a fully instantiated `TransactionSearchBasic`. 

```ts
const SearchRequest = new SearchRequest({
  searchRecord: new TransactionSearchBasic({
      ...
    }),
  });
```

In all other cases you can simply supply an object literal with the data needed for your request.  For example,
the `status` and `type` fields of `TransactionSearchBasic` have a type of `PlatformCore.SearchEnumMultiSelectField`,
but it is not necessary to create these objects by calling `new`.

```ts
const searchRequest = new SearchRequest({
  searchRecord: new TransactionSearchBasic({
    status: {
      operator: "anyOf",
      searchValue: ["_purchaseOrderPendingReceipt"],
    },
    type: {
      operator: "anyOf",
      searchValue: ["_purchaseOrder"],
    },
  }),
});
```

## Current limitations

### API Version

As mentioned above, TypeSuite only supports the [2019_2 WSDL](https://webservices.netsuite.com/wsdl/v2019_2_0/netsuite.wsdl).

### Available ports

TODO: Quick implementation or write up

### Date handling

Right now, you must convert `Date`s to a string manually.  This is due to a complication with one of
the underlying libraries that TypeSuite uses and will be fixed in a later release.  However, it will always be
possible to provide a string for any field in the NetSuite API that holds a `Date`.

```ts
  const dateTime = ZonedDateTime.of(LocalDateTime.parse("2020-01-01T00:00"), ZoneId.UTC);
  const isoFormatter = new DateTimeFormatterBuilder().appendInstant(3).toFormatter(ResolverStyle.STRICT);

  const searchRequest = new SearchRequest({
    searchRecord: new TransactionSearchBasic({
      dateCreated: {
        operator: "after",
        searchValue: dateTime.format(isoFormatter),
      },
    }),
  });
```

# Development

## Build

To build TypeSuite, run `npm run build`. Source code is located in `/src`.

## Test

To test TypeSuite, run `npm run test`. Tests are located in `/test` and use Jest.
