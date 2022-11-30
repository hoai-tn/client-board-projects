import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import clientActiveProjects from "../../../storybook_public/config/client_active_projects.json";
import clientPausedProjects from "../../../storybook_public/config/client_paused_projects.json";
import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import clientCompletedProjects from "../../../storybook_public/config/client_completed_projects.json";
import clientLostProjects from "../../../storybook_public/config/client_lost_projects.json";

import ClientProjectsBoard from "./client-projects-boards";
export default {
  component: ClientProjectsBoard,
} as ComponentMeta<typeof ClientProjectsBoard>;

const Template: ComponentStory<typeof ClientProjectsBoard> = (args) => {
  const [testData, setTestData] = useState<string>(JSON.stringify({ ...args }));
  return (
    <>
      <ClientProjectsBoard {...args} />
      <pre>
        <textarea
          id="text-area-test-data"
          style={{ width: 1156, height: 148, marginTop: 10 }}
          value={testData}
        ></textarea>
      </pre>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  clientActiveProjects,
  clientPausedProjects,
  clientOpenProjects,
  clientCompletedProjects,
  clientLostProjects,
};
