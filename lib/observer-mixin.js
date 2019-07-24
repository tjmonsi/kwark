// eslint-disable-next-line no-unused-vars
import { KwarkElement } from './kwark-element';
import { dedupingMixin } from './deduping-mixin';

/**
 * @typedef {Object} T
 * @property {Map<string, array>} _classObservers
 */

/**
 * @typedef {Object} Decorator
 * @property {string} kind
 * @property {string} key
 * @property {function} finisher
 */

/**
 *
 * @param {string} fname
 * @returns {function}
 */
export function observer (fname) {
  /**
   *
   * @param {Decorator} element
   * @returns {Decorator}
   */
  function observer (element) {
    if (element.kind === 'field') {
      return {
        ...element,
        finisher (/** @type {T} */clazz) {
          if (!clazz.hasOwnProperty('_classObservers')) {
            clazz._classObservers = clazz._classObservers || new Map();
          }

          const fxs = clazz._classObservers.get(element.key) || [];

          clazz._classObservers.set(element.key, [ ...fxs, fname ]);
        }
      };
    }
    return element;
  }

  return observer;
}

/**
 * Adds Observer functions
 *
 * @param {function(new:KwarkElement)} element
 * @return {function(new:KwarkElement)}
 */
export const ObserverMixin = dedupingMixin((/** @type {function(new:KwarkElement)} */ base) => {
  class Element extends base {
    constructor () {
      super();
      this._initializeObservers();
    }

    _initializeObservers () {
      this._observersMap = new Map(null);
      // @ts-ignore
      const observers = this.constructor.observers || [];

      for (const observer of observers) {
        const fnArgs = observer.split('(');
        const fn = fnArgs[0].trim();
        const args = fnArgs[1]
          .trim()
          .replace(/\)$/g, '')
          .split(',')
          .map((/** @type {string} */arg) => arg.trim());
        this._observersMap.set(fn, args);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     *
     * @param {Map<String, Object>} changedProperties Map of changed properties with old values
     */
    update (changedProperties) {
      super.update(changedProperties);
      /** @type {Map<string, array>} */
      // @ts-ignore
      const _classObservers = /** @type {function(new:Element)} */(this.constructor)._classObservers;
      if (_classObservers) {
        changedProperties.forEach((value, /** @type {string} */key) => {
          if (value !== /** @type {any} */(this)[key]) {
            const fxns = _classObservers.get(key);
            if (fxns && fxns.length > 0) {
              for (const fn of fxns) {
                /** @type {any} */(this)[fn](
                  /** @type {any} */(this)[key]
                );
              }
            }
          }
        });
      }

      if (this._observersMap !== undefined && this._observersMap.size > 0) {
        for (const [fn, args] of this._observersMap) {
          let callFn = false;
          const newArgs = [];
          for (const arg of args) {
            newArgs.push(/** @type {any} */(this)[arg]);
            if (changedProperties.has(arg) || changedProperties.has(arg)) {
              callFn = true;
            }
          }
          if (callFn) {
            /** @type {any} */(this)[fn](...newArgs);
          }
        }
      }
    }
  }

  return Element;
});
