const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},r={},o={},n=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${n}--\x3e`,p=new RegExp(`${n}|${a}`),h="$lit$";class d{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let o=0,a=-1,d=0;const{strings:l,values:{length:m}}=t;for(;d<m;){const t=r.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)c(e[t].name,h)&&i++;for(;i-- >0;){const e=l[d],s=_.exec(e)[2],i=s.toLowerCase()+h,r=t.getAttribute(i);t.removeAttribute(i);const o=r.split(p);this.parts.push({type:"attribute",index:a,name:s,strings:o}),d+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const i=t.parentNode,r=e.split(p),o=r.length-1;for(let e=0;e<o;e++){let s,o=r[e];if(""===o)s=u();else{const t=_.exec(o);null!==t&&c(t[2],h)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-h.length)+t[3]),s=document.createTextNode(o)}i.insertBefore(s,t),this.parts.push({type:"node",index:++a})}""===r[o]?(i.insertBefore(u(),t),s.push(t)):t.data=r[o],d+=o}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&a!==o||(a++,e.insertBefore(u(),t)),o=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(s.push(t),a--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),d++}}else r.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},l=t=>-1!==t.index,u=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class m{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,n=0,a=0,p=r.nextNode();for(;n<i.length;)if(o=i[n],l(o)){for(;a<o.index;)a++,"TEMPLATE"===p.nodeName&&(e.push(p),r.currentNode=p.content),null===(p=r.nextNode())&&(r.currentNode=e.pop(),p=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(p.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(p,o.name,o.strings,this.options));n++}else this.__parts.push(void 0),n++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}class f{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const o=_.exec(t);e+=null===o?t+(s?n:a):t.substr(0,o.index)+o[1]+o[2]+h+o[3]+n}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const g=t=>null===t||!("object"==typeof t||"function"==typeof t),y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u())}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(g(t)?t!==this.value&&this.__commitText(t):t instanceof f?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):y(t)?this.__commitIterable(t):t===o?(this.value=o,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===e)this.value.update(t.values);else{const s=new m(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)void 0===(s=e[i])&&(s=new P(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}let v=!1;try{const t={get capture(){return v=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}function b(t){let e=S.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},S.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(n);return void 0===(s=e.keyString.get(i))&&(s=new d(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const S=new Map,w=new WeakMap,x=(t,e,s)=>{let r=w.get(e);void 0===r&&(i(e,e.firstChild),w.set(e,r=new P(Object.assign({templateFactory:b},s))),r.appendInto(e)),r.setValue(t),r.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1"),void 0===window.ShadyCSS||void 0===window.ShadyCSS.prepareTemplateDom&&console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),window.JSCompiler_renameProperty=(t,e)=>t;const N={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},C=(t,e)=>e!==t&&(e==e||t==t),A={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:C},T=Promise.resolve(!0),O=1,E=4,M=8,U=16,V=32;class k extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=T,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=A){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=C){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||N,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||N.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|V,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=A){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|M,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~M}}_attributeToProperty(t,e){if(this._updateState&M)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||A;this._updateState=this._updateState|U,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~U}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||A;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&U||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|E;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&V}get _hasRequestedUpdate(){return this._updateState&E}get hasUpdated(){return this._updateState&O}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&O||(this._updateState=this._updateState|O,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~E}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}k.finalized=!0;"adoptedStyleSheets"in Document.prototype&&CSSStyleSheet.prototype;(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");class j extends k{update(t){super.update(t);const e=this.render()||null;e&&e instanceof f&&x(e,this)}render(){}}export{j as KwarkElement};
