class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <ul>
          <li><a href=index.html>Home</a>
          <li><a href=listen.html>Listen</a>
          <li><a href=about.html>About</a>
          <li><a href=contact.html>Contact</a>
        <ul/>
      <nav/>
    `
  }
}

customElements.define('custom-header', CustomHeader);