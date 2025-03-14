import React from 'react';

import StatChart from "./chart";
import Alerts from "./alert";
import HealthStats from "./healthStats";
import DashboardSideBar from "./sidebar";
import ChatGPT from "./chatGPT";


function App(){
    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
            
            <DashboardSideBar/>
            <StatChart />
            <Alerts />
            <HealthStats />
            <ChatGPT />
        </div>
    );
}

export default App;