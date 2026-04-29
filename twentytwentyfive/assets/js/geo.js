document.addEventListener("DOMContentLoaded", function() {

    let countryElement = document.getElementById("geo-country");
    if (!countryElement) return;

    let country = countryElement.textContent.trim();

    let inputField = document.querySelector("input[name='item_meta[4ryez]']");
    if (!inputField) return;

    inputField.value = country;

});