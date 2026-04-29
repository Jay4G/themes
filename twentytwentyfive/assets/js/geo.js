document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 1. GET COUNTRY FROM GEOIP
    // =========================
    let countryElement = document.getElementById("geo-country");
    if (!countryElement) return;

    let country = countryElement.textContent.trim();

    // =========================
    // 2. COUNTRY → CURRENCY MAP
    // =========================
    let currencyMap = {
        US: "USD",
        GB: "GBP",
        AE: "AED",
        NG: "NGN"
    };

    let currency = currencyMap[country] || "USD";

    // =========================
    // 3. FILL HIDDEN FIELDS
    // =========================
    let countryInput = document.querySelector("input[name='item_meta[country_field]']");
    let currencyInput = document.querySelector("input[name='item_meta[currency_field]']");
    let rangeInput = document.querySelector("input[name='item_meta[range_field]']");

    if (countryInput) countryInput.value = country;
    if (currencyInput) currencyInput.value = currency;

    // =========================
    // 4. UPDATE DROPDOWN LABELS
    // =========================
    let dropdown = document.querySelector("select[name='item_meta[price_range]']");
    if (dropdown) {

        let options = dropdown.options;

        for (let i = 0; i < options.length; i++) {

            let baseValue = options[i].value;

            // Skip empty/default option
            if (!baseValue) continue;

            options[i].text = currency + " " + baseValue;
            options[i].value = currency + ":" + baseValue;
        }
    }

    // =========================
    // 5. SAVE SELECTED VALUE
    // =========================
    if (dropdown && rangeInput) {
        dropdown.addEventListener("change", function () {
            rangeInput.value = this.value;
        });
    }

    // =========================
    // 6. OPTIONAL: SHOW FORM ONLY IF COUNTRY EXISTS
    // =========================
    let form = document.querySelector("form");
    if (form) {
        form.style.opacity = country ? "1" : "0.3";
    }

});