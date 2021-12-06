const apiURL = `http://localhost:8080`;
const toursHeadline = document.querySelector(".tours-headline");
const toursSaveBtn = document.querySelector(".tours-save-btn")




//get
async function getTours() {
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


if(toursSaveBtn){
toursSaveBtn.addEventListener('click', () => {
    const data = {
        tourPageId: 1,
        headline: toursHeadline.textContent,
       
    }

    console.log(data)
    if(data){
        putTours(data)
    }
})
}


getTours();

if(toursHeadline.typeOf == undefined){
    toursHeadline.innerHTML="Placeholder"
}