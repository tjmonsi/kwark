/* eslint-disable no-unused-expressions */
import { fixture, defineCE, html, unsafeStatic } from '@open-wc/testing-helpers';
import sinon from 'sinon';
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
      },
      prop4: {
        type: String
      },
      prop5: {
        type: String,
        notify: true
      },
      prop6: {
        type: String,
        observer: 'prop6Fn'
      },
      prop7: {
        type: Boolean
      },
      prop8: {
        type: Boolean,
        reflect: true
      },
      prop9: {
        type: Boolean,
        reflect: true,
        notify: true,
        observer: 'prop9Fn'
      },
      thisProp: {
        type: String,
        reflect: true
      }
    };
  }

  prop6Fn (x) {}

  prop9Fn (x) {}
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

  it('should have property into true if attribute is present', async () => {
    const tagName = unsafeStatic(tag);
    const el = await fixture(html`<${tagName} prop7></${tagName}>`);
    await Promise.resolve();
    expect(el.prop7).to.be.true;
  });

  it('should have the prop value reflected to attribute', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    el.prop3 = 'str2';
    await Promise.resolve();
    expect(el.hasAttribute('prop3')).to.be.true;
    expect(el.getAttribute('prop3')).to.be.equal(el.prop3);
  });

  it('should have the prop value of type true reflected to attribute', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    el.prop8 = true;
    await Promise.resolve();
    expect(el.hasAttribute('prop8')).to.be.true;
  });

  it('should have the prop value not reflect to attribute when no reflect flag is turned on', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    el.prop4 = 'str3';
    await Promise.resolve();
    expect(el.hasAttribute('prop4')).to.be.false;
    expect(el.getAttribute('prop4')).to.be.equal(null);
  });

  it('should dispatch event with value when notify is set to true', (done) => {
    fixture(`<${tag}></${tag}>`).then(el => {
      el.addEventListener('prop5-change', ({ detail: value }) => {
        expect(value).to.be.equal(el.prop5);
        done();
      });
      el.prop5 = 'str4';
    });
  });

  it('should call the observer', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    const spy = sinon.spy(el, 'prop6Fn');
    el.prop6 = 'str3';
    await Promise.resolve();
    expect(spy.calledOnce).to.be.true;
  });

  it('should be able to notify, reflect, and observe', (done) => {
    fixture(`<${tag}></${tag}>`).then(el => {
      const spy = sinon.spy(el, 'prop9Fn');
      el.addEventListener('prop9-change', ({ detail: value }) => {
        expect(value).to.be.equal(el.prop9);
        done();
      });
      el.prop9 = 'str4';
      return Promise.resolve({ el, spy });
    }).then(({ el, spy }) => {
      expect(spy.calledOnce).to.be.true;
      expect(el.getAttribute('prop9')).to.be.equal(el.prop9);
    });
  });

  it('should turn the camelcase property to dash attribute', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    el.thisProp = 'str3';
    await Promise.resolve();
    expect(el.getAttribute('this-prop')).to.be.equal(el.thisProp);
  });

  it('should turn the dash attribute to camelcase', async () => {
    const el = await fixture(`<${tag}></${tag}>`);
    el.setAttribute('this-prop', 'str5');
    await Promise.resolve();
    expect(el.getAttribute('this-prop')).to.be.equal(el.thisProp);
  });
});
