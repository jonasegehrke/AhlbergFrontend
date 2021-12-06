const apiURL = `http://localhost:8080`;
const galleryHeadline = document.querySelector(".gallery-headline");
const gallerySaveBtn = document.querySelector(".gallery-save-btn");

//get
async function getGallery() {
    const resp = await fetch(apiURL + "/gallery");
    const respData = await resp.json();

    addToGalleryPage(respData);
}


//put
async function putGallery(data) {

    await fetch(apiURL + "/gallery", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })


}

//innerhtml
function addToGalleryPage(respData) {
    galleryHeadline.innerHTML = respData[0].headline;
}


if(gallerySaveBtn){
gallerySaveBtn.addEventListener('click', () => {
    const data = {
        galleryModelId: 1,
        headline: galleryHeadline.textContent
    }

    console.log(data)
    if(data){
        putGallery(data)
    }
})
}


getGallery();

if(galleryHeadline.typeOf == undefined){
  galleryHeadline.innerHTML="Placeholder"
}
