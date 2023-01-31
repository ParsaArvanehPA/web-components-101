customElements.define(
    'my-paragraph-just-template',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('my-paragraph-just-template');
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
);

customElements.define(
    'my-paragraph-with-slots',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('my-paragraph-with-slots');
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
);
