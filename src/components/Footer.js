import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
function Footer() {
    const [value, setValue] = React.useState(2);
    return(
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
     
      <Typography component="legend">This project rating </Typography>
      <Rating name="no-value" value={null} />
    </Box>
        )
}
export  default  Footer