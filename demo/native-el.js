import fsStyles from '../fs-styles.js';


class NativeEl extends HTMLElement {
  connectedCallback(){
    this.attachShadow({mode: 'open'});
    this._render();
  }
  _render() {

    this.shadowRoot.innerHTML = `
      ${fsStyles}
      <h3>Native Element</h3>
      <p>This is a native element with fs-styles inside it's shadow dom.</p>
    `
  }
}

window.customElements.define('native-el', NativeEl);
