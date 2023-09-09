let gridResolution = 16;
const container = document.querySelector('#container');
function defaultGrid(gridResolution) {
for (i = 1 ; i <= gridResolution; i++){
    const rows = document.createElement('div');
    rows.className = 'rows';
    rows.textContent = '';
    document.getElementById('container').appendChild(rows);
}
rowsSelector = document.querySelectorAll('.rows')
rowsSelector.forEach(rowsSelector => {
for (i = 1; i <= gridResolution; i++){
    const columns = document.createElement('div');
    columns.className = 'columns';
    rowsSelector.appendChild(columns)
}
});
    const div = document.querySelectorAll(".columns");
    div.forEach(div => div.addEventListener("click", () => {
        div.classList.add("black");
})
)};

defaultGrid(gridResolution)
const resetGridSizeButton = document.querySelector(".reset")
resetGridSizeButton.addEventListener("click", () => {
    container.textContent = ' '
    let gridResolution = parseInt(prompt("What resolution do you want the grid?", 16)); 
    if (isNaN(gridResolution) == true || gridResolution > 100) return alert("Error!");
    defaultGrid(gridResolution)
});
