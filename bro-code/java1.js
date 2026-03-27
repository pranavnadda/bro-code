window.alert("Please submit any bug at https://github.com/mridul-codes-professionally");

document.getElementById("submit").addEventListener("click", function () {

    let nameVal = document.getElementById("named").value.trim();
    let ageInput = document.getElementById("age").value.trim();
    let phoneVal = document.getElementById("phoneno").value.trim();

    let h11 = document.getElementById("h11");
    let h22 = document.getElementById("h22");
    let ageInvalid = document.getElementById("ageinvalid");
    let phoneInvalid = document.getElementById("phoneinvalid");

    h11.textContent = "";
    h22.textContent = "";
    ageInvalid.textContent = "";
    phoneInvalid.textContent = "";

    if (!nameVal || !ageInput || !phoneVal) {
        h22.textContent = "Please fill in all fields.";
        return;
    }

    let ageVal = Number(ageInput);

    if (isNaN(ageVal)) {
        ageInvalid.textContent = "Please enter a valid number for age.";
        return;
    }

    if (ageVal < 18) {
        ageInvalid.textContent = `You are ${18 - ageVal} years younger than required.`;
        return;
    }

    if (ageVal > 100) {
        ageInvalid.textContent = "Age must be less than or equal to 100.";
        return;
    }

    if (phoneVal.length !== 10 || isNaN(phoneVal)) {
        phoneInvalid.textContent = "Phone number must be exactly 10 digits.";
        return;
    }

    h11.textContent = "Thanks for the information!";

    let params = new URLSearchParams({
        x: nameVal,
        z: ageVal,
        y: phoneVal
    });

    window.history.replaceState({}, "", "?" + params.toString());
});
