import { findByText, getAllByRole, render } from "@testing-library/react";
import ClientProjectsBoard from "./client-projects-board";

const clientActiveProjects = [
  {
    id: "1",
    name: "Project 1",
    currentPhase: "Zoning",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    billed: 10,
    type: "Residential",
    priority: "top",
  },
  {
    id: "2",
    name: "Project 2",
    currentPhase: "Permitting",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Wick",
    totalBudget: 1000,
    billed: 40,
    type: "Residential",
    priority: "left",
  },
  {
    id: "3",
    name: "Project 3",
    currentPhase: "Pre-Design",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    billed: 40,
    type: "Residential",
    priority: "bottom",
  },
];

const clientPausedProjects = [
  {
    id: "1",
    name: "Project 1",
    currentPhase: "Zoning",
    startDate: "10/1/2022",
    pauseDate: "12/31/2022",
    pauseReason: "Residential",
    manager: "Max",
    totalBudget: 2000,
    billed: 10,
    type: "top",
  },
  {
    id: "2",
    name: "Project 2",
    currentPhase: "Permitting",
    startDate: "10/1/2022",
    pauseDate: "12/31/2022",
    pauseReason: "Done",
    manager: "Wick",
    totalBudget: 1000,
    billed: 40,
    type: "school",
  },
  {
    id: "3",
    name: "Project 3",
    currentPhase: "Pre-Design",
    startDate: "1/10/2022",
    pauseDate: "1/1/2021",
    pauseReason: "Residential",
    manager: "Rick",
    totalBudget: 300.3,
    billed: 40,
    type: "Multi-Family",
  },
];

const clientOpenProjects = [
  {
    id: "1",
    name: "Project 1",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    overheadBilled: 10,
    type: "Residential",
  },
  {
    id: "2",
    name: "Project 2",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Wick",
    totalBudget: 1000,
    overheadBilled: 40,
    type: "School",
  },
  {
    id: "3",
    name: "Project 3",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    overheadBilled: 40,
    type: "Public Works",
  },
];

const clientCompletedProjects = [
  {
    id: "1",
    name: "Project 1",
    profitMargin: 10,
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    billed: 10,
    type: "Residential",
  },
  {
    id: "2",
    name: "Project 2",
    profitMargin: 50,
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Wick",
    totalBudget: 1000,
    billed: 40,
    type: "Multi-Family",
  },
  {
    id: "3",
    name: "Project 3",
    profitMargin: 30,
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    billed: 40,
    type: "School",
  },
];

const clientLostProjects = [
  {
    id: "1",
    name: "Project 1",
    lossReason: "price",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    overheadBilled: 10,
    type: "Residential",
  },
  {
    id: "2",
    name: "Project 2",
    lossReason: "price",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Wick",
    totalBudget: 1000,
    overheadBilled: 40,
    type: "Multi-Family",
  },
  {
    id: "3",
    name: "Project 3",
    lossReason: "price",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    overheadBilled: 40,
    type: "School",
  },
];

describe("Client Projects Board", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it("should display Client Active Projects", () => {
    render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );

    const tableNode: HTMLElement | null = document.querySelector(
      "[data-testid='client-active']"
    );
    // convert elements to string for assert
    const tableHeader =
      tableNode &&
      getAllByRole(tableNode, "columnheader")
        .map((e) => e.textContent)
        .join(" ");
    const tableContents =
      tableNode &&
      getAllByRole(tableNode, "cell")
        .map((e) => e.textContent)
        .join(" ");

    // Should display title
    tableNode && findByText(tableNode, "Client Active Projects");
    // Should display head table
    expect(tableHeader).toEqual(
      "Project Name Current Phase Start date End date Project Manager Total Budget % Billed Project Type Project Priority"
    );
    // Should display client projects in the table
    expect(tableContents).toEqual(
      `Project 1 Zoning 10/1/2022 12/31/2022 Max $2,000 10% Residential top Project 2 Permitting 1/10/2022 1/1/2021 Wick $1,000 40% Residential left Project 3 Pre-Design 1/10/2022 1/1/2021 Rick $3,000 40% Residential bottom`
    );
  });
  it("should display Client Paused Projects", () => {
    render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    const tableNode: HTMLElement | null = document.querySelector(
      "[data-testid='client-paused']"
    );

    const tableHeader =
      tableNode &&
      getAllByRole(tableNode, "columnheader")
        .map((e) => e.textContent)
        .join(" ");
    const tableContents =
      tableNode &&
      getAllByRole(tableNode, "cell")
        .map((e) => e.textContent)
        .join(" ");

    // Should display title
    tableNode && findByText(tableNode, "Client Paused Projects");
    // Should display head table
    expect(tableHeader).toEqual(
      "Project Name Current Phase Start date Pause date Pause Reason Project Manager Total Budget % Billed Project Type"
    );
    // Should display client projects in the table
    expect(tableContents).toEqual(
      `Project 1 Zoning 10/1/2022 12/31/2022 Residential Max $2,000 10% top Project 2 Permitting 10/1/2022 12/31/2022 Done Wick $1,000 40% school Project 3 Pre-Design 1/10/2022 1/1/2021 Residential Rick $300.3 40% Multi-Family`
    );
  });
  it("should display Client Open Projects", () => {
    render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    const tableNode: HTMLElement | null = document.querySelector(
      "[data-testid='client-open']"
    );

    const tableHeader =
      tableNode &&
      getAllByRole(tableNode, "columnheader")
        .map((e) => e.textContent)
        .join(" ");
    const tableContents =
      tableNode &&
      getAllByRole(tableNode, "cell")
        .map((e) => e.textContent)
        .join(" ");

    // Should display title
    tableNode && findByText(tableNode, "Client Open Opportunities");
    // Should display head table
    expect(tableHeader).toEqual(
      "Project Name Start date End date Project Manager Total Budget $ Overhead Billed Project Type"
    );
    // Should display client projects in the table
    expect(tableContents).toEqual(
      `Project 1 10/1/2022 12/31/2022 Max $2,000 $10 Residential Project 2 10/1/2022 12/31/2022 Wick $1,000 $40 School Project 3 1/10/2022 1/1/2021 Rick $3,000 $40 Public Works`
    );
  });
  it("should display Client Completed Projects", () => {
    render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    const tableNode: HTMLElement | null = document.querySelector(
      "[data-testid='client-completed']"
    );

    const tableHeader =
      tableNode &&
      getAllByRole(tableNode, "columnheader")
        .map((e) => e.textContent)
        .join(" ");
    const tableContents =
      tableNode &&
      getAllByRole(tableNode, "cell")
        .map((e) => e.textContent)
        .join(" ");

    // Should display title
    tableNode && findByText(tableNode, "Client Completed Projects");
    // Should display head table
    expect(tableHeader).toEqual(
      "Project Name Profit Margin Start date End date Project Manager Total Budget % Billed Project Type"
    );
    // Should display client projects in the table
    expect(tableContents).toEqual(
      `Project 1 10% 10/1/2022 12/31/2022 Max $2,000 10% Residential Project 2 50% 10/1/2022 12/31/2022 Wick $1,000 40% Multi-Family Project 3 30% 1/10/2022 1/1/2021 Rick $3,000 40% School`
    );
  });
  it("should display Client Lost Projects", () => {
    render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    const tableNode: HTMLElement | null = document.querySelector(
      "[data-testid='client-lost']"
    );

    const tableHeader =
      tableNode &&
      getAllByRole(tableNode, "columnheader")
        .map((e) => e.textContent)
        .join(" ");
    const tableContents =
      tableNode &&
      getAllByRole(tableNode, "cell")
        .map((e) => e.textContent)
        .join(" ");

    // Should display title
    tableNode && findByText(tableNode, "Client Lost Projects");
    // Should display head table
    expect(tableHeader).toEqual(
      "Project Name Loss Reason Start date End date Project Manager Total Budget $ Overhead Billed Project Type"
    );
    // Should display client projects in the table
    expect(tableContents).toEqual(
      `Project 1 price 10/1/2022 12/31/2022 Max $2,000 $10 Residential Project 2 price 1/10/2022 1/1/2021 Wick $1,000 $40 Multi-Family Project 3 price 1/10/2022 1/1/2021 Rick $3,000 $40 School`
    );
  });
});
