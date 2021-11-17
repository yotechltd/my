import { DatePicker, LocalizationProvider } from "@mui/lab";
import React, { useState } from "react";
const classes = import("../styles/Expense.module.css");
import DateAdapter from '@mui/lab/AdapterMoment';
import { TextField } from "@material-ui/core";
import moment from "moment";

const Expense = () => {
  const [value, setValue] = useState(new Date());
  function disableDate(day) {
    //console.log(moment().format('dddd'));
    let dayName = moment(day).format('dddd');
    return dayName == "Thursday" || dayName == "Sunday";
  }
  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Basic example"
          value={value}
          shouldDisableDate={disableDate}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <button className="button-1">click me</button>
      <button className="button-2">click me</button>
      <button className="button-3">click me</button>
      <button className="button-4">click me</button>
      <button className="button-err">click me</button>
    </>
  );
};

export default Expense;