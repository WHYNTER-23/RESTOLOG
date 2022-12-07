class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<footer>
			<p>&copy;  2022 Restolog | Restolog adalah merek milik PT Technomega, perusahaan induk dari PT Sirius International.</p>
		</footer>`;
  }
}
customElements.define('footer-bar', FooterBar);
