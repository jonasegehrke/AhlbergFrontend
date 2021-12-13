const merchSection = document.querySelector(".merch-items");




function createMerchItem(){
    const item = document.createElement("div");
    item.classList.add("merch-card");

    const headline = document.createElement("h3");
    headline.classList.add("item-headline");
    headline.innerHTML = "HEADLINE";

    const image = document.createElement("img");
    image.classList.add("item-image");
    image.src = "/images/Ahlberg.jpeg";

    const description = document.createElement("p");
    description.classList.add("item-description");
    description.innerHTML = "DESCRIPTION";

    const itemBtn = document.createElement("button");
    itemBtn.classList.add("item-btn");
    itemBtn.classList.add("btn");
    itemBtn.classList.add("btn-secondary");
    itemBtn.innerHTML = "Add to cart";


    item.appendChild(headline);
    item.appendChild(image);
    item.appendChild(description);
    item.appendChild(itemBtn);
    merchSection.appendChild(item);
}
createMerchItem();
createMerchItem();
createMerchItem();
createMerchItem();
createMerchItem();
createMerchItem();
createMerchItem();
createMerchItem();
createMerchItem();
createMerchItem();