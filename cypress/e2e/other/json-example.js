/// <reference types="cypress" />

describe("JSON Object", () => {
  it("Json Object Examples", () => {
    const exampleObject = { key: "Tim", key2: "Jones" };
    const exampleArrayOfValues = ["Sophie", "Rose", "Howard"];
    const exampleArrayOfObjects = [
      { key0: "Luke" },
      { key1: "Mike" },
      { key2: "Joe" },
    ];

    const users = {
      firstName: "Joe",
      lastName: "Blogs",
      Age: 30,
      Students: [
        {
          firstName: "Jim",
          lastName: "Blogs2",
        },
        {
          firstName: "Sarah",
          lastName: "Parker",
        },
      ],
    };

    cy.log(exampleObject["key"]); //Tim
    cy.log(exampleObject["key2"]); //Jones
    cy.log(exampleObject.key2); //Jones

    cy.log(exampleArrayOfValues[0]); //Sophie
    cy.log(exampleArrayOfValues[1]); //Rose

    cy.log(users.Students[0].lastName); //Blogs2
    cy.log(exampleArrayOfObjects[0].key0);
    cy.log(exampleArrayOfObjects[1].key1);
    cy.log(exampleArrayOfObjects[2].key2);
  });
});
