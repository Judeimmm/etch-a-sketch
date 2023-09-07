
const container = document.querySelector('#container');
for (i = 1 ; i <= 256; i++){
    const divs = document.createElement('div');
    divs.className = 'grid';
    document.getElementById('container').appendChild(divs);
    divs.textContent = "";
};

const div = document.querySelectorAll(".grid");
div.forEach(div => div.addEventListener("click", () => {
    div.classList.add("black");
})
);