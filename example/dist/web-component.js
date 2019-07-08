!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=function(t,e){return t(e={exports:{}},e.exports),e.exports}(function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n=p;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===l){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=l,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=c(t,e,r);if("normal"===s.type){if(n=r.done?l:h,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=l,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",h="suspendedYield",f="executing",l="completed",y={};function v(){}function d(){}function _(){}var g={};g[i]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(L([])));b&&b!==r&&n.call(b,i)&&(g=b);var w=_.prototype=v.prototype=Object.create(g);function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,a){var u=c(t[r],t,o);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?Promise.resolve(p.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(p).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(u.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return d.prototype=w.constructor=_,_.constructor=d,_[u]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},P(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o){var i=new k(s(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},P(w),w[u]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}),h=(p.regenerator,0),f={},l=/([A-Z])/g;function y(t){return f[t]||(f[t]=t.replace(l,"-$1").toLowerCase())}var v=Promise.resolve(!0),d={toAttribute:function(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},_=function(t,e){return e!==t&&(e==e||t==t)},g={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:_},m=function(t){var e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);var r=h++;function n(n){var o=n.__mixinSet;if(o&&o[r])return n;var i=e,a=i.get(n);a||(a=t(n),i.set(n,a));var u=Object.create(a.__mixinSet||o||null);return u[r]=!0,a.__mixinSet=u,a}return n}(function(n){return function(u){function h(){var t;return r(this,h),(t=s(this,a(h).call(this)))._updateState=0,t._instanceProperties=void 0,t._updatePromise=v,t._hasConnectedResolver=void 0,t._changedProperties=new Map,t._reflectingProperties=void 0,t.initialize(),t}return i(h,n),o(h,null,[{key:"finalize",value:function(){if(this.hasOwnProperty("finalized")&&this.finalized)return null;var t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty("properties")){var e=this.properties,r=[].concat(c(Object.getOwnPropertyNames(e)),c("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[])),n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var s=a.value;this.createProperty(s,e[s])}}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}}}},{key:"_ensureClassProperties",value:function(){var t=this;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;var e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(function(e,r){return t._classProperties.set(r,e)})}}},{key:"createProperty",value:function(e,r){if(this._ensureClassProperties(),this._classProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===t(e)?Symbol(e):"__".concat(e);Object.defineProperty(this.prototype,e,{get:function(){return this[n]},set:function(t){var r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}}},{key:"_attributeNameForProperty",value:function(t,e){var r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?y(t):void 0}},{key:"_valueHasChanged",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_;return r(t,e)}},{key:"_propertyValueFromAttribute",value:function(t,e){var r=e.type,n=e.converter||d,o="function"==typeof n?n:n.fromAttribute;return o?o(t,r):t}},{key:"_propertyValueToAttribute",value:function(t,e){if(void 0!==e.reflect){var r=e.type,n=e.converter;return(n&&n.toAttribute||d.toAttribute)(t,r)}}},{key:"observedAttributes",get:function(){var t=this;this.finalize();var e=[];return this._classProperties.forEach(function(r,n){var o=t._attributeNameForProperty(n,r);void 0!==o&&(t._attributeToPropertyMap.set(o,n),e.push(o))}),e}}]),o(h,[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var t=this;this.constructor._classProperties.forEach(function(e,r){if(t.hasOwnProperty(r)){var n=t[r];delete t[r],t._instanceProperties||(t._instanceProperties=new Map),t._instanceProperties.set(r,n)}})}},{key:"_applyInstanceProperties",value:function(){var t=this;this._instanceProperties.forEach(function(e,r){t[r]=e}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"_propertyNotify",value:function(t,e){var r;this.dispatchEvent(new window.CustomEvent("".concat(y(-1===(r=t).indexOf(".")?r:r.slice(0,r.indexOf("."))),"-change"),{detail:e}))}},{key:"attributeChangedCallback",value:function(t,e,r){e!==r&&this._attributeToProperty(t,r)}},{key:"_propertyToAttribute",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g,n=this.constructor,o=n._attributeNameForProperty(t,r);if(void 0!==o){var i=n._propertyValueToAttribute(e,r);if(void 0===i)return;this._updateState=8|this._updateState,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(t,e){if(!(8&this._updateState)){var r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){var o=r._classProperties.get(n)||g;this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(e,o),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(t,e){var r=!0;if(void 0!==t){var n=this.constructor,o=n._classProperties.get(t)||g;n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(t,e){return this._requestUpdate(t,e),this.updateComplete}},{key:"_enqueueUpdate",value:function(){var t,r=(t=p.mark(function t(){var e,r,n,o,i=this;return p.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._updateState=4|this._updateState,n=this._updatePromise,this._updatePromise=new Promise(function(t,n){e=t,r=n}),t.prev=3,t.next=6,n;case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(3);case 10:if(this._hasConnected){t.next=13;break}return t.next=13,new Promise(function(t){i._hasConnectedResolver=t});case 13:if(t.prev=13,null==(o=this.performUpdate())){t.next=18;break}return t.next=18,o;case 18:t.next=23;break;case 20:t.prev=20,t.t1=t.catch(13),r(t.t1);case 23:e(!this._hasRequestedUpdate);case 24:case"end":return t.stop()}},t,this,[[3,8],[13,20]])}),function(){var r=this,n=arguments;return new Promise(function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,s,"next",t)}function s(t){e(a,o,i,u,s,"throw",t)}u(void 0)})});return function(){return r.apply(this,arguments)}}()},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var t=!1,e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(t,r){return e._propertyToAttribute(r,e[r],t)}),this._reflectingProperties=void 0)}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._updatePromise}}]),h}()}),b=window,w=b.customElements,P=b.HTMLElement,k=function(t){function e(){return r(this,e),s(this,a(e).apply(this,arguments))}return i(e,m(P)),o(e,null,[{key:"is",get:function(){return"web-component"}},{key:"properties",get:function(){return{prop1:{type:String}}}}]),e}();console.log(k.is),w.define(k.is,k)}();
