const tourTable = document.querySelector(".tours-table");

const toursUrl = `http://localhost:8080`;
// const toursUrl = `https://{INSERT_ASURE_SERVICE_NAME}.azurewebsites.net`;

async function getTours() {
    const resp = await fetch(toursUrl + "/tours");
    const respData = await resp.json();

    addRow(respData)
}

function showTableHeadlines() {
    let rowCount = tourTable.rows.length;
    let row = tourTable.insertRow(rowCount);

    row.insertCell(0).innerHTML = `Date`
    row.insertCell(1).innerHTML = `Time`
    row.insertCell(2).innerHTML = `City`
    row.insertCell(3).innerHTML = `Price`
    row.insertCell(4).innerHTML = `Buy Ticket`
}

function addRow(respData) {
    for (let i = 0; i < respData.length; i++) {

        let rowCount = tourTable.rows.length;
        let row = tourTable.insertRow(rowCount);

        row.insertCell(0).innerHTML = respData[i].date
        row.insertCell(1).innerHTML = respData[i].time
        row.insertCell(2).innerHTML = respData[i].city
        row.insertCell(3).innerHTML = respData[i].ticketPrice
        row.insertCell(4).innerHTML = `<a onclick="bookShow(this)"> <button type="button" class="btn btn-secondary">Book Ticket</button></a>`;

    }
}


showTableHeadlines();
getTours();