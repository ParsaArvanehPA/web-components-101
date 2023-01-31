const defaultSrc = 'assets/default.png';

class PopUpInfo extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'

        // Create (nested) span elements
        const wrapper = document.createElement('span');
        wrapper.classList.add('wrapper');

        wrapper.innerHTML = `
            <span class="icon" tabindex="0">
                <img src=${this.hasAttribute('img') ? this.getAttribute('img') : defaultSrc}
                     alt=${this.hasAttribute('alt') ? this.getAttribute('alt') : ''} />
                     
                <span class="info">${this.getAttribute('data-text')}</span>
            </span>
        `;

        // Create some CSS to apply to the shadow DOM
        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                 /* styles go here */
            }
        `;

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'style.css');

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(style, wrapper);
        this.shadowRoot.appendChild(linkElem);
    }
}

customElements.define('popup-info', PopUpInfo);
