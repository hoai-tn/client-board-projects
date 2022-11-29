import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";

import ClientProjectsTable from "../client-projects-table/client-projects-table";

import clientOpenProjects from "../../../storybook_public/config/client_open_projects.json";
import { clientOpenProjectsHead } from "../../constants/index";

const ClientProjectsBoard = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <Accordion
      sx={{
        maxWidth: 1156,
      }}
    >
      <AccordionSummary
        id="panel1a-header"
        expandIcon={<ExpandMoreIcon sx={{ color: "#6e6767" }} />}
        aria-controls="panel-account-settings-content"
        sx={{
          background: "#eecdb1e8",
          "&.Mui-expanded": { minHeight: 52 },
          minHeight: 52,
        }}
      >
        <SettingsIcon sx={{ marginRight: 4 }} />
        <Typography>Client Active Projects</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <ClientProjectsTable
          clientDataTable={clientOpenProjects}
          tableHeadFields={clientOpenProjectsHead}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default ClientProjectsBoard;
