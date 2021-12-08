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
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

if(toursSaveBtn){
toursSaveBtn.addEventListener('click', () => {
    const data = {
        tourPageId: 1,
        headline: toursHeadline.textContent
    }

    console.log(data)
    if(data){
        putTours(data)
    }
})
}

getTourPage();

if(toursHeadline.typeOf === undefined){
    toursHeadline.innerHTML="Placeholder"
}


if(newTourBtn){
    newTourBtn.addEventListener("click", async(e)=>{
        e.preventDefault();
        let data = {
            date: dateInput.value,
            time: timeInput.value,
            city: cityInput.value,
            concertPlace: concertPlaceInput.value,
            ticketPrice: ticketPriceInput.value
        }

        if (data){
            await newTour(data);
            for(let i = 0; i < inputFields.length; i++){
                inputFields[i].value = '';
            }
            tourTable.innerHTML="";
            showTableHeadlines();
            alert("Tour Created!")
            getTours();

        }
        
    })
    }