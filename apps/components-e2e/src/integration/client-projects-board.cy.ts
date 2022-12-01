import { expect } from "chai";
describe("Client Projects Board", () => {
  let clientOpenHead: string[];
  let clientOpenProjects: object[];

  let clientActiveHead: string[];
  let clientActiveProjects: object[];

  let clientPausedHead: string[];
  let clientPausedProjects: object[];

  let clientCompletedHead: string[];
  let clientCompletedProjects: object[];

  let clientLostHead: string[];
  let clientLostProjects: object[];

  before(() => {
    cy.fixture("client-open-head").then((value) => {
      clientOpenHead = value;
    });
    cy.fixture("client-open-projects").then((value) => {
      clientOpenProjects = value;
    });

    cy.fixture("client-active-head").then((value) => {
      clientActiveHead = value;
    });
    cy.fixture("client-active-projects").then((value) => {
      clientActiveProjects = value;
    });

    cy.fixture("client-paused-head").then((value) => {
      clientPausedHead = value;
    });
    cy.fixture("client-paused-projects").then((value) => {
      clientPausedProjects = value;
    });

    cy.fixture("client-completed-head").then((value) => {
      clientCompletedHead = value;
    });
    cy.fixture("client-completed-projects").then((value) => {
      clientCompletedProjects = value;
    });

    cy.fixture("client-lost-head").then((value) => {
      clientLostHead = value;
    });
    cy.fixture("client-lost-projects").then((value) => {
      clientLostProjects = value;
    });
  });

  beforeEach(() => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=client-projects-board--primary`
    );
  });

  it("should display Client Active Projects", () => {
    // check title
    cy.get("[data-testid='client-active'] p").should(
      "contain",
      "Client Active Projects"
    );
    // check head table
    clientActiveHead.forEach((item, index) => {
      cy.get(
        `[data-testid='client-active'] table>thead>tr>:nth-child(${
          index + 1
        }) span`
      ).should("contain", item);
    });
    // check client projects in the table
    clientActiveProjects.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        cy.get(
          `[data-testid='client-active'] table>tbody>:nth-child(${
            rowIndex + 1
          })>:nth-child(${colIndex + 1})`
        ).should("contain", value);
      });
    });
  });
  it("should display Client Paused Projects", () => {
    cy.get("[data-testid='client-paused'] p").should(
      "contain",
      "Client Paused Projects"
    );

    clientPausedHead.forEach((item, index) => {
      cy.get(
        `[data-testid='client-paused'] table>thead>tr>:nth-child(${
          index + 1
        }) span`
      ).should("contain", item);
    });

    clientPausedProjects.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        cy.get(
          `[data-testid='client-paused'] table>tbody>:nth-child(${
            rowIndex + 1
          })>:nth-child(${colIndex + 1})`
        ).should("contain", value);
      });
    });
  });
  it("should display Client Open Projects", () => {
    cy.get("[data-testid='client-open'] p").should(
      "contain",
      "Client Open Opportunities"
    );

    clientOpenHead.forEach((item, index) => {
      cy.get(
        `[data-testid='client-open'] table>thead>tr>:nth-child(${
          index + 1
        }) span`
      ).should("contain", item);
    });

    clientOpenProjects.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        cy.get(
          `[data-testid='client-open'] table>tbody>:nth-child(${
            rowIndex + 1
          })>:nth-child(${colIndex + 1})`
        ).should("contain", value);
      });
    });
  });
  it("should display Client Completed Projects", () => {
    cy.get("[data-testid='client-completed'] p").should(
      "contain",
      "Client Completed Projects"
    );

    clientCompletedHead.forEach((item, index) => {
      cy.get(
        `[data-testid='client-completed'] table>thead>tr>:nth-child(${
          index + 1
        }) span`
      ).should("contain", item);
    });

    clientCompletedProjects.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        cy.get(
          `[data-testid='client-completed'] table>tbody>:nth-child(${
            rowIndex + 1
          })>:nth-child(${colIndex + 1})`
        ).should("contain", value);
      });
    });
  });
  it("should display Client Lost Projects", () => {
    cy.get("[data-testid='client-lost'] p").should(
      "contain",
      "Client Lost Projects"
    );

    clientLostHead.forEach((item, index) => {
      cy.get(
        `[data-testid='client-lost'] table>thead>tr>:nth-child(${
          index + 1
        }) span`
      ).should("contain", item);
    });

    clientLostProjects.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        cy.get(
          `[data-testid='client-lost'] table>tbody>:nth-child(${
            rowIndex + 1
          })>:nth-child(${colIndex + 1})`
        ).should("contain", value);
      });
    });
  });

  it("should fill Client Projects data on the table", () => {
    clientOpenProjects.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        cy.get(
          `table>tbody>:nth-child(${rowIndex + 1})>:nth-child(${colIndex + 1})`
        ).should("contain", value);
      });
    });
  });
  it("should fill Client Projects data on the text-area", () => {
    cy.get("#text-area-test-data")
      .invoke("val")
      .should((text) => {
        expect(text).to.equal(
          '{"clientActiveProjects":[{"id":"1","name":"Project 1","currentPhase":"Zoning","startDate":"10/1/2022","endDate":"12/31/2022","manager":"Max","totalBudget":2000,"billed":10,"type":"Residential","priority":"top"},{"id":"2","name":"Project 2","currentPhase":"Permitting","startDate":"1/10/2022","endDate":"1/1/2021","manager":"Wick","totalBudget":1000,"billed":40,"type":"Residential","priority":"left"},{"id":"3","name":"Project 3","currentPhase":"Pre-Design","startDate":"1/10/2022","endDate":"1/1/2021","manager":"Rick","totalBudget":3000,"billed":40,"type":"Residential","priority":"bottom"}],"clientPausedProjects":[{"id":"1","name":"Project 1","currentPhase":"Zoning","startDate":"10/1/2022","pauseDate":"12/31/2022","pauseReason":"Residential","manager":"Max","totalBudget":2000,"billed":10,"type":"top"},{"id":"2","name":"Project 2","currentPhase":"Permitting","startDate":"10/1/2022","pauseDate":"12/31/2022","pauseReason":"Done","manager":"Wick","totalBudget":1000,"billed":40,"type":"school"},{"id":"3","name":"Project 3","currentPhase":"Pre-Design","startDate":"1/10/2022","pauseDate":"1/1/2021","pauseReason":"Residential","manager":"Rick","totalBudget":300.3,"billed":40,"type":"Multi-Family"}],"clientOpenProjects":[{"id":"1","name":"Project 1","startDate":"10/1/2022","endDate":"12/31/2022","manager":"Max","totalBudget":2000,"overheadBilled":10,"type":"Residential"},{"id":"2","name":"Project 2","startDate":"10/1/2022","endDate":"12/31/2022","manager":"Wick","totalBudget":1000,"overheadBilled":40,"type":"School"},{"id":"3","name":"Project 3","startDate":"1/10/2022","endDate":"1/1/2021","manager":"Rick","totalBudget":3000,"overheadBilled":40,"type":"Public Works"}],"clientCompletedProjects":[{"id":"1","name":"Project 1","profitMargin":10,"startDate":"10/1/2022","endDate":"12/31/2022","manager":"Max","totalBudget":2000,"billed":10,"type":"Residential"},{"id":"2","name":"Project 2","profitMargin":50,"startDate":"10/1/2022","endDate":"12/31/2022","manager":"Wick","totalBudget":1000,"billed":40,"type":"Multi-Family"},{"id":"3","name":"Project 3","profitMargin":30,"startDate":"1/10/2022","endDate":"1/1/2021","manager":"Rick","totalBudget":3000,"billed":40,"type":"School"}],"clientLostProjects":[{"id":"1","name":"Project 1","lossReason":"price","startDate":"10/1/2022","endDate":"12/31/2022","manager":"Max","totalBudget":2000,"overheadBilled":10,"type":"Residential"},{"id":"2","name":"Project 2","lossReason":"price","startDate":"1/10/2022","endDate":"1/1/2021","manager":"Wick","totalBudget":1000,"overheadBilled":40,"type":"Multi-Family"},{"id":"3","name":"Project 3","lossReason":"price","startDate":"1/10/2022","endDate":"1/1/2021","manager":"Rick","totalBudget":3000,"overheadBilled":40,"type":"School"}]}'
        );
      });
  });
});
