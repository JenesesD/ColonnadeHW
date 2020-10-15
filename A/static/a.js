const packages = {
    "standard": {
        "name": "Standard",
        "insurance": "50,000,000",
        "cash": "0",
        "luggage": "0",
        "luggageLimit": "200,000,000"
    },
    "medium": {
        "name": "Medium",
        "insurance": "100,000,000",
        "cash": "0",
        "luggage": "50,000",
        "luggageLimit": "200,000,000"
    },
    "extra": {
        "name": "Extra",
        "insurance": "150,000,000",
        "cash": "100,000",
        "luggage": "100,000",
        "luggageLimit": "200,000,000"
    },
    "optimal": {
        "name": "Optimal",
        "insurance": "200,000,000",
        "cash": "100,000",
        "luggage": "200,000",
        "luggageLimit": "200,000,000"
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
    document.querySelector("#formattedData").innerHTML = 
            `<div class='items'>
                <table id='personalInfo'>
                    <tr>
                        <td>Full Name</td>
                        <td>${data.name ? data.name: "-"}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>${data.phone ? data.phone: "-"}</td>
                    </tr>
                    <tr>
                        <td>E-mail Address</td>
                        <td>${data.email ? data.email: "-"}</td>
                    </tr>    
                    <tr>
                        <td>ZIP Code</td>
                        <td>${data.zip ? data.zip: "-"}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>${data.city ? data.city: "-"}</td>
                    </tr>
                    <tr>
                        <td>Home Address</td>
                        <td>${data.address ? data.address: "-"}</td>
                    </tr>
                    <tr>
                        <td>Option</td>
                        <td>${data.option.name ? data.option.name: "-"}</td>
                    </tr>          
                </table>
                <table id='packageInfo'>
                    <tr>
                        <th>Chosen Option</th>
                        <th>${data.option.name}</th>
                    </tr>
                    <tr>
                        <th>Balesetbiztosítási Limit</th>
                        <th>${data.option.insurance} Ft</th>
                    </tr>
                    <tr>
                        <th>Poggyász Limit</th>
                        <th>${data.option.luggageLimit} Ft</th>
                    </tr>
                    <tr>
                        <th>Készpénz</th>
                        <th>${data.option.cash} Ft</th>
                    </tr>
                    <tr>
                        <th>Poggyász</th>
                        <th>${data.option.luggage} Ft</th>
                    </tr>
                </table>
            </div>
            `
}

main();