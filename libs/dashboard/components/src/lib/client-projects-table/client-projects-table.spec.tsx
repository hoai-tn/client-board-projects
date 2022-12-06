import { render } from "@testing-library/react";
import { ITableHeadCell } from "../../constants";
import { currencyFormatter } from "../../helpers";

import ClientProjectTable from "./client-projects-table";
import { GridValueFormatterParams } from "@mui/x-data-grid";

const clientOpenHead: ITableHeadCell[] = [
  {
    field: "name",
    headerName: "Project Name",
    flex: 1,
  },
  {
    field: "startDate",
    headerName: "Start date",
    flex: 1,
  },
  {
    field: "endDate",
    headerName: "End date",
    flex: 1,
  },
  {
    field: "manager",
    headerName: "Project Manager",
    flex: 1,
  },
  {
    field: "totalBudget",
    headerName: "Total Budget",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? currencyFormatter.format(params.value) : "",
  },
  {
    field: "overheadBilled",
    headerName: "$ Overhead Billed",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? currencyFormatter.format(params.value) : "",
  },
  {
    field: "type",
    headerName: "Project Type",
    flex: 1,
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
      ).toContain(item.headerName);
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
