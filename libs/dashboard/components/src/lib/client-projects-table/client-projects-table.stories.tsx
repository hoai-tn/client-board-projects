import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientProjectsTable from "./client-projects-table";
import { currencyFormatter } from "../../helpers";

import { GridValueFormatterParams } from "@mui/x-data-grid";
import { ITableHeadCell } from "../../constants";
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

const clientOpenHead: object[] = [
  {
    field: "name",
    headerName: "Project Name",
    flex: 1,
  },
  {
    field: "startDate",
    headerName: "Start date",
    flex: 1,
  },
  {
    field: "endDate",
    headerName: "End date",
    flex: 1,
  },
  {
    field: "manager",
    headerName: "Project Manager",
    flex: 1,
  },
  {
    field: "totalBudget",
    headerName: "Total Budget",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? currencyFormatter.format(params.value) : "",
  },
  {
    field: "overheadBilled",
    headerName: "$ Overhead Billed",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? currencyFormatter.format(params.value) : "",
  },
  {
    field: "type",
    headerName: "Project Type",
    flex: 1,
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
