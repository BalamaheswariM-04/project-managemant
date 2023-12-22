import React from "react";
import Button from '@mui/material/Button';

import DrawerAppBar from "./Navbar";
import Footer from "./Footer";
import MultiActionAreaCard from "./Card";


const Home = () =>{
  return(
    
    <div >
      <DrawerAppBar/>
      <br></br><br></br><br></br><br></br><br></br>
      <h1>This all-in-one platform for Projects</h1>
      <h1>     
        "Power Your Projects to Perfection: Simplify, Collaborate, 
        Succeed with Our Seamless Management System!"</h1>
        <br></br>
         <h1><Button variant="contained" href="/Login">
               Get Started 
         </Button></h1>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <MultiActionAreaCard/>
        <br></br>
        <br></br>
      <Footer/>
    </div>
  )
}
export default Home;