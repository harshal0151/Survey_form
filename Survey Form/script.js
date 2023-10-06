function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = (document.getElementById("male").checked ? "Male" : "") + (document.getElementById("female").checked ? "Female" : "");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        var popupContent = `<strong>First Name:</strong> ${firstName}<br>
                            <strong>Last Name:</strong> ${lastName}<br>
                            <strong>Date of Birth:</strong> ${dob}<br>
                            <strong>Country:</strong> ${country}<br>
                            <strong>Gender:</strong> ${gender}<br>
                            <strong>Profession:</strong> ${profession}<br>
                            <strong>Email:</strong> ${email}<br>
                            <strong>Mobile Number:</strong> ${mobile}`;

        document.getElementById("popupContent").innerHTML = popupContent;
        document.getElementById("popup").style.display = "flex";
    } else {
        alert("Please fill out all fields.");
    }
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("country").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("profession").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("popup").style.display = "none";
}
