import { TypeSuiteClient } from "../src/client";

describe("client", () => {
  test("Can create a client with preferences", () => {
    const client = new TypeSuiteClient({
      apiVersion: "2019_2",
      account: "foo",
      token: {
        consumerKey: "",
        consumerSecret: "",
        tokenKey: "",
        tokenSecret: "",
      },
      preferences: {
        disableMandatoryCustomFieldValidation: true,
        disableSystemNotesForCustomFields: true,
        ignoreReadOnlyFields: true,
        runServerSuiteScriptAndTriggerWorkflows: true,
        warningAsError: true,
      },
    });
    expect(client.config.preferences?.ignoreReadOnlyFields).toBe(true);
  });
});
