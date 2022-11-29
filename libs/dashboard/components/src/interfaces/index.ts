export interface ITableHeadCell {
  id: keyof IClientOpenProject;
  label: string;
  numeric: boolean;
}

export interface IClientOpenProject {
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

export type OrderType = "asc" | "desc";
export interface TableProps {
  tableHeadFields: readonly ITableHeadCell[],
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IClientOpenProject
  ) => void;
  order: OrderType;
  orderBy: string | null;
}

