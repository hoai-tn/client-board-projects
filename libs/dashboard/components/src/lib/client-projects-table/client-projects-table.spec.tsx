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
});
