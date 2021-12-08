const apiURL = `http://localhost:8080`;
const aboutHeadline = document.querySelector(".about_headline");
const aboutDescription = document.querySelector(".about-description")
const aboutSaveBtn = document.querySelector(".about-save-btn")




//get
async function getAbout() {
    const resp = await fetch(apiURL + "/about");
    const respData = await resp.json();

    addToAboutPage(respData);
}


//put
async function putAbout(data) {

    await fetch(apiURL + "/about", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })


}

//innerhtml
function addToAboutPage(respData) {
    aboutHeadline.innerHTML = respData[0].headline;
    aboutDescription.innerHTML = respData[0].description;
}


if(aboutSaveBtn){
aboutSaveBtn.addEventListener('click', () => {
    const data = {
        aboutModelId: 1,
        headline: aboutHeadline.textContent,
        description: aboutDescription.textContent
    }

    console.log(data)
    if(data){
        putAbout(data)
    }
})
}


getAbout();

if(aboutHeadline.typeOf === undefined){
    aboutHeadline.innerHTML="Placeholder"
}
if(aboutDescription.typeOf === undefined){
    aboutDescription.innerHTML="Placeholder"
}
