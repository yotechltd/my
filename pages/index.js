import { server } from '../config'
import ArticleList from '../components/ArticleList'
import classes from "../styles/About.module.css"
import { Box, Button, TextField } from '@material-ui/core';
import { useState } from 'react';
export default function Home({ articles }) {
  let [cost, setCost] = useState(0);
  let [details, setDetails] = useState("");
  const onChangeHandler = (event)=>{
    event.preventDefault();
    event.target.name == "cost" ? setCost(+event.target.value) : setDetails(event.target.value);
  }
  const onSave = (event)=> {
    event.preventDefault();
    console.log("You submitted cost ",cost , "And details ", details )
  }
  return (
    <div className='container d-flex' >
      <Box>
        <TextField
          label="Size"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name='cost'
          onChange={onChangeHandler}
          value = {cost}
        />
        <TextField
          label="Size"
          id="outlined-size-small"
          variant="outlined"
          defaultValue=""
          size="small"
          name='details'
          onChange={onChangeHandler}
          value={details}
        />
      </Box>
      <Button variant="contained" size="small" onClick={onSave}>Submit</Button>
      
      {/* <ArticleList articles={articles} /> */}
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
