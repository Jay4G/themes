document.addEventListener("DOMContentLoaded", function () {

    let countryElement = document.getElementById("geo-country");
    if (!countryElement) return;

    let country = countryElement.textContent.trim();

    // Map country → currency + price
    let currency = "USD";
    let price = 10;

    if (country === "US") {
        currency = "USD";
        price = 10;
    } else if (country === "GB") {
        currency = "GBP";
        price = 8;
    } else if (country === "AE") {
        currency = "AED";
        price = 35;
    } else if (country === "NG") {
        currency = "NGN";
        price = 8000;
    }

    // Fill Formidable hidden fields
    let countryInput = document.querySelector("input[name='item_meta[country_field]']");
    let currencyInput = document.querySelector("input[name='item_meta[currency_field]']");
    let priceInput = document.querySelector("input[name='item_meta[price_field]']");

    if (countryInput) countryInput.value = country;
    if (currencyInput) currencyInput.value = currency;
    if (priceInput) priceInput.value = price;

    // Update visible price field (if exists)
    let displayField = document.getElementById("price-display");
    if (displayField) {
        displayField.textContent = "Price: " + currency + " " + price;
    }

});