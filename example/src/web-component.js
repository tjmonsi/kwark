import { KwarkElement } from '../../index';
import { ObserverMixin, observer } from '../../lib/observer-mixin';
import { html } from 'lit-html';
import { property, customElement } from 'lit-element';

@customElement('web-component')
// eslint-disable-next-line no-unused-vars
class WebComponent extends /** @type {function(new:KwarkElement)} */(ObserverMixin(KwarkElement)) {
  @property()
  prop1 = null;

  @property({ type: 'String' })
  @observer('fn2')
  prop2 = null;

  static observers = [
    'fn1(prop1, prop2)'
  ]

  render () {
    return html`Hello ${this.prop1} world`;
  }

  fn2 (prop2) {
    console.log('prop2', prop2);
  }

  fn1 (prop1, prop2) {
    console.log(prop1, prop2);
  }
}
