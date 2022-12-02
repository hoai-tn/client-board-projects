import { fireEvent, render } from "@testing-library/react";

import ClientProjectTable from "./client-projects-table";

import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import { clientOpenHead } from "../../constants";

const clientAccountHead = [
  "Project Name",
  "Start date",
  "End date",
  "Project Manager",
  "Total Budget",
  "$ Overhead Billed",
  "Project Type",
];
const clientAccountProjects = [
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

    clientAccountHead.forEach((item, index) => {
      expect(
        baseElement.querySelector(
          `table>thead>tr>:nth-child(${index + 1}) span`
        )?.textContent
      ).toContain(item);
    });
  });

  it("should fill Client Projects data on the table", () => {
    const { baseElement } = render(
      <ClientProjectTable
        clientDataTable={clientOpenProjects}
        tableHeadFields={clientOpenHead}
      />
    );

    clientAccountProjects.forEach((rowItem, rowIndex) => {
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
