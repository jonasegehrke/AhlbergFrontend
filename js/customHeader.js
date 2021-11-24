class CustomHeader extends HTMLElement {
  connectedCallback() {

    fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    this.innerHTML = data;
  });
  }
}

customElements.define('custom-header', CustomHeader);