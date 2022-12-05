import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientProjectsTable from "./client-projects-table";
import { ITableHeadCell } from "../../interfaces";

const clientOpenProjects = [
  {
    id: "1",
    name: "Project 1",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    overheadBilled: 10,
    type: "Residential",
  },
  {
    id: "2",
    name: "Project 2",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Wick",
    totalBudget: 1000,
    overheadBilled: 40,
    type: "School",
  },
  {
    id: "3",
    name: "Project 3",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    overheadBilled: 40,
    type: "Public Works",
  },
];

const clientOpenHead: readonly ITableHeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Project Name",
  },
  {
    id: "startDate",
    numeric: false,
    label: "Start date",
  },
  {
    id: "endDate",
    numeric: false,
    label: "End date",
  },
  {
    id: "manager",
    numeric: false,
    label: "Project Manager",
  },
  {
    id: "totalBudget",
    numeric: true,
    label: "Total Budget",
  },
  {
    id: "overheadBilled",
    numeric: true,
    label: "$ Overhead Billed",
  },

  {
    id: "type",
    numeric: false,
    label: "Project Type",
  },
];
export default {
  component: ClientProjectsTable,
} as ComponentMeta<typeof ClientProjectsTable>;

const Template: ComponentStory<typeof ClientProjectsTable> = (args) => {
  return <ClientProjectsTable {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  clientDataTable: clientOpenProjects,
  tableHeadFields: clientOpenHead,
};
