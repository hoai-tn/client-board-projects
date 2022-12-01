import {
  Box,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const ClientProjectsAccordion = ({
  title,
  dataTestId,
  children,
}: {
  title: string;
  dataTestId ?: string;
  children: JSX.Element;
}) => {
  return (
    <Accordion
      data-testid={dataTestId}
      sx={{
        maxWidth: 1156,
        boxShadow: 0,
        margin: "4px 0px",
      }}
      defaultExpanded={true}
    >
      <AccordionSummary
        id="panel1a-header"
        expandIcon={<ExpandMoreIcon sx={{ color: "#6e6767" }} />}
        aria-controls="panel-account-settings-content"
        sx={{
          background: "#eecdb1e8",
          "&.Mui-expanded": { minHeight: 52, margin: 0 },
          height: 52,
          "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          },
        }}
      >
        <AccountTreeIcon sx={{ color: "#6e6767", marginRight: 4 }} />
        <Typography sx={{ color: "#6e6767", fontWeight: 600 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default ClientProjectsAccordion;
