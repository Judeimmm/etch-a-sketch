let gridResolution = 16;
const container = document.querySelector('#container');
function defaultGrid() {
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

defaultGrid()
const resetGridSizeButton = document.querySelector(".reset")

resetGridSizeButton.addEventListener("click", () => {
let gridResolution;
container.textContent = ' '
gridResolution = parseInt(prompt("What resolution do you want the grid?", 16)); if (isNaN(gridResolution) == true || gridResolution > 100) return alert("Error!");
for (i = 1 ; i <= Math.pow(gridResolution, 2); i++){
    const rows = document.createElement('div');
    rows.className = 'grid'
    document.getElementById('container').appendChild(rows);
    rows.textContent = "";
    elementPadding = 22 - (gridResolution - 16);
    rows.style.padding = `${elementPadding}px`; 
};
})

