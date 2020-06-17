# TypeSuite™
TypeSuite™ is a TypeScript client for the NetSuite [SuiteTalk Web Services API](https://www.netsuite.com/portal/developers/resources/suitetalk-documentation.shtml).

**Note: TypeSuite is currently in Alpha. There are still several features to add and bugs to fix,
and there will likely be breaking changes. We'd love to get your feedback to get it out of Alpha ASAP.**

TypeSuite was built by the team at [Stedi](https://www.stedi.com), a platform for B2B trade. If you're using
TypeSuite to improve how your business operates, definitely take a look at Stedi!

# Usage

## Installation

You can install TypeSuite via NPM:

```sh
npm install --save typesuite
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

...
```

## API Details

### Configuration

The `Configuration` object holds generic NetSuite configuration information, including the account ID and auth
credentials, API version information, and can even contain shared query options, if desired.

```
const config: Configuration = {
  account: "",
  apiVersion: "",
  token: {
    ...
  },
};
```

#### API Version

Currently TypeSuite only supports the [2019_2 WSDL](https://webservices.netsuite.com/wsdl/v2019_2_0/netsuite.wsdl);
therefore, the only acceptable configuration option for `apiVersion` is `"2019_2"`.

In future versions of TypeSuite we aim to support additional API versions, and will update the docs accordingly.

#### Authentication

TypeSuite uses [NetSuite Token Based Auth (TBA)](https://docs.oracle.com/cloud/latest/netsuitecs_gs/NSATH/NSATH.pdf),
which requires a `consumerKey`, `consumerSecret`, `tokenKey`, and `tokenSecret`. 

```
const config: Configuration = {
  ...
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

You can search NetSuite for all records of a certain type (e.g. a `_purchaseOrder`), matching all other criteria (e.g. a status of "pending receipt") in a given time period:

```
// Add additional imports from our API version
import { TransactionSearchBasic } from "typesuite/2019_2/platform_common";
import { SearchRequest } from "typesuite/2019_2/platform_messages";
import { RecordRef } from "typesuite/2019_2/platform_core";
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
        queryTerms: new TransactionSearchBasic({
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
        }),
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
  .search(request)
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

```
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
const purchaseOrder = poResponse.readResponse.record as PurchaseOrder;
```

### Writing to NetSuite

While TypeSuite currently supports types that can be written back to NetSuite, we don't yet have examples. Stay tuned
for more!

# Development

## Build

To build TypeSuite, run `npm run build`. Source code is located in `/src`.

## Test

To test TypeSuite, run `npm run test`. Tests are located in `/test` and use Jest.
