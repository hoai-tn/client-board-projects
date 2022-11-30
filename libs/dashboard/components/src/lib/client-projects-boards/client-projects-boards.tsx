import ClientProjectsTable from "../client-projects-table/client-projects-table";

import {
  clientActiveHead,
  clientCompletedHead,
  clientLostHead,
  clientOpenHead,
  clientPausedHead,
} from "../../constants";
import { Box } from "@mui/material";
import {
  IClientActive,
  IClientCompleted,
  IClientLost,
  IClientOpen,
  IClientPaused,
} from "../../interfaces";
import ClientProjectsAccordion from "./client-projects-accordion";
interface IClientProjectsBoardProps {
  clientActiveProjects: IClientActive[];
  clientPausedProjects: IClientPaused[];
  clientOpenProjects: IClientOpen[];
  clientCompletedProjects: IClientCompleted[];
  clientLostProjects: IClientLost[];
}
const ClientProjectsBoard = ({
  clientActiveProjects,
  clientPausedProjects,
  clientOpenProjects,
  clientCompletedProjects,
  clientLostProjects,
}: IClientProjectsBoardProps) => {
  return (
    <Box marginTop={1}>
      <ClientProjectsAccordion title="Client Active Projects">
        <ClientProjectsTable
          clientDataTable={clientActiveProjects}
          tableHeadFields={clientActiveHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion title="Client Paused Projects">
        <ClientProjectsTable
          clientDataTable={clientPausedProjects}
          tableHeadFields={clientPausedHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion title="Client Open Opportunities">
        <ClientProjectsTable
          clientDataTable={clientOpenProjects}
          tableHeadFields={clientOpenHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion title="Client Completed Projects">
        <ClientProjectsTable
          clientDataTable={clientCompletedProjects}
          tableHeadFields={clientCompletedHead}
        />
      </ClientProjectsAccordion>
      <ClientProjectsAccordion title="Client Lost Projects">
        <ClientProjectsTable
          clientDataTable={clientLostProjects}
          tableHeadFields={clientLostHead}
        />
      </ClientProjectsAccordion>
    </Box>
  );
};

export default ClientProjectsBoard;
