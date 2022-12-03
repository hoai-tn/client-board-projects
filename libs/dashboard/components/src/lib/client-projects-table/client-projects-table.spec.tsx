import { render } from "@testing-library/react";
import { ITableHeadCell } from "../../interfaces";

import ClientProjectTable from "./client-projects-table";

const clientOpenHead: readonly ITableHeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Project Name",
  },
  {
    id: "startDate",
    numeric: false,
    label: "Start date",
  },
  {
    id: "endDate",
    numeric: false,
    label: "End date",
  },
  {
    id: "manager",
    numeric: false,
    label: "Project Manager",
  },
  {
    id: "totalBudget",
    numeric: true,
    label: "Total Budget",
  },
  {
    id: "overheadBilled",
    numeric: true,
    label: "$ Overhead Billed",
  },

  {
    id: "type",
    numeric: false,
    label: "Project Type",
  },
];

const clientOpenProjects = [
  {
    "id": "1",
    "name": "Project 1",
    "startDate": "10/1/2022",
    "endDate": "12/31/2022",
    "manager": "Max",
    "totalBudget": 2000,
    "overheadBilled": 10,
    "type": "Residential"
  },
  {
    "id": "2",
    "name": "Project 2",
    "startDate": "10/1/2022",
    "endDate": "12/31/2022",
    "manager": "Wick",
    "totalBudget": 1000,
    "overheadBilled": 40,
    "type": "School"
  },
  {
    "id": "3",
    "name": "Project 3",
    "startDate": "1/10/2022",
    "endDate": "1/1/2021",
    "manager": "Rick",
    "totalBudget": 3000,
    "overheadBilled": 40,
    "type": "Public Works"
  }
]
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

describe("Client Projects Table", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ClientProjectTable
        clientDataTable={clientOpenProjects}
        tableHeadFields={clientOpenHead}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should display fields table", () => {
    const { baseElement } = render(
      <ClientProjectTable
        clientDataTable={clientOpenProjects}
        tableHeadFields={clientOpenHead}
      />
    );

    clientOpenHead.forEach((item, index) => {
      expect(
        baseElement.querySelector(
          `table>thead>tr>:nth-child(${index + 1}) span`
        )?.textContent
      ).toContain(item.label);
    });
  });

  it("should fill Client Projects data on the table", () => {
    const { baseElement } = render(
      <ClientProjectTable
        clientDataTable={clientOpenProjects}
        tableHeadFields={clientOpenHead}
      />
    );

    clientOpenExpect.forEach((rowItem, rowIndex) => {
      Object.entries(rowItem).forEach(([key, value], colIndex) => {
        expect(
          baseElement.querySelector(
            `table>tbody>:nth-child(${rowIndex + 1})>:nth-child(${
              colIndex + 1
            })`
          )?.textContent
        ).toContain(value);
      });
    });
  });
});
