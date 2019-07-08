/* eslint-disable no-unused-expressions */
import { fixture, defineCE, html, unsafeStatic } from '@open-wc/testing-helpers';
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
      },
      prop3: {
        type: String,
        reflect: true
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
    expect(el.prop2).to.be.equal(1);
  });

  it('should have the attribute value equated to its property', async () => {
    const tagName = unsafeStatic(tag);
    const el = await fixture(html`<${tagName} prop1="str"></${tagName}>`);
    await Promise.resolve();
    expect(el.prop1).to.be.equal('str');
  });

  it('should have the prop value reflected to attribute', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    el.prop3 = 'str2';
    await Promise.resolve();
    expect(el.hasAttribute('prop3')).to.be.true;
    expect(el.getAttribute('prop3')).to.be.equal(el.prop3);
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
