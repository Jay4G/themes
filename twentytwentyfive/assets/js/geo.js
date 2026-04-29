document.addEventListener("DOMContentLoaded", function() {

    let countryElement = document.querySelector(".geo-country");
    if (!countryElement) return;

    let country = countryElement.textContent.trim();

    let inputField = document.querySelector("input[name='item_meta[123]']");
    if (!inputField) return;

    inputField.value = country;

});