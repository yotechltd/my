import { server } from '../config'
import ArticleList from '../components/ArticleList'
import classes from "../styles/About.module.css"
import { Box, TextField } from '@material-ui/core';
export default function Home({ articles }) {
  return (
    <div className='container d-flex' >
      <Box>
        <TextField
          label="Size"
          id="outlined-size-small"
          variant="outlined"
          defaultValue=""
          size="small"
        />
      </Box>
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
