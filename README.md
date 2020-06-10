# TypeSuite™
TypeSuite™ is a TypeScript client for the NetSuite [SuiteTalk Web Services API](https://www.netsuite.com/portal/developers/resources/suitetalk-documentation.shtml).

**Note: TypeSuite is in Beta! There are still several features to add and bugs to fix,
but we'd love to get your feedback to get it out of Beta ASAP.**

TODO(david@): add a list of what it does, and why it is helpful

# Installation

You can install TypeSuite via NPM:

```sh
npm install --save typesuite
```

Or add it to your `package.json` manually.

# Quickstart

```ts
import * as typesuite from 'typesuite';

// You can fetch your credentials from your NetSuite instance
// We recommend storing them somewhere secure like AWS Secrets Manager
const config: Configuration = {
  account: "NetSuite Account ID",
  apiVersion: "2019_2",
  token: {
    consumerKey: "NetSuite Consumer Key",
    consumerSecret: "NetSuite Consumer Secret",
    tokenKey: "NetSuite Token Key",
    tokenSecret: "NetSuite Token Secret",
  },
};

// Create NetSuite client using above credentials
const client: NetSuiteClient = await typesuite.NetSuite.createClient(config);

```

# API Details

## Authentication

TypeSuite uses [NetSuite Token Based Auth (TBA)](https://docs.oracle.com/cloud/latest/netsuitecs_gs/NSATH/NSATH.pdf),
which requires a `consumerKey`, `consumerSecret`, `tokenKey`, and `tokenSecret`. You can provide these in the `Configuration`
object:

```
const config: Configuration = {
  account: "NetSuite Account ID",
  apiVersion: "2019_2",
  token: {
    consumerKey: "NetSuite Consumer Key",
    consumerSecret: "NetSuite Consumer Secret",
    tokenKey: "NetSuite Token Key",
    tokenSecret: "NetSuite Token Secret",
  },
};
```

## Reading from NetSuite

### Searching for Records

You can search NetSuite for all records of a certain type, matching all other criteria:

```
const request = <SearchRequest><unknown>{
  searchRecord: <TransactionSearchAdvanced>{
    columns: <TransactionSearchRow>{
      basic: <TransactionSearchRowBasic>{
        internalId: [<SearchColumnSelectField>{}],
      },
      itemJoin: <ItemSearchRowBasic>{
        internalId: [<SearchColumnSelectField>{}],
      },
    },
    criteria: <TransactionSearch>{
      basic: <TransactionSearchBasic><unknown>{
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
          searchValue: "2020-01-01T00:00:00.000Z" as unknown as Date,
        },
      },
    },
  },
};

// Manually set the type on the request
setTypeName(request.searchRecord, "com_netsuite_webservices_transactions_sales_2019_2.TransactionSearchAdvanced");

// Perform NetSuite Search
const response: any = await client
  .search(request)
  .catch((error: any) => {
    console.log("Error during poll");
    throw error;
  });

// Cast the response to the corect type to use
const typedResponse: SearchResponse = response.value as SearchResponse;
console.log("Found %d purchase orders.", typedResponse.searchResult.totalRecords);
```

TODO(david@): add more examples of advanced configuration for search

### Resolving a Record

You can also fetch an individual record from NetSuite:

```
// Create a PO GET request
const poRequest = <GetRequest><unknown>{
  baseRef: <RecordRef>{
    internalId: "NetSuite Document ID",
    externalId: "",
    type: "purchaseOrder"
  },
};

// Manually set the type for the request
setTypeName(poRequest.baseRef, "com_netsuite_webservices_platform_core_2019_2.RecordRef");

// Perform the request
const poRequest = await client
  .get(getRequest)
  .catch(function (error: any) {
    console.log("Error fetching purchaseOrder");
    throw error;
  });

// Cast the response to the corect type to use
const purchaseOrder: PurchaseOrder = poResponse.value as PurchaseOrder;
```

TODO(david@): add more examples of advanced configuration for fetching documents

## Writing to NetSuite

TODO(david@): add examples once we know how to write to NetSuite

