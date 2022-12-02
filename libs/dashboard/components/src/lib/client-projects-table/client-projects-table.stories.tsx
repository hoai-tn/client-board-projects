import { ComponentStory, ComponentMeta } from "@storybook/react";
import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import { clientOpenHead } from "../../constants";
import ClientProjectsTable from "./client-projects-table";
export default {
  component: ClientProjectsTable,
} as ComponentMeta<typeof ClientProjectsTable>;

const Template: ComponentStory<typeof ClientProjectsTable> = (args) => {
  return (
    <>
      <ClientProjectsTable {...args} />
      <pre>
        <textarea
          id="text-area-test-data"
          style={{ width: 1591, height: 148, marginTop: 10 }}
          value={JSON.stringify(args.clientDataTable)}
        ></textarea>
      </pre>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  clientDataTable: clientOpenProjects,
  tableHeadFields: clientOpenHead,
};
