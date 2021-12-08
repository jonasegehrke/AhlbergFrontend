const apiURL = `http://localhost:8080`;
const toursHeadline = document.querySelector(".tours-headline");
const toursSaveBtn = document.querySelector(".tours-save-btn");
const dateInput = document.querySelector(".date-input");
const timeInput = document.querySelector(".time-input");
const cityInput = document.querySelector(".city-input");
const concertPlaceInput = document.querySelector(".concert-place-input");
const ticketPriceInput = document.querySelector(".ticket-price-input");
const inputFields = document.querySelectorAll(".form-control");
const newTourBtn = document.querySelector(".new-tour-btn");
const tourTable = document.querySelector(".tours-table");



//get
async function getTourPage() {
    const resp = await fetch(apiURL + "/toursPage");
    const respData = await resp.json();
    addToToursPage(respData);
}

//put
async function putTours(data) {

    await fetch(apiURL + "/toursPage", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}

//innerhtml
function addToToursPage(respData) {
    toursHeadline.innerHTML = respData[0].headline;
}

async function newTour(data) {
    await fetch(apiURL + "/tours", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}

if (toursSaveBtn) {
    toursSaveBtn.addEventListener('click', () => {
        const data = {
            tourPageId: 1,
            headline: toursHeadline.textContent
        }

        console.log(data)
        if (data) {
            putTours(data)
        }
    })
}

getTourPage();

if (toursHeadline.typeOf === undefined) {
    toursHeadline.innerHTML = "Placeholder"
}


if (newTourBtn) {
    newTourBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        let data = {
            date: dateInput.value,
            time: timeInput.value,
            city: cityInput.value,
            concertPlace: concertPlaceInput.value,
            ticketPrice: ticketPriceInput.value
        }

        if (data) {
            await newTour(data);
            for (let i = 0; i < inputFields.length; i++) {
                inputFields[i].value = '';
            }
            tourTable.innerHTML = "";
            showAdminTableHeadlines();
            alert("Tour Created!")
            getAdminTours();

        }

    })
}


async function getAdminTours() {
    const resp = await fetch(apiURL + "/tours");
    const respData = await resp.json();

    addAdminRow(respData)
}

function showAdminTableHeadlines() {
    let rowCount = tourTable.rows.length;
    let row = tourTable.insertRow(rowCount);

    row.insertCell(0).innerHTML = `Id`
    row.insertCell(1).innerHTML = `Date`
    row.insertCell(2).innerHTML = `Time`
    row.insertCell(3).innerHTML = `City`
    row.insertCell(4).innerHTML = `Place`
    row.insertCell(5).innerHTML = `Price`
    row.insertCell(6).innerHTML = `Buy Ticket`
    row.insertCell(7).innerHTML = `Delete`
}

function addAdminRow(respData) {
    for (let i = 0; i < respData.length; i++) {

        let rowCount = tourTable.rows.length;
        let row = tourTable.insertRow(rowCount);

        row.insertCell(0).innerHTML = respData[i].tourId
        row.insertCell(1).innerHTML = respData[i].date
        row.insertCell(2).innerHTML = respData[i].time
        row.insertCell(3).innerHTML = respData[i].city
        row.insertCell(4).innerHTML = respData[i].concertPlace
        row.insertCell(5).innerHTML = respData[i].ticketPrice
        row.insertCell(6).innerHTML = `<a onclick="bookShow(this)"> <button type="button" class="book_btn btn btn-secondary">Book Ticket</button></a>`;
        row.insertCell(7).innerHTML = `<a onclick="deleteRow(this)"> <button type="button" class="delete_btn btn btn-secondary">Delete</button></a>`;


    }
}

async function deleteRow(rowObject) {

    let row = rowObject.parentNode.parentNode;
    let table = row.parentNode;

    await fetch(apiURL + "/tours/" + row.childNodes[0].firstChild.nodeValue, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }
    );

    table.removeChild(row);
}

    tourTable.innerHTML = "";
    showAdminTableHeadlines();
    getAdminTours();




