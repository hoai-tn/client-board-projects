import { ITableHeadCell } from "../interfaces";

export const ClientActiveProjects: readonly ITableHeadCell[] = [
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
    label: "Start Date",
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

export const ClientPausedProjects: readonly ITableHeadCell[] = [
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
    label: "Start Date",
  },
  {
    id: "pauseDate",
    numeric: false,
    label: "Pause Date",
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



export const clientOpenProjectsHead: readonly ITableHeadCell[] = [
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
    label: "Start Date",
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
