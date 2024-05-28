function page2() {
    document.getElementById('content').style.display = "none";
    document.getElementById('content3').style.display = "none";
    document.getElementById('content2').style.display = "block";
}

function page3() {
    document.getElementById('content').style.display = "none";
    document.getElementById('content2').style.display = "none";
    document.getElementById('content3').style.display = "block";
}

function page1() {
    document.getElementById('content').style.display = "block";
    document.getElementById('content3').style.display = "none";
    document.getElementById('content2').style.display = "none";
}

const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".dropdown-element"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

const optionMenu1 = document.querySelector(".select-menu1"),
    selectBtn1 = optionMenu1.querySelector(".select-btn1"),
    options1 = optionMenu1.querySelectorAll(".dropdown-element1"),
    sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");

selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));

options1.forEach(option1 => {
    option1.addEventListener("click", () => {
        let selectedOption1 = option1.querySelector(".option-text1").innerText;
        sBtn_text1.innerText = selectedOption1;
        optionMenu1.classList.remove("active");
    });
});

function checkReq() {
    var returnValue = true;
    var category = document.getElementById("categoryText").innerText;
    var event = document.getElementById("eventName").value;
    var eventdate = document.getElementById("eventDate").value;
    var eventtime = document.getElementById("eventTime").value;
    var eventlocation = document.getElementById("eventLocation").value;
    var city = document.getElementById("eventCity").value;
    var eventorganizer = document.getElementById("eventOrganizer").value;
    var mobilenumber = document.getElementById("mobileNumber").value;
    var organizeraddress = document.getElementById("organizerAddress").value;
    var pricingcategory = document.getElementById("pricingCategory").value;
    var platinum = document.getElementById("platinumInput").value;
    var gold = document.getElementById("goldInput").value;
    var silver = document.getElementById("silverInput").value;
    var bronze = document.getElementById("bronzeInput").value;
    var freeticket = document.getElementById("freeTicketText").innerText;
    var upload = document.getElementById("fileToUpload").value;
    var tnc = document.getElementById("termsAndCondition").checked;
    var eventdescription = document.getElementById("eventDescription").value;

    var errorMessage = document.getElementById("errmsg");
    errorMessage.style.display = "none";

    if (category == "") {
        document.getElementById("category").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (freeticket == "") {
        document.getElementById("freeticket").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (event == "") {
        document.getElementById("events").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (eventdate == "") {
        document.getElementById("eventdates").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (eventtime == "") {
        document.getElementById("eventtimes").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (eventlocation == "") {
        document.getElementById("eventlocations").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (city == "") {
        document.getElementById("citys").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (eventorganizer == "") {
        document.getElementById("eventorganizers").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (mobilenumber == "") {
        document.getElementById("mobilenumbers").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    } else {
        var mobileno = /^\d{10}$/;
        if (!mobilenumber.match(mobileno)) {
            document.getElementById("mobilenumbers").innerHTML = "*Not valid";
            errorMessage.style.display = "block";
            returnValue = false;
        }
    }

    if (organizeraddress == "") {
        document.getElementById("organizeraddresss").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (pricingcategory == "") {
        document.getElementById("pricingcategorys").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (platinum == "") {
        document.getElementById("platinums").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (gold == "") {
        document.getElementById("golds").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (silver == "") {
        document.getElementById("silvers").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (bronze == "") {
        document.getElementById("bronzes").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (upload == "") {
        document.getElementById("error").innerHTML = "*Required";
        errorMessage.style.display = "block";
        var x = window.matchMedia('(max-width:450px)');
        if (x.matches) {
            document.getElementById("bannertext").style.marginLeft = "25px";
            document.getElementById("bannertext").style.width = "310px";
            document.getElementById("bannertext").style.fontSize = "20px";
        }
        returnValue = false;
    }

    if (eventdescription == "") {
        document.getElementById("eventdescriptions").innerHTML = "*Required";
        errorMessage.style.display = "block";
        returnValue = false;
    }

    if (!tnc) {
        document.getElementById("tnc").innerHTML = "agree*";
        errorMessage.style.display = "block";
        var x = window.matchMedia('(max-width:450px)');
        if (x.matches) {
            document.getElementById("termsandcondition-div").style.marginLeft = "15px";
            document.getElementById("termsandcondition-div").style.width = "330px";
        }
        returnValue = false;
    }

    return returnValue;
}
