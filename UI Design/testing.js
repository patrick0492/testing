class specialHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <p style="display: flex; justify-content: space-around; background-color: #eee; padding: 10px;">
        <a href="testing01.html">Main</a>
        <a href="testing02.html">About</a>
      </p>
    `
  }
}
class specialFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <p style="display: flex; justify-content: space-around; background-color: #eee; padding: 10px;">
        This is my first html template element.
      </p>
    `
  }
}
customElements.define('special-header', specialHeader)
customElements.define('special-footer', specialFooter)