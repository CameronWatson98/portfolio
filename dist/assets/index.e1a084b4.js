(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Nr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Bo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wo=Nr(Bo);function ki(e){return!!e||e===""}function Mr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?qo(r):Mr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(G(e))return e}}const Ko=/;(?![^(]*\))/g,Xo=/:(.+)/;function qo(e){const t={};return e.split(Ko).forEach(n=>{if(n){const r=n.split(Xo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Fr(e){let t="";if(re(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Fr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const K={},gt=[],we=()=>{},Vo=()=>!1,Jo=/^on[^a-z]/,Mn=e=>Jo.test(e),Rr=e=>e.startsWith("onUpdate:"),se=Object.assign,Lr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Go=Object.prototype.hasOwnProperty,U=(e,t)=>Go.call(e,t),L=Array.isArray,Ft=e=>Fn(e)==="[object Map]",Zo=e=>Fn(e)==="[object Set]",R=e=>typeof e=="function",re=e=>typeof e=="string",zr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Ai=e=>G(e)&&R(e.then)&&R(e.catch),Qo=Object.prototype.toString,Fn=e=>Qo.call(e),es=e=>Fn(e).slice(8,-1),ts=e=>Fn(e)==="[object Object]",jr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bn=Nr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ns=/-(\w)/g,Me=Rn(e=>e.replace(ns,(t,n)=>n?n.toUpperCase():"")),rs=/\B([A-Z])/g,kt=Rn(e=>e.replace(rs,"-$1").toLowerCase()),Ln=Rn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=Rn(e=>e?`on${Ln(e)}`:""),An=(e,t)=>!Object.is(e,t),Gn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},En=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},as=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ka;const is=()=>ka||(ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ce;class os{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ce&&(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ss(e,t=Ce){t&&t.active&&t.effects.push(e)}const Dr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ei=e=>(e.w&qe)>0,Oi=e=>(e.n&qe)>0,ls=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},fs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ei(a)&&!Oi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},or=new WeakMap;let St=0,qe=1;const sr=30;let be;const st=Symbol(""),lr=Symbol("");class Ur{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ss(this,r)}run(){if(!this.active)return this.fn();let t=be,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=be,be=this,Ke=!0,qe=1<<++St,St<=sr?ls(this):Aa(this),this.fn()}finally{St<=sr&&fs(this),qe=1<<--St,be=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){be===this?this.deferStop=!0:this.active&&(Aa(this),this.onStop&&this.onStop(),this.active=!1)}}function Aa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Ci=[];function At(){Ci.push(Ke),Ke=!1}function Et(){const e=Ci.pop();Ke=e===void 0?!0:e}function de(e,t,n){if(Ke&&be){let r=or.get(e);r||or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Dr()),Pi(a)}}function Pi(e,t){let n=!1;St<=sr?Oi(e)||(e.n|=qe,n=!Ei(e)):n=!e.has(be),n&&(e.add(be),be.deps.push(e))}function ze(e,t,n,r,a,i){const o=or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?jr(n)&&s.push(o.get("length")):(s.push(o.get(st)),Ft(e)&&s.push(o.get(lr)));break;case"delete":L(e)||(s.push(o.get(st)),Ft(e)&&s.push(o.get(lr)));break;case"set":Ft(e)&&s.push(o.get(st));break}if(s.length===1)s[0]&&fr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);fr(Dr(l))}}function fr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ea(r);for(const r of n)r.computed||Ea(r)}function Ea(e,t){(e!==be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const cs=Nr("__proto__,__v_isRef,__isVue"),Ii=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zr)),us=$r(),ds=$r(!1,!0),ms=$r(!0),Oa=ps();function ps(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){At();const r=H(this)[t].apply(this,n);return Et(),r}}),e}function $r(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ts:Fi:t?Mi:Ni).get(r))return r;const o=L(r);if(!e&&o&&U(Oa,a))return Reflect.get(Oa,a,i);const s=Reflect.get(r,a,i);return(zr(a)?Ii.has(a):cs(a))||(e||de(r,"get",a),t)?s:oe(s)?o&&jr(a)?s:s.value:G(s)?e?Ri(s):Br(s):s}}const hs=Ti(),gs=Ti(!0);function Ti(e=!1){return function(n,r,a,i){let o=n[r];if(Dt(o)&&oe(o)&&!oe(a))return!1;if(!e&&(!cr(a)&&!Dt(a)&&(o=H(o),a=H(a)),!L(n)&&oe(o)&&!oe(a)))return o.value=a,!0;const s=L(n)&&jr(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?An(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function vs(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function bs(e,t){const n=Reflect.has(e,t);return(!zr(t)||!Ii.has(t))&&de(e,"has",t),n}function ys(e){return de(e,"iterate",L(e)?"length":st),Reflect.ownKeys(e)}const Si={get:us,set:hs,deleteProperty:vs,has:bs,ownKeys:ys},xs={get:ms,set(e,t){return!0},deleteProperty(e,t){return!0}},ws=se({},Si,{get:ds,set:gs}),Hr=e=>e,zn=e=>Reflect.getPrototypeOf(e);function rn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=zn(a),s=r?Hr:n?Xr:Kr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function an(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function on(e,t=!1){return e=e.__v_raw,!t&&de(H(e),"iterate",st),Reflect.get(e,"size",e)}function Ca(e){e=H(e);const t=H(this);return zn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Pa(e,t){t=H(t);const n=H(this),{has:r,get:a}=zn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?An(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Ia(e){const t=H(this),{has:n,get:r}=zn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Ta(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Hr:e?Xr:Kr;return!e&&de(s,"iterate",st),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function ln(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=Ft(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Hr:t?Xr:Kr;return!t&&de(i,"iterate",l?lr:st),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function _s(){const e={get(i){return rn(this,i)},get size(){return on(this)},has:an,add:Ca,set:Pa,delete:Ia,clear:Ta,forEach:sn(!1,!1)},t={get(i){return rn(this,i,!1,!0)},get size(){return on(this)},has:an,add:Ca,set:Pa,delete:Ia,clear:Ta,forEach:sn(!1,!0)},n={get(i){return rn(this,i,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:sn(!0,!1)},r={get(i){return rn(this,i,!0,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ln(i,!1,!1),n[i]=ln(i,!0,!1),t[i]=ln(i,!1,!0),r[i]=ln(i,!0,!0)}),[e,n,t,r]}const[ks,As,Es,Os]=_s();function Yr(e,t){const n=t?e?Os:Es:e?As:ks;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Cs={get:Yr(!1,!1)},Ps={get:Yr(!1,!0)},Is={get:Yr(!0,!1)},Ni=new WeakMap,Mi=new WeakMap,Fi=new WeakMap,Ts=new WeakMap;function Ss(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ns(e){return e.__v_skip||!Object.isExtensible(e)?0:Ss(es(e))}function Br(e){return Dt(e)?e:Wr(e,!1,Si,Cs,Ni)}function Ms(e){return Wr(e,!1,ws,Ps,Mi)}function Ri(e){return Wr(e,!0,xs,Is,Fi)}function Wr(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ns(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function vt(e){return Dt(e)?vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function cr(e){return!!(e&&e.__v_isShallow)}function Li(e){return vt(e)||Dt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function zi(e){return En(e,"__v_skip",!0),e}const Kr=e=>G(e)?Br(e):e,Xr=e=>G(e)?Ri(e):e;function Fs(e){Ke&&be&&(e=H(e),Pi(e.dep||(e.dep=Dr())))}function Rs(e,t){e=H(e),e.dep&&fr(e.dep)}function oe(e){return!!(e&&e.__v_isRef===!0)}function Ls(e){return oe(e)?e.value:e}const zs={get:(e,t,n)=>Ls(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return oe(a)&&!oe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ji(e){return vt(e)?e:new Proxy(e,zs)}var Di;class js{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Di]=!1,this._dirty=!0,this.effect=new Ur(t,()=>{this._dirty||(this._dirty=!0,Rs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Fs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Di="__v_isReadonly";function Ds(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=we):(r=e.get,a=e.set),new js(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){jn(i,t,n)}return a}function _e(e,t,n,r){if(R(e)){const i=Xe(e,t,n,r);return i&&Ai(i)&&i.catch(o=>{jn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(_e(e[i],t,n,r));return a}function jn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}Us(e,n,a,r)}function Us(e,t,n,r=!0){console.error(e)}let Ut=!1,ur=!1;const ne=[];let Te=0;const bt=[];let Le=null,rt=0;const Ui=Promise.resolve();let qr=null;function $s(e){const t=qr||Ui;return e?t.then(this?e.bind(this):e):t}function Hs(e){let t=Te+1,n=ne.length;for(;t<n;){const r=t+n>>>1;$t(ne[r])<e?t=r+1:n=r}return t}function Vr(e){(!ne.length||!ne.includes(e,Ut&&e.allowRecurse?Te+1:Te))&&(e.id==null?ne.push(e):ne.splice(Hs(e.id),0,e),$i())}function $i(){!Ut&&!ur&&(ur=!0,qr=Ui.then(Yi))}function Ys(e){const t=ne.indexOf(e);t>Te&&ne.splice(t,1)}function Bs(e){L(e)?bt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?rt+1:rt))&&bt.push(e),$i()}function Sa(e,t=Ut?Te+1:0){for(;t<ne.length;t++){const n=ne[t];n&&n.pre&&(ne.splice(t,1),t--,n())}}function Hi(e){if(bt.length){const t=[...new Set(bt)];if(bt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>$t(n)-$t(r)),rt=0;rt<Le.length;rt++)Le[rt]();Le=null,rt=0}}const $t=e=>e.id==null?1/0:e.id,Ws=(e,t)=>{const n=$t(e)-$t(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Yi(e){ur=!1,Ut=!0,ne.sort(Ws);const t=we;try{for(Te=0;Te<ne.length;Te++){const n=ne[Te];n&&n.active!==!1&&Xe(n,null,14)}}finally{Te=0,ne.length=0,Hi(),Ut=!1,qr=null,(ne.length||bt.length)&&Yi()}}function Ks(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(as))}let s,l=r[s=Jn(t)]||r[s=Jn(Me(t))];!l&&i&&(l=r[s=Jn(kt(t))]),l&&_e(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,_e(u,e,6,a)}}function Bi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=Bi(u,t,!0);d&&(s=!0,se(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):se(o,i),G(e)&&r.set(e,o),o)}function Dn(e,t){return!e||!Mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,kt(t))||U(e,t))}let Se=null,Un=null;function On(e){const t=Se;return Se=e,Un=e&&e.type.__scopeId||null,t}function Xs(e){Un=e}function qs(){Un=null}function Vs(e,t=Se,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&$a(-1);const i=On(t),o=e(...a);return On(i),r._d&&$a(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Zn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:k,ctx:F,inheritAttrs:S}=e;let z,y;const O=On(e);try{if(n.shapeFlag&4){const j=a||r;z=Ie(d.call(j,j,m,i,k,v,F)),y=l}else{const j=t;z=Ie(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:Js(l)}}catch(j){Rt.length=0,jn(j,e,1),z=ce(Ht)}let M=z;if(y&&S!==!1){const j=Object.keys(y),{shapeFlag:Y}=M;j.length&&Y&7&&(o&&j.some(Rr)&&(y=Gs(y,o)),M=xt(M,y))}return n.dirs&&(M=xt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),z=M,On(O),z}const Js=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mn(n))&&((t||(t={}))[n]=e[n]);return t},Gs=(e,t)=>{const n={};for(const r in e)(!Rr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Na(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Dn(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Na(r,o,u):!0:!!o;return!1}function Na(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Dn(n,i))return!0}return!1}function Qs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const el=e=>e.__isSuspense;function tl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Bs(e)}function nl(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function Qn(e,t,n=!1){const r=ee||Se;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Ma={};function yn(e,t,n){return Wi(e,t,n)}function Wi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=ee;let l,u=!1,d=!1;if(oe(e)?(l=()=>e.value,u=cr(e)):vt(e)?(l=()=>e,r=!0):L(e)?(d=!0,u=e.some(y=>vt(y)||cr(y)),l=()=>e.map(y=>{if(oe(y))return y.value;if(vt(y))return mt(y);if(R(y))return Xe(y,s,2)})):R(e)?t?l=()=>Xe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),_e(e,s,3,[v])}:l=we,t&&r){const y=l;l=()=>mt(y())}let m,v=y=>{m=z.onStop=()=>{Xe(y,s,4)}};if(Bt)return v=we,t?n&&_e(t,s,3,[l(),d?[]:void 0,v]):l(),we;let k=d?[]:Ma;const F=()=>{if(!!z.active)if(t){const y=z.run();(r||u||(d?y.some((O,M)=>An(O,k[M])):An(y,k)))&&(m&&m(),_e(t,s,3,[y,k===Ma?void 0:k,v]),k=y)}else z.run()};F.allowRecurse=!!t;let S;a==="sync"?S=F:a==="post"?S=()=>fe(F,s&&s.suspense):(F.pre=!0,s&&(F.id=s.uid),S=()=>Vr(F));const z=new Ur(l,S);return t?n?F():k=z.run():a==="post"?fe(z.run.bind(z),s&&s.suspense):z.run(),()=>{z.stop(),s&&s.scope&&Lr(s.scope.effects,z)}}function rl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?Ki(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=ee;wt(this);const s=Wi(a,i.bind(r),n);return o?wt(o):lt(),s}function Ki(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function mt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),oe(e))mt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)mt(e[n],t);else if(Zo(e)||Ft(e))e.forEach(n=>{mt(n,t)});else if(ts(e))for(const n in e)mt(e[n],t);return e}function Ot(e){return R(e)?{setup:e,name:e.name}:e}const xn=e=>!!e.type.__asyncLoader,Xi=e=>e.type.__isKeepAlive;function al(e,t){qi(e,"a",t)}function il(e,t){qi(e,"da",t)}function qi(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if($n(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Xi(a.parent.vnode)&&ol(r,t,n,a),a=a.parent}}function ol(e,t,n,r){const a=$n(t,e,r,!0);Vi(()=>{Lr(r[t],a)},n)}function $n(e,t,n=ee,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;At(),wt(n);const s=_e(t,n,e,o);return lt(),Et(),s});return r?a.unshift(i):a.push(i),i}}const $e=e=>(t,n=ee)=>(!Bt||e==="sp")&&$n(e,(...r)=>t(...r),n),sl=$e("bm"),ll=$e("m"),fl=$e("bu"),cl=$e("u"),ul=$e("bum"),Vi=$e("um"),dl=$e("sp"),ml=$e("rtg"),pl=$e("rtc");function hl(e,t=ee){$n("ec",e,t)}function et(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(At(),_e(l,n,8,[e.el,s,e,t]),Et())}}const Ji="components";function gl(e,t){return bl(Ji,e,!0,t)||e}const vl=Symbol();function bl(e,t,n=!0,r=!1){const a=Se||ee;if(a){const i=a.type;if(e===Ji){const s=Vl(i,!1);if(s&&(s===t||s===Me(t)||s===Ln(Me(t))))return i}const o=Fa(a[e]||i[e],t)||Fa(a.appContext[e],t);return!o&&r?i:o}}function Fa(e,t){return e&&(e[t]||e[Me(t)]||e[Ln(Me(t))])}const dr=e=>e?oo(e)?na(e)||e.proxy:dr(e.parent):null,Cn=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>dr(e.parent),$root:e=>dr(e.root),$emit:e=>e.emit,$options:e=>Jr(e),$forceUpdate:e=>e.f||(e.f=()=>Vr(e.update)),$nextTick:e=>e.n||(e.n=$s.bind(e.proxy)),$watch:e=>rl.bind(e)}),yl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&U(r,t))return o[t]=1,r[t];if(a!==K&&U(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&U(u,t))return o[t]=3,i[t];if(n!==K&&U(n,t))return o[t]=4,n[t];mr&&(o[t]=0)}}const d=Cn[t];let m,v;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&U(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,U(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&U(a,t)?(a[t]=n,!0):r!==K&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&U(e,o)||t!==K&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Cn,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let mr=!0;function xl(e){const t=Jr(e),n=e.proxy,r=e.ctx;mr=!1,t.beforeCreate&&Ra(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:F,activated:S,deactivated:z,beforeDestroy:y,beforeUnmount:O,destroyed:M,unmounted:j,render:Y,renderTracked:le,renderTriggered:te,errorCaptured:ge,serverPrefetch:pe,expose:Fe,inheritAttrs:Pt,components:Qt,directives:en,filters:Xn}=t;if(u&&wl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const B=o[V];R(B)&&(r[V]=B.bind(n))}if(a){const V=a.call(n,n);G(V)&&(e.data=Br(V))}if(mr=!0,i)for(const V in i){const B=i[V],Ze=R(B)?B.bind(n,n):R(B.get)?B.get.bind(n,n):we,tn=!R(B)&&R(B.set)?B.set.bind(n):we,Qe=he({get:Ze,set:tn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Ae=>Qe.value=Ae})}if(s)for(const V in s)Gi(s[V],r,n,V);if(l){const V=R(l)?l.call(n):l;Reflect.ownKeys(V).forEach(B=>{nl(B,V[B])})}d&&Ra(d,e,"c");function ae(V,B){L(B)?B.forEach(Ze=>V(Ze.bind(n))):B&&V(B.bind(n))}if(ae(sl,m),ae(ll,v),ae(fl,k),ae(cl,F),ae(al,S),ae(il,z),ae(hl,ge),ae(pl,le),ae(ml,te),ae(ul,O),ae(Vi,j),ae(dl,pe),L(Fe))if(Fe.length){const V=e.exposed||(e.exposed={});Fe.forEach(B=>{Object.defineProperty(V,B,{get:()=>n[B],set:Ze=>n[B]=Ze})})}else e.exposed||(e.exposed={});Y&&e.render===we&&(e.render=Y),Pt!=null&&(e.inheritAttrs=Pt),Qt&&(e.components=Qt),en&&(e.directives=en)}function wl(e,t,n=we,r=!1){L(e)&&(e=pr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Qn(i.from||a,i.default,!0):o=Qn(i.from||a):o=Qn(i),oe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ra(e,t,n){_e(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gi(e,t,n,r){const a=r.includes(".")?Ki(n,r):()=>n[r];if(re(e)){const i=t[e];R(i)&&yn(a,i)}else if(R(e))yn(a,e.bind(n));else if(G(e))if(L(e))e.forEach(i=>Gi(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&yn(a,i,e)}}function Jr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Pn(l,u,o,!0)),Pn(l,t,o)),G(t)&&i.set(t,l),l}function Pn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Pn(e,i,n,!0),a&&a.forEach(o=>Pn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=_l[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const _l={data:La,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:nt,directives:nt,watch:Al,provide:La,inject:kl};function La(e,t){return t?e?function(){return se(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function kl(e,t){return nt(pr(e),pr(t))}function pr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?se(se(Object.create(null),e),t):t}function Al(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=ie(e[r],t[r]);return n}function El(e,t,n,r=!1){const a={},i={};En(i,Hn,1),e.propsDefaults=Object.create(null),Zi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ms(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ol(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Dn(e.emitsOptions,v))continue;const k=t[v];if(l)if(U(i,v))k!==i[v]&&(i[v]=k,u=!0);else{const F=Me(v);a[F]=hr(l,s,F,k,e,!1)}else k!==i[v]&&(i[v]=k,u=!0)}}}else{Zi(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!U(t,m)&&((d=kt(m))===m||!U(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=hr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m)&&!0)&&(delete i[m],u=!0)}u&&ze(e,"set","$attrs")}function Zi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(bn(l))continue;const u=t[l];let d;a&&U(a,d=Me(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Dn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=H(n),u=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=hr(a,l,m,u[m],e,!U(u,m))}}return o}function hr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(wt(a),r=u[n]=l.call(null,t),lt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===kt(n))&&(r=!0))}return r}function Qi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[v,k]=Qi(m,t,!0);se(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,gt),gt;if(L(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);za(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Me(d);if(za(m)){const v=i[d],k=o[m]=L(v)||R(v)?{type:v}:v;if(k){const F=Ua(Boolean,k.type),S=Ua(String,k.type);k[0]=F>-1,k[1]=S<0||F<S,(F>-1||U(k,"default"))&&s.push(m)}}}const u=[o,s];return G(e)&&r.set(e,u),u}function za(e){return e[0]!=="$"}function ja(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Da(e,t){return ja(e)===ja(t)}function Ua(e,t){return L(t)?t.findIndex(n=>Da(n,e)):R(t)&&Da(t,e)?0:-1}const eo=e=>e[0]==="_"||e==="$stable",Gr=e=>L(e)?e.map(Ie):[Ie(e)],Cl=(e,t,n)=>{if(t._n)return t;const r=Vs((...a)=>Gr(t(...a)),n);return r._c=!1,r},to=(e,t,n)=>{const r=e._ctx;for(const a in e){if(eo(a))continue;const i=e[a];if(R(i))t[a]=Cl(a,i,r);else if(i!=null){const o=Gr(i);t[a]=()=>o}}},no=(e,t)=>{const n=Gr(t);e.slots.default=()=>n},Pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),En(t,"_",n)):to(t,e.slots={})}else e.slots={},t&&no(e,t);En(e.slots,Hn,1)},Il=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(se(a,t),!n&&s===1&&delete a._):(i=!t.$stable,to(t,a)),o=t}else t&&(no(e,t),o={default:1});if(i)for(const s in a)!eo(s)&&!(s in o)&&delete a[s]};function ro(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tl=0;function Sl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=ro(),o=new Set;let s=!1;const l=i.app={_uid:Tl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Gl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=ce(r,a);return v.appContext=i,d&&t?t(v,u):e(v,u,m),s=!0,l._container=u,u.__vue_app__=l,na(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function gr(e,t,n,r,a=!1){if(L(e)){e.forEach((v,k)=>gr(v,t&&(L(t)?t[k]:t),n,r,a));return}if(xn(r)&&!a)return;const i=r.shapeFlag&4?na(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(re(u)?(d[u]=null,U(m,u)&&(m[u]=null)):oe(u)&&(u.value=null)),R(l))Xe(l,s,12,[o,d]);else{const v=re(l),k=oe(l);if(v||k){const F=()=>{if(e.f){const S=v?d[l]:l.value;a?L(S)&&Lr(S,i):L(S)?S.includes(i)||S.push(i):v?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,U(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,fe(F,n)):F()}}}const fe=tl;function Nl(e){return Ml(e)}function Ml(e,t){const n=is();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=we,insertStaticContent:F}=e,S=(f,c,p,g=null,h=null,w=null,A=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Tt(f,c)&&(g=nn(f),Ae(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:I,shapeFlag:C}=c;switch(b){case Zr:z(f,c,p,g);break;case Ht:y(f,c,p,g);break;case er:f==null&&O(c,p,g,A);break;case Pe:Qt(f,c,p,g,h,w,A,x,_);break;default:C&1?Y(f,c,p,g,h,w,A,x,_):C&6?en(f,c,p,g,h,w,A,x,_):(C&64||C&128)&&b.process(f,c,p,g,h,w,A,x,_,ut)}I!=null&&h&&gr(I,f&&f.ref,w,c||f,!c)},z=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},y=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},O=(f,c,p,g)=>{[f.el,f.anchor]=F(f.children,c,p,g,f.el,f.anchor)},M=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=v(f),r(f,p,g),f=h;r(c,p,g)},j=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=v(f),a(f),f=p;a(c)},Y=(f,c,p,g,h,w,A,x,_)=>{A=A||c.type==="svg",f==null?le(c,p,g,h,w,A,x,_):pe(f,c,h,w,A,x,_)},le=(f,c,p,g,h,w,A,x)=>{let _,b;const{type:I,props:C,shapeFlag:T,transition:N,dirs:D}=f;if(_=f.el=o(f.type,w,C&&C.is,C),T&8?d(_,f.children):T&16&&ge(f.children,_,null,g,h,w&&I!=="foreignObject",A,x),D&&et(f,null,g,"created"),C){for(const $ in C)$!=="value"&&!bn($)&&i(_,$,null,C[$],w,f.children,g,h,Re);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Oe(b,g,f)}te(_,f,f.scopeId,A,g),D&&et(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;W&&N.beforeEnter(_),r(_,c,p),((b=C&&C.onVnodeMounted)||W||D)&&fe(()=>{b&&Oe(b,g,f),W&&N.enter(_),D&&et(f,null,g,"mounted")},h)},te=(f,c,p,g,h)=>{if(p&&k(f,p),g)for(let w=0;w<g.length;w++)k(f,g[w]);if(h){let w=h.subTree;if(c===w){const A=h.vnode;te(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ge=(f,c,p,g,h,w,A,x,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=x?We(f[b]):Ie(f[b]);S(null,I,c,p,g,h,w,A,x)}},pe=(f,c,p,g,h,w,A)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=c;_|=f.patchFlag&16;const C=f.props||K,T=c.props||K;let N;p&&tt(p,!1),(N=T.onVnodeBeforeUpdate)&&Oe(N,p,c,f),I&&et(c,f,p,"beforeUpdate"),p&&tt(p,!0);const D=h&&c.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,x,p,g,D,w):A||B(f,c,x,null,p,g,D,w,!1),_>0){if(_&16)Pt(x,c,C,T,p,g,h);else if(_&2&&C.class!==T.class&&i(x,"class",null,T.class,h),_&4&&i(x,"style",C.style,T.style,h),_&8){const W=c.dynamicProps;for(let $=0;$<W.length;$++){const Z=W[$],ve=C[Z],dt=T[Z];(dt!==ve||Z==="value")&&i(x,Z,ve,dt,h,f.children,p,g,Re)}}_&1&&f.children!==c.children&&d(x,c.children)}else!A&&b==null&&Pt(x,c,C,T,p,g,h);((N=T.onVnodeUpdated)||I)&&fe(()=>{N&&Oe(N,p,c,f),I&&et(c,f,p,"updated")},g)},Fe=(f,c,p,g,h,w,A)=>{for(let x=0;x<c.length;x++){const _=f[x],b=c[x],I=_.el&&(_.type===Pe||!Tt(_,b)||_.shapeFlag&70)?m(_.el):p;S(_,b,I,null,g,h,w,A,!0)}},Pt=(f,c,p,g,h,w,A)=>{if(p!==g){if(p!==K)for(const x in p)!bn(x)&&!(x in g)&&i(f,x,p[x],null,A,c.children,h,w,Re);for(const x in g){if(bn(x))continue;const _=g[x],b=p[x];_!==b&&x!=="value"&&i(f,x,b,_,A,c.children,h,w,Re)}"value"in g&&i(f,"value",p.value,g.value)}},Qt=(f,c,p,g,h,w,A,x,_)=>{const b=c.el=f?f.el:s(""),I=c.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:N}=c;N&&(x=x?x.concat(N):N),f==null?(r(b,p,g),r(I,p,g),ge(c.children,p,I,h,w,A,x,_)):C>0&&C&64&&T&&f.dynamicChildren?(Fe(f.dynamicChildren,T,p,h,w,A,x),(c.key!=null||h&&c===h.subTree)&&ao(f,c,!0)):B(f,c,p,I,h,w,A,x,_)},en=(f,c,p,g,h,w,A,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,A,_):Xn(c,p,g,h,w,A,_):va(f,c,_)},Xn=(f,c,p,g,h,w,A)=>{const x=f.component=Bl(f,g,h);if(Xi(f)&&(x.ctx.renderer=ut),Wl(x),x.asyncDep){if(h&&h.registerDep(x,ae),!f.el){const _=x.subTree=ce(Ht);y(null,_,c,p)}return}ae(x,f,c,p,h,w,A)},va=(f,c,p)=>{const g=c.component=f.component;if(Zs(f,c,p))if(g.asyncDep&&!g.asyncResolved){V(g,c,p);return}else g.next=c,Ys(g.update),g.update();else c.el=f.el,g.vnode=c},ae=(f,c,p,g,h,w,A)=>{const x=()=>{if(f.isMounted){let{next:I,bu:C,u:T,parent:N,vnode:D}=f,W=I,$;tt(f,!1),I?(I.el=D.el,V(f,I,A)):I=D,C&&Gn(C),($=I.props&&I.props.onVnodeBeforeUpdate)&&Oe($,N,I,D),tt(f,!0);const Z=Zn(f),ve=f.subTree;f.subTree=Z,S(ve,Z,m(ve.el),nn(ve),f,h,w),I.el=Z.el,W===null&&Qs(f,Z.el),T&&fe(T,h),($=I.props&&I.props.onVnodeUpdated)&&fe(()=>Oe($,N,I,D),h)}else{let I;const{el:C,props:T}=c,{bm:N,m:D,parent:W}=f,$=xn(c);if(tt(f,!1),N&&Gn(N),!$&&(I=T&&T.onVnodeBeforeMount)&&Oe(I,W,c),tt(f,!0),C&&Vn){const Z=()=>{f.subTree=Zn(f),Vn(C,f.subTree,f,h,null)};$?c.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=Zn(f);S(null,Z,p,g,f,h,w),c.el=Z.el}if(D&&fe(D,h),!$&&(I=T&&T.onVnodeMounted)){const Z=c;fe(()=>Oe(I,W,Z),h)}(c.shapeFlag&256||W&&xn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&fe(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Ur(x,()=>Vr(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,tt(f,!0),b()},V=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Ol(f,c.props,g,p),Il(f,c.children,p),At(),Sa(),Et()},B=(f,c,p,g,h,w,A,x,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,C=c.children,{patchFlag:T,shapeFlag:N}=c;if(T>0){if(T&128){tn(b,C,p,g,h,w,A,x,_);return}else if(T&256){Ze(b,C,p,g,h,w,A,x,_);return}}N&8?(I&16&&Re(b,h,w),C!==b&&d(p,C)):I&16?N&16?tn(b,C,p,g,h,w,A,x,_):Re(b,h,w,!0):(I&8&&d(p,""),N&16&&ge(C,p,g,h,w,A,x,_))},Ze=(f,c,p,g,h,w,A,x,_)=>{f=f||gt,c=c||gt;const b=f.length,I=c.length,C=Math.min(b,I);let T;for(T=0;T<C;T++){const N=c[T]=_?We(c[T]):Ie(c[T]);S(f[T],N,p,null,h,w,A,x,_)}b>I?Re(f,h,w,!0,!1,C):ge(c,p,g,h,w,A,x,_,C)},tn=(f,c,p,g,h,w,A,x,_)=>{let b=0;const I=c.length;let C=f.length-1,T=I-1;for(;b<=C&&b<=T;){const N=f[b],D=c[b]=_?We(c[b]):Ie(c[b]);if(Tt(N,D))S(N,D,p,null,h,w,A,x,_);else break;b++}for(;b<=C&&b<=T;){const N=f[C],D=c[T]=_?We(c[T]):Ie(c[T]);if(Tt(N,D))S(N,D,p,null,h,w,A,x,_);else break;C--,T--}if(b>C){if(b<=T){const N=T+1,D=N<I?c[N].el:g;for(;b<=T;)S(null,c[b]=_?We(c[b]):Ie(c[b]),p,D,h,w,A,x,_),b++}}else if(b>T)for(;b<=C;)Ae(f[b],h,w,!0),b++;else{const N=b,D=b,W=new Map;for(b=D;b<=T;b++){const ue=c[b]=_?We(c[b]):Ie(c[b]);ue.key!=null&&W.set(ue.key,b)}let $,Z=0;const ve=T-D+1;let dt=!1,xa=0;const It=new Array(ve);for(b=0;b<ve;b++)It[b]=0;for(b=N;b<=C;b++){const ue=f[b];if(Z>=ve){Ae(ue,h,w,!0);continue}let Ee;if(ue.key!=null)Ee=W.get(ue.key);else for($=D;$<=T;$++)if(It[$-D]===0&&Tt(ue,c[$])){Ee=$;break}Ee===void 0?Ae(ue,h,w,!0):(It[Ee-D]=b+1,Ee>=xa?xa=Ee:dt=!0,S(ue,c[Ee],p,null,h,w,A,x,_),Z++)}const wa=dt?Fl(It):gt;for($=wa.length-1,b=ve-1;b>=0;b--){const ue=D+b,Ee=c[ue],_a=ue+1<I?c[ue+1].el:g;It[b]===0?S(null,Ee,p,_a,h,w,A,x,_):dt&&($<0||b!==wa[$]?Qe(Ee,p,_a,2):$--)}}},Qe=(f,c,p,g,h=null)=>{const{el:w,type:A,transition:x,children:_,shapeFlag:b}=f;if(b&6){Qe(f.component.subTree,c,p,g);return}if(b&128){f.suspense.move(c,p,g);return}if(b&64){A.move(f,c,p,ut);return}if(A===Pe){r(w,c,p);for(let C=0;C<_.length;C++)Qe(_[C],c,p,g);r(f.anchor,c,p);return}if(A===er){M(f,c,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),fe(()=>x.enter(w),h);else{const{leave:C,delayLeave:T,afterLeave:N}=x,D=()=>r(w,c,p),W=()=>{C(w,()=>{D(),N&&N()})};T?T(w,D,W):W()}else r(w,c,p)},Ae=(f,c,p,g=!1,h=!1)=>{const{type:w,props:A,ref:x,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:C,dirs:T}=f;if(x!=null&&gr(x,null,p,f,!0),I&256){c.ctx.deactivate(f);return}const N=I&1&&T,D=!xn(f);let W;if(D&&(W=A&&A.onVnodeBeforeUnmount)&&Oe(W,c,f),I&6)Yo(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}N&&et(f,null,c,"beforeUnmount"),I&64?f.type.remove(f,c,p,h,ut,g):b&&(w!==Pe||C>0&&C&64)?Re(b,c,p,!1,!0):(w===Pe&&C&384||!h&&I&16)&&Re(_,c,p),g&&ba(f)}(D&&(W=A&&A.onVnodeUnmounted)||N)&&fe(()=>{W&&Oe(W,c,f),N&&et(f,null,c,"unmounted")},p)},ba=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Pe){Ho(p,g);return}if(c===er){j(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:x}=h,_=()=>A(p,w);x?x(f.el,w,_):_()}else w()},Ho=(f,c)=>{let p;for(;f!==c;)p=v(f),a(f),f=p;a(c)},Yo=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:A,um:x}=f;g&&Gn(g),h.stop(),w&&(w.active=!1,Ae(A,f,c,p)),x&&fe(x,c),fe(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Re=(f,c,p,g=!1,h=!1,w=0)=>{for(let A=w;A<f.length;A++)Ae(f[A],c,p,g,h)},nn=f=>f.shapeFlag&6?nn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),ya=(f,c,p)=>{f==null?c._vnode&&Ae(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),Sa(),Hi(),c._vnode=f},ut={p:S,um:Ae,m:Qe,r:ba,mt:Xn,mc:ge,pc:B,pbc:Fe,n:nn,o:e};let qn,Vn;return t&&([qn,Vn]=t(ut)),{render:ya,hydrate:qn,createApp:Sl(ya,qn)}}function tt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ao(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||ao(o,s))}}function Fl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Rl=e=>e.__isTeleport,Pe=Symbol(void 0),Zr=Symbol(void 0),Ht=Symbol(void 0),er=Symbol(void 0),Rt=[];let ye=null;function Qr(e=!1){Rt.push(ye=e?null:[])}function Ll(){Rt.pop(),ye=Rt[Rt.length-1]||null}let Yt=1;function $a(e){Yt+=e}function zl(e){return e.dynamicChildren=Yt>0?ye||gt:null,Ll(),Yt>0&&ye&&ye.push(e),e}function ea(e,t,n,r,a,i){return zl(ke(e,t,n,r,a,i,!0))}function vr(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const Hn="__vInternal",io=({key:e})=>e!=null?e:null,wn=({ref:e,ref_key:t,ref_for:n})=>e!=null?re(e)||oe(e)||R(e)?{i:Se,r:e,k:t,f:!!n}:e:null;function ke(e,t=null,n=null,r=0,a=null,i=e===Pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&io(t),ref:t&&wn(t),scopeId:Un,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ta(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Yt>0&&!o&&ye&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ye.push(l),l}const ce=jl;function jl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===vl)&&(e=Ht),vr(e)){const s=xt(e,t,!0);return n&&ta(s,n),Yt>0&&!i&&ye&&(s.shapeFlag&6?ye[ye.indexOf(e)]=s:ye.push(s)),s.patchFlag|=-2,s}if(Jl(e)&&(e=e.__vccOpts),t){t=Dl(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=Fr(s)),G(l)&&(Li(l)&&!L(l)&&(l=se({},l)),t.style=Mr(l))}const o=re(e)?1:el(e)?128:Rl(e)?64:G(e)?4:R(e)?2:0;return ke(e,t,n,r,a,o,i,!0)}function Dl(e){return e?Li(e)||Hn in e?se({},e):e:null}function xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?$l(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&io(s),ref:t&&t.ref?n&&a?L(a)?a.concat(wn(t)):[a,wn(t)]:wn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xt(e.ssContent),ssFallback:e.ssFallback&&xt(e.ssFallback),el:e.el,anchor:e.anchor}}function Ul(e=" ",t=0){return ce(Zr,null,e,t)}function Ie(e){return e==null||typeof e=="boolean"?ce(Ht):L(e)?ce(Pe,null,e.slice()):typeof e=="object"?We(e):ce(Zr,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xt(e)}function ta(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ta(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Hn in t)?t._ctx=Se:a===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[Ul(t)]):n=8);e.children=t,e.shapeFlag|=n}function $l(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Fr([t.class,r.class]));else if(a==="style")t.style=Mr([t.style,r.style]);else if(Mn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Oe(e,t,n,r=null){_e(e,t,7,[n,r])}const Hl=ro();let Yl=0;function Bl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Hl,i={uid:Yl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qi(r,a),emitsOptions:Bi(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ks.bind(null,i),e.ce&&e.ce(i),i}let ee=null;const wt=e=>{ee=e,e.scope.on()},lt=()=>{ee&&ee.scope.off(),ee=null};function oo(e){return e.vnode.shapeFlag&4}let Bt=!1;function Wl(e,t=!1){Bt=t;const{props:n,children:r}=e.vnode,a=oo(e);El(e,n,a,t),Pl(e,r);const i=a?Kl(e,t):void 0;return Bt=!1,i}function Kl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=zi(new Proxy(e.ctx,yl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ql(e):null;wt(e),At();const i=Xe(r,e,0,[e.props,a]);if(Et(),lt(),Ai(i)){if(i.then(lt,lt),t)return i.then(o=>{Ha(e,o,t)}).catch(o=>{jn(o,e,0)});e.asyncDep=i}else Ha(e,i,t)}else so(e,t)}function Ha(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=ji(t)),so(e,n)}let Ya;function so(e,t,n){const r=e.type;if(!e.render){if(!t&&Ya&&!r.render){const a=r.template||Jr(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=se(se({isCustomElement:i,delimiters:s},o),l);r.render=Ya(a,u)}}e.render=r.render||we}wt(e),At(),xl(e),Et(),lt()}function Xl(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function ql(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Xl(e))},slots:e.slots,emit:e.emit,expose:t}}function na(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ji(zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cn)return Cn[n](e)}}))}function Vl(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Jl(e){return R(e)&&"__vccOpts"in e}const he=(e,t)=>Ds(e,t,Bt);function lo(e,t,n){const r=arguments.length;return r===2?G(t)&&!L(t)?vr(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vr(n)&&(n=[n]),ce(e,t,n))}const Gl="3.2.40",Zl="http://www.w3.org/2000/svg",at=typeof document<"u"?document:null,Ba=at&&at.createElement("template"),Ql={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?at.createElementNS(Zl,e):at.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ba.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ba.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ef(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function tf(e,t,n){const r=e.style,a=re(n);if(n&&!a){for(const i in n)br(r,i,n[i]);if(t&&!re(t))for(const i in t)n[i]==null&&br(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Wa=/\s*!important$/;function br(e,t,n){if(L(n))n.forEach(r=>br(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=nf(e,t);Wa.test(n)?e.setProperty(kt(r),n.replace(Wa,""),"important"):e[r]=n}}const Ka=["Webkit","Moz","ms"],tr={};function nf(e,t){const n=tr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return tr[t]=r;r=Ln(r);for(let a=0;a<Ka.length;a++){const i=Ka[a]+r;if(i in e)return tr[t]=i}return t}const Xa="http://www.w3.org/1999/xlink";function rf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Xa,t.slice(6,t.length)):e.setAttributeNS(Xa,t,n);else{const i=Wo(t);n==null||i&&!ki(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function af(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ki(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[fo,of]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let yr=0;const sf=Promise.resolve(),lf=()=>{yr=0},ff=()=>yr||(sf.then(lf),yr=fo());function cf(e,t,n,r){e.addEventListener(t,n,r)}function uf(e,t,n,r){e.removeEventListener(t,n,r)}function df(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=mf(t);if(r){const u=i[t]=pf(r,a);cf(e,s,u,l)}else o&&(uf(e,s,o,l),i[t]=void 0)}}const qa=/(?:Once|Passive|Capture)$/;function mf(e){let t;if(qa.test(e)){t={};let r;for(;r=e.match(qa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):kt(e.slice(2)),t]}function pf(e,t){const n=r=>{const a=r.timeStamp||fo();(of||a>=n.attached-1)&&_e(hf(r,n.value),t,5,[r])};return n.value=e,n.attached=ff(),n}function hf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Va=/^on[a-z]/,gf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?ef(e,r,a):t==="style"?tf(e,n,r):Mn(t)?Rr(t)||df(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vf(e,t,r,a))?af(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),rf(e,t,r,a))};function vf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Va.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Va.test(t)&&re(n)?!1:t in e}const bf=se({patchProp:gf},Ql);let Ja;function yf(){return Ja||(Ja=Nl(bf))}const xf=(...e)=>{const t=yf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=wf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function wf(e){return re(e)?document.querySelector(e):e}const _f="/portfolio/assets/film.47109697.mp4",kf={class:"w-screen px-12 lg:px-36 py-8 text-neutral-200 font-cutive-mono"},Af=ke("h1",{class:"text-4xl lg:text-8xl"},"as it unfolds ",-1),Ef=[Af],Of=Ot({__name:"Content",setup(e){return(t,n)=>(Qr(),ea("div",kf,Ef))}}),Cf={class:"top-0 max-w-screen px-12 lg:px-36 py-8 sticky text-neutral-200 bg-gradient-to-b from-red-900 font-cutive-mono"},Pf=ke("div",{class:"float-left space-x-16 text-xl"},[ke("a",{to:"/"},"home"),ke("a",{to:"/"},"about")],-1),If={class:"float-right space-x-16 text-xl"},Tf=ke("a",null,"test",-1),Sf=Ot({__name:"Header",setup(e){return(t,n)=>{const r=gl("font-awesome-icon");return Qr(),ea("div",Cf,[Pf,ke("div",If,[Tf,ce(r,{icon:"fa-brands fa-github inversew"})])])}}}),co=e=>(Xs("data-v-07f07cf8"),e=e(),qs(),e),Nf={class:"flex flex-col text-center h-screen relative bg-neutral-900"},Mf=co(()=>ke("video",{class:"top-0 absolute w-screen h-screen object-fill",loop:"",autoplay:"",muted:"",src:_f},null,-1)),Ff=co(()=>ke("canvas",null,null,-1)),Rf=Ot({__name:"App",setup(e){return(t,n)=>(Qr(),ea(Pe,null,[ke("div",Nf,[Mf,ce(Sf,{class:"relative z-10"}),ce(Of,{class:"relative z-0"})]),Ff],64))}});const Lf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},zf=Lf(Rf,[["__scopeId","data-v-07f07cf8"]]);function Ga(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ga(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ga(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function In(e){return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(e)}function jf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Za(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Df(e,t,n){return t&&Za(e.prototype,t),n&&Za(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ra(e,t){return $f(e)||Yf(e,t)||uo(e,t)||Wf()}function Jt(e){return Uf(e)||Hf(e)||uo(e)||Bf()}function Uf(e){if(Array.isArray(e))return xr(e)}function $f(e){if(Array.isArray(e))return e}function Hf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function uo(e,t){if(!!e){if(typeof e=="string")return xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(e,t)}}function xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qa=function(){},aa={},mo={},po=null,ho={mark:Qa,measure:Qa};try{typeof window<"u"&&(aa=window),typeof document<"u"&&(mo=document),typeof MutationObserver<"u"&&(po=MutationObserver),typeof performance<"u"&&(ho=performance)}catch{}var Kf=aa.navigator||{},ei=Kf.userAgent,ti=ei===void 0?"":ei,Ve=aa,q=mo,ni=po,fn=ho;Ve.document;var He=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",go=~ti.indexOf("MSIE")||~ti.indexOf("Trident/"),cn,un,dn,mn,pn,je="___FONT_AWESOME___",wr=16,vo="fa",bo="svg-inline--fa",ft="data-fa-i2svg",_r="data-fa-pseudo-element",Xf="data-fa-pseudo-element-pending",ia="data-prefix",oa="data-icon",ri="fontawesome-i2svg",qf="async",Vf=["HTML","HEAD","STYLE","SCRIPT"],yo=function(){try{return!0}catch{return!1}}(),X="classic",J="sharp",sa=[X,J];function Gt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Wt=Gt((cn={},Q(cn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Q(cn,J,{fa:"solid",fass:"solid","fa-solid":"solid"}),cn)),Kt=Gt((un={},Q(un,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Q(un,J,{solid:"fass"}),un)),Xt=Gt((dn={},Q(dn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Q(dn,J,{fass:"fa-solid"}),dn)),Jf=Gt((mn={},Q(mn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Q(mn,J,{"fa-solid":"fass"}),mn)),Gf=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,xo="fa-layers-text",Zf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Qf=Gt((pn={},Q(pn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Q(pn,J,{900:"fass"}),pn)),wo=[1,2,3,4,5,6,7,8,9,10],ec=wo.concat([11,12,13,14,15,16,17,18,19,20]),tc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qt=new Set;Object.keys(Kt[X]).map(qt.add.bind(qt));Object.keys(Kt[J]).map(qt.add.bind(qt));var nc=[].concat(sa,Jt(qt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(wo.map(function(e){return"".concat(e,"x")})).concat(ec.map(function(e){return"w-".concat(e)})),Lt=Ve.FontAwesomeConfig||{};function rc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ac(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var ic=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ic.forEach(function(e){var t=ra(e,2),n=t[0],r=t[1],a=ac(rc(n));a!=null&&(Lt[r]=a)})}var _o={styleDefault:"solid",familyDefault:"classic",cssPrefix:vo,replacementClass:bo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Lt.familyPrefix&&(Lt.cssPrefix=Lt.familyPrefix);var _t=E(E({},_o),Lt);_t.autoReplaceSvg||(_t.observeMutations=!1);var P={};Object.keys(_o).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){_t[e]=n,zt.forEach(function(r){return r(P)})},get:function(){return _t[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){_t.cssPrefix=t,zt.forEach(function(n){return n(P)})},get:function(){return _t.cssPrefix}});Ve.FontAwesomeConfig=P;var zt=[];function oc(e){return zt.push(e),function(){zt.splice(zt.indexOf(e),1)}}var Be=wr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sc(e){if(!(!e||!He)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var lc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,t="";e-- >0;)t+=lc[Math.random()*62|0];return t}function Ct(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function la(e){return e.classList?Ct(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ko(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ko(e[n]),'" ')},"").trim()}function Yn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function fa(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function cc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function uc(e){var t=e.transform,n=e.width,r=n===void 0?wr:n,a=e.height,i=a===void 0?wr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&go?l+="translate(".concat(t.x/Be-r/2,"em, ").concat(t.y/Be-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Be,"em), calc(-50% + ").concat(t.y/Be,"em)) "):l+="translate(".concat(t.x/Be,"em, ").concat(t.y/Be,"em) "),l+="scale(".concat(t.size/Be*(t.flipX?-1:1),", ").concat(t.size/Be*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var dc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ao(){var e=vo,t=bo,n=P.cssPrefix,r=P.replacementClass,a=dc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ai=!1;function nr(){P.autoAddCss&&!ai&&(sc(Ao()),ai=!0)}var mc={mixout:function(){return{dom:{css:Ao,insertCss:nr}}},hooks:function(){return{beforeDOMElementCreation:function(){nr()},beforeI2svg:function(){nr()}}}},De=Ve||{};De[je]||(De[je]={});De[je].styles||(De[je].styles={});De[je].hooks||(De[je].hooks={});De[je].shims||(De[je].shims=[]);var xe=De[je],Eo=[],pc=function e(){q.removeEventListener("DOMContentLoaded",e),Tn=1,Eo.map(function(t){return t()})},Tn=!1;He&&(Tn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Tn||q.addEventListener("DOMContentLoaded",pc));function hc(e){!He||(Tn?setTimeout(e,0):Eo.push(e))}function Zt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ko(e):"<".concat(t," ").concat(fc(r),">").concat(i.map(Zt).join(""),"</").concat(t,">")}function ii(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},rr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?gc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function vc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function kr(e){var t=vc(e);return t.length===1?t[0].toString(16):null}function bc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function oi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ar(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=oi(t);typeof xe.hooks.addPack=="function"&&!a?xe.hooks.addPack(e,oi(t)):xe.styles[e]=E(E({},xe.styles[e]||{}),i),e==="fas"&&Ar("fa",t)}var hn,gn,vn,pt=xe.styles,yc=xe.shims,xc=(hn={},Q(hn,X,Object.values(Xt[X])),Q(hn,J,Object.values(Xt[J])),hn),ca=null,Oo={},Co={},Po={},Io={},To={},wc=(gn={},Q(gn,X,Object.keys(Wt[X])),Q(gn,J,Object.keys(Wt[J])),gn);function _c(e){return~nc.indexOf(e)}function kc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!_c(a)?a:null}var So=function(){var t=function(i){return rr(pt,function(o,s,l){return o[l]=rr(s,i,{}),o},{})};Oo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Co=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),To=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in pt||P.autoFetchSvg,r=rr(yc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Po=r.names,Io=r.unicodes,ca=Bn(P.styleDefault,{family:P.familyDefault})};oc(function(e){ca=Bn(e.styleDefault,{family:P.familyDefault})});So();function ua(e,t){return(Oo[e]||{})[t]}function Ac(e,t){return(Co[e]||{})[t]}function ot(e,t){return(To[e]||{})[t]}function No(e){return Po[e]||{prefix:null,iconName:null}}function Ec(e){var t=Io[e],n=ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return ca}var da=function(){return{prefix:null,iconName:null,rest:[]}};function Bn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Wt[r][e],i=Kt[r][e]||Kt[r][a],o=e in xe.styles?e:null;return i||o||null}var si=(vn={},Q(vn,X,Object.keys(Xt[X])),Q(vn,J,Object.keys(Xt[J])),vn);function Wn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Q(t,X,"".concat(P.cssPrefix,"-").concat(X)),Q(t,J,"".concat(P.cssPrefix,"-").concat(J)),t),o=null,s=X;(e.includes(i[X])||e.some(function(u){return si[X].includes(u)}))&&(s=X),(e.includes(i[J])||e.some(function(u){return si[J].includes(u)}))&&(s=J);var l=e.reduce(function(u,d){var m=kc(P.cssPrefix,d);if(pt[d]?(d=xc[s].includes(d)?Jf[s][d]:d,o=d,u.prefix=d):wc[s].indexOf(d)>-1?(o=d,u.prefix=Bn(d,{family:s})):m?u.iconName=m:d!==P.replacementClass&&d!==i[X]&&d!==i[J]&&u.rest.push(d),!a&&u.prefix&&u.iconName){var v=o==="fa"?No(u.iconName):{},k=ot(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||k||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!pt.far&&pt.fas&&!P.autoFetchSvg&&(u.prefix="fas")}return u},da());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(pt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Je()||"fas"),l}var Oc=function(){function e(){jf(this,e),this.definitions={}}return Df(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Ar(s,o[s]);var l=Xt[X][s];l&&Ar(l,o[s]),So()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),li=[],ht={},yt={},Cc=Object.keys(yt);function Pc(e,t){var n=t.mixoutsTo;return li=e,ht={},Object.keys(yt).forEach(function(r){Cc.indexOf(r)===-1&&delete yt[r]}),li.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),In(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ht[o]||(ht[o]=[]),ht[o].push(i[o])})}r.provides&&r.provides(yt)}),n}function Er(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return yt[e]?yt[e].apply(null,t):void 0}function Or(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=ot(n,t)||t,ii(Mo.definitions,n,t)||ii(xe.styles,n,t)}var Mo=new Oc,Ic=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,ct("noAuto")},Tc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(ct("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,hc(function(){Nc({autoReplaceSvgRoot:n}),ct("watch",t)})}},Sc={icon:function(t){if(t===null)return null;if(In(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Bn(t[0]);return{prefix:r,iconName:ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Gf))){var a=Wn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:ot(i,t)||t}}}},me={noAuto:Ic,config:P,dom:Tc,parse:Sc,library:Mo,findIconDefinition:Or,toHtml:Zt},Nc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(xe.styles).length>0||P.autoFetchSvg)&&He&&P.autoReplaceSvg&&me.dom.i2svg({node:r})};function Kn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Zt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!He){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Mc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Yn(E(E({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Fc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function ma(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,F=r.found?r:n,S=F.width,z=F.height,y=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(pe){return m.classes.indexOf(pe)===-1}).filter(function(pe){return pe!==""||!!pe}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(z)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/z*16*.0625,"em")}:{};k&&(M.attributes[ft]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||Vt())},children:[l]}),delete M.attributes.title);var Y=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:E(E({},j),m.styles)}),le=r.found&&n.found?Ue("generateAbstractMask",Y)||{children:[],attributes:{}}:Ue("generateAbstractIcon",Y)||{children:[],attributes:{}},te=le.children,ge=le.attributes;return Y.children=te,Y.attributes=ge,s?Fc(Y):Mc(Y)}function fi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ft]="");var d=E({},o.styles);fa(a)&&(d.transform=uc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Yn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Rc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Yn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ar=xe.styles;function Cr(e){var t=e[0],n=e[1],r=e.slice(4),a=ra(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(it.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(it.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(it.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Lc={found:!1,width:512,height:512};function zc(e,t){!yo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Pr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=No(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ar[t]&&ar[t][e]){var o=ar[t][e];return r(Cr(o))}zc(e,t),r(E(E({},Lc),{},{icon:P.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var ci=function(){},Ir=P.measurePerformance&&fn&&fn.mark&&fn.measure?fn:{mark:ci,measure:ci},Nt='FA "6.2.0"',jc=function(t){return Ir.mark("".concat(Nt," ").concat(t," begins")),function(){return Fo(t)}},Fo=function(t){Ir.mark("".concat(Nt," ").concat(t," ends")),Ir.measure("".concat(Nt," ").concat(t),"".concat(Nt," ").concat(t," begins"),"".concat(Nt," ").concat(t," ends"))},pa={begin:jc,end:Fo},_n=function(){};function ui(e){var t=e.getAttribute?e.getAttribute(ft):null;return typeof t=="string"}function Dc(e){var t=e.getAttribute?e.getAttribute(ia):null,n=e.getAttribute?e.getAttribute(oa):null;return t&&n}function Uc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function $c(){if(P.autoReplaceSvg===!0)return kn.replace;var e=kn[P.autoReplaceSvg];return e||kn.replace}function Hc(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Yc(e){return q.createElement(e)}function Ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Hc:Yc:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ro(o,{ceFn:r}))}),a}function Bc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ro(a),n)}),n.getAttribute(ft)===null&&P.keepOriginalSource){var r=q.createComment(Bc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~la(n).indexOf(P.replacementClass))return kn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Zt(s)}).join(`
`);n.setAttribute(ft,""),n.innerHTML=o}};function di(e){e()}function Lo(e,t){var n=typeof t=="function"?t:_n;if(e.length===0)n();else{var r=di;P.mutateApproach===qf&&(r=Ve.requestAnimationFrame||di),r(function(){var a=$c(),i=pa.begin("mutate");e.map(a),i(),n()})}}var ha=!1;function zo(){ha=!0}function Tr(){ha=!1}var Sn=null;function mi(e){if(!!ni&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?_n:t,r=e.nodeCallback,a=r===void 0?_n:r,i=e.pseudoElementsCallback,o=i===void 0?_n:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Sn=new ni(function(u){if(!ha){var d=Je();Ct(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ui(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ui(m.target)&&~tc.indexOf(m.attributeName))if(m.attributeName==="class"&&Dc(m.target)){var v=Wn(la(m.target)),k=v.prefix,F=v.iconName;m.target.setAttribute(ia,k||d),F&&m.target.setAttribute(oa,F)}else Uc(m.target)&&a(m.target)})}}),He&&Sn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wc(){!Sn||Sn.disconnect()}function Kc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Xc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Wn(la(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ac(a.prefix,e.innerText)||ua(a.prefix,kr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function qc(e){var t=Ct(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Vc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xc(e),r=n.iconName,a=n.prefix,i=n.rest,o=qc(e),s=Er("parseNodeAttributes",{},e),l=t.styleParser?Kc(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Jc=xe.styles;function jo(e){var t=P.autoReplaceSvg==="nest"?pi(e,{styleParser:!1}):pi(e);return~t.extra.classes.indexOf(xo)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var Ge=new Set;sa.map(function(e){Ge.add("fa-".concat(e))});Object.keys(Wt[X]).map(Ge.add.bind(Ge));Object.keys(Wt[J]).map(Ge.add.bind(Ge));Ge=Jt(Ge);function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(ri,"-").concat(m))},a=function(m){return n.remove("".concat(ri,"-").concat(m))},i=P.autoFetchSvg?Ge:sa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Jc));i.includes("fa")||i.push("fa");var o=[".".concat(xo,":not([").concat(ft,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ft,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ct(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=pa.begin("onTree"),u=s.reduce(function(d,m){try{var v=jo(m);v&&d.push(v)}catch(k){yo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){Lo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Gc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jo(e).then(function(n){n&&Lo([n],t)})}function Zc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Or(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Or(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Qc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,S=n.classes,z=S===void 0?[]:S,y=n.attributes,O=y===void 0?{}:y,M=n.styles,j=M===void 0?{}:M;if(!!t){var Y=t.prefix,le=t.iconName,te=t.icon;return Kn(E({type:"icon"},t),function(){return ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(F||Vt()):(O["aria-hidden"]="true",O.focusable="false")),ma({icons:{main:Cr(te),mask:l?Cr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:le,transform:E(E({},Ne),a),symbol:o,title:v,maskId:d,titleId:F,extra:{attributes:O,styles:j,classes:z}})})}},eu={mixout:function(){return{icon:Zc(Qc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=hi,n.nodeCallback=Gc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return hi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,F){Promise.all([Pr(a,s),d.iconName?Pr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var z=ra(S,2),y=z[0],O=z[1];k([n,ma({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Yn(s);l.length>0&&(a.style=l);var u;return fa(o)&&(u=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},tu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Kn({type:"layer"},function(){ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Jt(i)).join(" ")},children:o}]})}}}},nu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Kn({type:"counter",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),Rc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Jt(s))}})})}}}},ru={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return Kn({type:"text",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),fi({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Jt(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(go){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},au=new RegExp('"',"ug"),gi=[1105920,1112319];function iu(e){var t=e.replace(au,""),n=bc(t,0),r=n>=gi[0]&&n<=gi[1],a=t.length===2?t[0]===t[1]:!1;return{value:kr(a?t[0]:t),isSecondary:r||a}}function vi(e,t){var n="".concat(Xf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ct(e.children),o=i.filter(function(te){return te.getAttribute(_r)===t})[0],s=Ve.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Zf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?J:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Kt[v][l[2].toLowerCase()]:Qf[v][u],F=iu(m),S=F.value,z=F.isSecondary,y=l[0].startsWith("FontAwesome"),O=ua(k,S),M=O;if(y){var j=Ec(S);j.iconName&&j.prefix&&(O=j.iconName,k=j.prefix)}if(O&&!z&&(!o||o.getAttribute(ia)!==k||o.getAttribute(oa)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var Y=Vc(),le=Y.extra;le.attributes[_r]=t,Pr(O,k).then(function(te){var ge=ma(E(E({},Y),{},{icons:{main:te,mask:da()},prefix:k,iconName:M,extra:le,watchable:!0})),pe=q.createElement("svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=ge.map(function(Fe){return Zt(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ou(e){return Promise.all([vi(e,"::before"),vi(e,"::after")])}function su(e){return e.parentNode!==document.head&&!~Vf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_r)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function bi(e){if(!!He)return new Promise(function(t,n){var r=Ct(e.querySelectorAll("*")).filter(su).map(ou),a=pa.begin("searchPseudoElements");zo(),Promise.all(r).then(function(){a(),Tr(),t()}).catch(function(){a(),Tr(),n()})})}var lu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=bi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;P.searchPseudoElements&&bi(a)}}},yi=!1,fu={mixout:function(){return{dom:{unwatch:function(){zo(),yi=!0}}}},hooks:function(){return{bootstrap:function(){mi(Er("mutationObserverCallbacks",{}))},noAuto:function(){Wc()},watch:function(n){var r=n.observeMutationsRoot;yi?Tr():mi(Er("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},cu={mixout:function(){return{parse:{transform:function(n){return xi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=xi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},k.outer),children:[{tag:"g",attributes:E({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),k.path)}]}]}}}},ir={x:0,y:0,width:"100%",height:"100%"};function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function uu(e){return e.tag==="g"?e.children:[e]}var du={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Wn(a.split(" ").map(function(o){return o.trim()})):da();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,k=cc({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:E(E({},ir),{},{fill:"white"})},S=d.children?{children:d.children.map(wi)}:{},z={tag:"g",attributes:E({},k.inner),children:[wi(E({tag:d.tag,attributes:E(E({},d.attributes),k.path)},S))]},y={tag:"g",attributes:E({},k.outer),children:[z]},O="mask-".concat(s||Vt()),M="clip-".concat(s||Vt()),j={tag:"mask",attributes:E(E({},ir),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:uu(v)},j]};return r.push(Y,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},ir)}),{children:r,attributes:a}}}},mu={provides:function(t){var n=!1;Ve.matchMedia&&(n=Ve.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},hu=[mc,eu,tu,nu,ru,lu,fu,cu,du,mu,pu];Pc(hu,{mixoutsTo:me});me.noAuto;var Do=me.config,gu=me.library;me.dom;var Uo=me.parse;me.findIconDefinition;me.toHtml;var vu=me.icon;me.layer;var bu=me.text;me.counter;var yu={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},xu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},wu=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _u(e,t){return t={exports:{}},e(t,t.exports),t.exports}var ku=_u(function(e){(function(t){var n=function(y,O,M){if(!u(O)||m(O)||v(O)||k(O)||l(O))return O;var j,Y=0,le=0;if(d(O))for(j=[],le=O.length;Y<le;Y++)j.push(n(y,O[Y],M));else{j={};for(var te in O)Object.prototype.hasOwnProperty.call(O,te)&&(j[y(te,M)]=n(y,O[te],M))}return j},r=function(y,O){O=O||{};var M=O.separator||"_",j=O.split||/(?=[A-Z])/;return y.split(j).join(M)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},S=function(y,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?y:function(j,Y){return M(j,y,Y)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(S(a,O),y)},decamelizeKeys:function(y,O){return n(S(o,O),y,O)},pascalizeKeys:function(y,O){return n(S(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(wu)}),Au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Nn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eu=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Sr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Ou(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ku.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Cu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ga(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Cu(d);break;case"style":l.style=Ou(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Eu(n,["class","style"]);return lo(e.tag,Nn({},t,{class:a.class,style:Nn({},a.style,o)},a.attrs,s),r)}var $o=!1;try{$o=!0}catch{}function Pu(){if(!$o&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mt({},e,t):{}}function Iu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Mt(t,"fa-"+e.size,e.size!==null),Mt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Mt(t,"fa-pull-"+e.pull,e.pull!==null),Mt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function _i(e){if(e===null)return null;if((typeof e>"u"?"undefined":Au(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Tu=Ot({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=he(function(){return _i(t.icon)}),i=he(function(){return jt("classes",Iu(t))}),o=he(function(){return jt("transform",typeof t.transform=="string"?Uo.transform(t.transform):t.transform)}),s=he(function(){return jt("mask",_i(t.mask))}),l=he(function(){return vu(a.value,Nn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});yn(l,function(d){if(!d)return Pu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=he(function(){return l.value?ga(l.value.abstract[0],{},r):null});return function(){return u.value}}});Ot({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Do.familyPrefix,i=he(function(){return[a+"-layers"].concat(Sr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return lo("div",{class:i.value},r.default?r.default():[])}}});Ot({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Do.familyPrefix,i=he(function(){return jt("classes",[].concat(Sr(t.counter?[a+"-layers-counter"]:[]),Sr(t.position?[a+"-layers-"+t.position]:[])))}),o=he(function(){return jt("transform",typeof t.transform=="string"?Uo.transform(t.transform):t.transform)}),s=he(function(){var u=bu(t.value.toString(),Nn({},o.value,i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=he(function(){return ga(s.value,{},r)});return function(){return l.value}}});gu.add(xu,yu);xf(zf).component("font-awesome-icon",Tu).mount("#app");
