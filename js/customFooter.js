class CustomFooter extends HTMLElement {
  connectedCallback() {

    fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    this.innerHTML = data;
  });
  }
}

customElements.define('custom-footer', CustomFooter);