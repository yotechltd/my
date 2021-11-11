import { DatePicker, LocalizationProvider } from "@mui/lab";
import React, { useState } from "react";
const classes = import("../styles/Expense.module.css");
import DateAdapter from '@mui/lab/AdapterMoment';
import { TextField } from "@material-ui/core";
const Expense = () => {
  const [value, setValue] = useState(new Date());
  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default Expense;