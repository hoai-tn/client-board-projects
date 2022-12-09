import { Box } from "@mui/material";
import ClientProjectsAccordion from "./client-projects-accordion";

import { IClientProjectsBoardProps } from "../../constants";
import ClientProjectsTable from "../client-projects-table/client-projects-table";

import { GridValueFormatterParams } from "@mui/x-data-grid";
import { currencyFormatter } from "../../helpers";

const totalBudget = {
  field: "totalBudget",
  headerName: "Total Budget",
  flex: 1,
  valueFormatter: (params: GridValueFormatterParams<number>) =>
    params.value ? currencyFormatter.format(params.value) : "",
};

const projectName = {
  field: "name",
  headerName: "Project Name",
  flex: 1,
};

const startDate = {
  field: "startDate",
  headerName: "Start date",
  flex: 1,
};

const endDate = {
  field: "endDate",
  headerName: "End date",
  flex: 1,
};
const projectManager = {
  field: "manager",
  headerName: "Project Manager",
  flex: 1,
};
const projectType = {
  field: "type",
  headerName: "Project Type",
  flex: 1,
};
const billed = {
  field: "billed",
  headerName: "% Billed",
  flex: 1,
  valueFormatter: (params: GridValueFormatterParams<number>) =>
    params.value ? params.value + "%" : "",
};

const clientActiveHead: object[] = [
  {
    ...projectName,
  },
  {
    field: "currentPhase",
    headerName: "Current Phase",
    flex: 1,
  },
  {
    ...startDate,
  },
  {
    ...endDate,
  },
  {
    ...projectManager,
  },
  {
    ...totalBudget,
  },
  {
    ...billed,
  },
  {
    ...projectType,
  },
  {
    field: "priority",
    headerName: "Project Priority",
    flex: 1,
  },
];

const clientPausedHead: object[] = [
  {
    ...projectName,
  },
  {
    field: "currentPhase",
    headerName: "Current Phase",
    flex: 1,
  },
  {
    ...startDate,
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
    ...projectManager,
  },
  {
    ...totalBudget,
  },
  {
    ...billed,
  },
  {
    ...projectType,
  },
];

const clientOpenHead: object[] = [
  {
    ...projectName,
  },
  {
    ...startDate,
  },
  {
    ...endDate,
  },
  {
    ...projectManager,
  },
  {
    ...totalBudget,
  },
  {
    field: "overheadBilled",
    headerName: "$ Overhead Billed",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? currencyFormatter.format(params.value) : "",
  },
  {
    ...projectType,
  },
];

const clientCompletedHead: object[] = [
  {
    ...projectName,
  },
  {
    field: "profitMargin",
    headerName: "Profit Margin",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? params.value + "%" : "",
  },
  {
    ...startDate,
  },
  {
    ...endDate,
  },
  {
    ...projectManager,
  },
  {
    ...totalBudget,
  },
  {
    ...billed,
  },
  {
    ...projectType,
  },
];

const clientLostHead: object[] = [
  {
    ...projectName,
  },
  {
    field: "lossReason",
    headerName: "Loss Reason",
    flex: 1,
  },
  {
    ...startDate,
  },
  {
    ...endDate,
  },
  {
    ...projectManager,
  },
  {
    ...totalBudget,
  },
  {
    field: "overheadBilled",
    headerName: "$ Overhead Billed",
    flex: 1,
    valueFormatter: (params: GridValueFormatterParams<number>) =>
      params.value ? currencyFormatter.format(params.value) : "",
  },
  {
    ...projectType,
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
