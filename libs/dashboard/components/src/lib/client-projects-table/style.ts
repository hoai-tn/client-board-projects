export const customizeDataGrid = {
  border: "none",
  borderRadius: 0,
  "& .MuiDataGrid-root": {
    border: "none !important",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f6e3d7",
    height: "48px !important",
    minHeight: "48px !important",
    userSelect: "none",
  },
  ".MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-root, & .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus,& .MuiDataGrid-columnHeader:focus-within":
  {
    outline: 0,
  },
  "& .MuiDataGrid-cell, .MuiDataGrid": {
    border: "none",
  },
  "& .MuiDataGrid-footerContainer": {
    display: "hidden",
  },
  ".MuiDataGrid-row.Mui-selected": {
    backgroundColor: "white !important",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "white"
  }
};
