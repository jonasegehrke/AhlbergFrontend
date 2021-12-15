const apiURL = `http://localhost:8080`;

const blogSectionInfo = document.querySelector(".blog_section_info");


async function getBlogs() {
  const resp = await fetch(apiURL + "/blog");
  const respData = await resp.json();

  renderBlogs(respData);
}


function renderBlogs(data) {

  data.forEach((blog) => {

    let card = document.createElement("div");
    let cardHeadline = document.createElement("h2");
    let cardDescription = document.createElement("h3");
    let cardContent = document.createElement("p");

    blogSectionInfo.appendChild(card);
    card.classList.add("blog-card");

    card.appendChild(cardHeadline);
    cardHeadline.classList.add("blog-card-headline");
    cardHeadline.innerHTML = blog.blogHeadline;

    card.appendChild(cardDescription);
    cardDescription.classList.add("blog-card-description");
    cardDescription.innerHTML = blog.blogDescription;

    card.appendChild(cardContent);
    cardContent.classList.add("blog-card-content");
    cardContent.innerHTML = blog.blogContent;

  })

}

getBlogs();