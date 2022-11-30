import { MouseEvent, useState } from "react";

import { Table, TableBody, TableRow } from "@mui/material";
import { StyledTableCell } from "./style";

import TableHead from "./table-head";

import { getComparator, stableSort } from "../../helpers";

import {
  ClientProjectsDataType,
  IKeyOfClient,
  ITableHeadCell,
  OrderType,
} from "../../interfaces";

const ClientProjectsTable = ({
  clientDataTable,
  tableHeadFields,
}: {
  clientDataTable: ClientProjectsDataType;
  tableHeadFields: readonly ITableHeadCell[];
}) => {
  const [dataTable, setDataTable] = useState<ClientProjectsDataType>(
    () => clientDataTable
  );
  const [order, setOrder] = useState<OrderType>("asc");
  const [orderBy, setOrderBy] = useState<keyof IKeyOfClient | null>(null);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof IKeyOfClient
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    setDataTable([
      ...stableSort(dataTable, getComparator(isAsc ? "desc" : "asc", property)),
    ]);
  };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Table data-testid="client-project-table">
      <TableHead
        tableHeadFields={tableHeadFields}
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {dataTable?.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { borderBottom: 0 } }}
          >
            {Object.entries(row).map(([key, value]) => {
              switch (key) {
                case "id":
                  return null;
                case "totalBudget":
                case "overheadBilled":
                  return (
                    <StyledTableCell key={key}>
                      {formatter.format(value)}
                    </StyledTableCell>
                  );
                case "billed":
                case "profitMargin":
                  return <StyledTableCell key={key}> {value}%</StyledTableCell>;
                default:
                  return <StyledTableCell key={key}> {value}</StyledTableCell>;
              }
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientProjectsTable;
