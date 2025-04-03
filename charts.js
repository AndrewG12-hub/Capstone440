import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
//import { AuthProvider, useAuth } from "./context/AuthContext";
//import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


   
/*
const [data, setData] = useState([]);
        useEffect(() => {
            const response =  fetch('/fitbit/get_data', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              
            })
            .then(response => response.json())
           .then(data => {
              // Transform data into the required format
    
              const formattedData = data["heart_rate"].map(entry => ({
                date: entry.dateTime,
                steps: parseInt(entry.value, 10),
    
              }));
              setData(formattedData);
            })
            .catch(error => console.error("Error fetching Fitbit data:", error));
          }, []);
*/
   

    const data = [
        {name: "Sunday", value: 83},
        {name: "Monday", value: 110},
        {name: "Tuesday", value: 86},
        {name: "Wednesday", value: 93},
        {name: "Thursday", value: 70},
        {name: "Friday", value: 88},
        {name: "Saturday", value: 91},
    ];
    

    
    function FitbitBarChart(){
       
      return (
        <ResponsiveContainer style ={{margin:"-55% 10px 0% 620px"}}width="50%" height={300}>
          <h2>Fitbit Data</h2>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );

    };
export default FitbitBarChart;
