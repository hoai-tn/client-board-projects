import { Box } from "@mui/material";
import ClientProjectsAccordion from "./client-projects-accordion";

import { IClientProjectsBoardProps } from "../../constants";
import ClientProjectsTable from "../client-projects-table/client-projects-table";

import { ITableHeadCell } from "../../constants";
import { GridValueFormatterParams } from "@mui/x-data-grid";
import { currencyFormatter } from "../../helpers";

const clientActiveHead: ITableHeadCell[] = [
  {
    field: "name",
    headerName: "Project Name",
    flex: 1,
  },
  {
    field: "currentPhase",
    headerName: "Current Phase",
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
    field: "billed",
    headerName: "% Billed",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? params.value + "%" : "",
  },
  {
    field: "type",
    headerName: "Project Type",
    flex: 1,
  },
  {
    field: "priority",
    headerName: "Project Priority",
    flex: 1,
  },
];

const clientPausedHead: ITableHeadCell[] = [
  {
    field: "name",
    headerName: "Project Name",
    flex: 1,
  },
  {
    field: "currentPhase",
    headerName: "Current Phase",
    flex: 1,
  },
  {
    field: "startDate",
    headerName: "Start date",
    flex: 1,
  },
  {
    field: "pauseDate",
    headerName: "Pause date",
    flex: 1,
  },
  {
    field: "pauseReason",
    headerName: "Pause Reason",
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
    field: "billed",
    headerName: "% Billed",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? params.value + "%" : "",
  },
  {
    field: "type",
    headerName: "Project Type",
    flex: 1,
  },
];

const clientOpenHead: ITableHeadCell[] = [
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

const clientCompletedHead: ITableHeadCell[] = [
  {
    field: "name",
    headerName: "Project Name",
    flex: 1,
  },
  {
    field: "profitMargin",
    headerName: "Profit Margin",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? params.value + "%" : "",
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
    field: "billed",
    headerName: "% Billed",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? params.value + "%" : "",
  },
  {
    field: "type",
    headerName: "Project Type",
    flex: 1,
  },
];

const clientLostHead: ITableHeadCell[] = [
  {
    field: "name",
    headerName: "Project Name",
    flex: 1,
  },
  {
    field: "lossReason",
    headerName: "Loss Reason",
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

const ClientProjectsBoard = ({
  clientActiveProjects,
  clientPausedProjects,
  clientOpenProjects,
  clientCompletedProjects,
  clientLostProjects,
}: IClientProjectsBoardProps) => {
  return (
    <Box marginTop={1}>
      <ClientProjectsAccordion
        dataTestId="client-active"
        title="Client Active Projects"
      >
        <ClientProjectsTable
          clientDataTable={clientActiveProjects}
          tableHeadFields={clientActiveHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion
        title="Client Paused Projects"
        dataTestId="client-paused"
      >
        <ClientProjectsTable
          clientDataTable={clientPausedProjects}
          tableHeadFields={clientPausedHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion
        title="Client Open Opportunities"
        dataTestId="client-open"
      >
        <ClientProjectsTable
          clientDataTable={clientOpenProjects}
          tableHeadFields={clientOpenHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion
        title="Client Completed Projects"
        dataTestId="client-completed"
      >
        <ClientProjectsTable
          clientDataTable={clientCompletedProjects}
          tableHeadFields={clientCompletedHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion
        title="Client Lost Projects"
        dataTestId="client-lost"
      >
        <ClientProjectsTable
          clientDataTable={clientLostProjects}
          tableHeadFields={clientLostHead}
        />
      </ClientProjectsAccordion>
    </Box>
  );
};

export default ClientProjectsBoard;
