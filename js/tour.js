const tourTable = document.querySelector(".tours-table");

const toursUrl = `http://localhost:8080`;
// const toursUrl = `https://{INSERT_ASURE_SERVICE_NAME}.azurewebsites.net`;

async function getTours() {
    const resp = await fetch(toursUrl + "/tour"); //TODO: CHANGE ENDPOINT
    const respData = await resp.json();

    addRow(respData)
}

function showTableHeadlines() {
    let rowCount = tourTable.rows.length;
    let row = tourTable.insertRow(rowCount);

    //TODO: Insert cells
    row.insertCell(0).innerHTML = `Test`
    row.insertCell(1).innerHTML = `Test`
    row.insertCell(2).innerHTML = `Test`
    row.insertCell(3).innerHTML = `Test`
}

function addRow(respData) {
    for (let i = 0; i < respData.length; i++) {

        let rowCount = tourTable.rows.length;
        let row = tourTable.insertRow(rowCount);

        //TODO: Insert cells
        row.insertCell(0).innerHTML = respData[i]
        row.insertCell(1).innerHTML = respData[i]
        row.insertCell(2).innerHTML = respData[i]
        row.insertCell(3).innerHTML = respData[i]

    }
}


showTableHeadlines();
//getTours();