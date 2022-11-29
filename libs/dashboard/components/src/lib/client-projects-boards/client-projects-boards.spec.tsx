import { fireEvent, render } from "@testing-library/react";
import ClientProjectsBoard from "./client-projects-boards";
import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";

describe("Client Projects Table", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ClientProjectsBoard
        clientDataTable={clientOpenProjects}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
