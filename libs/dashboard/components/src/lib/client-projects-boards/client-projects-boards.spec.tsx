import { render } from "@testing-library/react";
import ClientProjectsBoard from "./client-projects-boards";

import clientActiveProjects from "../../../storybook_public/config/client_active_projects.json";
import clientPausedProjects from "../../../storybook_public/config/client_paused_projects.json";
import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import clientCompletedProjects from "../../../storybook_public/config/client_completed_projects.json";
import clientLostProjects from "../../../storybook_public/config/client_lost_projects.json";
describe("Client Projects Table", () => {
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
});
