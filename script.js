
const container = document.querySelector('#container');
for (i = 1 ; i <= 256; i++){
    const divs = document.createElement('div');
    divs.className = 'grid';
    document.getElementById('container').appendChild(divs);
    divs.textContent = "";
};

const div = document.querySelectorAll(".grid");
div.forEach(div => div.addEventListener("mouseover", () => {
    div.classList.add("black");
})
);
function getGridResolution() {
    let gridResolution = parseInt(prompt("What resolution do you want the grid?", 16));
    if (isNaN(gridResolution) == true || gridResolution > 100) return alert("Error!");
    console.log(gridResolution)
    return gridResolution;
}
const resetGridSizeButton = document.querySelector(".reset")
resetGridSizeButton.addEventListener("click", getGridResolution)