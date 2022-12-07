import { expect } from "chai";
describe("Client Projects Table", () => {
  beforeEach(() => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=client-projects-table--primary`
    );
  });

  it("should display fields table", () => {
    cy.get(".MuiDataGrid-columnHeaderTitle")
      .invoke("text")
      .should(($header) => {
        expect($header).to.equal(
          "Project NameStart dateEnd dateProject ManagerTotal Budget$ Overhead BilledProject Type"
        );
      });
  });
  it("should fill Client Projects data on the table", () => {
    cy.get(".MuiDataGrid-cellContent")
      .invoke("text")
      .should(($contents) => {
        expect($contents).to.equal(
          "Project 110/1/202212/31/2022Max$2,000$10ResidentialProject 210/1/202212/31/2022Wick$1,000$40SchoolProject 31/10/20221/1/2021Rick$3,000$40Public Works"
        );
      });
  });
});
