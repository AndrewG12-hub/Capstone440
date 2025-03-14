import React from 'react';

const recentAlerts = [
    { text: "Heart Rate was at 110 BPM at 1:20 P.M. on Wednesday 2/5/2025", icon: "warning", color: "red"},
    { text: "Heart Rate was at 110 BPM at 1:17 P.M. on Wednesday 2/5/2025", icon: "error", color: "yellow"},
    { text: "Heart Rate was at 110 BPM at 1:14 P.M. on Wednesday 2/5/2025", icon: "warning", color: "red"}
]


const Alerts = () => {
    return(
        <div className="w-[800px]">
            <h3 className="text-lg font-bold">Recent Activity</h3>
            <div className="overflow-auto h-[120px] p-2 border border-gray-300 rounded-md">
            {activityData.map((activity, index) =>(
                <div key={index} className="flex justify-between items-center p-2 border-b">
                    <span>{activity.text}</span>
                    {activity.icon && (
                        <i className="material-icons" style={{color: activity.color, paddingLeft: "20px" }}>
                            {activity.icon}
                        </i>
                    )}</div>
            ))}
            
        </div>
        </div>
    );
};

export default alerts;