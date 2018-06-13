import fsStyles from '../fs-styles.js';
import HyperHTMLElement from 'hyperhtml-element/esm/index.js';


class HyperEl extends HyperHTMLElement {
  connectedCallback(){
    this.attachShadow({mode: 'open'});
    this.render();
  }
  render() {
   return this.html`
     ${{html: fsStyles}}
     <h3>Hyper Element</h3>
     <p>This is a hyper element with fs-styles in it's shadow dom.</p>
   `;
 }
}

window.customElements.define('hyper-el', HyperEl);
