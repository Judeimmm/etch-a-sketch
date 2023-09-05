
const container = document.querySelector('#container');
for (i = 1 ; i <= 256; i++){
    let divs = document.createElement('div');
    divs.className = 'grid';
    document.getElementById('container').appendChild(divs);
    divs.textContent = ""
};