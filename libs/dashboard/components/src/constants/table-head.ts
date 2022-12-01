import { ITableHeadCell } from "../interfaces";

export const clientActiveHead: readonly ITableHeadCell[] = [
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

export const clientPausedHead: readonly ITableHeadCell[] = [
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

export const clientOpenHead: readonly ITableHeadCell[] = [
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

export const clientCompletedHead: readonly ITableHeadCell[] = [
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

export const clientLostHead: readonly ITableHeadCell[] = [
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
