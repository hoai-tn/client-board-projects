import { useEffect, useReducer, useState } from "react";

import { TableContainer, Box, Paper, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Groups";

import BoardHeader from "../board-header/board-header";
import ConsultantTable from "../consultant-table/consultant-table";
import { ActionConsultant, Consultant } from "../../interfaces";
import ConsultantFormDialog from "../consultant-form-dialog/consultant-form-dialog";
import DeleteDialog from "../delete-dialog/delete-dialog";
import { createConsultant, setConsultants, updateConsultant } from "./action";
import { initState, reducer } from "./reducer";

const ClientProjectsBoard = ({
}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { consultants } = state;
  const [isOpenConsultantDialog, setIsOpenConsultantDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [consultantUpdate, setConsultantUpdate] = useState<Consultant>(() => ({
    id: "",
    name: "",
    specialty: "",
    email: "",
    phoneNumber: "",
    costRate: 0,
    markup: 0
  }));

  useEffect(() => {
    return dispatch(setConsultants(consultantsList));
  }, []);

  useEffect(() => {
    onGetConsultants(consultants);
  }, [consultants]);

  const handleSubmitConsultantForm = (consultant: Consultant, action: string) => {
    action === ActionConsultant.CREATE_CONSULTANT
      ? dispatch(createConsultant(consultant))
      : dispatch(updateConsultant(consultant));

    setIsOpenConsultantDialog(false);
  };
  const handleCloseDelete = () => {
    setOpenDeleteDialog(false);
  };

  const handleClearConsultantForm = () => {
    setConsultantUpdate({
      id: "",
      name: "",
      specialty: "",
      email: "",
      phoneNumber: "",
      costRate: 0,
      markup: 0
    });
  };
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: 1156, margin: "0 auto", overflow: "visible" }}>
      <BoardHeader title="Consultants" icon={<GroupsIcon sx={{ color: "#6e6767" }} />} />
    {/* table */}
    </TableContainer>
  );
};

export default ClientProjectsBoard;