const editMerchHeadline = document.querySelector(".merch-headline");
const merchSaveBtn = document.querySelector(".merch-save-btn");
const editMerchURL = `http://localhost:8080`;

//get
async function getMerchPage() {
    const resp = await fetch(editMerchURL + "/merchPage");
    const respData = await resp.json();
    addToMerchPage(respData);
}

//put
async function putMerch(data) {

    await fetch(editMerchURL + "/merchPage", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}

//innerhtml
function addToMerchPage(respData) {
    editMerchHeadline.innerHTML = respData[0].headline;
}

if (merchSaveBtn) {
    merchSaveBtn.addEventListener('click', () => {
        const data = {
            merchPageId: 1,
            headline: editMerchHeadline.textContent
        }

        console.log(data)
        if (data) {
            putMerch(data)
        }
    })
}

getMerchPage();

if (editMerchHeadline.typeOf === undefined) {
    editMerchHeadline.innerHTML = "Placeholder"
}