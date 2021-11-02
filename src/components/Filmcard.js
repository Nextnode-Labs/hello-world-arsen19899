import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Filmcard() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/lynx.jpg"
            alt="filmname"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              filmname
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }