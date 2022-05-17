import React, { useCallback, useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AccountCard } from "../../components/cards/account";
import { ChangePeriod } from "../../components/forms/change-period";
import { ExpenseTrackerContext } from "../../shared/context/context";
import { SmallAccount } from "../../components/cards/small-account";
import { AddAccount } from "../../components/cards/add-account";
import { EditAccountModal } from "../../components/modals/edit-account";
import { CreateAccountModal } from "../../components/modals/create-account";

export const PaymentAccount = () => {
  const { paymentAccounts, handleChangePaymentAccount, currentPaymentAccount } =
    useContext(ExpenseTrackerContext);

  const [editOpen, setEditOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  const openEdit = useCallback(() => setEditOpen(true), []);

  const openCreate = useCallback(() => setCreateOpen(true), []);

  const closeEdit = useCallback(() => setEditOpen(false), []);

  const closeCreate = useCallback(() => setCreateOpen(false), []);

  return (
    <Box>
      <Box sx={{ mb: 8, display: "flex", gap: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Payment Accounts
        </Typography>
        <ChangePeriod />
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
          <AccountCard openEdit={openEdit} />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5 }}>
            Choose Payment Account
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: 1200,
                overflow: "auto",
                pb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  gap: 5,
                }}
              >
                {paymentAccounts.map((value) => (
                  <Box
                    key={value.id}
                    sx={{
                      border:
                        value.id === currentPaymentAccount
                          ? "3px solid red"
                          : "none",
                      borderRadius: 5,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => handleChangePaymentAccount(value.id)}
                  >
                    <SmallAccount
                      initialBalance={value.monthBudget}
                      name={value.name}
                      title="Month Budget"
                    />
                  </Box>
                ))}
                <Box>
                  <AddAccount onClick={openCreate} title="Add Account" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <EditAccountModal open={editOpen} handleClose={closeEdit} />
      <CreateAccountModal open={createOpen} handleClose={closeCreate} />
    </Box>
  );
};
