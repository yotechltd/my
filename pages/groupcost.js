import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import classes from "../styles/About.module.css"
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
export default function GroupCost() {
  let [currency, setCost] = useState("");
  //let [details, setDetails] = useState("");
  //let [isValid, setIsValid] = useState(true);
  const onChangeHandler = (event)=>{
    event.preventDefault();
    if(event.target.name == "currency") {
      setCost(+event.target.value);
      //isValidate("currency", +event.target.value);
    } else {
      setDetails(event.target.value);
      //isValidate("currency", +event.target.value);
    }
  }
  const onSave = (event)=> {
    event.preventDefault();
    //console.log("You submitted cost ",cost , "And details ", details )
  }
  // const isValidate = (target, value) => {
  //   if(target=="cost"){
  //     return setIsValid(!(value > 0 && details != ""));
  //   }else{
  //     return setIsValid(!(cost > 0 && value != ""));
  //   }    
  // }
  return(
    <div className='row d-flex' className={classes.backg}>
      <div className="container">
        <div className="row pt_20px">
          <div className="col-md-3 pb_20px" >
            Add area
          </div>
          <div className="col-md-6 pb_20px">
            <div className='row pb_20px'> 
              <div className='col-md-6 pb_20px'>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Currency"
                  value={currency}
                  onChange={onChangeHandler}
                  helperText="Please select your currency"
                  variant="standard"
                  name="currency"
                >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              </div>
              
            </div>
            <div className='row' >
              <div className={classes.button_center}>
                <Button variant="contained" size="small" onClick={onSave}>Submit</Button></div>
            </div>
          </div>
          <div className="col-md-3 pb_20px" >
            add area
          </div>
        </div>
      </div>
    </div>
  )
}