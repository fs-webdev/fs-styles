import fsStyles from './fs-styles.js';

// set up global styles
const d = document.createElement('div');
d.innerHTML = fsStyles;
document.head.appendChild(d.querySelector('style'));
