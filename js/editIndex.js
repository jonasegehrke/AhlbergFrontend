const apiURL = `http://localhost:8080`;
const indexHeadline = document.querySelector(".index-headline");
const indexDescription1 = document.querySelector("#index-description-1")
const indexDescription2 = document.querySelector("#index-description-2")
const indexSaveBtn = document.querySelector(".index-save-btn")




//get
async function getIndex() {
    const resp = await fetch(apiURL + "/index");
    const respData = await resp.json();

    addToIndexPage(respData);
}


//put
async function putIndex(data) {

    await fetch(apiURL + "/index", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })


}

//innerhtml
function addToIndexPage(respData) {
    indexHeadline.innerHTML = respData[0].headline;
    indexDescription1.innerHTML = respData[0].description1;
    indexDescription2.innerHTML = respData[0].description2;
}


if(indexSaveBtn){
indexSaveBtn.addEventListener('click', () => {
    const data = {
        indexModelId: 1,
        headline: indexHeadline.textContent,
        description1: indexDescription1.textContent,
        description2: indexDescription2.textContent
    }

    console.log(data)
    if(data){
        putIndex(data)
    }
})
}


getIndex();

if(indexHeadline.typeOf == undefined){
    indexHeadline.innerHTML="Placeholder"
}