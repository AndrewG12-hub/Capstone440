let csvData =[];

document.getElementById("csvFileIput").addEventListener("change",function(event){
    const file = event.target.files[0];
    if(!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const csvText = e.target.result;
        display(csvText);
    };
    reader.readAsText(file);
});

function displayCSV(csvText){
    csvData = csvText.split("/n").map(row => row.split(","));
    const table = document.getElementById("csvTable");
    table.innerHTML = "";

    csvData.array.forEach((row,index) => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const cellElement = index === 0 ? document.createElement("th") : document.createElement("td");
            cellElement.textContent = cell.trim();
            tr.appendChild(cellElement);
        });
        table.appendChild(tr);
    });
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jspdf();

    doc.text("CSV Data Expoert", 14,10);
    doc.autoTable({
        head: [csvData[0]],
        body: csvData.slice(1),
    });

    doc.save("CSV_Data.pdf");
}