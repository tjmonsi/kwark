/// <reference path="../typings-project/global.d.ts"/>
'use strict';

import { dedupingMixin } from '../lib/deduping-mixin.js';

const microtaskPromise = new Promise(resolve => resolve(true));

// const STATE_HAS_UPDATED = 1;
// const STATE_UPDATE_REQUESTED = 1 << 2;
// const STATE_IS_REFLECTING = 1 << 3;

// const notEqual = (value, old) => {
//   // This ensures (old==NaN, value==NaN) always returns false
//   return old !== value && (old === old || value === value); // eslint-disable-line no-self-compare
// };

// // const defaultPropertyDeclaration = {
// //   attribute: true,
// //   type: String,
// //   reflect: false,
// //   notify: false, // added
// //   hasChanged: notEqual
// // };

export const PropertiesMixin = dedupingMixin(base => {
  class Mixin extends /** @type {HTMLElement} */(base) {
    constructor () {
      super();

      this._updateState = 0;
      this._instanceProperties = undefined;
      this._updatePromise = microtaskPromise;

      /**
       * Map with keys for any properties that have changed since the last
       * update cycle with previous values.
       */
      this._changedProperties = new Map(null);
      /**
       * Map with keys of properties that should be reflected when updated.
       */
      this._reflectingProperties = undefined;
      // this.initialize();
    }
  }

  return Mixin;
});
