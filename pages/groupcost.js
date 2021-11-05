import { Button, Checkbox, MenuItem, styled, TextField } from "@material-ui/core";
import { lightBlue, pink } from "@material-ui/core/colors";
import { useState } from "react";
import classes from "../styles/About.module.css";
//import { pink } from '@material-ui/colors';
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
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
              <div className='col-md-6 pb_20px'>
                <Checkbox {...label} defaultChecked color="" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <BpCheckbox />
              </div>
            </div>
            <div className='row' >
              <div className={classes.button_center}>
                <Button variant="contained" color="primary" size="small" onClick={onSave}>Submit</Button></div>
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

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: 'red',
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}