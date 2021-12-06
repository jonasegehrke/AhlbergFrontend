class CustomMobileHeader extends HTMLElement {
  connectedCallback() {

    fetch("../mobileHeader.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    this.innerHTML = data;
    var burger = document.createElement('script');
    burger.setAttribute('src', '../js/burger.js')
    this.appendChild(burger)
  });
  }
}

customElements.define('custom-mobile-header', CustomMobileHeader);