import { expect } from "chai";
describe("Client Projects Table", () => {
  const clientProjectsHead: string[] = [
    "Project Name",
    "Start date",
    "End date",
    "Project Manager",
    "Total Budget",
    "$ Overhead Billed",
    "Project Type",
  ];
  const clientOpenProjects: object[] = [
    {
      name: "Project 1",
      startDate: "10/1/2022",
      endDate: "12/31/2022",
      manager: "Max",
      totalBudget: "$2,000",
      overheadBilled: "$10",
      type: "Residential",
    },
    {
      name: "Project 2",
      startDate: "10/1/2022",
      endDate: "12/31/2022",
      manager: "Wick",
      totalBudget: "$1,000",
      overheadBilled: "$40",
      type: "School",
    },
    {
      name: "Project 3",
      startDate: "1/10/2022",
      endDate: "1/1/2021",
      manager: "Rick",
      totalBudget: "$3,000",
      overheadBilled: "$40",
      type: "Public Works",
    },
  ];

  beforeEach(() => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=client-projects-table--primary`
    );
  });

  it("should display fields table", () => {
    clientProjectsHead.forEach((item, index) => {
      cy.get(`table>thead>tr>:nth-child(${index + 1}) span`).should(
        "contain",
        item
      );
    });
    cy.get("table thead span").invoke('text').should(($row) => {
      console.log("-head")
      // access the native DOM element
      console.log($row) 
      // expect($div.get(0).innerText).to.eq('foobarbaz')
    })
    cy.get("table>tbody>tr>td").should(($value) => {
      console.log(" - body")
      // access the native DOM element
      console.log($value.get(24).innerText) 
      // expect($div.get(0).innerText).to.eq('foobarbaz')
    })
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

});
