import React from 'react';
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"
import { useNavigate, Navigate} from "react-router-dom"; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Card, Form, Button} from "react-bootstrap";
import FitbitSyncButton from './FitbitSyncButton';

function DashboardSideBar(){
  return (
    <Container className="d-flex flex-column align-items-start p-3" style={{margin:"0",width:"250px",height:"500px", backgroundColor:"#AFAFAF"}}>
    
      <img alt="logo" src = "https://1000logos.net/wp-content/uploads/2018/01/Penn-State-Logo.png"
      style={{ height: '105px', width: '200px' }} />



      <div style={{padding:"10px"}}>
        <Button onClick={() => Navigate("/account")}  style = {{backgroundColor:"#7D7D7D", border:"none", width:"200px" }} >Account</Button>
      </div>
      
      <div style={{padding:"10px"}}>
        <Button onClick={() => Navigate("/reports")} style = {{backgroundColor:"#7D7D7D", border:"none", width:"200px"}}>Reports</Button>
      </div>


      <div style={{padding:"10px",paddingTop:"200px"}}>
        <Button onClick={() => Navigate("/")}  type="submit" style = {{backgroundColor:"#7D7D7D", border:"none", width:"200px"}}>Logout</Button>
      </div>
      
      <div><FitbitSyncButton/></div>
        
      

    </Container>

    
  );
};

export default DashboardSideBar;