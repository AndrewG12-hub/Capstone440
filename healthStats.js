import React from "react";


const HealthStats = () => {
    return (
      <div className="p-4 border rounded-lg shadow-lg w-80 bg-white">
        {/* Heart Rate Section */}
        <div className="text-lg font-semibold">
          Average Heart Rate, Beats Per Minute
          <div className="flex mt-2">
            <p className="text-black text-xl">76 BPM</p>
          </div>
          <div className="mt-2 px-3 py-1 bg-green-300 text-green-700 font-bold rounded-md w-fit">
            Good
          </div>
        </div>
  
        <hr className="w-56 my-4 border-gray-400" />
  
        {/* Respiratory Rate Section */}
        <div className="text-lg font-semibold mt-4">
          Respiratory Rate, Breaths Per Minute
          <div className="mt-2">
            <p className="text-black text-xl">15 BPM</p>
            <div className="mt-2 px-3 py-1 bg-yellow-300 text-yellow-800 font-bold rounded-md w-fit">
              Fair
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default HealthStats;