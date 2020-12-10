function haalElementenop() {
    let fotoslider = document.getElementById("fotoslider")
    console.log(fotoslider);

    let eersteFotoDiv = document.querySelector('.foto');
    console.log(eersteFotoDiv);

    let alleFotoDivs = document.querySelectorAll('.foto');
    console.log(alleFotoDivs)
    fotoslider.style.borderStyle = 'Solid';
    fotoslider.style.borderColor = 'black';

window.addEventListener('DOMContentLoaded', haalElementenop)