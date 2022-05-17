import React, { memo, useContext } from "react";
import { Box, Modal } from "@mui/material";
import { AccountForm } from "../../forms/account-form/account-form.component";
import { ExpenseTrackerContext } from "../../../shared/context/context";

const CreateAccountModalComponent = ({ open, handleClose }) => {
  const { handleAddPaymentAccount } = useContext(ExpenseTrackerContext);
  const handleAdd = ({ initialBalance, monthBudget, name }) => {
    handleAddPaymentAccount({ initialBalance, monthBudget, name });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        boxShadow: 24,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <AccountForm handleSubmit={handleAdd} title="Create Account" />
      </Box>
    </Modal>
  );
};

export const CreateAccountModal = memo(CreateAccountModalComponent);
