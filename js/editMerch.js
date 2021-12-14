const apiURL = `http://localhost:8080`;
const headlineInput = document.querySelector(".headline-input");
const discriptionInput = document.querySelector(".discription-input");
const newMerchBtn = document.querySelector(".new-merch-btn");


async function newMerch(data) {
    await fetch(apiURL + "/merch", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}

async function deleteMerch(data, id) {
    await fetch(apiURL + "/merch" + "/" + id, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}

newMerchBtn.addEventListener('click', async(e) => {
    e.preventDefault();

    let item = {
        headline: headlineInput.value,
        discription: discriptionInput.value
    }

    if (item) {
        await newMerch(item)

        refresh();
    }
})



function addDeleteBtns() {
    const allCards = document.querySelectorAll(".merch-card");


    for (let i = 0; i < allCards.length; i++) {
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("merch-delete-btn");
        deleteBtn.classList.add("btn");
        deleteBtn.classList.add("btn-secondary");
        deleteBtn.innerHTML = "Delete";



        let item = {
            merchId: parseInt(allCards[i].childNodes[0].textContent),
            headline: allCards[i].childNodes[1].textContent,
            discription: allCards[i].childNodes[3].textContent
        }

        deleteBtn.addEventListener('click', async (e) => {
            e.preventDefault();

            console.log(item)
            if (item) {
                await deleteMerch(item, item.merchId);

                refresh();
            }
            console.log("hello")
        })

        allCards[i].appendChild(deleteBtn);

    }

}

async function refresh() {
    const merchSection = document.querySelector(".merch-items");
    merchSection.innerHTML = "";

    await createMerchItem();

    addDeleteBtns();

}




setTimeout(function () {
    addDeleteBtns();
}, 500)

