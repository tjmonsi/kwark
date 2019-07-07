import { PropertiesMixin } from '../../mixins/properties-mixin';
const { customElements, HTMLElement } = window;

class WebComponent extends PropertiesMixin(HTMLElement) {
  static get is () {
    return 'web-component';
  }

  static get properties () {
    return {
      prop1: {
        type: String
      }
    };
  }
}

console.log(WebComponent.is);

customElements.define(WebComponent.is, WebComponent);
