import { Grid, Paper,TextField, Typography ,Checkbox, Button} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialogbox from './Dialogbox';
import { NavLink } from "react-router-dom";

import React from "react";

const Login=()=>{
    const paperstyle={padding: 20 ,height: '70vh',width:260,margin:"20px auto"};

    return(
       <Grid>
        <Paper elevation={10} style={paperstyle}>
        <Grid align= "center">
        <h2> Sign in </h2> 
         </Grid>
         <TextField label='Username' placeholder="Enter Username" fullWidth required/> 
         <TextField label='Password' placeholder="Enter Password" type="Password" fullWidth required/>
         <FormControlLabel control={<Checkbox  name="checked" color="primary"/>}  label="Remember Me"/>
         <NavLink to="/dashboard">SUBMIT </NavLink>   
         <Typography> <Dialogbox/></Typography>
         <Typography> Do you have an account? </Typography>
        </Paper>
       </Grid>
    )
}
export default Login;