const merchSection = document.querySelector(".merch-items");
const merchURL = `http://localhost:8080`

async function getMerch(){
    const resp = await fetch(merchURL + "/merch")
    const respData = await resp.json();

    return respData;
    
}

createMerchItem()

async function createMerchItem(){
    const respData = await getMerch();


    for(let i = 0; i < respData.length; i++){
        const item = document.createElement("div");
    item.classList.add("merch-card");

    const id = document.createElement("h5");
    id.classList.add("item-id");
    id.innerHTML = respData[i].merchId;

    const headline = document.createElement("h3");
    headline.classList.add("item-headline");
    headline.innerHTML = respData[i].headline;

    const image = document.createElement("img");
    image.classList.add("item-image");
    image.src = "/images/Ahlberg.jpeg";

    const description = document.createElement("p");
    description.classList.add("item-description");
    description.innerHTML = respData[i].description;

    const itemBtn = document.createElement("button");
    itemBtn.classList.add("item-btn");
    itemBtn.classList.add("btn");
    itemBtn.classList.add("btn-secondary");
    itemBtn.innerHTML = "Add to cart";


    item.appendChild(id);
    item.appendChild(headline);
    item.appendChild(image);
    item.appendChild(description);
    item.appendChild(itemBtn);
    merchSection.appendChild(item);
    }
    
}
