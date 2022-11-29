import { styled } from '@mui/material/styles';
import { TableCell, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.root}`]: {
        borderBottom: 0,
    },
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#f6e3d7",
        color: theme.palette.common.black,
        height: 48,
        padding: "0 10px",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: 10,
    },
}));