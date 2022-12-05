import { expect } from "chai";
describe("Client Projects Board", () => {
  const clientActiveHead: string[] = [
    "Project Name",
    "Current Phase",
    "Start date",
    "End date",
    "Project Manager",
    "Total Budget",
    "% Billed",
    "Project Type",
    "Project Priority",
  ];
  const clientActiveProjects: object[] = [
    {
      name: "Project 1",
      currentPhase: "Zoning",
      startDate: "10/1/2022",
      endDate: "12/31/2022",
      manager: "Max",
      totalBudget: "$2,000",
      billed: "10%",
      type: "Residential",
      priority: "top",
    },
    {
      name: "Project 2",
      currentPhase: "Permitting",
      startDate: "1/10/2022",
      endDate: "1/1/2021",
      manager: "Wick",
      totalBudget: "$1,000",
      billed: "40%",
      type: "Residential",
      priority: "left",
    },
    {
      name: "Project 3",
      currentPhase: "Pre-Design",
      startDate: "1/10/2022",
      endDate: "1/1/2021",
      manager: "Rick",
      totalBudget: "$3,000",
      billed: "40%",
      type: "Residential",
      priority: "bottom",
    },
  ];
  const clientPausedHead: string[] = [
    "Project Name",
    "Current Phase",
    "Start date",
    "Pause date",
    "Pause Reason",
    "Project Manager",
    "Total Budget",
    "% Billed",
    "Project Type",
  ];
  const clientPausedProjects: object[] = [
    {
      name: "Project 1",
      currentPhase: "Zoning",
      startDate: "10/1/2022",
      pauseDate: "12/31/2022",
      pauseReason: "Residential",
      manager: "Max",
      totalBudget: "$2,000",
      billed: "10%",
      type: "top",
    },
    {
      name: "Project 2",
      currentPhase: "Permitting",
      startDate: "10/1/2022",
      pauseDate: "12/31/2022",
      pauseReason: "Done",
      manager: "Wick",
      totalBudget: "$1,000",
      billed: "40%",
      type: "school",
    },
    {
      name: "Project 3",
      currentPhase: "Pre-Design",
      startDate: "1/10/2022",
      pauseDate: "1/1/2021",
      pauseReason: "Residential",
      manager: "Rick",
      totalBudget: "$300.3",
      billed: "40%",
      type: "Multi-Family",
    },
  ];

  const clientOpenHead: string[] = [
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

  const clientCompletedHead: string[] = [
    "Project Name",
    "Profit Margin",
    "Start date",
    "End date",
    "Project Manager",
    "Total Budget",
    "% Billed",
    "Project Type",
  ];
  const clientCompletedProjects: object[] = [
    {
      name: "Project 1",
      profitMargin: "10%",
      startDate: "10/1/2022",
      endDate: "12/31/2022",
      manager: "Max",
      totalBudget: "$2,000",
      billed: "10%",
      type: "Residential",
    },
    {
      name: "Project 2",
      profitMargin: "50%",
      startDate: "10/1/2022",
      endDate: "12/31/2022",
      manager: "Wick",
      totalBudget: "$1,000",
      billed: "40%",
      type: "Multi-Family",
    },
    {
      name: "Project 3",
      profitMargin: "30%",
      startDate: "1/10/2022",
      endDate: "1/1/2021",
      manager: "Rick",
      totalBudget: "$3,000",
      billed: "40%",
      type: "School",
    },
  ];

  const clientLostHead: string[] = [
    "Project Name",
    "Loss Reason",
    "Start date",
    "End date",
    "Project Manager",
    "Total Budget",
    "$ Overhead Billed",
    "Project Type",
  ];
  const clientLostProjects: object[] = [
    {
      name: "Project 1",
      lossReason: "price",
      startDate: "10/1/2022",
      endDate: "12/31/2022",
      manager: "Max",
      totalBudget: "$2,000",
      overheadBilled: "10",
      type: "Residential",
    },
    {
      name: "Project 2",
      lossReason: "price",
      startDate: "1/10/2022",
      endDate: "1/1/2021",
      manager: "Wick",
      totalBudget: "$1,000",
      overheadBilled: "40",
      type: "Multi-Family",
    },
    {
      name: "Project 3",
      lossReason: "price",
      startDate: "1/10/2022",
      endDate: "1/1/2021",
      manager: "Rick",
      totalBudget: "$3,000",
      overheadBilled: "40",
      type: "School",
    },
  ];

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
    clientActiveHead.forEach((item, index) => {
      cy.get(
        `[data-testid='client-active'] table>thead>tr>:nth-child(${
          index + 1
        }) span`
      ).should("contain", item);
    });
    // Should display client projects in the table
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
});
