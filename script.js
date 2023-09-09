let gridResolution = 256;
const container = document.querySelector('#container');
function defaultGrid() {
for (i = 1 ; i <= gridResolution; i++){
    const divs = document.createElement('div');
    divs.className = 'grid';
    document.getElementById('container').appendChild(divs);
    divs.textContent = "";
}
    const div = document.querySelectorAll(".grid");
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
    const divs = document.createElement('div');
    divs.className = 'grid'
    document.getElementById('container').appendChild(divs);
    divs.textContent = "";
    elementPadding = 22 - (gridResolution - 16);
    divs.style.padding = `${elementPadding}px`; 
};
})

