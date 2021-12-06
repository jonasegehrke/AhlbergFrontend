const apiURL = `http://localhost:8080`;
const contactHeadline = document.querySelector(".contact-headline");
const contactDescription = document.querySelector(".contact-description");
const contactEmail = document.querySelector(".email");
const contactSaveBtn = document.querySelector(".save-contact-btn");

//get
async function getContact() {
    const resp = await fetch(apiURL + "/contact");
    const respData = await resp.json();

    addToContactPage(respData);
}

//put
async function putContact(data) {

    await fetch(apiURL + "/contact", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })


}

//innerhtml
function addToContactPage(respData) {
    contactHeadline.innerHTML = respData[0].contactHeadline;
    contactDescription.innerHTML = respData[0].contactDescription;
    contactEmail.innerHTML = respData[0].email;
    contactEmail.href = "mailto:" + respData[0].email;
}

if(contactSaveBtn){
    contactSaveBtn.addEventListener('click', () => {
        const data = {
            contactId: 1,
            contactHeadline: contactHeadline.textContent,
            contactDescription: contactDescription.textContent,
            email: contactEmail.textContent
        }
    
        console.log(data)
        if(data){
            putContact(data)
        }
    })
    }

getContact();

if(contactHeadline.typeOf == undefined){
    contactHeadline.innerHTML="Placeholder"
}

if(contactDescription.typeOf== undefined){
    contactDescription.innerHTML="Placeholder"
}
if(contactEmail.typeOf== undefined){
    contactEmail.innerHTML="Placeholder"
}