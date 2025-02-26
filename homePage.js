<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.getElementById('csvFileInput').addEventListener('change',handFileSelect, false);

function handFileSelect(event){
    const file = event.target.files[0];
    
    if(file)
    {
        const reader = new FileReader(); 
        reader.onload= function(e){
            const csvData = e.target.result;
            const parsedData = parseCSV(csvData);
            drawChart(parsedData);
        };
        reader.readAsText(file);
    }
}

function parseCSV(data){
    const lines = data.split('/n');
    const labels = [];
    const values = [];

    for(let i =1; i<lines.length;i++){
        const line = lines[i].split(',');
        if(line.length >= 2){
            labels.push(line[0]);
            values.push(parseFloat(line[1]));
        }
    }
    return{labels,values};
}

function drawChart(data){
    const ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx,{
        type:'line',
        data:{
            labels: data.labels,
                    datasets: [{
                        label: 'Data from CSV',
                        data: data.values,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 1,
                        fill: true
                    }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
    });
}