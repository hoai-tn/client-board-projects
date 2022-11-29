import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import ClientProjectsBoard from "./client-projects-boards";
export default {
  component: ClientProjectsBoard,
} as ComponentMeta<typeof ClientProjectsBoard>;

const Template: ComponentStory<typeof ClientProjectsBoard> = (args) => {
  const [testData, setTestData] = useState<string>(
    JSON.stringify(args.clientDataTable)
  );
  return (
    <>
      <ClientProjectsBoard />
      <pre>
        <textarea
          id="text-area-test-data"
          style={{ width: 1591, height: 148, marginTop: 10 }}
          value={testData}
        ></textarea>
      </pre>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  clientDataTable: clientOpenProjects,
};
