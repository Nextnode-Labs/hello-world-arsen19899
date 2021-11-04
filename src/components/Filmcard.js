import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { connect } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Filmcard({ post }) {
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
            {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }