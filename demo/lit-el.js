import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {unsafeHTML} from 'lit-html/lib/unsafe-html.js';
import fsStyles from '../fs-styles.js';


class LitEl extends LitElement {
  _render() {
    return html`
      ${unsafeHTML(fsStyles)}
      <h3>Lit Element</h3>
      <p>This is a lit element with fs-styles inside it's shadow dom.</p>
    `;
  }
}

window.customElements.define('lit-el', LitEl);
