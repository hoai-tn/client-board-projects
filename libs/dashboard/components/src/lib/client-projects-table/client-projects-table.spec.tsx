import { fireEvent, render } from "@testing-library/react";

import ClientProjectTable from "./client-projects-table";

import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import { clientOpenProjectsHead } from "../../constants/index";

describe("Client Projects Table", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ClientProjectTable
        clientDataTable={clientOpenProjects}
        tableHeadFields={clientOpenProjectsHead}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
