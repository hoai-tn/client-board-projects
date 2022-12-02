import { Box } from "@mui/material";
import ClientProjectsAccordion from "./client-projects-accordion";

import {
  clientActiveHead,
  clientCompletedHead,
  clientLostHead,
  clientOpenHead,
  clientPausedHead,
  IClientProjectsBoardProps,
} from "../../constants";
import ClientProjectsTable from "../client-projects-table/client-projects-table";

const ClientProjectsBoard = ({
                              clientActiveProjects,
                              clientPausedProjects,
                              clientOpenProjects,
                              clientCompletedProjects,
                              clientLostProjects,
                            }: IClientProjectsBoardProps) => {
  return (
    <Box marginTop={1}>
      <ClientProjectsAccordion
        dataTestId="client-active"
        title="Client Active Projects"
      >
        <ClientProjectsTable
          clientDataTable={clientActiveProjects}
          tableHeadFields={clientActiveHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion
        title="Client Paused Projects"
        dataTestId="client-paused"
      >
        <ClientProjectsTable
          clientDataTable={clientPausedProjects}
          tableHeadFields={clientPausedHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion
        title="Client Open Opportunities"
        dataTestId="client-open"
      >
        <ClientProjectsTable
          clientDataTable={clientOpenProjects}
          tableHeadFields={clientOpenHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion
        title="Client Completed Projects"
        dataTestId="client-completed"
      >
        <ClientProjectsTable
          clientDataTable={clientCompletedProjects}
          tableHeadFields={clientCompletedHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion
        title="Client Lost Projects"
        dataTestId="client-lost"
      >
        <ClientProjectsTable
          clientDataTable={clientLostProjects}
          tableHeadFields={clientLostHead}
        />
      </ClientProjectsAccordion>
    </Box>
  );
};

export default ClientProjectsBoard;
