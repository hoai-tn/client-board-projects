import { Box } from "@mui/material";
import ClientProjectsAccordion from "./client-projects-accordion";

import { IClientProjectsBoardProps } from "../../constants";
import ClientProjectsTable from "../client-projects-table/client-projects-table";

import { ITableHeadCell } from "../../interfaces";

const clientActiveHead: readonly ITableHeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Project Name",
  },
  {
    id: "currentPhase",
    numeric: false,
    label: "Current Phase",
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
    id: "billed",
    numeric: true,
    label: "% Billed",
  },
  {
    id: "type",
    numeric: false,
    label: "Project Type",
  },
  {
    id: "priority",
    numeric: true,
    label: "Project Priority",
  },
];

const clientPausedHead: readonly ITableHeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Project Name",
  },
  {
    id: "currentPhase",
    numeric: false,
    label: "Current Phase",
  },
  {
    id: "startDate",
    numeric: false,
    label: "Start date",
  },
  {
    id: "pauseDate",
    numeric: false,
    label: "Pause date",
  },
  {
    id: "pauseReason",
    numeric: false,
    label: "Pause Reason",
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
    id: "billed",
    numeric: true,
    label: "% Billed",
  },
  {
    id: "type",
    numeric: false,
    label: "Project Type",
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

const clientCompletedHead: readonly ITableHeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Project Name",
  },
  {
    id: "profitMargin",
    numeric: false,
    label: "Profit Margin",
  },
  {
    id: "startDate",
    numeric: true,
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
    id: "billed",
    numeric: true,
    label: "% Billed",
  },

  {
    id: "type",
    numeric: false,
    label: "Project Type",
  },
];

const clientLostHead: readonly ITableHeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Project Name",
  },
  {
    id: "lossReason",
    numeric: false,
    label: "Loss Reason",
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
