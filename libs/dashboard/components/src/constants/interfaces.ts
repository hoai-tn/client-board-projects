import { GridValueFormatterParams } from "@mui/x-data-grid";

export interface ITableHeadCell {
  field: keyof IKeyOfClient;
  headerName: string;
  flex?: number;
  valueFormatter?: (params: GridValueFormatterParams<number>) => void;
}

export interface IKeyOfClient {
  id: string;
  name: string;
  lossReason: string;
  currentPhase: string;
  profitMargin: number;
  startDate: string;
  endDate: string;
  pauseDate: string;
  pauseReason: string;
  manager: string;
  totalBudget: number;
  overheadBilled: number;
  billed: number;
  type: string;
  priority: string;
}
export interface IClientActive {
  id: string;
  name: string;
  currentPhase: string;
  startDate: string;
  endDate: string;
  manager: string;
  totalBudget: number;
  billed: number;
  type: string;
  priority: string;
}
export interface IClientPaused {
  id: string;
  name: string;
  currentPhase: string;
  startDate: string;
  pauseDate: string;
  pauseReason: string;
  manager: string;
  totalBudget: number;
  billed: number;
  type: string;
}
export interface IClientOpen {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  manager: string;
  totalBudget: number;
  overheadBilled: number;
  type: string;
}
export interface IClientCompleted {
  id: string;
  name: string;
  profitMargin: number;
  startDate: string;
  endDate: string;
  manager: string;
  totalBudget: number;
  billed: number;
  type: string;
}
export interface IClientLost {
  id: string;
  name: string;
  lossReason: string;
  startDate: string;
  endDate: string;
  manager: string;
  totalBudget: number;
  overheadBilled: number;
  type: string;
}

export type ClientProjectsDataType = Array<
  IClientActive | IClientPaused | IClientOpen | IClientCompleted | IClientLost
>;
export interface IClientProjectsBoardProps {
  clientActiveProjects: IClientActive[];
  clientPausedProjects: IClientPaused[];
  clientOpenProjects: IClientOpen[];
  clientCompletedProjects: IClientCompleted[];
  clientLostProjects: IClientLost[];
}
export interface IClientProjectsTableProps {
  clientDataTable: ClientProjectsDataType;
  tableHeadFields: any[];
}
export interface IClientProjectAccordionProps {
  title: string;
  dataTestId?: string;
  children: JSX.Element;
}
