import { TableRow, TableHead, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { IKeyOfClient, TableProps } from "../../constants";
import { StyledTableCell } from "./style";

export default function TableHeaderCell(props: TableProps) {
  const { tableHeadFields, order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof IKeyOfClient) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <TableHead>
      <TableRow>
        {tableHeadFields.map((headCell) => (
          <StyledTableCell key={headCell.id}>
            <TableSortLabel
              active={orderBy !== null && orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
