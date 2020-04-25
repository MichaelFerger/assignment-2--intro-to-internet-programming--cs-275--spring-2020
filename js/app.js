function showDiv1() {
    document.getElementById(`whiteRice`).style.display = `block`;
    document.getElementById(`caliRice`).style.display = `none`;
}

function showDiv2() {
    document.getElementById(`caliRice`).style.display = `block`;
    document.getElementById(`whiteRice`).style.display = `none`;
}

function convertWhite() {
    let amount = document.getElementById(`whiteSubmit`).value;
    let water;
    water = amount * 2;
    document.getElementById(`whiteRecipe`).style.display = `block`;
    document.getElementById(`amount1`).innerHTML = amount;
    document.getElementById(`water1`).innerHTML = water;
}

function convertCali() {
    let amount = document.getElementById(`caliSubmit`).value;
    let water;
    water = amount * 1.6;
    document.getElementById(`caliRecipe`).style.display = `block`;
    document.getElementById(`amount2`).innerHTML = amount;
    document.getElementById(`water2`).innerHTML = water;
}
