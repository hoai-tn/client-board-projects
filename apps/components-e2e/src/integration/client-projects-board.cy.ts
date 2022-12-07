import { expect } from "chai";
describe("Client Projects Board", () => {
  beforeEach(() => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=client-projects-board--primary`
    );
  });

  it("should display Client Active Projects", () => {
    // Should display title
    cy.get("[data-testid='client-active'] p").should(
      "contain",
      "Client Active Projects"
    );
    // Should display head table
    cy.get("[data-testid='client-active'] .MuiDataGrid-columnHeaderTitle")
      .invoke("text")
      .should(($header) => {
        expect($header).to.equal(
          "Project NameCurrent PhaseStart dateEnd dateProject ManagerTotal Budget% BilledProject TypeProject Priority"
        );
      });
    // Should display client projects in the table
    cy.get("[data-testid='client-active'] .MuiDataGrid-cellContent")
      .invoke("text")
      .should(($contents) => {
        expect($contents).to.equal(
          "Project 1Zoning10/1/202212/31/2022Max$2,00010%ResidentialtopProject 2Permitting1/10/20221/1/2021Wick$1,00040%ResidentialleftProject 3Pre-Design1/10/20221/1/2021Rick$3,00040%Residentialbottom"
        );
      });
  });
  it("should display Client Paused Projects", () => {
    cy.get("[data-testid='client-paused'] p").should(
      "contain",
      "Client Paused Projects"
    );

    cy.get("[data-testid='client-paused'] .MuiDataGrid-columnHeaderTitle")
      .invoke("text")
      .should(($header) => {
        expect($header).to.equal(
          "Project NameCurrent PhaseStart datePause datePause ReasonProject ManagerTotal Budget% BilledProject Type"
        );
      });
    cy.get("[data-testid='client-paused'] .MuiDataGrid-cellContent")
      .invoke("text")
      .should(($contents) => {
        expect($contents).to.equal(
          "Project 1Zoning10/1/202212/31/2022ResidentialMax$2,00010%topProject 2Permitting10/1/202212/31/2022DoneWick$1,00040%schoolProject 3Pre-Design1/10/20221/1/2021ResidentialRick$300.340%Multi-Family"
        );
      });
  });
  it("should display Client Open Projects", () => {
    cy.get("[data-testid='client-open'] p").should(
      "contain",
      "Client Open Opportunities"
    );

    cy.get("[data-testid='client-open'] .MuiDataGrid-columnHeaderTitle")
      .invoke("text")
      .should(($header) => {
        expect($header).to.equal(
          "Project NameStart dateEnd dateProject ManagerTotal Budget$ Overhead BilledProject Type"
        );
      });
    cy.get("[data-testid='client-open'] .MuiDataGrid-cellContent")
      .invoke("text")
      .should(($contents) => {
        expect($contents).to.equal(
          "Project 110/1/202212/31/2022Max$2,000$10ResidentialProject 210/1/202212/31/2022Wick$1,000$40SchoolProject 31/10/20221/1/2021Rick$3,000$40Public Works"
        );
      });
  });
  it("should display Client Completed Projects", () => {
    cy.get("[data-testid='client-completed'] p").should(
      "contain",
      "Client Completed Projects"
    );

    cy.get("[data-testid='client-completed'] .MuiDataGrid-columnHeaderTitle")
      .invoke("text")
      .should(($header) => {
        expect($header).to.equal(
          "Project NameProfit MarginStart dateEnd dateProject ManagerTotal Budget% BilledProject Type"
        );
      });
    cy.get("[data-testid='client-completed'] .MuiDataGrid-cellContent")
      .invoke("text")
      .should(($contents) => {
        expect($contents).to.equal(
          "Project 110%10/1/202212/31/2022Max$2,00010%ResidentialProject 250%10/1/202212/31/2022Wick$1,00040%Multi-FamilyProject 330%1/10/20221/1/2021Rick$3,00040%School"
        );
      });
  });
  it("should display Client Lost Projects", () => {
    cy.get("[data-testid='client-lost'] p").should(
      "contain",
      "Client Lost Projects"
    );

    cy.get("[data-testid='client-lost'] .MuiDataGrid-columnHeaderTitle")
      .invoke("text")
      .should(($header) => {
        expect($header).to.equal(
          "Project NameLoss ReasonStart dateEnd dateProject ManagerTotal Budget$ Overhead BilledProject Type"
        );
      });
    cy.get("[data-testid='client-lost'] .MuiDataGrid-cellContent")
      .invoke("text")
      .should(($contents) => {
        console.log($contents);
        expect($contents).to.equal(
          "Project 1price10/1/202212/31/2022Max$2,000$10ResidentialProject 2price1/10/20221/1/2021Wick$1,000$40Multi-FamilyProject 3price1/10/20221/1/2021Rick$3,000$40School"
        );
      });
  });
});
