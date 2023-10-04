function confirm() {
    let confirmPassInput = document.getElementById("confirmPass").value
    let passInput = document.getElementById("Pass").value
    if (passInput === "" || passInput == null) {
        document.getElementById("msgAlert").style.display = "none";
    }
    else if (confirmPassInput !== passInput) {
        document.getElementById("msgAlert").style.display = "block";
        document.getElementById("btnSubmit").disabled = true;
    }
    else {
        document.getElementById("msgAlert").style.display = "none";
        document.getElementById("btnSubmit").disabled = false;
    }
}