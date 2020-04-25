/* eslint-disable */
function showDiv1() {
    document.getElementById(`whiteRice`).style.display = `block`;
    document.getElementById(`caliRice`).style.display = `none`;
}

function showDiv2() {
    document.getElementById(`caliRice`).style.display = `block`;
    document.getElementById(`whiteRice`).style.display = `none`;
}
/* eslint-enable */
function convertWhite() {
    var amount = document.getElementById(`whiteSubmit`).value;
    var water;
    water = amount * 2;
    // alert(amount);
    // document.write(`<p>Combine ${amount} cup of rice with ${water} cups
    //      of water and 1 Tbsp olive oil. Bring to a boil, then reduce heat to the
    //      lowest setting. Cook for about 18 minutes.</p>`);
    document.getElementById(`whiteRecipe`).style.display = `block`;
    document.getElementById(`amount`).innerHTML = amount;
    document.getElementById(`water`).innerHTML = water;
}
