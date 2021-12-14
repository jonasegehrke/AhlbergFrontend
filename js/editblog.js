const apiURL = `http://localhost:8080`;

const blogHeadline = document.querySelector(".blog-headline");
const blogDescription = document.querySelector(".blog-description");
const blogContent = document.querySelector(".blog-content");
const blogFormButton = document.querySelector(".blog-form-button");
const deleteblog = document.querySelector(".delete-blog-button");
const deleteblogInput = document.querySelector(".delete-blog-input");

let blogs = [];

async function getBlogs() {
  const resp = await fetch(apiURL + "/blog");
  const respData = await resp.json();

  blogs = respData;
  console.log(blogs);
}

async function newBlog(data) {
  await fetch(apiURL + "/blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
  })
}

blogFormButton.addEventListener('click', (e)=> {
  e.preventDefault();

  const data = {
    blogHeadline: blogHeadline.value,
    blogDescription: blogDescription.value,
    blogContent: blogContent.value
  }
  
  newBlog(data);

  blogDescription.value = "";
  blogHeadline.value = "";
  blogContent.value = "";
})

getBlogs();

function deleteBlog(headline){
  blogs.forEach(async (blog) => {
    if(blog.blogHeadline === headline) {
      await fetch(apiURL + "/blog/" + blog.blogId, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
    }
  })
}

deleteblog.addEventListener('click', () => {
  deleteBlog(deleteblogInput.value);
})