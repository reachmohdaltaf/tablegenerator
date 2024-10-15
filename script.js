let btn = document.getElementById("btn");
let tableContainer = document.getElementById('tablearea')
function createTable(e){
    e.preventDefault();
    let row = document.getElementById("row").value;
    let col = document.getElementById("col").value;



    let table = document.createElement("table")
    tableContainer.innerHTML = '';
    table.setAttribute("border","1px")
    table.style.width = "100%";          // Table width
    table.style.borderCollapse = "collapse"; // Make borders collapse together
    table.style.height ="300px"

    for(let i = 0; i<row; i++){
        let rows = document.createElement("tr");

        for(let j = 0; j<col; j++){
            let cells = document.createElement("td");
            cells.textContent = "explorin";
            cells.style.textAlign = "center";
            rows.appendChild(cells);

        }
        table.appendChild(rows);

    }
    tableContainer.appendChild(table)
  
}

btn.addEventListener("click",createTable);