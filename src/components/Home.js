import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { connect } from "react-redux";
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from '../redux/actions'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Filmcard from "./Filmcard";
import thunk from 'redux-thunk'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
   
    color: theme.palette.text.primery,
  }));
function Home({syncPosts}) {
  const dispatch = useDispatch()
  let posts = useSelector(state => state.posts.fetchedPosts)
 
  dispatch(fetchPosts())
    return(
      <div>
         
      
        <Box sx={{ width: '100%' }}>
        <Grid container justify="flex-start" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {posts.results.map((post,index) => (
          <Grid  item xs={12} sm={4} md={3}>
            <Link to={`/movie/${index}`} className="links"> <Item elevation><Filmcard post={post} key={index}/></Item></Link>
          </Grid>
          ))}
        
        </Grid>
      </Box>
      
      </div>


    )
}
const mapStateToProps = state => {
  return {
    syncPosts: state.posts.fetchedPosts
  }
}


export  default connect(mapStateToProps,null)(Home);