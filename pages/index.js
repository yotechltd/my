import { server } from '../config'
import ArticleList from '../components/ArticleList'
import classes from "../styles/About.module.css"
import { Box, Button, TextField } from '@material-ui/core';
import { useState } from 'react';
export default function Home({ articles }) {
  let [cost, setCost] = useState(0);
  let [details, setDetails] = useState("");
  let [isValid, setIsValid] = useState(true);
  const onChangeHandler = (event)=>{
    event.preventDefault();
    if(event.target.name == "cost") {
      setCost(+event.target.value);
      isValidate("cost", +event.target.value);
    } else {
      setDetails(event.target.value);
      isValidate("details", +event.target.value);
    }
  }
  const onSave = (event)=> {
    event.preventDefault();
    console.log("You submitted cost ",cost , "And details ", details )
  }
  const isValidate = (target, value) => {
    if(target=="cost"){
      return setIsValid(!(value > 0 && details != ""));
    }else{
      return setIsValid(!(cost > 0 && value != ""));
    }    
  }
  return (
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
                  label="Cost"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  name='cost'
                  onChange={onChangeHandler}
                  value = {cost}
                  fullWidth
                  id="margin-none"
                />
              </div>
              <div className='col-md-6'>
                <TextField
                  id="outlined-textarea"
                  variant="outlined"
                  label="Details"
                  placeholder="Details"
                  multiline
                  size="small"
                  name='details'
                  onChange={onChangeHandler}
                  value={details}
                  fullWidth
                  id="margin-none"
                />
              </div>
            </div>
            <div className='row' >
              <div className={classes.button_center}>
                <Button disabled={isValid} color="primary" variant="contained" size="small" onClick={onSave}>Submit</Button></div>
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

// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3fzeCZKjCEOl74s33u5yUcFx5lRutehM&callback=initMap">

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();
//   return {
//     props:{
//       articles,
//     },
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
