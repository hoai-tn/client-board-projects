import { fireEvent, render } from "@testing-library/react";

import ClientProjectTable from "./client-projects-table";

import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import { clientOpenHead } from "../../constants";

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

    [
      "Project Name",
      "Start date",
      "End date",
      "Project Manager",
      "Total Budget",
      "$ Overhead Billed",
      "Project Type",
    ].forEach((item, index) => {
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
  });
});
