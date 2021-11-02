import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';



function Movie() {
    return( 
        <main style={{position: 'relative'}}>
       
        <Container>
           
                <Grid container spacing={7}>
                    <Grid item md={3}>
                        <img  src={"/lynx.jpg"} width='500' alt={"Poster of "}/>
                    </Grid>
                    <Grid item md={8} style={{color: 'white'}}>
                       
                        <Typography variant={"h4"} style={{fontWeight: 'bold', color: '#000'}} component={"h1"}>
                            Filmname
                        </Typography>
                        
                    </Grid>
                </Grid>
               
        </Container>
    </main>
        
        )
}
export  default  Movie