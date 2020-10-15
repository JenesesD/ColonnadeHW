const packages = {
    "standard": {
        "balesetbizt": "50,000,000",
        "kp": "0",
        "poggyász": "0",
        "poggylimit": "200,000,000"
    },
    "medium": {
        "balesetbizt": "100,000,000",
        "kp": "0",
        "poggyász": "50,000",
        "poggylimit": "200,000,000"
    },
    "extra": {
        "balesetbizt": "150,000,000",
        "kp": "100,000",
        "poggyász": "100,000",
        "poggylimit": "200,000,000"
    },
    "optimal": {
        "balesetbizt": "200,000,000",
        "kp": "100,000",
        "poggyász": "200,000",
        "poggylimit": "200,000,000"
    }
}

function main() {
    document.getElementById("submitBut").addEventListener("click", gatherData);
}


function gatherData() {
    data = {
        "name": document.querySelector("#fullName").value,
        "phone": document.querySelector("#phoneNum").value,
        "email": document.querySelector("#email").value,
        "zip": document.querySelector("#zip").value,
        "city": document.querySelector("#city").value,
        "address": document.querySelector("#address").value,
        "option": packages[document.querySelector("#option").value]
    }
    displayData(data);
}

function displayData(data) {
    console.log(data)
}

main();