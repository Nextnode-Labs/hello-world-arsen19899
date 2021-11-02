import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Filmcard from "./Filmcard";
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
   
    color: theme.palette.text.primery,
  }));
function Home() {
   
    let mowies =["13","12","11","10","9","8","7","6","5","4","3","2"];
    return(
        <Box sx={{ width: '100%' }}>
        <Grid container justify="flex-start" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {mowies.map(mov => (
          <Grid  item xs={12} sm={4} md={3}>
            <Link to={`/movie/${mov}`} class="links"> <Item elevation><Filmcard/></Item></Link>
          </Grid>
          ))}
        
        </Grid>
      </Box>
       


    )
}
export  default  Home