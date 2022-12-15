import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button,Stack } from "@mui/material";
const Dashborad = () => {
    const navigate = useNavigate();

    return(
        <>
        <nav className="nav_bar">
           <div className="sidebar_items">
            <Stack spacing={3}>
            <Button variant='outlined' onClick={() => navigate('/Home')}>Home</Button>
            <Button variant='outlined' onClick={() => navigate('/Products')}>Products</Button>
            <Button variant='outlined' onClick={() => navigate('/Wishlist')}>Wishlist<i className="bi bi-caret-down-fill"></i></Button>
            <Button variant='outlined' onClick={() => navigate('/AboutUs')}>About Us</Button>
            <Button variant='outlined' onClick = {() => navigate('/Clients')}>Clients</Button>
            <Button variant='contained' onClick={() => navigate('/')}>LOGOUt</Button>
            </Stack>
           </div>
        </nav>
        </>
    );
}
export default Dashborad;