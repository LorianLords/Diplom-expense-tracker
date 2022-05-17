import React, { memo, useCallback, useContext } from "react";
import { Box, Modal } from "@mui/material";
import { AccountForm } from "../../forms/account-form/account-form.component";
import { ExpenseTrackerContext } from "../../../shared/context/context";

const EditAccountModalComponent = ({ open, handleClose }) => {
  const { editAccountHandler, currentPaymentAccount } = useContext(
    ExpenseTrackerContext
  );

  const handleAdd = useCallback(
    ({ initialBalance, monthBudget, name }) => {
      editAccountHandler({
        initialBalance,
        monthBudget,
        name,
        id: currentPaymentAccount,
      });
    },
    [currentPaymentAccount, editAccountHandler]
  );

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
        <AccountForm
          submitButton="Edit"
          handleSubmit={handleAdd}
          title="Edit Account"
        />
      </Box>
    </Modal>
  );
};

export const EditAccountModal = memo(EditAccountModalComponent);
