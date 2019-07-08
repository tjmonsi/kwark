/* eslint-disable no-unused-expressions */
import { fixture, defineCE } from '@open-wc/testing-helpers';
import { expect } from '@open-wc/testing';
import { PropertiesMixin } from '../mixins/properties-mixin';
const { HTMLElement } = window;

class Component extends PropertiesMixin(HTMLElement) {
  static get properties () {
    return {
      prop1: {
        type: String
      },
      prop2: {
        type: Number,
        value: 1
      }
    };
  }
}

describe('Properties Mixin', () => {
  let tag;
  before(() => {
    tag = defineCE(Component);
  });

  it('should have a property called "prop1"', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    expect('prop1' in el).to.be.true;
  });

  it('should have a default value', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    await Promise.resolve();
    expect(el.prop2).to.be.equal(1);
  });

  // it('false values will have a light-dom of <p>NOPE</p>', async () => {
  //   const el = await fixture('<get-result></get-result>');
  //   expect(el).dom.to.equal('<get-result><p>NOPE</p></get-result>');
  // });

  // it('true values will have a light-dom of <p>YEAH</p>', async () => {
  //   const foo = 1;
  //   const el = await fixture(html`<get-result .success=${foo === 1}></get-result>`);
  //   expect(el.success).to.be.true;
  //   expect(el).dom.to.equal('<get-result><p>YEAH</p></get-result>');
  // });
});
