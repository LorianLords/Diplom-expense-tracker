import React, { memo, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { FormContainer } from "../../form-container";
import { InfoCard } from "../../../shared/components/info-card";
import { ExpenseTrackerContext } from "../../../shared/context/context";

const AccountFormComponent = ({
  title,
  handleSubmit,
  submitButton = "Add",
  enableDelete = false,
}) => {
  const { deleteAccountHandler, currentPaymentAccount, paymentAccounts } =
    useContext(ExpenseTrackerContext);
  const [initialBalance, setInitialBalance] = useState(0);
  const [monthBudget, setMonthBudget] = useState(0);
  const [accountName, setAccountName] = useState("");

  const handleAdd = () => {
    handleSubmit({
      initialBalance: +initialBalance,
      monthBudget: +monthBudget,
      name: accountName,
    });
  };

  const deleteAccount = () => deleteAccountHandler(currentPaymentAccount);

  const handleAccountNameChange = (e) => setAccountName(e.target.value);

  const handleMonthBudgetChange = (e) => setMonthBudget(e.target.value);

  const handleInitialBalanceChange = (e) => setInitialBalance(e.target.value);

  const disabled =
    isNaN(+initialBalance) || isNaN(+monthBudget) || !accountName;

  return (
    <InfoCard width={400}>
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        {title}

        <FormContainer title="Account name">
          <TextField
            fullWidth
            placeholder="Add a account name"
            variant="outlined"
            value={accountName}
            onChange={handleAccountNameChange}
          />
        </FormContainer>
        <FormContainer title="Initial Balance">
          <TextField
            fullWidth
            placeholder="0.00$"
            variant="outlined"
            type="number"
            value={initialBalance}
            onChange={handleInitialBalanceChange}
          />
        </FormContainer>

        <FormContainer title="MonthBudget">
          <TextField
            fullWidth
            placeholder="0.00$"
            variant="outlined"
            type="number"
            value={monthBudget}
            onChange={handleMonthBudgetChange}
          />
        </FormContainer>
        <Button variant="outlined" disabled={disabled} onClick={handleAdd}>
          {submitButton}
        </Button>
        {enableDelete && (
          <Button
            disabled={paymentAccounts.length <= 1}
            variant="outlined"
            onClick={deleteAccount}
            color="error"
          >
            Delete Account
          </Button>
        )}
      </Box>
    </InfoCard>
  );
};

export const AccountForm = memo(AccountFormComponent);