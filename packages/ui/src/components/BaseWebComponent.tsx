class BaseComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    shadow.appendChild(wrapper);
  }

  static get observedAttributes() {
    return ['content'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'content' && this.shadowRoot) {
      const wrapper = this.shadowRoot.querySelector('.wrapper');
      if (wrapper) {
        wrapper.innerHTML = newValue || '';
      }
    }
  }
}

export default BaseComponent
