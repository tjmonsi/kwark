// Copied from https://github.com/Polymer/polymer/blob/__auto_generated_3.0_preview/lib/utils/mixin.js

// unique global id for deduping mixins.
/** @type {number} */
let dedupeId = 0;

/**
 * @constructor
 */
function MixinFunction () { }

/** @type {(WeakMap<function, function> | undefined)} */
MixinFunction.prototype.__mixinApplications = undefined;

/** @type {(Object | undefined)} */
MixinFunction.prototype.__mixinSet = undefined;

/**
 * @type {Function}
 * @param {!MixinFunction} [mixin]
 * @return {Function}
 */
export const dedupingMixin = (mixin) => {
  // @ts-ignore
  let mixinApplications = mixin.__mixinApplications;
  if (!mixinApplications) {
    mixinApplications = new WeakMap();
    // @ts-ignore
    mixin.__mixinApplications = mixinApplications;
  }
  // maintain a unique id for each mixin
  let mixinDedupeId = dedupeId++;

  /**
   * @param {!MixinFunction} base
   * @return {MixinFunction}
   */
  function dedupingMixin (base) {
    /** @type {(Object | undefined)} */
    let baseSet = base.__mixinSet;
    if (baseSet && baseSet[mixinDedupeId]) {
      return base;
    }

    let map = mixinApplications;

    /** @type {MixinFunction} */
    // @ts-ignore
    let extended = map.get(base);
    if (!extended) {
      // @ts-ignore
      extended = mixin(base);
      // @ts-ignore
      map.set(base, extended);
    }
    // copy inherited mixin set from the extended class, or the base class
    // NOTE: we avoid use of Set here because some browser (IE11)
    // cannot extend a base Set via the constructor.

    /** @type {(Object | undefined)} */
    let mixinSet = Object.create(extended.__mixinSet || baseSet || null);
    mixinSet[mixinDedupeId] = true;

    /** @type {!MixinFunction} */
    extended.__mixinSet = mixinSet;
    return extended;
  }

  /** @type {KwarkElement} */
  return dedupingMixin;
};
