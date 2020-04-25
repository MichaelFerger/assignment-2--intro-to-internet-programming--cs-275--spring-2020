var button1 = document.getElementById(`button1`);
button1.onclick = function showDiv1() {
    document.getElementById(`whiteRice`).style.display = `block`;
    document.getElementById(`caliRice`).style.display = `none`;
};

var button2 = document.getElementById(`button2`);
button2.onclick = function showDiv2() {
    document.getElementById(`caliRice`).style.display = `block`;
    document.getElementById(`whiteRice`).style.display = `none`;
};

var button3 = document.getElementById(`button3`);
button3.onclick = function convertWhite() {
    var amount = document.getElementById(`whiteSubmit`).value;
    let water;
    water = amount * 2;
    document.getElementById(`whiteRecipe`).style.display = `block`;
    document.getElementById(`amount1`).innerHTML = amount;
    document.getElementById(`water1`).innerHTML = water;
};

var button4 = document.getElementById(`button4`);
button4.onclick = function convertCali() {
    var amount = document.getElementById(`caliSubmit`).value;
    var water;
    water = amount * 1.6;
    document.getElementById(`caliRecipe`).style.display = `block`;
    document.getElementById(`amount2`).innerHTML = amount;
    document.getElementById(`water2`).innerHTML = water;
};
