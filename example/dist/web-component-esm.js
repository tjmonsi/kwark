let e=0;const t=new Promise(e=>e(!0)),i=(t=>{let i=t.__mixinApplications;i||(i=new WeakMap,t.__mixinApplications=i);let n=e++;return function(e){let s=e.__mixinSet;if(s&&s[n])return e;let r=i,o=r.get(e);o||(o=t(e),r.set(e,o));let l=Object.create(o.__mixinSet||s||null);return l[n]=!0,o.__mixinSet=l,o}})(e=>{return class extends e{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=t,this._changedProperties=new Map(null),this._reflectingProperties=void 0}}}),{customElements:n,HTMLElement:s}=window;class r extends(i(s)){static get is(){return"web-component"}static get properties(){return{prop1:{type:String}}}}console.log(r.is),n.define(r.is,r);