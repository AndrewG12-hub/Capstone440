import React, {useState, useRef} from 'react';
import { Chart, registerables } from 'chart.js';

Chart.registerables(...registerables);

const StatChart = () => {
    const [chartInstance, setChartInstance] = useState(null);
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
    

    if(file){
        const reader = new FileReader();
        reader.onload = function (e) {
            const cvsData = e.target.result;
            const parsedData = parseCSV(cvsData);
            drawChart(parsedData);
        };
        reader.readAsText(file);
    }
};

const parseCSV = (data) => {
    const lines = data.split("\n");
    const labels = [];
    const values = [];

    for(let i = 1; i <lines.length; i++){
        const line = lines[i].split(",");
        if(line.length >= 2){
            labels.push(line[0].trim());
            values.push(parseFloat(line[1]));
        }
    }
    return{labels,values};
};

const drawChart = (data) => {
    if(chartInstance){
        chartInstance.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.labels,
            datasets: [
              {
                label: "Heart Rate Data from CSV",
                data: data.values,
                borderColor: "rgba(0,0,0,1)",
                backgroundColor: "rgba(0,0,0,0.2)",
                borderWidth: 1,
              },
            ],
        },
        options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: false,
                min: 50,
                max: 120,
                title: {
                  display: true,
                  text: "Average Heart Rate",
                },
              },
            },
        }, 
    });

    setChartInstance(newChart);
};

return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold text-center">Last Week's Heart Rate</h1>
      <input
        type="file"
        ref={fileInputRef}
        accept=".csv"
        className="my-2 border p-2"
        onChange={handleFileSelect}
      />
      <canvas ref={canvasRef} width={400} height={200}></canvas>
    </div>
  );
};

export default statChart;