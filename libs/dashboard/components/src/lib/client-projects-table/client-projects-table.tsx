import { DataGrid } from "@mui/x-data-grid";
import { IClientProjectsTableProps } from "../../constants";
import { customizeDataGrid } from "./style";

const ClientProjectsTable = ({
                              clientDataTable,
                              tableHeadFields,
                            }: IClientProjectsTableProps) => {
  return (
    <DataGrid
      columns={tableHeadFields}
      rows={clientDataTable}
      disableColumnMenu
      disableVirtualization
      hideFooter
      autoHeight
      sx={customizeDataGrid}
    />
  );
};

export default ClientProjectsTable;
