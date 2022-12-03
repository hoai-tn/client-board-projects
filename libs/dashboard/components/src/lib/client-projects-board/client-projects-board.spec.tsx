import { render } from "@testing-library/react";
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
const clientActiveExpect: object[] = [
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
const clientPausedExpect: object[] = [
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
const clientOpenExpect: object[] = [
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
const clientCompletedExpect: object[] = [
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
const clientLostExpect: object[] = [
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
    const { baseElement } = render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    // Should display title
    expect(
      baseElement.querySelector("[data-testid='client-active'] p")?.textContent
    ).toEqual("Client Active Projects");
    // Should display head table
    clientActiveHead.forEach((item, index) => {
      expect(
        baseElement.querySelector(
          `[data-testid='client-active'] table>thead>tr>:nth-child(${
            index + 1
          }) span`
        )?.textContent
      ).toContain(item);
    });
    // Should display client projects in the table
    clientActiveExpect.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        expect(
          baseElement.querySelector(
            `[data-testid='client-active'] table>tbody>:nth-child(${
              rowIndex + 1
            })>:nth-child(${colIndex + 1})`
          )?.textContent
        ).toContain(value);
      });
    });
  });
  it("should display Client Paused Projects", () => {
    const { baseElement } = render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    // Should display title
    expect(
      baseElement.querySelector("[data-testid='client-paused'] p")?.textContent
    ).toEqual("Client Paused Projects");
    // Should display head table
    clientPausedHead.forEach((item, index) => {
      expect(
        baseElement.querySelector(
          `[data-testid='client-paused'] table>thead>tr>:nth-child(${
            index + 1
          }) span`
        )?.textContent
      ).toContain(item);
    });
    // Should display client projects in the table
    clientPausedExpect.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        expect(
          baseElement.querySelector(
            `[data-testid='client-paused'] table>tbody>:nth-child(${
              rowIndex + 1
            })>:nth-child(${colIndex + 1})`
          )?.textContent
        ).toContain(value);
      });
    });
  });
  it("should display Client Open Projects", () => {
    const { baseElement } = render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    // Should display title
    expect(
      baseElement.querySelector("[data-testid='client-open'] p")?.textContent
    ).toEqual("Client Open Opportunities");
    // Should display head table
    clientOpenHead.forEach((item, index) => {
      expect(
        baseElement.querySelector(
          `[data-testid='client-open'] table>thead>tr>:nth-child(${
            index + 1
          }) span`
        )?.textContent
      ).toContain(item);
    });
    // Should display client projects in the table
    clientOpenExpect.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        expect(
          baseElement.querySelector(
            `[data-testid='client-open'] table>tbody>:nth-child(${
              rowIndex + 1
            })>:nth-child(${colIndex + 1})`
          )?.textContent
        ).toContain(value);
      });
    });
  });
  it("should display Client Completed Projects", () => {
    const { baseElement } = render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    // Should display title
    expect(
      baseElement.querySelector("[data-testid='client-completed'] p")
        ?.textContent
    ).toEqual("Client Completed Projects");
    // Should display head table
    clientCompletedHead.forEach((item, index) => {
      expect(
        baseElement.querySelector(
          `[data-testid='client-completed'] table>thead>tr>:nth-child(${
            index + 1
          }) span`
        )?.textContent
      ).toContain(item);
    });
    // Should display client projects in the table
    clientCompletedExpect.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        expect(
          baseElement.querySelector(
            `[data-testid='client-completed'] table>tbody>:nth-child(${
              rowIndex + 1
            })>:nth-child(${colIndex + 1})`
          )?.textContent
        ).toContain(value);
      });
    });
  });
  it("should display Client Lost Projects", () => {
    const { baseElement } = render(
      <ClientProjectsBoard
        clientActiveProjects={clientActiveProjects}
        clientPausedProjects={clientPausedProjects}
        clientOpenProjects={clientOpenProjects}
        clientCompletedProjects={clientCompletedProjects}
        clientLostProjects={clientLostProjects}
      />
    );
    // Should display title
    expect(
      baseElement.querySelector("[data-testid='client-lost'] p")?.textContent
    ).toEqual("Client Lost Projects");
    // Should display head table
    clientLostHead.forEach((item, index) => {
      expect(
        baseElement.querySelector(
          `[data-testid='client-lost'] table>thead>tr>:nth-child(${
            index + 1
          }) span`
        )?.textContent
      ).toContain(item);
    });
    // Should display client projects in the table
    clientLostExpect.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        expect(
          baseElement.querySelector(
            `[data-testid='client-lost'] table>tbody>:nth-child(${
              rowIndex + 1
            })>:nth-child(${colIndex + 1})`
          )?.textContent
        ).toContain(value);
      });
    });
  });
});
