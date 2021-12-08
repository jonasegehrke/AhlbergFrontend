const apiURL = `http://localhost:8080`;
const listenHeadline = document.querySelector(".listen_headline");
const listenDescription = document.querySelector(".album_name");
const listenSaveBtn = document.querySelector(".listen-save-btn");

//get
async function getListen() {
    const resp = await fetch(apiURL + "/listen");
    const respData = await resp.json();

    addToListenPage(respData);
}

//put
async function putListen(data) {

    await fetch(apiURL + "/listen", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })


}

//innerhtml
function addToListenPage(respData) {
    listenHeadline.innerHTML = respData[0].listenHeadline;
    listenDescription.innerHTML = respData[0].listenDescription;
}

if(listenSaveBtn){
    listenSaveBtn.addEventListener('click', () => {
        const data = {
            listenId: 1,
            listenHeadline: listenHeadline.textContent,
            listenDescription: listenDescription.textContent
        }
    
        console.log(data)
        if(data){
            putListen(data)
        }
    })
    }


getListen();

if(listenHeadline.typeOf === undefined){
    listenHeadline.innerHTML="Placeholder"
}

if(listenDescription.typeOf === undefined){
    listenDescription.innerHTML="Placeholder"
}