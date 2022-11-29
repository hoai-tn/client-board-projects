import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import { clientOpenProjectsHead } from "../../constants/index";
import ClientProjectsTable from "./client-projects-table";
export default {
  component: ClientProjectsTable,
} as ComponentMeta<typeof ClientProjectsTable>;

const Template: ComponentStory<typeof ClientProjectsTable> = (args) => {
  const [testData, setTestData] = useState<string>(
    JSON.stringify(args.clientDataTable)
  );
  return (
    <>
      <ClientProjectsTable {...args} />
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
  tableHeadFields: clientOpenProjectsHead,
};
