(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _l={},wP={get exports(){return _l},set exports(t){_l=t}},xc={},je={},EP={get exports(){return je},set exports(t){je=t}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jl=Symbol.for("react.element"),SP=Symbol.for("react.portal"),CP=Symbol.for("react.fragment"),IP=Symbol.for("react.strict_mode"),TP=Symbol.for("react.profiler"),kP=Symbol.for("react.provider"),RP=Symbol.for("react.context"),NP=Symbol.for("react.forward_ref"),xP=Symbol.for("react.suspense"),AP=Symbol.for("react.memo"),PP=Symbol.for("react.lazy"),Zv=Symbol.iterator;function OP(t){return t===null||typeof t!="object"?null:(t=Zv&&t[Zv]||t["@@iterator"],typeof t=="function"?t:null)}var pw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gw=Object.assign,_w={};function eo(t,e,n){this.props=t,this.context=e,this.refs=_w,this.updater=n||pw}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mw(){}mw.prototype=eo.prototype;function Op(t,e,n){this.props=t,this.context=e,this.refs=_w,this.updater=n||pw}var Lp=Op.prototype=new mw;Lp.constructor=Op;gw(Lp,eo.prototype);Lp.isPureReactComponent=!0;var ey=Array.isArray,vw=Object.prototype.hasOwnProperty,Dp={current:null},yw={key:!0,ref:!0,__self:!0,__source:!0};function ww(t,e,n){var r,s={},l=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(l=""+e.key),e)vw.call(e,r)&&!yw.hasOwnProperty(r)&&(s[r]=e[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var d=Array(c),h=0;h<c;h++)d[h]=arguments[h+2];s.children=d}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:jl,type:t,key:l,ref:a,props:s,_owner:Dp.current}}function LP(t,e){return{$$typeof:jl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===jl}function DP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ty=/\/+/g;function xd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DP(""+t.key):e.toString(36)}function Eu(t,e,n,r,s){var l=typeof t;(l==="undefined"||l==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case jl:case SP:a=!0}}if(a)return a=t,s=s(a),t=r===""?"."+xd(a,0):r,ey(s)?(n="",t!=null&&(n=t.replace(ty,"$&/")+"/"),Eu(s,e,n,"",function(h){return h})):s!=null&&(Mp(s)&&(s=LP(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(ty,"$&/")+"/")+t)),e.push(s)),1;if(a=0,r=r===""?".":r+":",ey(t))for(var c=0;c<t.length;c++){l=t[c];var d=r+xd(l,c);a+=Eu(l,e,n,d,s)}else if(d=OP(t),typeof d=="function")for(t=d.call(t),c=0;!(l=t.next()).done;)l=l.value,d=r+xd(l,c++),a+=Eu(l,e,n,d,s);else if(l==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function tu(t,e,n){if(t==null)return t;var r=[],s=0;return Eu(t,r,"","",function(l){return e.call(n,l,s++)}),r}function MP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},Su={transition:null},FP={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Su,ReactCurrentOwner:Dp};he.Children={map:tu,forEach:function(t,e,n){tu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tu(t,function(){e++}),e},toArray:function(t){return tu(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=eo;he.Fragment=CP;he.Profiler=TP;he.PureComponent=Op;he.StrictMode=IP;he.Suspense=xP;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FP;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gw({},t.props),s=t.key,l=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,a=Dp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(d in e)vw.call(e,d)&&!yw.hasOwnProperty(d)&&(r[d]=e[d]===void 0&&c!==void 0?c[d]:e[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:jl,type:t.type,key:s,ref:l,props:r,_owner:a}};he.createContext=function(t){return t={$$typeof:RP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kP,_context:t},t.Consumer=t};he.createElement=ww;he.createFactory=function(t){var e=ww.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:NP,render:t}};he.isValidElement=Mp;he.lazy=function(t){return{$$typeof:PP,_payload:{_status:-1,_result:t},_init:MP}};he.memo=function(t,e){return{$$typeof:AP,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Su.transition;Su.transition={};try{t()}finally{Su.transition=e}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(t,e){return Tt.current.useCallback(t,e)};he.useContext=function(t){return Tt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Tt.current.useEffect(t,e)};he.useId=function(){return Tt.current.useId()};he.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Tt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};he.useRef=function(t){return Tt.current.useRef(t)};he.useState=function(t){return Tt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Tt.current.useTransition()};he.version="18.2.0";(function(t){t.exports=he})(EP);const bP=yP(je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UP=je,WP=Symbol.for("react.element"),zP=Symbol.for("react.fragment"),BP=Object.prototype.hasOwnProperty,HP=UP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$P={key:!0,ref:!0,__self:!0,__source:!0};function Ew(t,e,n){var r,s={},l=null,a=null;n!==void 0&&(l=""+n),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)BP.call(e,r)&&!$P.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:WP,type:t,key:l,ref:a,props:s,_owner:HP.current}}xc.Fragment=zP;xc.jsx=Ew;xc.jsxs=Ew;(function(t){t.exports=xc})(wP);const VP=_l.Fragment,de=_l.jsx,Ni=_l.jsxs;var gh={},_h={},GP={get exports(){return _h},set exports(t){_h=t}},Xt={},mh={},jP={get exports(){return mh},set exports(t){mh=t}},Sw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,ee){var te=z.length;z.push(ee);e:for(;0<te;){var _e=te-1>>>1,Ge=z[_e];if(0<s(Ge,ee))z[_e]=ee,z[te]=Ge,te=_e;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ee=z[0],te=z.pop();if(te!==ee){z[0]=te;e:for(var _e=0,Ge=z.length,Yi=Ge>>>1;_e<Yi;){var Gn=2*(_e+1)-1,Dn=z[Gn],Zt=Gn+1,Qi=z[Zt];if(0>s(Dn,te))Zt<Ge&&0>s(Qi,Dn)?(z[_e]=Qi,z[Zt]=te,_e=Zt):(z[_e]=Dn,z[Gn]=te,_e=Gn);else if(Zt<Ge&&0>s(Qi,te))z[_e]=Qi,z[Zt]=te,_e=Zt;else break e}}return ee}function s(z,ee){var te=z.sortIndex-ee.sortIndex;return te!==0?te:z.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var a=Date,c=a.now();t.unstable_now=function(){return a.now()-c}}var d=[],h=[],v=1,m=null,y=3,R=!1,x=!1,D=!1,K=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(z){for(var ee=n(h);ee!==null;){if(ee.callback===null)r(h);else if(ee.startTime<=z)r(h),ee.sortIndex=ee.expirationTime,e(d,ee);else break;ee=n(h)}}function L(z){if(D=!1,T(z),!x)if(n(d)!==null)x=!0,ho(U);else{var ee=n(h);ee!==null&&gn(L,ee.startTime-z)}}function U(z,ee){x=!1,D&&(D=!1,C(G),G=-1),R=!0;var te=y;try{for(T(ee),m=n(d);m!==null&&(!(m.expirationTime>ee)||z&&!zt());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,y=m.priorityLevel;var Ge=_e(m.expirationTime<=ee);ee=t.unstable_now(),typeof Ge=="function"?m.callback=Ge:m===n(d)&&r(d),T(ee)}else r(d);m=n(d)}if(m!==null)var Yi=!0;else{var Gn=n(h);Gn!==null&&gn(L,Gn.startTime-ee),Yi=!1}return Yi}finally{m=null,y=te,R=!1}}var H=!1,B=null,G=-1,we=5,se=-1;function zt(){return!(t.unstable_now()-se<we)}function ai(){if(B!==null){var z=t.unstable_now();se=z;var ee=!0;try{ee=B(!0,z)}finally{ee?ui():(H=!1,B=null)}}else H=!1}var ui;if(typeof S=="function")ui=function(){S(ai)};else if(typeof MessageChannel<"u"){var fo=new MessageChannel,lf=fo.port2;fo.port1.onmessage=ai,ui=function(){lf.postMessage(null)}}else ui=function(){K(ai,0)};function ho(z){B=z,H||(H=!0,ui())}function gn(z,ee){G=K(function(){z(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||R||(x=!0,ho(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var ee=3;break;default:ee=y}var te=y;y=ee;try{return z()}finally{y=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,ee){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=y;y=z;try{return ee()}finally{y=te}},t.unstable_scheduleCallback=function(z,ee,te){var _e=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?_e+te:_e):te=_e,z){case 1:var Ge=-1;break;case 2:Ge=250;break;case 5:Ge=1073741823;break;case 4:Ge=1e4;break;default:Ge=5e3}return Ge=te+Ge,z={id:v++,callback:ee,priorityLevel:z,startTime:te,expirationTime:Ge,sortIndex:-1},te>_e?(z.sortIndex=te,e(h,z),n(d)===null&&z===n(h)&&(D?(C(G),G=-1):D=!0,gn(L,te-_e))):(z.sortIndex=Ge,e(d,z),x||R||(x=!0,ho(U))),z},t.unstable_shouldYield=zt,t.unstable_wrapCallback=function(z){var ee=y;return function(){var te=y;y=ee;try{return z.apply(this,arguments)}finally{y=te}}}})(Sw);(function(t){t.exports=Sw})(jP);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw=je,Qt=mh;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iw=new Set,ml={};function ji(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(ml[t]=e,t=0;t<e.length;t++)Iw.add(e[t])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,KP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ny={},ry={};function qP(t){return vh.call(ry,t)?!0:vh.call(ny,t)?!1:KP.test(t)?ry[t]=!0:(ny[t]=!0,!1)}function YP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QP(t,e,n,r){if(e===null||typeof e>"u"||YP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,s,l,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=l,this.removeEmptyString=a}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fp,bp);ct[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fp,bp);ct[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fp,bp);ct[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Up(t,e,n,r){var s=ct.hasOwnProperty(e)?ct[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QP(e,n,s,r)&&(n=null),r||s===null?qP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nu=Symbol.for("react.element"),ps=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),yh=Symbol.for("react.profiler"),Tw=Symbol.for("react.provider"),kw=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),Eh=Symbol.for("react.suspense_list"),Bp=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),Rw=Symbol.for("react.offscreen"),iy=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=iy&&t[iy]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,Ad;function Qo(t){if(Ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ad=e&&e[1]||""}return`
`+Ad+t}var Pd=!1;function Od(t,e){if(!t||Pd)return"";Pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),l=r.stack.split(`
`),a=s.length-1,c=l.length-1;1<=a&&0<=c&&s[a]!==l[c];)c--;for(;1<=a&&0<=c;a--,c--)if(s[a]!==l[c]){if(a!==1||c!==1)do if(a--,c--,0>c||s[a]!==l[c]){var d=`
`+s[a].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=a&&0<=c);break}}}finally{Pd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function XP(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Od(t.type,!1),t;case 11:return t=Od(t.type.render,!1),t;case 1:return t=Od(t.type,!0),t;default:return""}}function Sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ps:return"Portal";case yh:return"Profiler";case Wp:return"StrictMode";case wh:return"Suspense";case Eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kw:return(t.displayName||"Context")+".Consumer";case Tw:return(t._context.displayName||"Context")+".Provider";case zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bp:return e=t.displayName||null,e!==null?e:Sh(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return Sh(t(e))}catch{}}return null}function JP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(e);case 8:return e===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZP(t){var e=Nw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ru(t){t._valueTracker||(t._valueTracker=ZP(t))}function xw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Nw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ch(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Aw(t,e){e=e.checked,e!=null&&Up(t,"checked",e,!1)}function Ih(t,e){Aw(t,e);var n=ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Th(t,e.type,n):e.hasOwnProperty("defaultValue")&&Th(t,e.type,ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Th(t,e,n){(e!=="number"||bu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ei(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ly(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Xo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ei(n)}}function Pw(t,e){var n=ei(e.value),r=ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ay(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ow(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ow(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var iu,Lw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(iu=iu||document.createElement("div"),iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eO=["Webkit","ms","Moz","O"];Object.keys(nl).forEach(function(t){eO.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nl[e]=nl[t]})});function Dw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||nl.hasOwnProperty(t)&&nl[t]?(""+e).trim():e+"px"}function Mw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Dw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var tO=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if(tO[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=null;function Hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,xs=null,As=null;function uy(t){if(t=Yl(t)){if(typeof Ph!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Dc(e),Ph(t.stateNode,t.type,e))}}function Fw(t){xs?As?As.push(t):As=[t]:xs=t}function bw(){if(xs){var t=xs,e=As;if(As=xs=null,uy(t),e)for(t=0;t<e.length;t++)uy(e[t])}}function Uw(t,e){return t(e)}function Ww(){}var Ld=!1;function zw(t,e,n){if(Ld)return t(e,n);Ld=!0;try{return Uw(t,e,n)}finally{Ld=!1,(xs!==null||As!==null)&&(Ww(),bw())}}function yl(t,e){var n=t.stateNode;if(n===null)return null;var r=Dc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Oh=!1;if(fr)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Oh=!1}function nO(t,e,n,r,s,l,a,c,d){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(v){this.onError(v)}}var rl=!1,Uu=null,Wu=!1,Lh=null,rO={onError:function(t){rl=!0,Uu=t}};function iO(t,e,n,r,s,l,a,c,d){rl=!1,Uu=null,nO.apply(rO,arguments)}function sO(t,e,n,r,s,l,a,c,d){if(iO.apply(this,arguments),rl){if(rl){var h=Uu;rl=!1,Uu=null}else throw Error(F(198));Wu||(Wu=!0,Lh=h)}}function Ki(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cy(t){if(Ki(t)!==t)throw Error(F(188))}function oO(t){var e=t.alternate;if(!e){if(e=Ki(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return cy(s),t;if(l===r)return cy(s),e;l=l.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=l;else{for(var a=!1,c=s.child;c;){if(c===n){a=!0,n=s,r=l;break}if(c===r){a=!0,r=s,n=l;break}c=c.sibling}if(!a){for(c=l.child;c;){if(c===n){a=!0,n=l,r=s;break}if(c===r){a=!0,r=l,n=s;break}c=c.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Hw(t){return t=oO(t),t!==null?$w(t):null}function $w(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$w(t);if(e!==null)return e;t=t.sibling}return null}var Vw=Qt.unstable_scheduleCallback,fy=Qt.unstable_cancelCallback,lO=Qt.unstable_shouldYield,aO=Qt.unstable_requestPaint,Ve=Qt.unstable_now,uO=Qt.unstable_getCurrentPriorityLevel,$p=Qt.unstable_ImmediatePriority,Gw=Qt.unstable_UserBlockingPriority,zu=Qt.unstable_NormalPriority,cO=Qt.unstable_LowPriority,jw=Qt.unstable_IdlePriority,Ac=null,Bn=null;function fO(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:pO,dO=Math.log,hO=Math.LN2;function pO(t){return t>>>=0,t===0?32:31-(dO(t)/hO|0)|0}var su=64,ou=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,l=t.pingedLanes,a=n&268435455;if(a!==0){var c=a&~s;c!==0?r=Jo(c):(l&=a,l!==0&&(r=Jo(l)))}else a=n&~s,a!==0?r=Jo(a):l!==0&&(r=Jo(l));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,l=e&-e,s>=l||s===16&&(l&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xn(e),s=1<<n,r|=t[n],e&=~s;return r}function gO(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _O(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,l=t.pendingLanes;0<l;){var a=31-xn(l),c=1<<a,d=s[a];d===-1?(!(c&n)||c&r)&&(s[a]=gO(c,e)):d<=e&&(t.expiredLanes|=c),l&=~c}}function Dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kw(){var t=su;return su<<=1,!(su&4194240)&&(su=64),t}function Dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Kl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xn(e),t[e]=n}function mO(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-xn(n),l=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~l}}function Vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Se=0;function qw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yw,Gp,Qw,Xw,Jw,Mh=!1,lu=[],Hr=null,$r=null,Vr=null,wl=new Map,El=new Map,Dr=[],vO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dy(t,e){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(e.pointerId)}}function Wo(t,e,n,r,s,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},e!==null&&(e=Yl(e),e!==null&&Gp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function yO(t,e,n,r,s){switch(e){case"focusin":return Hr=Wo(Hr,t,e,n,r,s),!0;case"dragenter":return $r=Wo($r,t,e,n,r,s),!0;case"mouseover":return Vr=Wo(Vr,t,e,n,r,s),!0;case"pointerover":var l=s.pointerId;return wl.set(l,Wo(wl.get(l)||null,t,e,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,El.set(l,Wo(El.get(l)||null,t,e,n,r,s)),!0}return!1}function Zw(t){var e=Ci(t.target);if(e!==null){var n=Ki(e);if(n!==null){if(e=n.tag,e===13){if(e=Bw(n),e!==null){t.blockedOn=e,Jw(t.priority,function(){Qw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ah=r,n.target.dispatchEvent(r),Ah=null}else return e=Yl(n),e!==null&&Gp(e),t.blockedOn=n,!1;e.shift()}return!0}function hy(t,e,n){Cu(t)&&n.delete(e)}function wO(){Mh=!1,Hr!==null&&Cu(Hr)&&(Hr=null),$r!==null&&Cu($r)&&($r=null),Vr!==null&&Cu(Vr)&&(Vr=null),wl.forEach(hy),El.forEach(hy)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Mh||(Mh=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,wO)))}function Sl(t){function e(s){return zo(s,t)}if(0<lu.length){zo(lu[0],t);for(var n=1;n<lu.length;n++){var r=lu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hr!==null&&zo(Hr,t),$r!==null&&zo($r,t),Vr!==null&&zo(Vr,t),wl.forEach(e),El.forEach(e),n=0;n<Dr.length;n++)r=Dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)Zw(n),n.blockedOn===null&&Dr.shift()}var Ps=vr.ReactCurrentBatchConfig,Hu=!0;function EO(t,e,n,r){var s=Se,l=Ps.transition;Ps.transition=null;try{Se=1,jp(t,e,n,r)}finally{Se=s,Ps.transition=l}}function SO(t,e,n,r){var s=Se,l=Ps.transition;Ps.transition=null;try{Se=4,jp(t,e,n,r)}finally{Se=s,Ps.transition=l}}function jp(t,e,n,r){if(Hu){var s=Fh(t,e,n,r);if(s===null)Vd(t,e,r,$u,n),dy(t,r);else if(yO(s,t,e,n,r))r.stopPropagation();else if(dy(t,r),e&4&&-1<vO.indexOf(t)){for(;s!==null;){var l=Yl(s);if(l!==null&&Yw(l),l=Fh(t,e,n,r),l===null&&Vd(t,e,r,$u,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var $u=null;function Fh(t,e,n,r){if($u=null,t=Hp(r),t=Ci(t),t!==null)if(e=Ki(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function eE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uO()){case $p:return 1;case Gw:return 4;case zu:case cO:return 16;case jw:return 536870912;default:return 16}default:return 16}}var zr=null,Kp=null,Iu=null;function tE(){if(Iu)return Iu;var t,e=Kp,n=e.length,r,s="value"in zr?zr.value:zr.textContent,l=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===s[l-r];r++);return Iu=s.slice(t,1<r?1-r:void 0)}function Tu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function au(){return!0}function py(){return!1}function Jt(t){function e(n,r,s,l,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?au:py,this.isPropagationStopped=py,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=au)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=au)},persist:function(){},isPersistent:au}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qp=Jt(to),ql=Ue({},to,{view:0,detail:0}),CO=Jt(ql),Md,Fd,Bo,Pc=Ue({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(Md=t.screenX-Bo.screenX,Fd=t.screenY-Bo.screenY):Fd=Md=0,Bo=t),Md)},movementY:function(t){return"movementY"in t?t.movementY:Fd}}),gy=Jt(Pc),IO=Ue({},Pc,{dataTransfer:0}),TO=Jt(IO),kO=Ue({},ql,{relatedTarget:0}),bd=Jt(kO),RO=Ue({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),NO=Jt(RO),xO=Ue({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AO=Jt(xO),PO=Ue({},to,{data:0}),_y=Jt(PO),OO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DO[t])?!!e[t]:!1}function Yp(){return MO}var FO=Ue({},ql,{key:function(t){if(t.key){var e=OO[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yp,charCode:function(t){return t.type==="keypress"?Tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bO=Jt(FO),UO=Ue({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),my=Jt(UO),WO=Ue({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yp}),zO=Jt(WO),BO=Ue({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),HO=Jt(BO),$O=Ue({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VO=Jt($O),GO=[9,13,27,32],Qp=fr&&"CompositionEvent"in window,il=null;fr&&"documentMode"in document&&(il=document.documentMode);var jO=fr&&"TextEvent"in window&&!il,nE=fr&&(!Qp||il&&8<il&&11>=il),vy=String.fromCharCode(32),yy=!1;function rE(t,e){switch(t){case"keyup":return GO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function KO(t,e){switch(t){case"compositionend":return iE(e);case"keypress":return e.which!==32?null:(yy=!0,vy);case"textInput":return t=e.data,t===vy&&yy?null:t;default:return null}}function qO(t,e){if(_s)return t==="compositionend"||!Qp&&rE(t,e)?(t=tE(),Iu=Kp=zr=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nE&&e.locale!=="ko"?null:e.data;default:return null}}var YO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YO[t.type]:e==="textarea"}function sE(t,e,n,r){Fw(r),e=Vu(e,"onChange"),0<e.length&&(n=new qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sl=null,Cl=null;function QO(t){_E(t,0)}function Oc(t){var e=ys(t);if(xw(e))return t}function XO(t,e){if(t==="change")return e}var oE=!1;if(fr){var Ud;if(fr){var Wd="oninput"in document;if(!Wd){var Ey=document.createElement("div");Ey.setAttribute("oninput","return;"),Wd=typeof Ey.oninput=="function"}Ud=Wd}else Ud=!1;oE=Ud&&(!document.documentMode||9<document.documentMode)}function Sy(){sl&&(sl.detachEvent("onpropertychange",lE),Cl=sl=null)}function lE(t){if(t.propertyName==="value"&&Oc(Cl)){var e=[];sE(e,Cl,t,Hp(t)),zw(QO,e)}}function JO(t,e,n){t==="focusin"?(Sy(),sl=e,Cl=n,sl.attachEvent("onpropertychange",lE)):t==="focusout"&&Sy()}function ZO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oc(Cl)}function eL(t,e){if(t==="click")return Oc(e)}function tL(t,e){if(t==="input"||t==="change")return Oc(e)}function nL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:nL;function Il(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!vh.call(e,s)||!On(t[s],e[s]))return!1}return!0}function Cy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Iy(t,e){var n=Cy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cy(n)}}function aE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?aE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uE(){for(var t=window,e=bu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bu(t.document)}return e}function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rL(t){var e=uE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&aE(n.ownerDocument.documentElement,n)){if(r!==null&&Xp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!t.extend&&l>r&&(s=r,r=l,l=s),s=Iy(n,l);var a=Iy(n,r);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),l>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iL=fr&&"documentMode"in document&&11>=document.documentMode,ms=null,bh=null,ol=null,Uh=!1;function Ty(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uh||ms==null||ms!==bu(r)||(r=ms,"selectionStart"in r&&Xp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ol&&Il(ol,r)||(ol=r,r=Vu(bh,"onSelect"),0<r.length&&(e=new qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ms)))}function uu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},zd={},cE={};fr&&(cE=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Lc(t){if(zd[t])return zd[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cE)return zd[t]=e[n];return t}var fE=Lc("animationend"),dE=Lc("animationiteration"),hE=Lc("animationstart"),pE=Lc("transitionend"),gE=new Map,ky="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,e){gE.set(t,e),ji(e,[t])}for(var Bd=0;Bd<ky.length;Bd++){var Hd=ky[Bd],sL=Hd.toLowerCase(),oL=Hd[0].toUpperCase()+Hd.slice(1);ii(sL,"on"+oL)}ii(fE,"onAnimationEnd");ii(dE,"onAnimationIteration");ii(hE,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(pE,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lL=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Ry(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sO(r,e,void 0,t),t.currentTarget=null}function _E(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var l=void 0;if(e)for(var a=r.length-1;0<=a;a--){var c=r[a],d=c.instance,h=c.currentTarget;if(c=c.listener,d!==l&&s.isPropagationStopped())break e;Ry(s,c,h),l=d}else for(a=0;a<r.length;a++){if(c=r[a],d=c.instance,h=c.currentTarget,c=c.listener,d!==l&&s.isPropagationStopped())break e;Ry(s,c,h),l=d}}}if(Wu)throw t=Lh,Wu=!1,Lh=null,t}function Ae(t,e){var n=e[$h];n===void 0&&(n=e[$h]=new Set);var r=t+"__bubble";n.has(r)||(mE(e,t,2,!1),n.add(r))}function $d(t,e,n){var r=0;e&&(r|=4),mE(n,t,r,e)}var cu="_reactListening"+Math.random().toString(36).slice(2);function Tl(t){if(!t[cu]){t[cu]=!0,Iw.forEach(function(n){n!=="selectionchange"&&(lL.has(n)||$d(n,!1,t),$d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cu]||(e[cu]=!0,$d("selectionchange",!1,e))}}function mE(t,e,n,r){switch(eE(e)){case 1:var s=EO;break;case 4:s=SO;break;default:s=jp}n=s.bind(null,e,n,t),s=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,s){var l=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;a=a.return}for(;c!==null;){if(a=Ci(c),a===null)return;if(d=a.tag,d===5||d===6){r=l=a;continue e}c=c.parentNode}}r=r.return}zw(function(){var h=l,v=Hp(n),m=[];e:{var y=gE.get(t);if(y!==void 0){var R=qp,x=t;switch(t){case"keypress":if(Tu(n)===0)break e;case"keydown":case"keyup":R=bO;break;case"focusin":x="focus",R=bd;break;case"focusout":x="blur",R=bd;break;case"beforeblur":case"afterblur":R=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=TO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=zO;break;case fE:case dE:case hE:R=NO;break;case pE:R=HO;break;case"scroll":R=CO;break;case"wheel":R=VO;break;case"copy":case"cut":case"paste":R=AO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=my}var D=(e&4)!==0,K=!D&&t==="scroll",C=D?y!==null?y+"Capture":null:y;D=[];for(var S=h,T;S!==null;){T=S;var L=T.stateNode;if(T.tag===5&&L!==null&&(T=L,C!==null&&(L=yl(S,C),L!=null&&D.push(kl(S,L,T)))),K)break;S=S.return}0<D.length&&(y=new R(y,x,null,n,v),m.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",y&&n!==Ah&&(x=n.relatedTarget||n.fromElement)&&(Ci(x)||x[dr]))break e;if((R||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,R?(x=n.relatedTarget||n.toElement,R=h,x=x?Ci(x):null,x!==null&&(K=Ki(x),x!==K||x.tag!==5&&x.tag!==6)&&(x=null)):(R=null,x=h),R!==x)){if(D=gy,L="onMouseLeave",C="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(D=my,L="onPointerLeave",C="onPointerEnter",S="pointer"),K=R==null?y:ys(R),T=x==null?y:ys(x),y=new D(L,S+"leave",R,n,v),y.target=K,y.relatedTarget=T,L=null,Ci(v)===h&&(D=new D(C,S+"enter",x,n,v),D.target=T,D.relatedTarget=K,L=D),K=L,R&&x)t:{for(D=R,C=x,S=0,T=D;T;T=ds(T))S++;for(T=0,L=C;L;L=ds(L))T++;for(;0<S-T;)D=ds(D),S--;for(;0<T-S;)C=ds(C),T--;for(;S--;){if(D===C||C!==null&&D===C.alternate)break t;D=ds(D),C=ds(C)}D=null}else D=null;R!==null&&Ny(m,y,R,D,!1),x!==null&&K!==null&&Ny(m,K,x,D,!0)}}e:{if(y=h?ys(h):window,R=y.nodeName&&y.nodeName.toLowerCase(),R==="select"||R==="input"&&y.type==="file")var U=XO;else if(wy(y))if(oE)U=tL;else{U=ZO;var H=JO}else(R=y.nodeName)&&R.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=eL);if(U&&(U=U(t,h))){sE(m,U,n,v);break e}H&&H(t,y,h),t==="focusout"&&(H=y._wrapperState)&&H.controlled&&y.type==="number"&&Th(y,"number",y.value)}switch(H=h?ys(h):window,t){case"focusin":(wy(H)||H.contentEditable==="true")&&(ms=H,bh=h,ol=null);break;case"focusout":ol=bh=ms=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,Ty(m,n,v);break;case"selectionchange":if(iL)break;case"keydown":case"keyup":Ty(m,n,v)}var B;if(Qp)e:{switch(t){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else _s?rE(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(nE&&n.locale!=="ko"&&(_s||G!=="onCompositionStart"?G==="onCompositionEnd"&&_s&&(B=tE()):(zr=v,Kp="value"in zr?zr.value:zr.textContent,_s=!0)),H=Vu(h,G),0<H.length&&(G=new _y(G,t,null,n,v),m.push({event:G,listeners:H}),B?G.data=B:(B=iE(n),B!==null&&(G.data=B)))),(B=jO?KO(t,n):qO(t,n))&&(h=Vu(h,"onBeforeInput"),0<h.length&&(v=new _y("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:h}),v.data=B))}_E(m,e)})}function kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=yl(t,n),l!=null&&r.unshift(kl(t,l,s)),l=yl(t,e),l!=null&&r.push(kl(t,l,s))),t=t.return}return r}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ny(t,e,n,r,s){for(var l=e._reactName,a=[];n!==null&&n!==r;){var c=n,d=c.alternate,h=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&h!==null&&(c=h,s?(d=yl(n,l),d!=null&&a.unshift(kl(n,d,c))):s||(d=yl(n,l),d!=null&&a.push(kl(n,d,c)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var aL=/\r\n?/g,uL=/\u0000|\uFFFD/g;function xy(t){return(typeof t=="string"?t:""+t).replace(aL,`
`).replace(uL,"")}function fu(t,e,n){if(e=xy(e),xy(t)!==e&&n)throw Error(F(425))}function Gu(){}var Wh=null,zh=null;function Bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,cL=typeof clearTimeout=="function"?clearTimeout:void 0,Ay=typeof Promise=="function"?Promise:void 0,fL=typeof queueMicrotask=="function"?queueMicrotask:typeof Ay<"u"?function(t){return Ay.resolve(null).then(t).catch(dL)}:Hh;function dL(t){setTimeout(function(){throw t})}function Gd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Sl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Sl(e)}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Py(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),zn="__reactFiber$"+no,Rl="__reactProps$"+no,dr="__reactContainer$"+no,$h="__reactEvents$"+no,hL="__reactListeners$"+no,pL="__reactHandles$"+no;function Ci(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Py(t);t!==null;){if(n=t[zn])return n;t=Py(t)}return e}t=n,n=t.parentNode}return null}function Yl(t){return t=t[zn]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Dc(t){return t[Rl]||null}var Vh=[],ws=-1;function si(t){return{current:t}}function Oe(t){0>ws||(t.current=Vh[ws],Vh[ws]=null,ws--)}function Ne(t,e){ws++,Vh[ws]=t.current,t.current=e}var ti={},mt=si(ti),Mt=si(!1),Li=ti;function Bs(t,e){var n=t.type.contextTypes;if(!n)return ti;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=e[l];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ft(t){return t=t.childContextTypes,t!=null}function ju(){Oe(Mt),Oe(mt)}function Oy(t,e,n){if(mt.current!==ti)throw Error(F(168));Ne(mt,e),Ne(Mt,n)}function vE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,JP(t)||"Unknown",s));return Ue({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ti,Li=mt.current,Ne(mt,t),Ne(Mt,Mt.current),!0}function Ly(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=vE(t,e,Li),r.__reactInternalMemoizedMergedChildContext=t,Oe(Mt),Oe(mt),Ne(mt,t)):Oe(Mt),Ne(Mt,n)}var rr=null,Mc=!1,jd=!1;function yE(t){rr===null?rr=[t]:rr.push(t)}function gL(t){Mc=!0,yE(t)}function oi(){if(!jd&&rr!==null){jd=!0;var t=0,e=Se;try{var n=rr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rr=null,Mc=!1}catch(s){throw rr!==null&&(rr=rr.slice(t+1)),Vw($p,oi),s}finally{Se=e,jd=!1}}return null}var Es=[],Ss=0,qu=null,Yu=0,un=[],cn=0,Di=null,ir=1,sr="";function yi(t,e){Es[Ss++]=Yu,Es[Ss++]=qu,qu=t,Yu=e}function wE(t,e,n){un[cn++]=ir,un[cn++]=sr,un[cn++]=Di,Di=t;var r=ir;t=sr;var s=32-xn(r)-1;r&=~(1<<s),n+=1;var l=32-xn(e)+s;if(30<l){var a=s-s%5;l=(r&(1<<a)-1).toString(32),r>>=a,s-=a,ir=1<<32-xn(e)+s|n<<s|r,sr=l+t}else ir=1<<l|n<<s|r,sr=t}function Jp(t){t.return!==null&&(yi(t,1),wE(t,1,0))}function Zp(t){for(;t===qu;)qu=Es[--Ss],Es[Ss]=null,Yu=Es[--Ss],Es[Ss]=null;for(;t===Di;)Di=un[--cn],un[cn]=null,sr=un[--cn],un[cn]=null,ir=un[--cn],un[cn]=null}var Yt=null,qt=null,De=!1,Tn=null;function EE(t,e){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,qt=Gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Di!==null?{id:ir,overflow:sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,qt=null,!0):!1;default:return!1}}function Gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(De){var e=qt;if(e){var n=e;if(!Dy(t,e)){if(Gh(t))throw Error(F(418));e=Gr(n.nextSibling);var r=Yt;e&&Dy(t,e)?EE(r,n):(t.flags=t.flags&-4097|2,De=!1,Yt=t)}}else{if(Gh(t))throw Error(F(418));t.flags=t.flags&-4097|2,De=!1,Yt=t}}}function My(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function du(t){if(t!==Yt)return!1;if(!De)return My(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bh(t.type,t.memoizedProps)),e&&(e=qt)){if(Gh(t))throw SE(),Error(F(418));for(;e;)EE(t,e),e=Gr(e.nextSibling)}if(My(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Yt?Gr(t.stateNode.nextSibling):null;return!0}function SE(){for(var t=qt;t;)t=Gr(t.nextSibling)}function Hs(){qt=Yt=null,De=!1}function eg(t){Tn===null?Tn=[t]:Tn.push(t)}var _L=vr.ReactCurrentBatchConfig;function Cn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Qu=si(null),Xu=null,Cs=null,tg=null;function ng(){tg=Cs=Xu=null}function rg(t){var e=Qu.current;Oe(Qu),t._currentValue=e}function Kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Xu=t,tg=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function hn(t){var e=t._currentValue;if(tg!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(Xu===null)throw Error(F(308));Cs=t,Xu.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Ii=null;function ig(t){Ii===null?Ii=[t]:Ii.push(t)}function CE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,ig(e)):(n.next=s.next,s.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Lr=!1;function sg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function IE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,hr(t,n)}return s=r.interleaved,s===null?(e.next=e,ig(r)):(e.next=s.next,s.next=e),r.interleaved=e,hr(t,n)}function ku(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vp(t,n)}}function Fy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?s=l=e:l=l.next=e}else s=l=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var s=t.updateQueue;Lr=!1;var l=s.firstBaseUpdate,a=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var d=c,h=d.next;d.next=null,a===null?l=h:a.next=h,a=d;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==a&&(c===null?v.firstBaseUpdate=h:c.next=h,v.lastBaseUpdate=d))}if(l!==null){var m=s.baseState;a=0,v=h=d=null,c=l;do{var y=c.lane,R=c.eventTime;if((r&y)===y){v!==null&&(v=v.next={eventTime:R,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=t,D=c;switch(y=e,R=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){m=x.call(R,m,y);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,y=typeof x=="function"?x.call(R,m,y):x,y==null)break e;m=Ue({},m,y);break e;case 2:Lr=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[c]:y.push(c))}else R={eventTime:R,lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(h=v=R,d=m):v=v.next=R,a|=y;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;y=c,c=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(1);if(v===null&&(d=m),s.baseState=d,s.firstBaseUpdate=h,s.lastBaseUpdate=v,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else l===null&&(s.shared.lanes=0);Fi|=a,t.lanes=a,t.memoizedState=m}}function by(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var TE=new Cw.Component().refs;function qh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?Ki(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),s=qr(t),l=ur(r,s);l.payload=e,n!=null&&(l.callback=n),e=jr(t,l,s),e!==null&&(An(e,t,s,r),ku(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),s=qr(t),l=ur(r,s);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=jr(t,l,s),e!==null&&(An(e,t,s,r),ku(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=qr(t),s=ur(n,r);s.tag=2,e!=null&&(s.callback=e),e=jr(t,s,r),e!==null&&(An(e,t,r,n),ku(e,t,r))}};function Uy(t,e,n,r,s,l,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,l,a):e.prototype&&e.prototype.isPureReactComponent?!Il(n,r)||!Il(s,l):!0}function kE(t,e,n){var r=!1,s=ti,l=e.contextType;return typeof l=="object"&&l!==null?l=hn(l):(s=Ft(e)?Li:mt.current,r=e.contextTypes,l=(r=r!=null)?Bs(t,s):ti),e=new e(n,l),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=l),e}function Wy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Yh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=TE,sg(t);var l=e.contextType;typeof l=="object"&&l!==null?s.context=hn(l):(l=Ft(e)?Li:mt.current,s.context=Bs(t,l)),s.state=t.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(qh(t,e,l,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Fc.enqueueReplaceState(s,s.state,null),Ju(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,l=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(a){var c=s.refs;c===TE&&(c=s.refs={}),a===null?delete c[l]:c[l]=a},e._stringRef=l,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function hu(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zy(t){var e=t._init;return e(t._payload)}function RE(t){function e(C,S){if(t){var T=C.deletions;T===null?(C.deletions=[S],C.flags|=16):T.push(S)}}function n(C,S){if(!t)return null;for(;S!==null;)e(C,S),S=S.sibling;return null}function r(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function s(C,S){return C=Yr(C,S),C.index=0,C.sibling=null,C}function l(C,S,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<S?(C.flags|=2,S):T):(C.flags|=2,S)):(C.flags|=1048576,S)}function a(C){return t&&C.alternate===null&&(C.flags|=2),C}function c(C,S,T,L){return S===null||S.tag!==6?(S=Zd(T,C.mode,L),S.return=C,S):(S=s(S,T),S.return=C,S)}function d(C,S,T,L){var U=T.type;return U===gs?v(C,S,T.props.children,L,T.key):S!==null&&(S.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Or&&zy(U)===S.type)?(L=s(S,T.props),L.ref=Ho(C,S,T),L.return=C,L):(L=Ou(T.type,T.key,T.props,null,C.mode,L),L.ref=Ho(C,S,T),L.return=C,L)}function h(C,S,T,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=eh(T,C.mode,L),S.return=C,S):(S=s(S,T.children||[]),S.return=C,S)}function v(C,S,T,L,U){return S===null||S.tag!==7?(S=Ai(T,C.mode,L,U),S.return=C,S):(S=s(S,T),S.return=C,S)}function m(C,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Zd(""+S,C.mode,T),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nu:return T=Ou(S.type,S.key,S.props,null,C.mode,T),T.ref=Ho(C,null,S),T.return=C,T;case ps:return S=eh(S,C.mode,T),S.return=C,S;case Or:var L=S._init;return m(C,L(S._payload),T)}if(Xo(S)||bo(S))return S=Ai(S,C.mode,T,null),S.return=C,S;hu(C,S)}return null}function y(C,S,T,L){var U=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return U!==null?null:c(C,S,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case nu:return T.key===U?d(C,S,T,L):null;case ps:return T.key===U?h(C,S,T,L):null;case Or:return U=T._init,y(C,S,U(T._payload),L)}if(Xo(T)||bo(T))return U!==null?null:v(C,S,T,L,null);hu(C,T)}return null}function R(C,S,T,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return C=C.get(T)||null,c(S,C,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case nu:return C=C.get(L.key===null?T:L.key)||null,d(S,C,L,U);case ps:return C=C.get(L.key===null?T:L.key)||null,h(S,C,L,U);case Or:var H=L._init;return R(C,S,T,H(L._payload),U)}if(Xo(L)||bo(L))return C=C.get(T)||null,v(S,C,L,U,null);hu(S,L)}return null}function x(C,S,T,L){for(var U=null,H=null,B=S,G=S=0,we=null;B!==null&&G<T.length;G++){B.index>G?(we=B,B=null):we=B.sibling;var se=y(C,B,T[G],L);if(se===null){B===null&&(B=we);break}t&&B&&se.alternate===null&&e(C,B),S=l(se,S,G),H===null?U=se:H.sibling=se,H=se,B=we}if(G===T.length)return n(C,B),De&&yi(C,G),U;if(B===null){for(;G<T.length;G++)B=m(C,T[G],L),B!==null&&(S=l(B,S,G),H===null?U=B:H.sibling=B,H=B);return De&&yi(C,G),U}for(B=r(C,B);G<T.length;G++)we=R(B,C,G,T[G],L),we!==null&&(t&&we.alternate!==null&&B.delete(we.key===null?G:we.key),S=l(we,S,G),H===null?U=we:H.sibling=we,H=we);return t&&B.forEach(function(zt){return e(C,zt)}),De&&yi(C,G),U}function D(C,S,T,L){var U=bo(T);if(typeof U!="function")throw Error(F(150));if(T=U.call(T),T==null)throw Error(F(151));for(var H=U=null,B=S,G=S=0,we=null,se=T.next();B!==null&&!se.done;G++,se=T.next()){B.index>G?(we=B,B=null):we=B.sibling;var zt=y(C,B,se.value,L);if(zt===null){B===null&&(B=we);break}t&&B&&zt.alternate===null&&e(C,B),S=l(zt,S,G),H===null?U=zt:H.sibling=zt,H=zt,B=we}if(se.done)return n(C,B),De&&yi(C,G),U;if(B===null){for(;!se.done;G++,se=T.next())se=m(C,se.value,L),se!==null&&(S=l(se,S,G),H===null?U=se:H.sibling=se,H=se);return De&&yi(C,G),U}for(B=r(C,B);!se.done;G++,se=T.next())se=R(B,C,G,se.value,L),se!==null&&(t&&se.alternate!==null&&B.delete(se.key===null?G:se.key),S=l(se,S,G),H===null?U=se:H.sibling=se,H=se);return t&&B.forEach(function(ai){return e(C,ai)}),De&&yi(C,G),U}function K(C,S,T,L){if(typeof T=="object"&&T!==null&&T.type===gs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case nu:e:{for(var U=T.key,H=S;H!==null;){if(H.key===U){if(U=T.type,U===gs){if(H.tag===7){n(C,H.sibling),S=s(H,T.props.children),S.return=C,C=S;break e}}else if(H.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Or&&zy(U)===H.type){n(C,H.sibling),S=s(H,T.props),S.ref=Ho(C,H,T),S.return=C,C=S;break e}n(C,H);break}else e(C,H);H=H.sibling}T.type===gs?(S=Ai(T.props.children,C.mode,L,T.key),S.return=C,C=S):(L=Ou(T.type,T.key,T.props,null,C.mode,L),L.ref=Ho(C,S,T),L.return=C,C=L)}return a(C);case ps:e:{for(H=T.key;S!==null;){if(S.key===H)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){n(C,S.sibling),S=s(S,T.children||[]),S.return=C,C=S;break e}else{n(C,S);break}else e(C,S);S=S.sibling}S=eh(T,C.mode,L),S.return=C,C=S}return a(C);case Or:return H=T._init,K(C,S,H(T._payload),L)}if(Xo(T))return x(C,S,T,L);if(bo(T))return D(C,S,T,L);hu(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(n(C,S.sibling),S=s(S,T),S.return=C,C=S):(n(C,S),S=Zd(T,C.mode,L),S.return=C,C=S),a(C)):n(C,S)}return K}var $s=RE(!0),NE=RE(!1),Ql={},Hn=si(Ql),Nl=si(Ql),xl=si(Ql);function Ti(t){if(t===Ql)throw Error(F(174));return t}function og(t,e){switch(Ne(xl,e),Ne(Nl,t),Ne(Hn,Ql),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}Oe(Hn),Ne(Hn,e)}function Vs(){Oe(Hn),Oe(Nl),Oe(xl)}function xE(t){Ti(xl.current);var e=Ti(Hn.current),n=Rh(e,t.type);e!==n&&(Ne(Nl,t),Ne(Hn,n))}function lg(t){Nl.current===t&&(Oe(Hn),Oe(Nl))}var Fe=si(0);function Zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kd=[];function ag(){for(var t=0;t<Kd.length;t++)Kd[t]._workInProgressVersionPrimary=null;Kd.length=0}var Ru=vr.ReactCurrentDispatcher,qd=vr.ReactCurrentBatchConfig,Mi=0,be=null,Qe=null,tt=null,ec=!1,ll=!1,Al=0,mL=0;function ht(){throw Error(F(321))}function ug(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function cg(t,e,n,r,s,l){if(Mi=l,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ru.current=t===null||t.memoizedState===null?EL:SL,t=n(r,s),ll){l=0;do{if(ll=!1,Al=0,25<=l)throw Error(F(301));l+=1,tt=Qe=null,e.updateQueue=null,Ru.current=CL,t=n(r,s)}while(ll)}if(Ru.current=tc,e=Qe!==null&&Qe.next!==null,Mi=0,tt=Qe=be=null,ec=!1,e)throw Error(F(300));return t}function fg(){var t=Al!==0;return Al=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?be.memoizedState=tt=t:tt=tt.next=t,tt}function pn(){if(Qe===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=tt===null?be.memoizedState:tt.next;if(e!==null)tt=e,Qe=t;else{if(t===null)throw Error(F(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},tt===null?be.memoizedState=tt=t:tt=tt.next=t}return tt}function Pl(t,e){return typeof e=="function"?e(t):e}function Yd(t){var e=pn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Qe,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var a=s.next;s.next=l.next,l.next=a}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var c=a=null,d=null,h=l;do{var v=h.lane;if((Mi&v)===v)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(c=d=m,a=r):d=d.next=m,be.lanes|=v,Fi|=v}h=h.next}while(h!==null&&h!==l);d===null?a=r:d.next=c,On(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=d,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do l=s.lane,be.lanes|=l,Fi|=l,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qd(t){var e=pn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,l=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do l=t(l,a.action),a=a.next;while(a!==s);On(l,e.memoizedState)||(Ot=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,r]}function AE(){}function PE(t,e){var n=be,r=pn(),s=e(),l=!On(r.memoizedState,s);if(l&&(r.memoizedState=s,Ot=!0),r=r.queue,dg(DE.bind(null,n,r,t),[t]),r.getSnapshot!==e||l||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Ol(9,LE.bind(null,n,r,s,e),void 0,null),it===null)throw Error(F(349));Mi&30||OE(n,e,s)}return s}function OE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function LE(t,e,n,r){e.value=n,e.getSnapshot=r,ME(e)&&FE(t)}function DE(t,e,n){return n(function(){ME(e)&&FE(t)})}function ME(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function FE(t){var e=hr(t,1);e!==null&&An(e,t,1,-1)}function By(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pl,lastRenderedState:t},e.queue=t,t=t.dispatch=wL.bind(null,be,t),[e.memoizedState,t]}function Ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bE(){return pn().memoizedState}function Nu(t,e,n,r){var s=Wn();be.flags|=t,s.memoizedState=Ol(1|e,n,void 0,r===void 0?null:r)}function bc(t,e,n,r){var s=pn();r=r===void 0?null:r;var l=void 0;if(Qe!==null){var a=Qe.memoizedState;if(l=a.destroy,r!==null&&ug(r,a.deps)){s.memoizedState=Ol(e,n,l,r);return}}be.flags|=t,s.memoizedState=Ol(1|e,n,l,r)}function Hy(t,e){return Nu(8390656,8,t,e)}function dg(t,e){return bc(2048,8,t,e)}function UE(t,e){return bc(4,2,t,e)}function WE(t,e){return bc(4,4,t,e)}function zE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function BE(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,zE.bind(null,e,t),n)}function hg(){}function HE(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ug(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $E(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ug(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function VE(t,e,n){return Mi&21?(On(n,e)||(n=Kw(),be.lanes|=n,Fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function vL(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=qd.transition;qd.transition={};try{t(!1),e()}finally{Se=n,qd.transition=r}}function GE(){return pn().memoizedState}function yL(t,e,n){var r=qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jE(t))KE(e,n);else if(n=CE(t,e,n,r),n!==null){var s=It();An(n,t,r,s),qE(n,e,r)}}function wL(t,e,n){var r=qr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jE(t))KE(e,s);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var a=e.lastRenderedState,c=l(a,n);if(s.hasEagerState=!0,s.eagerState=c,On(c,a)){var d=e.interleaved;d===null?(s.next=s,ig(e)):(s.next=d.next,d.next=s),e.interleaved=s;return}}catch{}finally{}n=CE(t,e,s,r),n!==null&&(s=It(),An(n,t,r,s),qE(n,e,r))}}function jE(t){var e=t.alternate;return t===be||e!==null&&e===be}function KE(t,e){ll=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vp(t,n)}}var tc={readContext:hn,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},EL={readContext:hn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:Hy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4194308,4,zE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nu(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yL.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:By,useDebugValue:hg,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=By(!1),e=t[0];return t=vL.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,s=Wn();if(De){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),it===null)throw Error(F(349));Mi&30||OE(r,e,n)}s.memoizedState=n;var l={value:n,getSnapshot:e};return s.queue=l,Hy(DE.bind(null,r,l,t),[t]),r.flags|=2048,Ol(9,LE.bind(null,r,l,n,e),void 0,null),n},useId:function(){var t=Wn(),e=it.identifierPrefix;if(De){var n=sr,r=ir;n=(r&~(1<<32-xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Al++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mL++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SL={readContext:hn,useCallback:HE,useContext:hn,useEffect:dg,useImperativeHandle:BE,useInsertionEffect:UE,useLayoutEffect:WE,useMemo:$E,useReducer:Yd,useRef:bE,useState:function(){return Yd(Pl)},useDebugValue:hg,useDeferredValue:function(t){var e=pn();return VE(e,Qe.memoizedState,t)},useTransition:function(){var t=Yd(Pl)[0],e=pn().memoizedState;return[t,e]},useMutableSource:AE,useSyncExternalStore:PE,useId:GE,unstable_isNewReconciler:!1},CL={readContext:hn,useCallback:HE,useContext:hn,useEffect:dg,useImperativeHandle:BE,useInsertionEffect:UE,useLayoutEffect:WE,useMemo:$E,useReducer:Qd,useRef:bE,useState:function(){return Qd(Pl)},useDebugValue:hg,useDeferredValue:function(t){var e=pn();return Qe===null?e.memoizedState=t:VE(e,Qe.memoizedState,t)},useTransition:function(){var t=Qd(Pl)[0],e=pn().memoizedState;return[t,e]},useMutableSource:AE,useSyncExternalStore:PE,useId:GE,unstable_isNewReconciler:!1};function Gs(t,e){try{var n="",r=e;do n+=XP(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:t,source:e,stack:s,digest:null}}function Xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IL=typeof WeakMap=="function"?WeakMap:Map;function YE(t,e,n){n=ur(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rc||(rc=!0,op=r),Qh(t,e)},n}function QE(t,e,n){n=ur(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qh(t,e)}}var l=t.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IL;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=UL.bind(null,t,e,n),e.then(t,t))}function Vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ur(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var TL=vr.ReactCurrentOwner,Ot=!1;function Ct(t,e,n,r){e.child=t===null?NE(e,null,n,r):$s(e,t.child,n,r)}function jy(t,e,n,r,s){n=n.render;var l=e.ref;return Os(e,s),r=cg(t,e,n,r,l,s),n=fg(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,pr(t,e,s)):(De&&n&&Jp(e),e.flags|=1,Ct(t,e,r,s),e.child)}function Ky(t,e,n,r,s){if(t===null){var l=n.type;return typeof l=="function"&&!Eg(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=l,XE(t,e,l,r,s)):(t=Ou(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!(t.lanes&s)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Il,n(a,r)&&t.ref===e.ref)return pr(t,e,s)}return e.flags|=1,t=Yr(l,r),t.ref=e.ref,t.return=e,e.child=t}function XE(t,e,n,r,s){if(t!==null){var l=t.memoizedProps;if(Il(l,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=l,(t.lanes&s)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,pr(t,e,s)}return Xh(t,e,n,r,s)}function JE(t,e,n){var r=e.pendingProps,s=r.children,l=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Ts,Kt),Kt|=n;else{if(!(n&1073741824))return t=l!==null?l.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(Ts,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Ne(Ts,Kt),Kt|=r}else l!==null?(r=l.baseLanes|n,e.memoizedState=null):r=n,Ne(Ts,Kt),Kt|=r;return Ct(t,e,s,n),e.child}function ZE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xh(t,e,n,r,s){var l=Ft(n)?Li:mt.current;return l=Bs(e,l),Os(e,s),n=cg(t,e,n,r,l,s),r=fg(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,pr(t,e,s)):(De&&r&&Jp(e),e.flags|=1,Ct(t,e,n,s),e.child)}function qy(t,e,n,r,s){if(Ft(n)){var l=!0;Ku(e)}else l=!1;if(Os(e,s),e.stateNode===null)xu(t,e),kE(e,n,r),Yh(e,n,r,s),r=!0;else if(t===null){var a=e.stateNode,c=e.memoizedProps;a.props=c;var d=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=hn(h):(h=Ft(n)?Li:mt.current,h=Bs(e,h));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||d!==h)&&Wy(e,a,r,h),Lr=!1;var y=e.memoizedState;a.state=y,Ju(e,r,a,s),d=e.memoizedState,c!==r||y!==d||Mt.current||Lr?(typeof v=="function"&&(qh(e,n,v,r),d=e.memoizedState),(c=Lr||Uy(e,n,c,r,y,d,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=d),a.props=r,a.state=d,a.context=h,r=c):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,IE(t,e),c=e.memoizedProps,h=e.type===e.elementType?c:Cn(e.type,c),a.props=h,m=e.pendingProps,y=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=hn(d):(d=Ft(n)?Li:mt.current,d=Bs(e,d));var R=n.getDerivedStateFromProps;(v=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==m||y!==d)&&Wy(e,a,r,d),Lr=!1,y=e.memoizedState,a.state=y,Ju(e,r,a,s);var x=e.memoizedState;c!==m||y!==x||Mt.current||Lr?(typeof R=="function"&&(qh(e,n,R,r),x=e.memoizedState),(h=Lr||Uy(e,n,h,r,y,x,d)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,d)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),a.props=r,a.state=x,a.context=d,r=h):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Jh(t,e,n,r,l,s)}function Jh(t,e,n,r,s,l){ZE(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return s&&Ly(e,n,!1),pr(t,e,l);r=e.stateNode,TL.current=e;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=$s(e,t.child,null,l),e.child=$s(e,null,c,l)):Ct(t,e,c,l),e.memoizedState=r.state,s&&Ly(e,n,!0),e.child}function e1(t){var e=t.stateNode;e.pendingContext?Oy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Oy(t,e.context,!1),og(t,e.containerInfo)}function Yy(t,e,n,r,s){return Hs(),eg(s),e.flags|=256,Ct(t,e,n,r),e.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function t1(t,e,n){var r=e.pendingProps,s=Fe.current,l=!1,a=(e.flags&128)!==0,c;if((c=a)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(l=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ne(Fe,s&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,l?(r=e.mode,l=e.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=zc(a,r,0,null),t=Ai(t,r,n,null),l.return=e,t.return=e,l.sibling=t,e.child=l,e.child.memoizedState=ep(n),e.memoizedState=Zh,t):pg(e,a));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return kL(t,e,a,r,c,s,n);if(l){l=r.fallback,a=e.mode,s=t.child,c=s.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=d,e.deletions=null):(r=Yr(s,d),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?l=Yr(c,l):(l=Ai(l,a,n,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,r=l,l=e.child,a=t.child.memoizedState,a=a===null?ep(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=t.childLanes&~n,e.memoizedState=Zh,r}return l=t.child,t=l.sibling,r=Yr(l,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pg(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pu(t,e,n,r){return r!==null&&eg(r),$s(e,t.child,null,n),t=pg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kL(t,e,n,r,s,l,a){if(n)return e.flags&256?(e.flags&=-257,r=Xd(Error(F(422))),pu(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(l=r.fallback,s=e.mode,r=zc({mode:"visible",children:r.children},s,0,null),l=Ai(l,s,a,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,e.mode&1&&$s(e,t.child,null,a),e.child.memoizedState=ep(a),e.memoizedState=Zh,l);if(!(e.mode&1))return pu(t,e,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(F(419)),r=Xd(l,r,void 0),pu(t,e,a,r)}if(c=(a&t.childLanes)!==0,Ot||c){if(r=it,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,hr(t,s),An(r,t,s,-1))}return wg(),r=Xd(Error(F(421))),pu(t,e,a,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=WL.bind(null,t),s._reactRetry=e,null):(t=l.treeContext,qt=Gr(s.nextSibling),Yt=e,De=!0,Tn=null,t!==null&&(un[cn++]=ir,un[cn++]=sr,un[cn++]=Di,ir=t.id,sr=t.overflow,Di=e),e=pg(e,r.children),e.flags|=4096,e)}function Qy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kh(t.return,e,n)}function Jd(t,e,n,r,s){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function n1(t,e,n){var r=e.pendingProps,s=r.revealOrder,l=r.tail;if(Ct(t,e,r.children,n),r=Fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qy(t,n,e);else if(t.tag===19)Qy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne(Fe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Zu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Jd(e,!1,s,n,l);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Zu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Jd(e,!0,n,null,l);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RL(t,e,n){switch(e.tag){case 3:e1(e),Hs();break;case 5:xE(e);break;case 1:Ft(e.type)&&Ku(e);break;case 4:og(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ne(Qu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Fe,Fe.current&1),e.flags|=128,null):n&e.child.childLanes?t1(t,e,n):(Ne(Fe,Fe.current&1),t=pr(t,e,n),t!==null?t.sibling:null);Ne(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return n1(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,JE(t,e,n)}return pr(t,e,n)}var r1,tp,i1,s1;r1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tp=function(){};i1=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ti(Hn.current);var l=null;switch(n){case"input":s=Ch(t,s),r=Ch(t,r),l=[];break;case"select":s=Ue({},s,{value:void 0}),r=Ue({},r,{value:void 0}),l=[];break;case"textarea":s=kh(t,s),r=kh(t,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gu)}Nh(n,r);var a;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var c=s[h];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ml.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in r){var d=r[h];if(c=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&d!==c&&(d!=null||c!=null))if(h==="style")if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(l||(l=[]),l.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(l=l||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(l=l||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ml.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Ae("scroll",t),l||c===d||(l=[])):(l=l||[]).push(h,d))}n&&(l=l||[]).push("style",n);var h=l;(e.updateQueue=h)&&(e.flags|=4)}};s1=function(t,e,n,r){n!==r&&(e.flags|=4)};function $o(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NL(t,e,n){var r=e.pendingProps;switch(Zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Ft(e.type)&&ju(),pt(e),null;case 3:return r=e.stateNode,Vs(),Oe(Mt),Oe(mt),ag(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(up(Tn),Tn=null))),tp(t,e),pt(e),null;case 5:lg(e);var s=Ti(xl.current);if(n=e.type,t!==null&&e.stateNode!=null)i1(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return pt(e),null}if(t=Ti(Hn.current),du(e)){r=e.stateNode,n=e.type;var l=e.memoizedProps;switch(r[zn]=e,r[Rl]=l,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(s=0;s<Zo.length;s++)Ae(Zo[s],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":sy(r,l),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Ae("invalid",r);break;case"textarea":ly(r,l),Ae("invalid",r)}Nh(n,l),s=null;for(var a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&fu(r.textContent,c,t),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&fu(r.textContent,c,t),s=["children",""+c]):ml.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&Ae("scroll",r)}switch(n){case"input":ru(r),oy(r,l,!0);break;case"textarea":ru(r),ay(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Gu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ow(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[zn]=e,t[Rl]=r,r1(t,e,!1,!1),e.stateNode=t;e:{switch(a=xh(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),s=r;break;case"iframe":case"object":case"embed":Ae("load",t),s=r;break;case"video":case"audio":for(s=0;s<Zo.length;s++)Ae(Zo[s],t);s=r;break;case"source":Ae("error",t),s=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),s=r;break;case"details":Ae("toggle",t),s=r;break;case"input":sy(t,r),s=Ch(t,r),Ae("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ue({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":ly(t,r),s=kh(t,r),Ae("invalid",t);break;default:s=r}Nh(n,s),c=s;for(l in c)if(c.hasOwnProperty(l)){var d=c[l];l==="style"?Mw(t,d):l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Lw(t,d)):l==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&vl(t,d):typeof d=="number"&&vl(t,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ml.hasOwnProperty(l)?d!=null&&l==="onScroll"&&Ae("scroll",t):d!=null&&Up(t,l,d,a))}switch(n){case"input":ru(t),oy(t,r,!1);break;case"textarea":ru(t),ay(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ei(r.value));break;case"select":t.multiple=!!r.multiple,l=r.value,l!=null?Ns(t,!!r.multiple,l,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Gu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)s1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ti(xl.current),Ti(Hn.current),du(e)){if(r=e.stateNode,n=e.memoizedProps,r[zn]=e,(l=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:fu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fu(r.nodeValue,n,(t.mode&1)!==0)}l&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zn]=e,e.stateNode=r}return pt(e),null;case 13:if(Oe(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&qt!==null&&e.mode&1&&!(e.flags&128))SE(),Hs(),e.flags|=98560,l=!1;else if(l=du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(F(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(F(317));l[zn]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),l=!1}else Tn!==null&&(up(Tn),Tn=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Fe.current&1?Je===0&&(Je=3):wg())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Vs(),tp(t,e),t===null&&Tl(e.stateNode.containerInfo),pt(e),null;case 10:return rg(e.type._context),pt(e),null;case 17:return Ft(e.type)&&ju(),pt(e),null;case 19:if(Oe(Fe),l=e.memoizedState,l===null)return pt(e),null;if(r=(e.flags&128)!==0,a=l.rendering,a===null)if(r)$o(l,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Zu(t),a!==null){for(e.flags|=128,$o(l,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)l=n,t=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,t=a.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne(Fe,Fe.current&1|2),e.child}t=t.sibling}l.tail!==null&&Ve()>js&&(e.flags|=128,r=!0,$o(l,!1),e.lanes=4194304)}else{if(!r)if(t=Zu(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!De)return pt(e),null}else 2*Ve()-l.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,r=!0,$o(l,!1),e.lanes=4194304);l.isBackwards?(a.sibling=e.child,e.child=a):(n=l.last,n!==null?n.sibling=a:e.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ve(),e.sibling=null,n=Fe.current,Ne(Fe,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return yg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function xL(t,e){switch(Zp(e),e.tag){case 1:return Ft(e.type)&&ju(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),Oe(Mt),Oe(mt),ag(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lg(e),null;case 13:if(Oe(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(Fe),null;case 4:return Vs(),null;case 10:return rg(e.type._context),null;case 22:case 23:return yg(),null;case 24:return null;default:return null}}var gu=!1,gt=!1,AL=typeof WeakSet=="function"?WeakSet:Set,V=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function np(t,e,n){try{n()}catch(r){ze(t,e,r)}}var Xy=!1;function PL(t,e){if(Wh=Hu,t=uE(),Xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,c=-1,d=-1,h=0,v=0,m=t,y=null;t:for(;;){for(var R;m!==n||s!==0&&m.nodeType!==3||(c=a+s),m!==l||r!==0&&m.nodeType!==3||(d=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(R=m.firstChild)!==null;)y=m,m=R;for(;;){if(m===t)break t;if(y===n&&++h===s&&(c=a),y===l&&++v===r&&(d=a),(R=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=R}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:t,selectionRange:n},Hu=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,K=x.memoizedState,C=e.stateNode,S=C.getSnapshotBeforeUpdate(e.elementType===e.type?D:Cn(e.type,D),K);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(L){ze(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return x=Xy,Xy=!1,x}function al(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var l=s.destroy;s.destroy=void 0,l!==void 0&&np(e,n,l)}s=s.next}while(s!==r)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o1(t){var e=t.alternate;e!==null&&(t.alternate=null,o1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[Rl],delete e[$h],delete e[hL],delete e[pL])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l1(t){return t.tag===5||t.tag===3||t.tag===4}function Jy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gu));else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}function sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sp(t,e,n),t=t.sibling;t!==null;)sp(t,e,n),t=t.sibling}var lt=null,In=!1;function Ar(t,e,n){for(n=n.child;n!==null;)a1(t,e,n),n=n.sibling}function a1(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:gt||Is(n,e);case 6:var r=lt,s=In;lt=null,Ar(t,e,n),lt=r,In=s,lt!==null&&(In?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(In?(t=lt,n=n.stateNode,t.nodeType===8?Gd(t.parentNode,n):t.nodeType===1&&Gd(t,n),Sl(t)):Gd(lt,n.stateNode));break;case 4:r=lt,s=In,lt=n.stateNode.containerInfo,In=!0,Ar(t,e,n),lt=r,In=s;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&np(n,e,a),s=s.next}while(s!==r)}Ar(t,e,n);break;case 1:if(!gt&&(Is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ze(n,e,c)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Ar(t,e,n),gt=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function Zy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AL),e.forEach(function(r){var s=zL.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=t,a=e,c=a;e:for(;c!==null;){switch(c.tag){case 5:lt=c.stateNode,In=!1;break e;case 3:lt=c.stateNode.containerInfo,In=!0;break e;case 4:lt=c.stateNode.containerInfo,In=!0;break e}c=c.return}if(lt===null)throw Error(F(160));a1(l,a,s),lt=null,In=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(h){ze(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u1(e,t),e=e.sibling}function u1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Un(t),r&4){try{al(3,t,t.return),Uc(3,t)}catch(D){ze(t,t.return,D)}try{al(5,t,t.return)}catch(D){ze(t,t.return,D)}}break;case 1:Sn(e,t),Un(t),r&512&&n!==null&&Is(n,n.return);break;case 5:if(Sn(e,t),Un(t),r&512&&n!==null&&Is(n,n.return),t.flags&32){var s=t.stateNode;try{vl(s,"")}catch(D){ze(t,t.return,D)}}if(r&4&&(s=t.stateNode,s!=null)){var l=t.memoizedProps,a=n!==null?n.memoizedProps:l,c=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&Aw(s,l),xh(c,a);var h=xh(c,l);for(a=0;a<d.length;a+=2){var v=d[a],m=d[a+1];v==="style"?Mw(s,m):v==="dangerouslySetInnerHTML"?Lw(s,m):v==="children"?vl(s,m):Up(s,v,m,h)}switch(c){case"input":Ih(s,l);break;case"textarea":Pw(s,l);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var R=l.value;R!=null?Ns(s,!!l.multiple,R,!1):y!==!!l.multiple&&(l.defaultValue!=null?Ns(s,!!l.multiple,l.defaultValue,!0):Ns(s,!!l.multiple,l.multiple?[]:"",!1))}s[Rl]=l}catch(D){ze(t,t.return,D)}}break;case 6:if(Sn(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,l=t.memoizedProps;try{s.nodeValue=l}catch(D){ze(t,t.return,D)}}break;case 3:if(Sn(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sl(e.containerInfo)}catch(D){ze(t,t.return,D)}break;case 4:Sn(e,t),Un(t);break;case 13:Sn(e,t),Un(t),s=t.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(mg=Ve())),r&4&&Zy(t);break;case 22:if(v=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(h=gt)||v,Sn(e,t),gt=h):Sn(e,t),Un(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!v&&t.mode&1)for(V=t,v=t.child;v!==null;){for(m=V=v;V!==null;){switch(y=V,R=y.child,y.tag){case 0:case 11:case 14:case 15:al(4,y,y.return);break;case 1:Is(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){ze(r,n,D)}}break;case 5:Is(y,y.return);break;case 22:if(y.memoizedState!==null){t0(m);continue}}R!==null?(R.return=y,V=R):t0(m)}v=v.sibling}e:for(v=null,m=t;;){if(m.tag===5){if(v===null){v=m;try{s=m.stateNode,h?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=m.stateNode,d=m.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Dw("display",a))}catch(D){ze(t,t.return,D)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){ze(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Sn(e,t),Un(t),r&4&&Zy(t);break;case 21:break;default:Sn(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l1(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(vl(s,""),r.flags&=-33);var l=Jy(t);sp(t,l,s);break;case 3:case 4:var a=r.stateNode.containerInfo,c=Jy(t);ip(t,c,a);break;default:throw Error(F(161))}}catch(d){ze(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OL(t,e,n){V=t,c1(t)}function c1(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var s=V,l=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||gu;if(!a){var c=s.alternate,d=c!==null&&c.memoizedState!==null||gt;c=gu;var h=gt;if(gu=a,(gt=d)&&!h)for(V=s;V!==null;)a=V,d=a.child,a.tag===22&&a.memoizedState!==null?n0(s):d!==null?(d.return=a,V=d):n0(s);for(;l!==null;)V=l,c1(l),l=l.sibling;V=s,gu=c,gt=h}e0(t)}else s.subtreeFlags&8772&&l!==null?(l.return=s,V=l):e0(t)}}function e0(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||Uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&by(e,l,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}by(e,a,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Sl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}gt||e.flags&512&&rp(e)}catch(y){ze(e,e.return,y)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function t0(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function n0(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(d){ze(e,n,d)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(d){ze(e,s,d)}}var l=e.return;try{rp(e)}catch(d){ze(e,l,d)}break;case 5:var a=e.return;try{rp(e)}catch(d){ze(e,a,d)}}}catch(d){ze(e,e.return,d)}if(e===t){V=null;break}var c=e.sibling;if(c!==null){c.return=e.return,V=c;break}V=e.return}}var LL=Math.ceil,nc=vr.ReactCurrentDispatcher,gg=vr.ReactCurrentOwner,dn=vr.ReactCurrentBatchConfig,ge=0,it=null,Ke=null,ut=0,Kt=0,Ts=si(0),Je=0,Ll=null,Fi=0,Wc=0,_g=0,ul=null,Pt=null,mg=0,js=1/0,nr=null,rc=!1,op=null,Kr=null,_u=!1,Br=null,ic=0,cl=0,lp=null,Au=-1,Pu=0;function It(){return ge&6?Ve():Au!==-1?Au:Au=Ve()}function qr(t){return t.mode&1?ge&2&&ut!==0?ut&-ut:_L.transition!==null?(Pu===0&&(Pu=Kw()),Pu):(t=Se,t!==0||(t=window.event,t=t===void 0?16:eE(t.type)),t):1}function An(t,e,n,r){if(50<cl)throw cl=0,lp=null,Error(F(185));Kl(t,n,r),(!(ge&2)||t!==it)&&(t===it&&(!(ge&2)&&(Wc|=n),Je===4&&Mr(t,ut)),bt(t,r),n===1&&ge===0&&!(e.mode&1)&&(js=Ve()+500,Mc&&oi()))}function bt(t,e){var n=t.callbackNode;_O(t,e);var r=Bu(t,t===it?ut:0);if(r===0)n!==null&&fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fy(n),e===1)t.tag===0?gL(r0.bind(null,t)):yE(r0.bind(null,t)),fL(function(){!(ge&6)&&oi()}),n=null;else{switch(qw(r)){case 1:n=$p;break;case 4:n=Gw;break;case 16:n=zu;break;case 536870912:n=jw;break;default:n=zu}n=v1(n,f1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f1(t,e){if(Au=-1,Pu=0,ge&6)throw Error(F(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var r=Bu(t,t===it?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sc(t,r);else{e=r;var s=ge;ge|=2;var l=h1();(it!==t||ut!==e)&&(nr=null,js=Ve()+500,xi(t,e));do try{FL();break}catch(c){d1(t,c)}while(1);ng(),nc.current=l,ge=s,Ke!==null?e=0:(it=null,ut=0,e=Je)}if(e!==0){if(e===2&&(s=Dh(t),s!==0&&(r=s,e=ap(t,s))),e===1)throw n=Ll,xi(t,0),Mr(t,r),bt(t,Ve()),n;if(e===6)Mr(t,r);else{if(s=t.current.alternate,!(r&30)&&!DL(s)&&(e=sc(t,r),e===2&&(l=Dh(t),l!==0&&(r=l,e=ap(t,l))),e===1))throw n=Ll,xi(t,0),Mr(t,r),bt(t,Ve()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:wi(t,Pt,nr);break;case 3:if(Mr(t,r),(r&130023424)===r&&(e=mg+500-Ve(),10<e)){if(Bu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Hh(wi.bind(null,t,Pt,nr),e);break}wi(t,Pt,nr);break;case 4:if(Mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var a=31-xn(r);l=1<<a,a=e[a],a>s&&(s=a),r&=~l}if(r=s,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LL(r/1960))-r,10<r){t.timeoutHandle=Hh(wi.bind(null,t,Pt,nr),r);break}wi(t,Pt,nr);break;case 5:wi(t,Pt,nr);break;default:throw Error(F(329))}}}return bt(t,Ve()),t.callbackNode===n?f1.bind(null,t):null}function ap(t,e){var n=ul;return t.current.memoizedState.isDehydrated&&(xi(t,e).flags|=256),t=sc(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&up(e)),t}function up(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function DL(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!On(l(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mr(t,e){for(e&=~_g,e&=~Wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xn(e),r=1<<n;t[n]=-1,e&=~r}}function r0(t){if(ge&6)throw Error(F(327));Ls();var e=Bu(t,0);if(!(e&1))return bt(t,Ve()),null;var n=sc(t,e);if(t.tag!==0&&n===2){var r=Dh(t);r!==0&&(e=r,n=ap(t,r))}if(n===1)throw n=Ll,xi(t,0),Mr(t,e),bt(t,Ve()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wi(t,Pt,nr),bt(t,Ve()),null}function vg(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(js=Ve()+500,Mc&&oi())}}function bi(t){Br!==null&&Br.tag===0&&!(ge&6)&&Ls();var e=ge;ge|=1;var n=dn.transition,r=Se;try{if(dn.transition=null,Se=1,t)return t()}finally{Se=r,dn.transition=n,ge=e,!(ge&6)&&oi()}}function yg(){Kt=Ts.current,Oe(Ts)}function xi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cL(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:Vs(),Oe(Mt),Oe(mt),ag();break;case 5:lg(r);break;case 4:Vs();break;case 13:Oe(Fe);break;case 19:Oe(Fe);break;case 10:rg(r.type._context);break;case 22:case 23:yg()}n=n.return}if(it=t,Ke=t=Yr(t.current,null),ut=Kt=e,Je=0,Ll=null,_g=Wc=Fi=0,Pt=ul=null,Ii!==null){for(e=0;e<Ii.length;e++)if(n=Ii[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=s,r.next=a}n.pending=r}Ii=null}return t}function d1(t,e){do{var n=Ke;try{if(ng(),Ru.current=tc,ec){for(var r=be.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ec=!1}if(Mi=0,tt=Qe=be=null,ll=!1,Al=0,gg.current=null,n===null||n.return===null){Je=1,Ll=e,Ke=null;break}e:{var l=t,a=n.return,c=n,d=e;if(e=ut,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,v=c,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var y=v.alternate;y?(v.updateQueue=y.updateQueue,v.memoizedState=y.memoizedState,v.lanes=y.lanes):(v.updateQueue=null,v.memoizedState=null)}var R=Vy(a);if(R!==null){R.flags&=-257,Gy(R,a,c,l,e),R.mode&1&&$y(l,h,e),e=R,d=h;var x=e.updateQueue;if(x===null){var D=new Set;D.add(d),e.updateQueue=D}else x.add(d);break e}else{if(!(e&1)){$y(l,h,e),wg();break e}d=Error(F(426))}}else if(De&&c.mode&1){var K=Vy(a);if(K!==null){!(K.flags&65536)&&(K.flags|=256),Gy(K,a,c,l,e),eg(Gs(d,c));break e}}l=d=Gs(d,c),Je!==4&&(Je=2),ul===null?ul=[l]:ul.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var C=YE(l,d,e);Fy(l,C);break e;case 1:c=d;var S=l.type,T=l.stateNode;if(!(l.flags&128)&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Kr===null||!Kr.has(T)))){l.flags|=65536,e&=-e,l.lanes|=e;var L=QE(l,c,e);Fy(l,L);break e}}l=l.return}while(l!==null)}g1(n)}catch(U){e=U,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(1)}function h1(){var t=nc.current;return nc.current=tc,t===null?tc:t}function wg(){(Je===0||Je===3||Je===2)&&(Je=4),it===null||!(Fi&268435455)&&!(Wc&268435455)||Mr(it,ut)}function sc(t,e){var n=ge;ge|=2;var r=h1();(it!==t||ut!==e)&&(nr=null,xi(t,e));do try{ML();break}catch(s){d1(t,s)}while(1);if(ng(),ge=n,nc.current=r,Ke!==null)throw Error(F(261));return it=null,ut=0,Je}function ML(){for(;Ke!==null;)p1(Ke)}function FL(){for(;Ke!==null&&!lO();)p1(Ke)}function p1(t){var e=m1(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?g1(t):Ke=e,gg.current=null}function g1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xL(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,Ke=null;return}}else if(n=NL(n,e,Kt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Je===0&&(Je=5)}function wi(t,e,n){var r=Se,s=dn.transition;try{dn.transition=null,Se=1,bL(t,e,n,r)}finally{dn.transition=s,Se=r}return null}function bL(t,e,n,r){do Ls();while(Br!==null);if(ge&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var l=n.lanes|n.childLanes;if(mO(t,l),t===it&&(Ke=it=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_u||(_u=!0,v1(zu,function(){return Ls(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=dn.transition,dn.transition=null;var a=Se;Se=1;var c=ge;ge|=4,gg.current=null,PL(t,n),u1(n,t),rL(zh),Hu=!!Wh,zh=Wh=null,t.current=n,OL(n),aO(),ge=c,Se=a,dn.transition=l}else t.current=n;if(_u&&(_u=!1,Br=t,ic=s),l=t.pendingLanes,l===0&&(Kr=null),fO(n.stateNode),bt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(rc)throw rc=!1,t=op,op=null,t;return ic&1&&t.tag!==0&&Ls(),l=t.pendingLanes,l&1?t===lp?cl++:(cl=0,lp=t):cl=0,oi(),null}function Ls(){if(Br!==null){var t=qw(ic),e=dn.transition,n=Se;try{if(dn.transition=null,Se=16>t?16:t,Br===null)var r=!1;else{if(t=Br,Br=null,ic=0,ge&6)throw Error(F(331));var s=ge;for(ge|=4,V=t.current;V!==null;){var l=V,a=l.child;if(V.flags&16){var c=l.deletions;if(c!==null){for(var d=0;d<c.length;d++){var h=c[d];for(V=h;V!==null;){var v=V;switch(v.tag){case 0:case 11:case 15:al(8,v,l)}var m=v.child;if(m!==null)m.return=v,V=m;else for(;V!==null;){v=V;var y=v.sibling,R=v.return;if(o1(v),v===h){V=null;break}if(y!==null){y.return=R,V=y;break}V=R}}}var x=l.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var K=D.sibling;D.sibling=null,D=K}while(D!==null)}}V=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,V=a;else e:for(;V!==null;){if(l=V,l.flags&2048)switch(l.tag){case 0:case 11:case 15:al(9,l,l.return)}var C=l.sibling;if(C!==null){C.return=l.return,V=C;break e}V=l.return}}var S=t.current;for(V=S;V!==null;){a=V;var T=a.child;if(a.subtreeFlags&2064&&T!==null)T.return=a,V=T;else e:for(a=S;V!==null;){if(c=V,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Uc(9,c)}}catch(U){ze(c,c.return,U)}if(c===a){V=null;break e}var L=c.sibling;if(L!==null){L.return=c.return,V=L;break e}V=c.return}}if(ge=s,oi(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(Ac,t)}catch{}r=!0}return r}finally{Se=n,dn.transition=e}}return!1}function i0(t,e,n){e=Gs(n,e),e=YE(t,e,1),t=jr(t,e,1),e=It(),t!==null&&(Kl(t,1,e),bt(t,e))}function ze(t,e,n){if(t.tag===3)i0(t,t,n);else for(;e!==null;){if(e.tag===3){i0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kr===null||!Kr.has(r))){t=Gs(n,t),t=QE(e,t,1),e=jr(e,t,1),t=It(),e!==null&&(Kl(e,1,t),bt(e,t));break}}e=e.return}}function UL(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ut&n)===n&&(Je===4||Je===3&&(ut&130023424)===ut&&500>Ve()-mg?xi(t,0):_g|=n),bt(t,e)}function _1(t,e){e===0&&(t.mode&1?(e=ou,ou<<=1,!(ou&130023424)&&(ou=4194304)):e=1);var n=It();t=hr(t,e),t!==null&&(Kl(t,e,n),bt(t,n))}function WL(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_1(t,n)}function zL(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),_1(t,n)}var m1;m1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,RL(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,De&&e.flags&1048576&&wE(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xu(t,e),t=e.pendingProps;var s=Bs(e,mt.current);Os(e,n),s=cg(null,e,r,t,s,n);var l=fg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(l=!0,Ku(e)):l=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,sg(e),s.updater=Fc,e.stateNode=s,s._reactInternals=e,Yh(e,r,t,n),e=Jh(null,e,r,!0,l,n)):(e.tag=0,De&&l&&Jp(e),Ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=HL(r),t=Cn(r,t),s){case 0:e=Xh(null,e,r,t,n);break e;case 1:e=qy(null,e,r,t,n);break e;case 11:e=jy(null,e,r,t,n);break e;case 14:e=Ky(null,e,r,Cn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Cn(r,s),Xh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Cn(r,s),qy(t,e,r,s,n);case 3:e:{if(e1(e),t===null)throw Error(F(387));r=e.pendingProps,l=e.memoizedState,s=l.element,IE(t,e),Ju(e,r,null,n);var a=e.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){s=Gs(Error(F(423)),e),e=Yy(t,e,r,n,s);break e}else if(r!==s){s=Gs(Error(F(424)),e),e=Yy(t,e,r,n,s);break e}else for(qt=Gr(e.stateNode.containerInfo.firstChild),Yt=e,De=!0,Tn=null,n=NE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),r===s){e=pr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return xE(e),t===null&&jh(e),r=e.type,s=e.pendingProps,l=t!==null?t.memoizedProps:null,a=s.children,Bh(r,s)?a=null:l!==null&&Bh(r,l)&&(e.flags|=32),ZE(t,e),Ct(t,e,a,n),e.child;case 6:return t===null&&jh(e),null;case 13:return t1(t,e,n);case 4:return og(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Cn(r,s),jy(t,e,r,s,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,l=e.memoizedProps,a=s.value,Ne(Qu,r._currentValue),r._currentValue=a,l!==null)if(On(l.value,a)){if(l.children===s.children&&!Mt.current){e=pr(t,e,n);break e}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var c=l.dependencies;if(c!==null){a=l.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(l.tag===1){d=ur(-1,n&-n),d.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?d.next=d:(d.next=v.next,v.next=d),h.pending=d}}l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),Kh(l.return,n,e),c.lanes|=n;break}d=d.next}}else if(l.tag===10)a=l.type===e.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(F(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Kh(a,n,e),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===e){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Os(e,n),s=hn(s),r=r(s),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,s=Cn(r,e.pendingProps),s=Cn(r.type,s),Ky(t,e,r,s,n);case 15:return XE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Cn(r,s),xu(t,e),e.tag=1,Ft(r)?(t=!0,Ku(e)):t=!1,Os(e,n),kE(e,r,s),Yh(e,r,s,n),Jh(null,e,r,!0,t,n);case 19:return n1(t,e,n);case 22:return JE(t,e,n)}throw Error(F(156,e.tag))};function v1(t,e){return Vw(t,e)}function BL(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,e,n,r){return new BL(t,e,n,r)}function Eg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HL(t){if(typeof t=="function")return Eg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zp)return 11;if(t===Bp)return 14}return 2}function Yr(t,e){var n=t.alternate;return n===null?(n=fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ou(t,e,n,r,s,l){var a=2;if(r=t,typeof t=="function")Eg(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return Ai(n.children,s,l,e);case Wp:a=8,s|=8;break;case yh:return t=fn(12,n,e,s|2),t.elementType=yh,t.lanes=l,t;case wh:return t=fn(13,n,e,s),t.elementType=wh,t.lanes=l,t;case Eh:return t=fn(19,n,e,s),t.elementType=Eh,t.lanes=l,t;case Rw:return zc(n,s,l,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tw:a=10;break e;case kw:a=9;break e;case zp:a=11;break e;case Bp:a=14;break e;case Or:a=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=fn(a,n,e,s),e.elementType=t,e.type=r,e.lanes=l,e}function Ai(t,e,n,r){return t=fn(7,t,r,e),t.lanes=n,t}function zc(t,e,n,r){return t=fn(22,t,r,e),t.elementType=Rw,t.lanes=n,t.stateNode={isHidden:!1},t}function Zd(t,e,n){return t=fn(6,t,null,e),t.lanes=n,t}function eh(t,e,n){return e=fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $L(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dd(0),this.expirationTimes=Dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Sg(t,e,n,r,s,l,a,c,d){return t=new $L(t,e,n,c,d),e===1?(e=1,l===!0&&(e|=8)):e=0,l=fn(3,null,null,e),t.current=l,l.stateNode=t,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sg(l),t}function VL(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function y1(t){if(!t)return ti;t=t._reactInternals;e:{if(Ki(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Ft(n))return vE(t,n,e)}return e}function w1(t,e,n,r,s,l,a,c,d){return t=Sg(n,r,!0,t,s,l,a,c,d),t.context=y1(null),n=t.current,r=It(),s=qr(n),l=ur(r,s),l.callback=e??null,jr(n,l,s),t.current.lanes=s,Kl(t,s,r),bt(t,r),t}function Bc(t,e,n,r){var s=e.current,l=It(),a=qr(s);return n=y1(n),e.context===null?e.context=n:e.pendingContext=n,e=ur(l,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jr(s,e,a),t!==null&&(An(t,s,a,l),ku(t,s,a)),a}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function s0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cg(t,e){s0(t,e),(t=t.alternate)&&s0(t,e)}function GL(){return null}var E1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ig(t){this._internalRoot=t}Hc.prototype.render=Ig.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Bc(t,e,null,null)};Hc.prototype.unmount=Ig.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){Bc(null,t,null,null)}),e[dr]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&Zw(t)}};function Tg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function o0(){}function jL(t,e,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var h=oc(a);l.call(h)}}var a=w1(e,r,t,0,null,!1,!1,"",o0);return t._reactRootContainer=a,t[dr]=a.current,Tl(t.nodeType===8?t.parentNode:t),bi(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var h=oc(d);c.call(h)}}var d=Sg(t,0,!1,null,null,!1,!1,"",o0);return t._reactRootContainer=d,t[dr]=d.current,Tl(t.nodeType===8?t.parentNode:t),bi(function(){Bc(e,d,n,r)}),d}function Vc(t,e,n,r,s){var l=n._reactRootContainer;if(l){var a=l;if(typeof s=="function"){var c=s;s=function(){var d=oc(a);c.call(d)}}Bc(e,a,t,s)}else a=jL(n,e,t,s,r);return oc(a)}Yw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(Vp(e,n|1),bt(e,Ve()),!(ge&6)&&(js=Ve()+500,oi()))}break;case 13:bi(function(){var r=hr(t,1);if(r!==null){var s=It();An(r,t,1,s)}}),Cg(t,1)}};Gp=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=It();An(e,t,134217728,n)}Cg(t,134217728)}};Qw=function(t){if(t.tag===13){var e=qr(t),n=hr(t,e);if(n!==null){var r=It();An(n,t,e,r)}Cg(t,e)}};Xw=function(){return Se};Jw=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Ph=function(t,e,n){switch(e){case"input":if(Ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Dc(r);if(!s)throw Error(F(90));xw(r),Ih(r,s)}}}break;case"textarea":Pw(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};Uw=vg;Ww=bi;var KL={usingClientEntryPoint:!1,Events:[Yl,ys,Dc,Fw,bw,vg]},Vo={findFiberByHostInstance:Ci,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qL={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hw(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||GL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Ac=mu.inject(qL),Bn=mu}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KL;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tg(e))throw Error(F(200));return VL(t,e,null,n)};Xt.createRoot=function(t,e){if(!Tg(t))throw Error(F(299));var n=!1,r="",s=E1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Sg(t,1,!1,null,null,n,!1,r,s),t[dr]=e.current,Tl(t.nodeType===8?t.parentNode:t),new Ig(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Hw(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return bi(t)};Xt.hydrate=function(t,e,n){if(!$c(e))throw Error(F(200));return Vc(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Tg(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",a=E1;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=w1(e,null,t,1,n??null,s,!1,l,a),t[dr]=e.current,Tl(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Hc(e)};Xt.render=function(t,e,n){if(!$c(e))throw Error(F(200));return Vc(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!$c(t))throw Error(F(40));return t._reactRootContainer?(bi(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};Xt.unstable_batchedUpdates=vg;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$c(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Vc(t,e,n,!1,r)};Xt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Xt})(GP);var l0=_h;gh.createRoot=l0.createRoot,gh.hydrateRoot=l0.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw ro(e)},ro=function(t){return new Error("Firebase Database ("+S1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const l=t[n++];e[r++]=String.fromCharCode((s&31)<<6|l&63)}else if(s>239&&s<365){const l=t[n++],a=t[n++],c=t[n++],d=((s&7)<<18|(l&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const l=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(l&63)<<6|a&63)}}return e.join("")},kg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const l=t[s],a=s+1<t.length,c=a?t[s+1]:0,d=s+2<t.length,h=d?t[s+2]:0,v=l>>2,m=(l&3)<<4|c>>4;let y=(c&15)<<2|h>>6,R=h&63;d||(R=64,a||(y=64)),r.push(n[v],n[m],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const l=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,l==null||c==null||h==null||m==null)throw new QL;const y=l<<2|c>>4;if(r.push(y),h!==64){const R=c<<4&240|h>>2;if(r.push(R),m!==64){const x=h<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I1=function(t){const e=C1(t);return kg.encodeByteArray(e,!0)},lc=function(t){return I1(t).replace(/\./g,"")},ac=function(t){try{return kg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(t){return T1(void 0,t)}function T1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!JL(n)||(t[n]=T1(t[n],e[n]));return t}function JL(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=()=>ZL().__FIREBASE_DEFAULTS__,tD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ac(t[1]);return e&&JSON.parse(e)},Rg=()=>{try{return eD()||tD()||nD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},k1=t=>{var e,n;return(n=(e=Rg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rD=t=>{const e=k1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iD=()=>{var t;return(t=Rg())===null||t===void 0?void 0:t.config},R1=t=>{var e;return(e=Rg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[lc(JSON.stringify(n)),lc(JSON.stringify(a)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function oD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function N1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lD(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function x1(){return S1.NODE_ADMIN===!0}function aD(){try{return typeof indexedDB=="object"}catch{return!1}}function uD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var l;e(((l=s.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="FirebaseError";class li extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cD,Object.setPrototypeOf(this,li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xl.prototype.create)}}class Xl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,l=this.errors[e],a=l?fD(l,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new li(s,c,r)}}function fD(t,e){return t.replace(dD,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=function(t){let e={},n={},r={},s="";try{const l=t.split(".");e=Dl(ac(l[0])||""),n=Dl(ac(l[1])||""),s=l[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},hD=function(t){const e=A1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pD=function(t){const e=A1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function cc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const l=t[s],a=e[s];if(a0(l)&&a0(a)){if(!cc(l,a))return!1}else if(l!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function a0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function el(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,l]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(l)}}),e}function tl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)r[m]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let m=0;m<16;m++)r[m]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let m=16;m<80;m++){const y=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=(y<<1|y>>>31)&4294967295}let s=this.chain_[0],l=this.chain_[1],a=this.chain_[2],c=this.chain_[3],d=this.chain_[4],h,v;for(let m=0;m<80;m++){m<40?m<20?(h=c^l&(a^c),v=1518500249):(h=l^a^c,v=1859775393):m<60?(h=l&a|c&(l|a),v=2400959708):(h=l^a^c,v=3395469782);const y=(s<<5|s>>>27)+h+d+v+r[m]&4294967295;d=c,c=a,a=(l<<30|l>>>2)&4294967295,l=s,s=y}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const l=this.buf_;let a=this.inbuf_;for(;s<n;){if(a===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(l[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(l),a=0;break}}else for(;s<n;)if(l[a]=e[s],++a,++s,a===this.blockSize){this.compress_(l),a=0;break}}this.inbuf_=a,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let l=24;l>=0;l-=8)e[r]=this.chain_[s]>>l&255,++r;return e}}function _D(t,e){const n=new mD(t,e);return n.subscribe.bind(n)}class mD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vD(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=th),s.error===void 0&&(s.error=th),s.complete===void 0&&(s.complete=th);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function th(){}function xg(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const l=s-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const a=t.charCodeAt(r)-56320;s=65536+(l<<10)+a}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class Ui{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SD(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:s});r.resolve(l)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[l,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(l);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),l=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(s,l);const a=this.instances.get(s);return a&&e(a,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ED(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ED(t){return t===Ei?void 0:t}function SD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const ID={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},TD=Ie.INFO,kD={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},RD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kD[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ag{constructor(e){this.name=e,this._logLevel=TD,this._logHandler=RD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ID[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const ND=(t,e)=>e.some(n=>t instanceof n);let u0,c0;function xD(){return u0||(u0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AD(){return c0||(c0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P1=new WeakMap,fp=new WeakMap,O1=new WeakMap,nh=new WeakMap,Pg=new WeakMap;function PD(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",l),t.removeEventListener("error",a)},l=()=>{n(Qr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",l),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&P1.set(n,t)}).catch(()=>{}),Pg.set(e,t),e}function OD(t){if(fp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",a),t.removeEventListener("abort",a)},l=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",l),t.addEventListener("error",a),t.addEventListener("abort",a)});fp.set(t,e)}let dp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LD(t){dp=t(dp)}function DD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rh(this),e,...n);return O1.set(r,e.sort?e.sort():[e]),Qr(r)}:AD().includes(t)?function(...e){return t.apply(rh(this),e),Qr(P1.get(this))}:function(...e){return Qr(t.apply(rh(this),e))}}function MD(t){return typeof t=="function"?DD(t):(t instanceof IDBTransaction&&OD(t),ND(t,xD())?new Proxy(t,dp):t)}function Qr(t){if(t instanceof IDBRequest)return PD(t);if(nh.has(t))return nh.get(t);const e=MD(t);return e!==t&&(nh.set(t,e),Pg.set(e,t)),e}const rh=t=>Pg.get(t);function FD(t,e,{blocked:n,upgrade:r,blocking:s,terminated:l}={}){const a=indexedDB.open(t,e),c=Qr(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Qr(a.result),d.oldVersion,d.newVersion,Qr(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),c.then(d=>{l&&d.addEventListener("close",()=>l()),s&&d.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const bD=["get","getKey","getAll","getAllKeys","count"],UD=["put","add","delete","clear"],ih=new Map;function f0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ih.get(e))return ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=UD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bD.includes(n)))return;const l=async function(a,...c){const d=this.transaction(a,s?"readwrite":"readonly");let h=d.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&d.done]))[0]};return ih.set(e,l),l}LD(t=>({...t,get:(e,n,r)=>f0(e,n)||t.get(e,n,r),has:(e,n)=>!!f0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hp="@firebase/app",d0="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new Ag("@firebase/app"),BD="@firebase/app-compat",HD="@firebase/analytics-compat",$D="@firebase/analytics",VD="@firebase/app-check-compat",GD="@firebase/app-check",jD="@firebase/auth",KD="@firebase/auth-compat",qD="@firebase/database",YD="@firebase/database-compat",QD="@firebase/functions",XD="@firebase/functions-compat",JD="@firebase/installations",ZD="@firebase/installations-compat",eM="@firebase/messaging",tM="@firebase/messaging-compat",nM="@firebase/performance",rM="@firebase/performance-compat",iM="@firebase/remote-config",sM="@firebase/remote-config-compat",oM="@firebase/storage",lM="@firebase/storage-compat",aM="@firebase/firestore",uM="@firebase/firestore-compat",cM="firebase",fM="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="[DEFAULT]",dM={[hp]:"fire-core",[BD]:"fire-core-compat",[$D]:"fire-analytics",[HD]:"fire-analytics-compat",[GD]:"fire-app-check",[VD]:"fire-app-check-compat",[jD]:"fire-auth",[KD]:"fire-auth-compat",[qD]:"fire-rtdb",[YD]:"fire-rtdb-compat",[QD]:"fire-fn",[XD]:"fire-fn-compat",[JD]:"fire-iid",[ZD]:"fire-iid-compat",[eM]:"fire-fcm",[tM]:"fire-fcm-compat",[nM]:"fire-perf",[rM]:"fire-perf-compat",[iM]:"fire-rc",[sM]:"fire-rc-compat",[oM]:"fire-gcs",[lM]:"fire-gcs-compat",[aM]:"fire-fst",[uM]:"fire-fst-compat","fire-js":"fire-js",[cM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map,gp=new Map;function hM(t,e){try{t.container.addComponent(e)}catch(n){Wi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qs(t){const e=t.name;if(gp.has(e))return Wi.debug(`There were multiple attempts to register component ${e}.`),!1;gp.set(e,t);for(const n of fc.values())hM(n,t);return!0}function Og(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xr=new Xl("app","Firebase",pM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ui("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=fM;function L1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pp,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Xr.create("bad-app-name",{appName:String(s)});if(n||(n=iD()),!n)throw Xr.create("no-options");const l=fc.get(s);if(l){if(cc(n,l.options)&&cc(r,l.config))return l;throw Xr.create("duplicate-app",{appName:s})}const a=new CD(s);for(const d of gp.values())a.addComponent(d);const c=new gM(n,r,a);return fc.set(s,c),c}function D1(t=pp){const e=fc.get(t);if(!e&&t===pp)return L1();if(!e)throw Xr.create("no-app",{appName:t});return e}function Jr(t,e,n){var r;let s=(r=dM[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const l=s.match(/\s|\//),a=e.match(/\s|\//);if(l||a){const c=[`Unable to register library "${s}" with version "${e}":`];l&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wi.warn(c.join(" "));return}qs(new Ui(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M="firebase-heartbeat-database",mM=1,Ml="firebase-heartbeat-store";let sh=null;function M1(){return sh||(sh=FD(_M,mM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ml)}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),sh}async function vM(t){try{return(await M1()).transaction(Ml).objectStore(Ml).get(F1(t))}catch(e){if(e instanceof li)Wi.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wi.warn(n.message)}}}async function h0(t,e){try{const r=(await M1()).transaction(Ml,"readwrite");return await r.objectStore(Ml).put(e,F1(t)),r.done}catch(n){if(n instanceof li)Wi.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wi.warn(r.message)}}}function F1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=1024,wM=30*24*60*60*1e3;class EM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=p0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=wM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=p0(),{heartbeatsToSend:n,unsentEntries:r}=SM(this._heartbeatsCache.heartbeats),s=lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function p0(){return new Date().toISOString().substring(0,10)}function SM(t,e=yM){const n=[];let r=t.slice();for(const s of t){const l=n.find(a=>a.agent===s.agent);if(l){if(l.dates.push(s.date),g0(n)>e){l.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),g0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aD()?uD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return h0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return h0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function g0(t){return lc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t){qs(new Ui("platform-logger",e=>new WD(e),"PRIVATE")),qs(new Ui("heartbeat",e=>new EM(e),"PRIVATE")),Jr(hp,d0,t),Jr(hp,d0,"esm2017"),Jr("fire-js","")}IM("");var TM="firebase",kM="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jr(TM,kM,"app");const _0="@firebase/database",m0="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b1="";function RM(t){b1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Dl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NM(e)}}catch{}return new xM},ki=U1("localStorage"),_p=U1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Ag("@firebase/database"),AM=function(){let t=1;return function(){return t++}}(),W1=function(t){const e=yD(t),n=new gD;n.update(e);const r=n.digest();return kg.encodeByteArray(r)},Zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Zl.apply(null,r):typeof r=="object"?e+=rt(r):e+=r,e+=" "}return e};let Pi=null,v0=!0;const PM=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ds.logLevel=Ie.VERBOSE,Pi=Ds.log.bind(Ds),e&&_p.set("logging_enabled",!0)):typeof t=="function"?Pi=t:(Pi=null,_p.remove("logging_enabled"))},_t=function(...t){if(v0===!0&&(v0=!1,Pi===null&&_p.get("logging_enabled")===!0&&PM(!0)),Pi){const e=Zl.apply(null,t);Pi(e)}},ea=function(t){return function(...e){_t(t,...e)}},mp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zl(...t);Ds.error(e)},gr=function(...t){const e=`FIREBASE FATAL ERROR: ${Zl(...t)}`;throw Ds.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+Zl(...t);Ds.warn(e)},OM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},z1=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ys="[MIN_NAME]",zi="[MAX_NAME]",so=function(t,e){if(t===e)return 0;if(t===Ys||e===zi)return-1;if(e===Ys||t===zi)return 1;{const n=y0(t),r=y0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},DM=function(t,e){return t===e?0:t<e?-1:1},Go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},Lg=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=rt(e[r]),n+=":",n+=Lg(t[e[r]]);return n+="}",n},B1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const H1=function(t){b(!z1(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,l,a,c,d;t===0?(l=0,a=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),r),l=c+r,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(l=0,a=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(d=n;d;d-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(d=e;d;d-=1)h.push(l%2?1:0),l=Math.floor(l/2);h.push(s?1:0),h.reverse();const v=h.join("");let m="";for(d=0;d<64;d+=8){let y=parseInt(v.substr(d,8),2).toString(16);y.length===1&&(y="0"+y),m=m+y}return m.toLowerCase()},MM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const UM=new RegExp("^-?(0*)\\d{1,10}$"),WM=-2147483648,zM=2147483647,y0=function(t){if(UM.test(t)){const e=Number(t);if(e>=WM&&e<=zM)return e}return null},oo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},BM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class Ms{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ms.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="5",$1="v",V1="s",G1="r",j1="f",K1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,q1="ls",Y1="p",vp="ac",Q1="websocket",X1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r,s,l=!1,a="",c=!1,d=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=l,this.persistenceKey=a,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ki.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ki.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function VM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Z1(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===Q1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===X1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VM(t)&&(n.ns=t.namespace);const s=[];return Wt(n,(l,a)=>{s.push(l+"="+a)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.counters_={}}incrementCounter(e,n=1){yr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return XL(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={},lh={};function Mg(t){const e=t.toString();return oh[e]||(oh[e]=new GM),oh[e]}function jM(t,e){const n=t.toString();return lh[n]||(lh[n]=e()),lh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&oo(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="start",qM="close",YM="pLPCommand",QM="pRTLPCB",eS="id",tS="pw",nS="ser",XM="cb",JM="seg",ZM="ts",e2="d",t2="dframe",rS=1870,iS=30,n2=rS-iS,r2=25e3,i2=3e4;class ks{constructor(e,n,r,s,l,a,c){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=l,this.transportSessionId=a,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ea(e),this.stats_=Mg(n),this.urlFn=d=>(this.appCheckToken&&(d[vp]=this.appCheckToken),Z1(n,X1,d))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new KM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(i2)),LM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fg((...l)=>{const[a,c,d,h,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===w0)this.id=c,this.password=d;else if(a===qM)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...l)=>{const[a,c]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(a,c)},()=>{this.onClosed_()},this.urlFn);const r={};r[w0]="t",r[nS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[XM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$1]=Dg,this.transportSessionId&&(r[V1]=this.transportSessionId),this.lastSessionId&&(r[q1]=this.lastSessionId),this.applicationId&&(r[Y1]=this.applicationId),this.appCheckToken&&(r[vp]=this.appCheckToken),typeof location<"u"&&location.hostname&&K1.test(location.hostname)&&(r[G1]=j1);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!MM()&&!FM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=I1(n),s=B1(r,n2);for(let l=0;l<s.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[l]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[t2]="t",r[eS]=e,r[tS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fg{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=AM(),window[YM+this.uniqueCallbackIdentifier]=e,window[QM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fg.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(c){_t("frame writing exception"),c.stack&&_t(c.stack),_t(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eS]=this.myID,e[tS]=this.myPW,e[nS]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iS+r.length<=rS;){const a=this.pendingSegs.shift();r=r+"&"+JM+s+"="+a.seg+"&"+ZM+s+"="+a.ts+"&"+e2+s+"="+a.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(r2)),l=()=>{clearTimeout(s),r()};this.addTag(e,l)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=16384,o2=45e3;let dc=null;typeof MozWebSocket<"u"?dc=MozWebSocket:typeof WebSocket<"u"&&(dc=WebSocket);class kn{constructor(e,n,r,s,l,a,c){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ea(this.connId),this.stats_=Mg(n),this.connURL=kn.connectionURL_(n,a,c,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,l){const a={};return a[$1]=Dg,typeof location<"u"&&location.hostname&&K1.test(location.hostname)&&(a[G1]=j1),n&&(a[V1]=n),r&&(a[q1]=r),s&&(a[vp]=s),l&&(a[Y1]=l),Z1(e,Q1,a)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ki.set("previous_websocket_failure",!0);try{let r;x1(),this.mySock=new dc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dc!==null&&!kn.forceDisallow_}static previouslyFailed(){return ki.isInMemoryStorage||ki.get("previous_websocket_failure")===!0}markConnectionHealthy(){ki.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Dl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=B1(n,s2);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(o2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kn.responsesRequiredToBeHealthy=2;kn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ks,kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=kn&&kn.isAvailable();let r=n&&!kn.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[kn];else{const s=this.transports_=[];for(const l of Fl.ALL_TRANSPORTS)l&&l.isAvailable()&&s.push(l);Fl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=6e4,a2=5e3,u2=10*1024,c2=100*1024,ah="t",E0="d",f2="s",S0="r",d2="e",C0="o",I0="a",T0="n",k0="p",h2="h";class p2{constructor(e,n,r,s,l,a,c,d,h,v){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=l,this.onMessage_=a,this.onReady_=c,this.onDisconnect_=d,this.onKill_=h,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ea("c:"+this.id+":"),this.transportManager_=new Fl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>c2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>u2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ah in e){const n=e[ah];n===I0?this.upgradeIfSecondaryHealthy_():n===S0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===C0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Go("t",e),r=Go("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:k0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:I0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:T0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Go("t",e),r=Go("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Go(ah,e);if(E0 in e){const r=e[E0];if(n===h2){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===T0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===f2?this.onConnectionShutdown_(r):n===S0?this.onReset_(r):n===d2?mp("Server Error: "+r):n===C0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dg!==r&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(l2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(a2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:k0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let l=0;l<s.length;l++)if(s[l].callback===n&&(!r||r===s[l].context)){s.splice(l,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends oS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ng()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hc}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=32,N0=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Te("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ni(t){return t.pieces_.length-t.pieceNum_}function Re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function lS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function g2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function aS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Te(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return Lt(Re(t),Re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bg(t,e){if(ni(t)!==ni(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Rn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ni(t)>ni(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _2{constructor(e,n){this.errorPrefix_=n,this.parts_=aS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jc(this.parts_[r]);cS(this)}}function m2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jc(e),cS(t)}function v2(t){const e=t.parts_.pop();t.byteLength_-=jc(e),t.parts_.length>0&&(t.byteLength_-=1)}function cS(t){if(t.byteLength_>N0)throw new Error(t.errorPrefix_+"has a key path longer than "+N0+" bytes ("+t.byteLength_+").");if(t.parts_.length>R0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+R0+") or object contains a cycle "+Si(t))}function Si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends oS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ug}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=1e3,y2=60*5*1e3,x0=30*1e3,w2=1.3,E2=3e4,S2="server_kill",A0=3;class cr extends sS{constructor(e,n,r,s,l,a,c,d){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=l,this.authTokenProvider_=a,this.appCheckTokenProvider_=c,this.authOverride_=d,this.id=cr.nextPersistentConnectionId_++,this.log_=ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jo,this.maxReconnectDelay_=y2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!x1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ug.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,l={r:s,a:e,b:n};this.log_(rt(l)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Gc,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const c=a.d;a.s==="ok"?n.resolve(c):n.reject(c)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(e,n,r,s){this.initConnection_();const l=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+l),this.listens.has(a)||this.listens.set(a,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(a).has(l),"listen() called twice for same path/queryId.");const c={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(a).set(l,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const l={p:r},a="q";e.tag&&(l.q=n._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(a,l,c=>{const d=c.d,h=c.s;cr.warnOnListenWarnings_(d,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",c),h!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(h,d))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yr(e,"w")){const r=Ks(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=x0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const l=s.s,a=s.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const l={p:e},a="n";s&&(l.q=r,l.t=s),this.sendRequest(a,l)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const l={p:n,d:r};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,l){this.initConnection_();const a={p:n,d:r};l!==void 0&&(a.h=l),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(l.s,l.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const l=r.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mp("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>E2&&(this.reconnectDelay_=jo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*w2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+cr.nextConnectionId_++,l=this.lastSessionId;let a=!1,c=null;const d=function(){c?c.close():(a=!0,r())},h=function(m){b(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(m)};this.realtime_={close:d,sendRequest:h};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,y]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);a?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=y&&y.token,c=new p2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,R=>{Ut(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(S2)},l))}catch(m){this.log_("Failed to get token: "+m),a||(this.repoInfo_.nodeAdmin&&Ut(m),d())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cp(this.interruptReasons_)&&(this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(l=>Lg(l)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let s;if(this.listens.has(r)){const l=this.listens.get(r);s=l.get(n),l.delete(n),l.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=A0&&(this.reconnectDelay_=x0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=A0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+b1.replace(/\./g,"-")]=1,Ng()?e["framework.cordova"]=1:N1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hc.getInstance().currentlyOnline();return cp(this.interruptReasons_)&&e}}cr.nextPersistentConnectionId_=0;cr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ae(Ys,e),s=new ae(Ys,n);return this.compare(r,s)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;class fS extends Kc{static get __EMPTY_NODE(){return vu}static set __EMPTY_NODE(e){vu=e}compare(e,n){return so(e.name,n.name)}isDefinedOn(e){throw ro("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(zi,vu)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,vu)}toString(){return".key"}}const Fs=new fS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r,s,l=null){this.isReverse_=s,this.resultGenerator_=l,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=n?r(e.key,n):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,l){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??Dt.EMPTY_NODE,this.right=l??Dt.EMPTY_NODE}copy(e,n,r,s,l){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const l=r(e,s.key);return l<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):l===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class C2{copy(e,n,r,s,l){return this}insert(e,n,r){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,n=Dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yu(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new C2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t,e){return so(t.name,e.name)}function Wg(t,e){return so(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yp;function T2(t){yp=t}const dS=function(t){return typeof t=="number"?"number:"+H1(t):"string:"+t},hS=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yr(e,".sv"),"Priority must be a string or number.")}else b(t===yp||t.isEmpty(),"priority of unexpected type.");b(t===yp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P0;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hS(this.priorityNode_)}static set __childrenNodeConstructor(e){P0=e}static get __childrenNodeConstructor(){return P0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:le(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||ni(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=H1(this.value_):e+=this.value_,this.lazyHash_=W1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=et.VALUE_TYPE_ORDER.indexOf(n),l=et.VALUE_TYPE_ORDER.indexOf(r);return b(s>=0,"Unknown leaf type: "+n),b(l>=0,"Unknown leaf type: "+r),s===l?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pS,gS;function k2(t){pS=t}function R2(t){gS=t}class N2 extends Kc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),l=r.compareTo(s);return l===0?so(e.name,n.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(zi,new et("[PRIORITY-POST]",gS))}makePost(e,n){const r=pS(e);return new ae(n,new et("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new N2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=Math.log(2);class A2{constructor(e){const n=l=>parseInt(Math.log(l)/x2,10),r=l=>parseInt(Array(l+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pc=function(t,e,n,r){t.sort(e);const s=function(d,h){const v=h-d;let m,y;if(v===0)return null;if(v===1)return m=t[d],y=n?n(m):m,new nt(y,m.node,nt.BLACK,null,null);{const R=parseInt(v/2,10)+d,x=s(d,R),D=s(R+1,h);return m=t[R],y=n?n(m):m,new nt(y,m.node,nt.BLACK,x,D)}},l=function(d){let h=null,v=null,m=t.length;const y=function(x,D){const K=m-x,C=m;m-=x;const S=s(K+1,C),T=t[K],L=n?n(T):T;R(new nt(L,T.node,D,null,S))},R=function(x){h?(h.left=x,h=x):(v=x,h=x)};for(let x=0;x<d.count;++x){const D=d.nextBitIsOne(),K=Math.pow(2,d.count-(x+1));D?y(K,nt.BLACK):(y(K,nt.BLACK),y(K,nt.RED))}return v},a=new A2(t.length),c=l(a);return new Dt(r||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh;const hs={};class or{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(hs&&Be,"ChildrenNode.ts has not been loaded"),uh=uh||new or({".priority":hs},{".priority":Be}),uh}get(e){const n=Ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dt?n:null}hasIndex(e){return yr(this.indexSet_,e.toString())}addIndex(e,n){b(e!==Fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const l=n.getIterator(ae.Wrap);let a=l.getNext();for(;a;)s=s||e.isDefinedOn(a.node),r.push(a),a=l.getNext();let c;s?c=pc(r,e.getCompare()):c=hs;const d=e.toString(),h=Object.assign({},this.indexSet_);h[d]=e;const v=Object.assign({},this.indexes_);return v[d]=c,new or(v,h)}addToIndexes(e,n){const r=uc(this.indexes_,(s,l)=>{const a=Ks(this.indexSet_,l);if(b(a,"Missing index implementation for "+l),s===hs)if(a.isDefinedOn(e.node)){const c=[],d=n.getIterator(ae.Wrap);let h=d.getNext();for(;h;)h.name!==e.name&&c.push(h),h=d.getNext();return c.push(e),pc(c,a.getCompare())}else return hs;else{const c=n.get(e.name);let d=s;return c&&(d=d.remove(new ae(e.name,c))),d.insert(e,e.node)}});return new or(r,this.indexSet_)}removeFromIndexes(e,n){const r=uc(this.indexes_,s=>{if(s===hs)return s;{const l=n.get(e.name);return l?s.remove(new ae(e.name,l)):s}});return new or(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&hS(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ko||(Ko=new J(new Dt(Wg),null,or.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ko}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ko:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ae(e,n);let s,l;n.isEmpty()?(s=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),l=this.indexMap_.addToIndexes(r,this.children_));const a=s.isEmpty()?Ko:this.priorityNode_;return new J(s,a,l)}}updateChild(e,n){const r=le(e);if(r===null)return n;{b(le(e)!==".priority"||ni(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Re(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,l=!0;if(this.forEachChild(Be,(a,c)=>{n[a]=c.val(e),r++,l&&J.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):l=!1}),!e&&l&&s<2*r){const a=[];for(const c in n)a[c]=n[c];return a}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dS(this.getPriority().val())+":"),this.forEachChild(Be,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":W1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const l=s.getPredecessorKey(new ae(e,n));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ae.Wrap);let l=s.peek();for(;l!=null&&n.compare(l,e)<0;)s.getNext(),l=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let l=s.peek();for(;l!=null&&n.compare(l,e)>0;)s.getNext(),l=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ta?-1:0}withIndex(e){if(e===Fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Be),s=n.getIterator(Be);let l=r.getNext(),a=s.getNext();for(;l&&a;){if(l.name!==a.name||!l.node.equals(a.node))return!1;l=r.getNext(),a=s.getNext()}return l===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Fs?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class P2 extends J{constructor(){super(new Dt(Wg),J.EMPTY_NODE,or.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const ta=new P2;Object.defineProperties(ae,{MIN:{value:new ae(Ys,J.EMPTY_NODE)},MAX:{value:new ae(zi,ta)}});fS.__EMPTY_NODE=J.EMPTY_NODE;et.__childrenNodeConstructor=J;T2(ta);R2(ta);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=!0;function at(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,at(e))}if(!(t instanceof Array)&&O2){const n=[];let r=!1;if(Wt(t,(a,c)=>{if(a.substring(0,1)!=="."){const d=at(c);d.isEmpty()||(r=r||!d.getPriority().isEmpty(),n.push(new ae(a,d)))}}),n.length===0)return J.EMPTY_NODE;const l=pc(n,I2,a=>a.name,Wg);if(r){const a=pc(n,Be.getCompare());return new J(l,at(e),new or({".priority":a},{".priority":Be}))}else return new J(l,at(e),or.Default)}else{let n=J.EMPTY_NODE;return Wt(t,(r,s)=>{if(yr(t,r)&&r.substring(0,1)!=="."){const l=at(s);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(r,l))}}),n.updatePriority(at(e))}}k2(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2 extends Kc{constructor(e){super(),this.indexPath_=e,b(!ce(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),l=r.compareTo(s);return l===0?so(e.name,n.name):l}makePost(e,n){const r=at(e),s=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(n,s)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,ta);return new ae(zi,e)}toString(){return aS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2 extends Kc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?so(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const r=at(e);return new ae(n,r)}toString(){return".value"}}const M2=new D2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){return{type:"value",snapshotNode:t}}function Qs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ul(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function F2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.index_=e}updateChild(e,n,r,s,l,a){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(n);return c.getChild(s).equals(r.getChild(s))&&c.isEmpty()===r.isEmpty()||(a!=null&&(r.isEmpty()?e.hasChild(n)?a.trackChildChange(bl(n,c)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?a.trackChildChange(Qs(n,r)):a.trackChildChange(Ul(n,r,c))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Be,(s,l)=>{n.hasChild(s)||r.trackChildChange(bl(s,l))}),n.isLeafNode()||n.forEachChild(Be,(s,l)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(l)||r.trackChildChange(Ul(s,l,a))}else r.trackChildChange(Qs(s,l))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.indexedFilter_=new zg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wl.getStartPost_(e),this.endPost_=Wl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,l,a){return this.matches(new ae(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,l,a)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(J.EMPTY_NODE);const l=this;return n.forEachChild(Be,(a,c)=>{l.matches(new ae(a,c))||(s=s.updateImmediateChild(a,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Wl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,l,a){return this.rangedFilter_.matches(new ae(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,l,a):this.fullLimitUpdateChild_(e,n,r,l,a)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=J.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;l.hasNext()&&a<this.limit_;){const c=l.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))s=s.updateImmediateChild(c.name,c.node),a++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(J.EMPTY_NODE);let l;this.reverse_?l=s.getReverseIterator(this.index_):l=s.getIterator(this.index_);let a=0;for(;l.hasNext();){const c=l.getNext();a<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?a++:s=s.updateImmediateChild(c.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,l){let a;if(this.reverse_){const m=this.index_.getCompare();a=(y,R)=>m(R,y)}else a=this.index_.getCompare();const c=e;b(c.numChildren()===this.limit_,"");const d=new ae(n,r),h=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),v=this.rangedFilter_.matches(d);if(c.hasChild(n)){const m=c.getImmediateChild(n);let y=s.getChildAfterChild(this.index_,h,this.reverse_);for(;y!=null&&(y.name===n||c.hasChild(y.name));)y=s.getChildAfterChild(this.index_,y,this.reverse_);const R=y==null?1:a(y,d);if(v&&!r.isEmpty()&&R>=0)return l!=null&&l.trackChildChange(Ul(n,r,m)),c.updateImmediateChild(n,r);{l!=null&&l.trackChildChange(bl(n,m));const D=c.updateImmediateChild(n,J.EMPTY_NODE);return y!=null&&this.rangedFilter_.matches(y)?(l!=null&&l.trackChildChange(Qs(y.name,y.node)),D.updateImmediateChild(y.name,y.node)):D}}else return r.isEmpty()?e:v&&a(h,d)>=0?(l!=null&&(l.trackChildChange(bl(h.name,h.node)),l.trackChildChange(Qs(n,r))),c.updateImmediateChild(n,r).updateImmediateChild(h.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ys}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new Bg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function U2(t){return t.loadsAllData()?new zg(t.getIndex()):t.hasLimit()?new b2(t):new Wl(t)}function O0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Be?n="$priority":t.index_===M2?n="$value":t.index_===Fs?n="$key":(b(t.index_ instanceof L2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function L0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends sS{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ea("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const a=gc.getListenId_(e,r),c={};this.listens_[a]=c;const d=O0(e._queryParams);this.restRequest_(l+".json",d,(h,v)=>{let m=v;if(h===404&&(m=null,h=null),h===null&&this.onDataUpdate_(l,m,!1,r),Ks(this.listens_,a)===c){let y;h?h===401?y="permission_denied":y="rest_error:"+h:y="ok",s(y,null)}})}unlisten(e,n){const r=gc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=O0(e._queryParams),r=e._path.toString(),s=new Gc;return this.restRequest_(r+".json",n,(l,a)=>{let c=a;l===404&&(c=null,l=null),l===null?(this.onDataUpdate_(r,c,!1,null),s.resolve(c)):s.reject(new Error(c))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,l])=>{s&&s.accessToken&&(n.auth=s.accessToken),l&&l.token&&(n.ac=l.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+io(n);this.log_("Sending REST request for "+a);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(r&&c.readyState===4){this.log_("REST Response for "+a+" received. status:",c.status,"response:",c.responseText);let d=null;if(c.status>=200&&c.status<300){try{d=Dl(c.responseText)}catch{Ut("Failed to parse JSON response for "+a+": "+c.responseText)}r(null,d)}else c.status!==401&&c.status!==404&&Ut("Got unsuccessful REST response for "+a+" Status: "+c.status),r(c.status);r=null}},c.open("GET",a,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(){return{value:null,children:new Map}}function mS(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,_c());const s=t.children.get(r);e=Re(e),mS(s,e,n)}}function wp(t,e,n){t.value!==null?n(e,t.value):z2(t,(r,s)=>{const l=new Te(e.toString()+"/"+r);wp(s,l,n)})}function z2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Wt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=10*1e3,H2=30*1e3,$2=5*60*1e3;class V2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new B2(e);const r=D0+(H2-D0)*Math.random();fl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Wt(e,(s,l)=>{l>0&&yr(this.statsToReport_,s)&&(n[s]=l,r=!0)}),r&&this.server_.reportStats(n),fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*$2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function vS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $g(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Nn.ACK_USER_WRITE,this.source=vS()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new mc(ve(),n,this.revert)}}else return b(le(this.path)===e,"operationForChild called for unrelated child."),new mc(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.source=e,this.path=n,this.type=Nn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new zl(this.source,ve()):new zl(this.source,Re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Nn.OVERWRITE}operationForChild(e){return ce(this.path)?new Bi(this.source,ve(),this.snap.getImmediateChild(e)):new Bi(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Nn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Bi(this.source,ve(),n.value):new Bl(this.source,ve(),n)}else return b(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bl(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function j2(t,e,n,r){const s=[],l=[];return e.forEach(a=>{a.type==="child_changed"&&t.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&l.push(F2(a.childName,a.snapshotNode))}),qo(t,s,"child_removed",e,r,n),qo(t,s,"child_added",e,r,n),qo(t,s,"child_moved",l,r,n),qo(t,s,"child_changed",e,r,n),qo(t,s,"value",e,r,n),s}function qo(t,e,n,r,s,l){const a=r.filter(c=>c.type===n);a.sort((c,d)=>q2(t,c,d)),a.forEach(c=>{const d=K2(t,c,l);s.forEach(h=>{h.respondsTo(c.type)&&e.push(h.createEvent(d,t.query_))})})}function K2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function q2(t,e,n){if(e.childName==null||n.childName==null)throw ro("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),s=new ae(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t,e){return{eventCache:t,serverCache:e}}function dl(t,e,n,r){return qc(new Hi(e,n,r),t.serverCache)}function yS(t,e,n,r){return qc(t.eventCache,new Hi(e,n,r))}function Ep(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $i(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;const Y2=()=>(ch||(ch=new Dt(DM)),ch);class Pe{constructor(e,n=Y2()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return Wt(e,(r,s)=>{n=n.set(new Te(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ce(e))return null;{const r=le(e),s=this.children.get(r);if(s!==null){const l=s.findRootMostMatchingPathAndValue(Re(e),n);return l!=null?{path:Xe(new Te(r),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(Re(e)):new Pe(null)}}set(e,n){if(ce(e))return new Pe(n,this.children);{const r=le(e),l=(this.children.get(r)||new Pe(null)).set(Re(e),n),a=this.children.insert(r,l);return new Pe(this.value,a)}}remove(e){if(ce(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const s=r.remove(Re(e));let l;return s.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,s),this.value===null&&l.isEmpty()?new Pe(null):new Pe(this.value,l)}else return this}}get(e){if(ce(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(Re(e)):null}}setTree(e,n){if(ce(e))return n;{const r=le(e),l=(this.children.get(r)||new Pe(null)).setTree(Re(e),n);let a;return l.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,l),new Pe(this.value,a)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,l)=>{r[s]=l.fold_(Xe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ce(e))return null;{const l=le(e),a=this.children.get(l);return a?a.findOnPath_(Re(e),Xe(n,l),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const s=le(e),l=this.children.get(s);return l?l.foreachOnPath_(Re(e),Xe(n,s),r):new Pe(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new Pe(null))}}function hl(t,e,n){if(ce(e))return new Pn(new Pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let l=r.value;const a=Lt(s,e);return l=l.updateChild(a,n),new Pn(t.writeTree_.set(s,l))}else{const s=new Pe(n),l=t.writeTree_.setTree(e,s);return new Pn(l)}}}function M0(t,e,n){let r=t;return Wt(n,(s,l)=>{r=hl(r,Xe(e,s),l)}),r}function F0(t,e){if(ce(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new Pn(n)}}function Sp(t,e){return qi(t,e)!=null}function qi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function b0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(r,s)=>{e.push(new ae(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ae(r,s.value))}),e}function Zr(t,e){if(ce(e))return t;{const n=qi(t,e);return n!=null?new Pn(new Pe(n)):new Pn(t.writeTree_.subtree(e))}}function Cp(t){return t.writeTree_.isEmpty()}function Xs(t,e){return wS(ve(),t.writeTree_,e)}function wS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,l)=>{s===".priority"?(b(l.value!==null,"Priority writes must always be leaf nodes"),r=l.value):n=wS(Xe(t,s),l,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){return IS(e,t)}function Q2(t,e,n,r,s){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=hl(t.visibleWrites,e,n)),t.lastWriteId=r}function X2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function J2(t,e){const n=t.allWrites.findIndex(c=>c.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,l=!1,a=t.allWrites.length-1;for(;s&&a>=0;){const c=t.allWrites[a];c.visible&&(a>=n&&Z2(c,r.path)?s=!1:Rn(r.path,c.path)&&(l=!0)),a--}if(s){if(l)return eF(t),!0;if(r.snap)t.visibleWrites=F0(t.visibleWrites,r.path);else{const c=r.children;Wt(c,d=>{t.visibleWrites=F0(t.visibleWrites,Xe(r.path,d))})}return!0}else return!1}function Z2(t,e){if(t.snap)return Rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rn(Xe(t.path,n),e))return!0;return!1}function eF(t){t.visibleWrites=ES(t.allWrites,tF,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tF(t){return t.visible}function ES(t,e,n){let r=Pn.empty();for(let s=0;s<t.length;++s){const l=t[s];if(e(l)){const a=l.path;let c;if(l.snap)Rn(n,a)?(c=Lt(n,a),r=hl(r,c,l.snap)):Rn(a,n)&&(c=Lt(a,n),r=hl(r,ve(),l.snap.getChild(c)));else if(l.children){if(Rn(n,a))c=Lt(n,a),r=M0(r,c,l.children);else if(Rn(a,n))if(c=Lt(a,n),ce(c))r=M0(r,ve(),l.children);else{const d=Ks(l.children,le(c));if(d){const h=d.getChild(Re(c));r=hl(r,ve(),h)}}}else throw ro("WriteRecord should have .snap or .children")}}return r}function SS(t,e,n,r,s){if(!r&&!s){const l=qi(t.visibleWrites,e);if(l!=null)return l;{const a=Zr(t.visibleWrites,e);if(Cp(a))return n;if(n==null&&!Sp(a,ve()))return null;{const c=n||J.EMPTY_NODE;return Xs(a,c)}}}else{const l=Zr(t.visibleWrites,e);if(!s&&Cp(l))return n;if(!s&&n==null&&!Sp(l,ve()))return null;{const a=function(h){return(h.visible||s)&&(!r||!~r.indexOf(h.writeId))&&(Rn(h.path,e)||Rn(e,h.path))},c=ES(t.allWrites,a,e),d=n||J.EMPTY_NODE;return Xs(c,d)}}}function nF(t,e,n){let r=J.EMPTY_NODE;const s=qi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Be,(l,a)=>{r=r.updateImmediateChild(l,a)}),r;if(n){const l=Zr(t.visibleWrites,e);return n.forEachChild(Be,(a,c)=>{const d=Xs(Zr(l,new Te(a)),c);r=r.updateImmediateChild(a,d)}),b0(l).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}else{const l=Zr(t.visibleWrites,e);return b0(l).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}}function rF(t,e,n,r,s){b(r||s,"Either existingEventSnap or existingServerSnap must exist");const l=Xe(e,n);if(Sp(t.visibleWrites,l))return null;{const a=Zr(t.visibleWrites,l);return Cp(a)?s.getChild(n):Xs(a,s.getChild(n))}}function iF(t,e,n,r){const s=Xe(e,n),l=qi(t.visibleWrites,s);if(l!=null)return l;if(r.isCompleteForChild(n)){const a=Zr(t.visibleWrites,s);return Xs(a,r.getNode().getImmediateChild(n))}else return null}function sF(t,e){return qi(t.visibleWrites,e)}function oF(t,e,n,r,s,l,a){let c;const d=Zr(t.visibleWrites,e),h=qi(d,ve());if(h!=null)c=h;else if(n!=null)c=Xs(d,n);else return[];if(c=c.withIndex(a),!c.isEmpty()&&!c.isLeafNode()){const v=[],m=a.getCompare(),y=l?c.getReverseIteratorFrom(r,a):c.getIteratorFrom(r,a);let R=y.getNext();for(;R&&v.length<s;)m(R,r)!==0&&v.push(R),R=y.getNext();return v}else return[]}function lF(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function vc(t,e,n,r){return SS(t.writeTree,t.treePath,e,n,r)}function Gg(t,e){return nF(t.writeTree,t.treePath,e)}function U0(t,e,n,r){return rF(t.writeTree,t.treePath,e,n,r)}function yc(t,e){return sF(t.writeTree,Xe(t.treePath,e))}function aF(t,e,n,r,s,l){return oF(t.writeTree,t.treePath,e,n,r,s,l)}function jg(t,e,n){return iF(t.writeTree,t.treePath,e,n)}function CS(t,e){return IS(Xe(t.treePath,e),t.writeTree)}function IS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const l=s.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(r,Ul(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(r,bl(r,s.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(r,Qs(r,e.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(r,Ul(r,e.snapshotNode,s.oldSnap));else throw ro("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const TS=new cF;class Kg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Hi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),l=aF(this.writes_,s,n,1,r,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fF(t){return{filter:t}}function dF(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hF(t,e,n,r,s){const l=new uF;let a,c;if(n.type===Nn.OVERWRITE){const h=n;h.source.fromUser?a=Ip(t,e,h.path,h.snap,r,s,l):(b(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered()&&!ce(h.path),a=wc(t,e,h.path,h.snap,r,s,c,l))}else if(n.type===Nn.MERGE){const h=n;h.source.fromUser?a=gF(t,e,h.path,h.children,r,s,l):(b(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered(),a=Tp(t,e,h.path,h.children,r,s,c,l))}else if(n.type===Nn.ACK_USER_WRITE){const h=n;h.revert?a=vF(t,e,h.path,r,s,l):a=_F(t,e,h.path,h.affectedTree,r,s,l)}else if(n.type===Nn.LISTEN_COMPLETE)a=mF(t,e,n.path,r,l);else throw ro("Unknown operation type: "+n.type);const d=l.getChanges();return pF(e,a,d),{viewCache:a,changes:d}}function pF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),l=Ep(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(l)||!r.getNode().getPriority().equals(l.getPriority()))&&n.push(_S(Ep(e)))}}function kS(t,e,n,r,s,l){const a=e.eventCache;if(yc(r,n)!=null)return e;{let c,d;if(ce(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=$i(e),v=h instanceof J?h:J.EMPTY_NODE,m=Gg(r,v);c=t.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const h=vc(r,$i(e));c=t.filter.updateFullNode(e.eventCache.getNode(),h,l)}else{const h=le(n);if(h===".priority"){b(ni(n)===1,"Can't have a priority with additional path components");const v=a.getNode();d=e.serverCache.getNode();const m=U0(r,n,v,d);m!=null?c=t.filter.updatePriority(v,m):c=a.getNode()}else{const v=Re(n);let m;if(a.isCompleteForChild(h)){d=e.serverCache.getNode();const y=U0(r,n,a.getNode(),d);y!=null?m=a.getNode().getImmediateChild(h).updateChild(v,y):m=a.getNode().getImmediateChild(h)}else m=jg(r,h,e.serverCache);m!=null?c=t.filter.updateChild(a.getNode(),h,m,v,s,l):c=a.getNode()}}return dl(e,c,a.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function wc(t,e,n,r,s,l,a,c){const d=e.serverCache;let h;const v=a?t.filter:t.filter.getIndexedFilter();if(ce(n))h=v.updateFullNode(d.getNode(),r,null);else if(v.filtersNodes()&&!d.isFiltered()){const R=d.getNode().updateChild(n,r);h=v.updateFullNode(d.getNode(),R,null)}else{const R=le(n);if(!d.isCompleteForPath(n)&&ni(n)>1)return e;const x=Re(n),K=d.getNode().getImmediateChild(R).updateChild(x,r);R===".priority"?h=v.updatePriority(d.getNode(),K):h=v.updateChild(d.getNode(),R,K,x,TS,null)}const m=yS(e,h,d.isFullyInitialized()||ce(n),v.filtersNodes()),y=new Kg(s,m,l);return kS(t,m,n,s,y,c)}function Ip(t,e,n,r,s,l,a){const c=e.eventCache;let d,h;const v=new Kg(s,e,l);if(ce(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,a),d=dl(e,h,!0,t.filter.filtersNodes());else{const m=le(n);if(m===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),d=dl(e,h,c.isFullyInitialized(),c.isFiltered());else{const y=Re(n),R=c.getNode().getImmediateChild(m);let x;if(ce(y))x=r;else{const D=v.getCompleteChild(m);D!=null?lS(y)===".priority"&&D.getChild(uS(y)).isEmpty()?x=D:x=D.updateChild(y,r):x=J.EMPTY_NODE}if(R.equals(x))d=e;else{const D=t.filter.updateChild(c.getNode(),m,x,y,v,a);d=dl(e,D,c.isFullyInitialized(),t.filter.filtersNodes())}}}return d}function W0(t,e){return t.eventCache.isCompleteForChild(e)}function gF(t,e,n,r,s,l,a){let c=e;return r.foreach((d,h)=>{const v=Xe(n,d);W0(e,le(v))&&(c=Ip(t,c,v,h,s,l,a))}),r.foreach((d,h)=>{const v=Xe(n,d);W0(e,le(v))||(c=Ip(t,c,v,h,s,l,a))}),c}function z0(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Tp(t,e,n,r,s,l,a,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,h;ce(n)?h=r:h=new Pe(null).setTree(n,r);const v=e.serverCache.getNode();return h.children.inorderTraversal((m,y)=>{if(v.hasChild(m)){const R=e.serverCache.getNode().getImmediateChild(m),x=z0(t,R,y);d=wc(t,d,new Te(m),x,s,l,a,c)}}),h.children.inorderTraversal((m,y)=>{const R=!e.serverCache.isCompleteForChild(m)&&y.value===null;if(!v.hasChild(m)&&!R){const x=e.serverCache.getNode().getImmediateChild(m),D=z0(t,x,y);d=wc(t,d,new Te(m),D,s,l,a,c)}}),d}function _F(t,e,n,r,s,l,a){if(yc(s,n)!=null)return e;const c=e.serverCache.isFiltered(),d=e.serverCache;if(r.value!=null){if(ce(n)&&d.isFullyInitialized()||d.isCompleteForPath(n))return wc(t,e,n,d.getNode().getChild(n),s,l,c,a);if(ce(n)){let h=new Pe(null);return d.getNode().forEachChild(Fs,(v,m)=>{h=h.set(new Te(v),m)}),Tp(t,e,n,h,s,l,c,a)}else return e}else{let h=new Pe(null);return r.foreach((v,m)=>{const y=Xe(n,v);d.isCompleteForPath(y)&&(h=h.set(v,d.getNode().getChild(y)))}),Tp(t,e,n,h,s,l,c,a)}}function mF(t,e,n,r,s){const l=e.serverCache,a=yS(e,l.getNode(),l.isFullyInitialized()||ce(n),l.isFiltered());return kS(t,a,n,r,TS,s)}function vF(t,e,n,r,s,l){let a;if(yc(r,n)!=null)return e;{const c=new Kg(r,e,s),d=e.eventCache.getNode();let h;if(ce(n)||le(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=vc(r,$i(e));else{const m=e.serverCache.getNode();b(m instanceof J,"serverChildren would be complete if leaf node"),v=Gg(r,m)}v=v,h=t.filter.updateFullNode(d,v,l)}else{const v=le(n);let m=jg(r,v,e.serverCache);m==null&&e.serverCache.isCompleteForChild(v)&&(m=d.getImmediateChild(v)),m!=null?h=t.filter.updateChild(d,v,m,Re(n),c,l):e.eventCache.getNode().hasChild(v)?h=t.filter.updateChild(d,v,J.EMPTY_NODE,Re(n),c,l):h=d,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=vc(r,$i(e)),a.isLeafNode()&&(h=t.filter.updateFullNode(h,a,l)))}return a=e.serverCache.isFullyInitialized()||yc(r,ve())!=null,dl(e,h,a,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new zg(r.getIndex()),l=U2(r);this.processor_=fF(l);const a=n.serverCache,c=n.eventCache,d=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),h=l.updateFullNode(J.EMPTY_NODE,c.getNode(),null),v=new Hi(d,a.isFullyInitialized(),s.filtersNodes()),m=new Hi(h,c.isFullyInitialized(),l.filtersNodes());this.viewCache_=qc(m,v),this.eventGenerator_=new G2(this.query_)}get query(){return this.query_}}function wF(t){return t.viewCache_.serverCache.getNode()}function EF(t,e){const n=$i(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function B0(t){return t.eventRegistrations_.length===0}function SF(t,e){t.eventRegistrations_.push(e)}function H0(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(l=>{const a=l.createCancelEvent(n,s);a&&r.push(a)})}if(e){let s=[];for(let l=0;l<t.eventRegistrations_.length;++l){const a=t.eventRegistrations_[l];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(l+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function $0(t,e,n,r){e.type===Nn.MERGE&&e.source.queryId!==null&&(b($i(t.viewCache_),"We should always have a full cache before handling merges"),b(Ep(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,l=hF(t.processor_,s,e,n,r);return dF(t.processor_,l.viewCache),b(l.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=l.viewCache,RS(t,l.changes,l.viewCache.eventCache.getNode(),null)}function CF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(l,a)=>{r.push(Qs(l,a))}),n.isFullyInitialized()&&r.push(_S(n.getNode())),RS(t,r,n.getNode(),e)}function RS(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return j2(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec;class IF{constructor(){this.views=new Map}}function TF(t){b(!Ec,"__referenceConstructor has already been defined"),Ec=t}function kF(){return b(Ec,"Reference.ts has not been loaded"),Ec}function RF(t){return t.views.size===0}function qg(t,e,n,r){const s=e.source.queryId;if(s!==null){const l=t.views.get(s);return b(l!=null,"SyncTree gave us an op for an invalid query."),$0(l,e,n,r)}else{let l=[];for(const a of t.views.values())l=l.concat($0(a,e,n,r));return l}}function NF(t,e,n,r,s){const l=e._queryIdentifier,a=t.views.get(l);if(!a){let c=vc(n,s?r:null),d=!1;c?d=!0:r instanceof J?(c=Gg(n,r),d=!1):(c=J.EMPTY_NODE,d=!1);const h=qc(new Hi(c,d,!1),new Hi(r,s,!1));return new yF(e,h)}return a}function xF(t,e,n,r,s,l){const a=NF(t,e,r,s,l);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,a),SF(a,n),CF(a,n)}function AF(t,e,n,r){const s=e._queryIdentifier,l=[];let a=[];const c=ri(t);if(s==="default")for(const[d,h]of t.views.entries())a=a.concat(H0(h,n,r)),B0(h)&&(t.views.delete(d),h.query._queryParams.loadsAllData()||l.push(h.query));else{const d=t.views.get(s);d&&(a=a.concat(H0(d,n,r)),B0(d)&&(t.views.delete(s),d.query._queryParams.loadsAllData()||l.push(d.query)))}return c&&!ri(t)&&l.push(new(kF())(e._repo,e._path)),{removed:l,events:a}}function NS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function bs(t,e){let n=null;for(const r of t.views.values())n=n||EF(r,e);return n}function xS(t,e){if(e._queryParams.loadsAllData())return Yc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function AS(t,e){return xS(t,e)!=null}function ri(t){return Yc(t)!=null}function Yc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;function PF(t){b(!Sc,"__referenceConstructor has already been defined"),Sc=t}function OF(){return b(Sc,"Reference.ts has not been loaded"),Sc}let LF=1;class V0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=lF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function PS(t,e,n,r,s){return Q2(t.pendingWriteTree_,e,n,r,s),s?na(t,new Bi(vS(),e,n)):[]}function Ri(t,e,n=!1){const r=X2(t.pendingWriteTree_,e);if(J2(t.pendingWriteTree_,e)){let l=new Pe(null);return r.snap!=null?l=l.set(ve(),!0):Wt(r.children,a=>{l=l.set(new Te(a),!0)}),na(t,new mc(r.path,l,n))}else return[]}function Qc(t,e,n){return na(t,new Bi(Hg(),e,n))}function DF(t,e,n){const r=Pe.fromObject(n);return na(t,new Bl(Hg(),e,r))}function MF(t,e){return na(t,new zl(Hg(),e))}function FF(t,e,n){const r=Qg(t,n);if(r){const s=Xg(r),l=s.path,a=s.queryId,c=Lt(l,e),d=new zl($g(a),c);return Jg(t,l,d)}else return[]}function kp(t,e,n,r,s=!1){const l=e._path,a=t.syncPointTree_.get(l);let c=[];if(a&&(e._queryIdentifier==="default"||AS(a,e))){const d=AF(a,e,n,r);RF(a)&&(t.syncPointTree_=t.syncPointTree_.remove(l));const h=d.removed;if(c=d.events,!s){const v=h.findIndex(y=>y._queryParams.loadsAllData())!==-1,m=t.syncPointTree_.findOnPath(l,(y,R)=>ri(R));if(v&&!m){const y=t.syncPointTree_.subtree(l);if(!y.isEmpty()){const R=WF(y);for(let x=0;x<R.length;++x){const D=R[x],K=D.query,C=DS(t,D);t.listenProvider_.startListening(pl(K),Cc(t,K),C.hashFn,C.onComplete)}}}!m&&h.length>0&&!r&&(v?t.listenProvider_.stopListening(pl(e),null):h.forEach(y=>{const R=t.queryToTagMap.get(Xc(y));t.listenProvider_.stopListening(pl(y),R)}))}zF(t,h)}return c}function bF(t,e,n,r){const s=Qg(t,r);if(s!=null){const l=Xg(s),a=l.path,c=l.queryId,d=Lt(a,e),h=new Bi($g(c),d,n);return Jg(t,a,h)}else return[]}function UF(t,e,n,r){const s=Qg(t,r);if(s){const l=Xg(s),a=l.path,c=l.queryId,d=Lt(a,e),h=Pe.fromObject(n),v=new Bl($g(c),d,h);return Jg(t,a,v)}else return[]}function G0(t,e,n,r=!1){const s=e._path;let l=null,a=!1;t.syncPointTree_.foreachOnPath(s,(y,R)=>{const x=Lt(y,s);l=l||bs(R,x),a=a||ri(R)});let c=t.syncPointTree_.get(s);c?(a=a||ri(c),l=l||bs(c,ve())):(c=new IF,t.syncPointTree_=t.syncPointTree_.set(s,c));let d;l!=null?d=!0:(d=!1,l=J.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((R,x)=>{const D=bs(x,ve());D&&(l=l.updateImmediateChild(R,D))}));const h=AS(c,e);if(!h&&!e._queryParams.loadsAllData()){const y=Xc(e);b(!t.queryToTagMap.has(y),"View does not exist, but we have a tag");const R=BF();t.queryToTagMap.set(y,R),t.tagToQueryMap.set(R,y)}const v=Vg(t.pendingWriteTree_,s);let m=xF(c,e,n,v,l,d);if(!h&&!a&&!r){const y=xS(c,e);m=m.concat(HF(t,e,y))}return m}function Yg(t,e,n){const s=t.pendingWriteTree_,l=t.syncPointTree_.findOnPath(e,(a,c)=>{const d=Lt(a,e),h=bs(c,d);if(h)return h});return SS(s,e,l,n,!0)}function na(t,e){return OS(e,t.syncPointTree_,null,Vg(t.pendingWriteTree_,ve()))}function OS(t,e,n,r){if(ce(t.path))return LS(t,e,n,r);{const s=e.get(ve());n==null&&s!=null&&(n=bs(s,ve()));let l=[];const a=le(t.path),c=t.operationForChild(a),d=e.children.get(a);if(d&&c){const h=n?n.getImmediateChild(a):null,v=CS(r,a);l=l.concat(OS(c,d,h,v))}return s&&(l=l.concat(qg(s,t,r,n))),l}}function LS(t,e,n,r){const s=e.get(ve());n==null&&s!=null&&(n=bs(s,ve()));let l=[];return e.children.inorderTraversal((a,c)=>{const d=n?n.getImmediateChild(a):null,h=CS(r,a),v=t.operationForChild(a);v&&(l=l.concat(LS(v,c,d,h)))}),s&&(l=l.concat(qg(s,t,r,n))),l}function DS(t,e){const n=e.query,r=Cc(t,n);return{hashFn:()=>(wF(e)||J.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?FF(t,n._path,r):MF(t,n._path);{const l=bM(s,n);return kp(t,n,null,l)}}}}function Cc(t,e){const n=Xc(e);return t.queryToTagMap.get(n)}function Xc(t){return t._path.toString()+"$"+t._queryIdentifier}function Qg(t,e){return t.tagToQueryMap.get(e)}function Xg(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function Jg(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const s=Vg(t.pendingWriteTree_,e);return qg(r,n,s,null)}function WF(t){return t.fold((e,n,r)=>{if(n&&ri(n))return[Yc(n)];{let s=[];return n&&(s=NS(n)),Wt(r,(l,a)=>{s=s.concat(a)}),s}})}function pl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(OF())(t._repo,t._path):t}function zF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Xc(r),l=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(l)}}}function BF(){return LF++}function HF(t,e,n){const r=e._path,s=Cc(t,e),l=DS(t,n),a=t.listenProvider_.startListening(pl(e),s,l.hashFn,l.onComplete),c=t.syncPointTree_.subtree(r);if(s)b(!ri(c.value),"If we're adding a query, it shouldn't be shadowed");else{const d=c.fold((h,v,m)=>{if(!ce(h)&&v&&ri(v))return[Yc(v).query];{let y=[];return v&&(y=y.concat(NS(v).map(R=>R.query))),Wt(m,(R,x)=>{y=y.concat(x)}),y}});for(let h=0;h<d.length;++h){const v=d[h];t.listenProvider_.stopListening(pl(v),Cc(t,v))}}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zg(n)}node(){return this.node_}}class e_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new e_(this.syncTree_,n)}node(){return Yg(this.syncTree_,this.path_)}}const $F=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},j0=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return VF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return GF(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},VF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},GF=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const s=e.node();if(b(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const a=s.getValue();return typeof a!="number"?r:a+r},jF=function(t,e,n,r){return t_(e,new e_(n,t),r)},MS=function(t,e,n){return t_(t,new Zg(e),n)};function t_(t,e,n){const r=t.getPriority().val(),s=j0(r,e.getImmediateChild(".priority"),n);let l;if(t.isLeafNode()){const a=t,c=j0(a.getValue(),e,n);return c!==a.getValue()||s!==a.getPriority().val()?new et(c,at(s)):t}else{const a=t;return l=a,s!==a.getPriority().val()&&(l=l.updatePriority(new et(s))),a.forEachChild(Be,(c,d)=>{const h=t_(d,e.getImmediateChild(c),n);h!==d&&(l=l.updateImmediateChild(c,h))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function r_(t,e){let n=e instanceof Te?e:new Te(e),r=t,s=le(n);for(;s!==null;){const l=Ks(r.node.children,s)||{children:{},childCount:0};r=new n_(s,r,l),n=Re(n),s=le(n)}return r}function lo(t){return t.node.value}function FS(t,e){t.node.value=e,Rp(t)}function bS(t){return t.node.childCount>0}function KF(t){return lo(t)===void 0&&!bS(t)}function Jc(t,e){Wt(t.node.children,(n,r)=>{e(new n_(n,t,r))})}function US(t,e,n,r){n&&!r&&e(t),Jc(t,s=>{US(s,e,!0,r)}),n&&r&&e(t)}function qF(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ra(t){return new Te(t.parent===null?t.name:ra(t.parent)+"/"+t.name)}function Rp(t){t.parent!==null&&YF(t.parent,t.name,t)}function YF(t,e,n){const r=KF(n),s=yr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Rp(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Rp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF=/[\[\].#$\/\u0000-\u001F\u007F]/,XF=/[\[\].#$\u0000-\u001F\u007F]/,fh=10*1024*1024,WS=function(t){return typeof t=="string"&&t.length!==0&&!QF.test(t)},zS=function(t){return typeof t=="string"&&t.length!==0&&!XF.test(t)},JF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zS(t)},BS=function(t,e,n,r){r&&e===void 0||i_(xg(t,"value"),e,n)},i_=function(t,e,n){const r=n instanceof Te?new _2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Si(r));if(typeof e=="function")throw new Error(t+"contains a function "+Si(r)+" with contents = "+e.toString());if(z1(e))throw new Error(t+"contains "+e.toString()+" "+Si(r));if(typeof e=="string"&&e.length>fh/3&&jc(e)>fh)throw new Error(t+"contains a string greater than "+fh+" utf8 bytes "+Si(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,l=!1;if(Wt(e,(a,c)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(l=!0,!WS(a)))throw new Error(t+" contains an invalid key ("+a+") "+Si(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);m2(r,a),i_(t,c,r),v2(r)}),s&&l)throw new Error(t+' contains ".value" child '+Si(r)+" in addition to actual children.")}},HS=function(t,e,n,r){if(!(r&&n===void 0)&&!zS(n))throw new Error(xg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZF=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),HS(t,e,n,r)},s_=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},eb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!WS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JF(n))throw new Error(xg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function o_(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],l=s.getPath();n!==null&&!bg(l,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(s)}n&&t.eventLists_.push(n)}function $S(t,e,n){o_(t,n),VS(t,r=>bg(r,e))}function _r(t,e,n){o_(t,n),VS(t,r=>Rn(r,e)||Rn(e,r))}function VS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const l=s.path;e(l)?(nb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Pi&&_t("event: "+n.toString()),oo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="repo_interrupt",ib=25;class sb{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_c(),this.transactionQueueTree_=new n_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ob(t,e,n){if(t.stats_=Mg(t.repoInfo_),t.forceRestClient_||BM())t.server_=new gc(t.repoInfo_,(r,s,l,a)=>{K0(t,r,s,l,a)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>q0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new cr(t.repoInfo_,e,(r,s,l,a)=>{K0(t,r,s,l,a)},r=>{q0(t,r)},r=>{lb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=jM(t.repoInfo_,()=>new V2(t.stats_,t.server_)),t.infoData_=new W2,t.infoSyncTree_=new V0({startListening:(r,s,l,a)=>{let c=[];const d=t.infoData_.getNode(r._path);return d.isEmpty()||(c=Qc(t.infoSyncTree_,r._path,d),setTimeout(()=>{a("ok")},0)),c},stopListening:()=>{}}),a_(t,"connected",!1),t.serverSyncTree_=new V0({startListening:(r,s,l,a)=>(t.server_.listen(r,l,s,(c,d)=>{const h=a(c,d);_r(t.eventQueue_,r._path,h)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function GS(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function l_(t){return $F({timestamp:GS(t)})}function K0(t,e,n,r,s){t.dataUpdateCount++;const l=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(s)if(r){const d=uc(n,h=>at(h));a=UF(t.serverSyncTree_,l,d,s)}else{const d=at(n);a=bF(t.serverSyncTree_,l,d,s)}else if(r){const d=uc(n,h=>at(h));a=DF(t.serverSyncTree_,l,d)}else{const d=at(n);a=Qc(t.serverSyncTree_,l,d)}let c=l;a.length>0&&(c=Zc(t,l)),_r(t.eventQueue_,c,a)}function q0(t,e){a_(t,"connected",e),e===!1&&ub(t)}function lb(t,e){Wt(e,(n,r)=>{a_(t,n,r)})}function a_(t,e,n){const r=new Te("/.info/"+e),s=at(n);t.infoData_.updateSnapshot(r,s);const l=Qc(t.infoSyncTree_,r,s);_r(t.eventQueue_,r,l)}function jS(t){return t.nextWriteId_++}function ab(t,e,n,r,s){u_(t,"set",{path:e.toString(),value:n,priority:r});const l=l_(t),a=at(n,r),c=Yg(t.serverSyncTree_,e),d=MS(a,c,l),h=jS(t),v=PS(t.serverSyncTree_,e,d,h,!0);o_(t.eventQueue_,v),t.server_.put(e.toString(),a.val(!0),(y,R)=>{const x=y==="ok";x||Ut("set at "+e+" failed: "+y);const D=Ri(t.serverSyncTree_,h,!x);_r(t.eventQueue_,e,D),db(t,s,y,R)});const m=XS(t,e);Zc(t,m),_r(t.eventQueue_,m,[])}function ub(t){u_(t,"onDisconnectEvents");const e=l_(t),n=_c();wp(t.onDisconnect_,ve(),(s,l)=>{const a=jF(s,l,t.serverSyncTree_,e);mS(n,s,a)});let r=[];wp(n,ve(),(s,l)=>{r=r.concat(Qc(t.serverSyncTree_,s,l));const a=XS(t,s);Zc(t,a)}),t.onDisconnect_=_c(),_r(t.eventQueue_,ve(),r)}function cb(t,e,n){let r;le(e._path)===".info"?r=G0(t.infoSyncTree_,e,n):r=G0(t.serverSyncTree_,e,n),$S(t.eventQueue_,e._path,r)}function Np(t,e,n){let r;le(e._path)===".info"?r=kp(t.infoSyncTree_,e,n):r=kp(t.serverSyncTree_,e,n),$S(t.eventQueue_,e._path,r)}function fb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rb)}function u_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function db(t,e,n,r){e&&oo(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let l=s;r&&(l+=": "+r);const a=new Error(l);a.code=s,e(a)}})}function KS(t,e,n){return Yg(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function c_(t,e=t.transactionQueueTree_){if(e||ef(t,e),lo(e)){const n=YS(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&hb(t,ra(e),n)}else bS(e)&&Jc(e,n=>{c_(t,n)})}function hb(t,e,n){const r=n.map(h=>h.currentWriteId),s=KS(t,e,r);let l=s;const a=s.hash();for(let h=0;h<n.length;h++){const v=n[h];b(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const m=Lt(e,v.path);l=l.updateChild(m,v.currentOutputSnapshotRaw)}const c=l.val(!0),d=e;t.server_.put(d.toString(),c,h=>{u_(t,"transaction put response",{path:d.toString(),status:h});let v=[];if(h==="ok"){const m=[];for(let y=0;y<n.length;y++)n[y].status=2,v=v.concat(Ri(t.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&m.push(()=>n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)),n[y].unwatcher();ef(t,r_(t.transactionQueueTree_,e)),c_(t,t.transactionQueueTree_),_r(t.eventQueue_,e,v);for(let y=0;y<m.length;y++)oo(m[y])}else{if(h==="datastale")for(let m=0;m<n.length;m++)n[m].status===3?n[m].status=4:n[m].status=0;else{Ut("transaction at "+d.toString()+" failed: "+h);for(let m=0;m<n.length;m++)n[m].status=4,n[m].abortReason=h}Zc(t,e)}},a)}function Zc(t,e){const n=qS(t,e),r=ra(n),s=YS(t,n);return pb(t,s,r),r}function pb(t,e,n){if(e.length===0)return;const r=[];let s=[];const a=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const d=e[c],h=Lt(n,d.path);let v=!1,m;if(b(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)v=!0,m=d.abortReason,s=s.concat(Ri(t.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=ib)v=!0,m="maxretry",s=s.concat(Ri(t.serverSyncTree_,d.currentWriteId,!0));else{const y=KS(t,d.path,a);d.currentInputSnapshot=y;const R=e[c].update(y.val());if(R!==void 0){i_("transaction failed: Data returned ",R,d.path);let x=at(R);typeof R=="object"&&R!=null&&yr(R,".priority")||(x=x.updatePriority(y.getPriority()));const K=d.currentWriteId,C=l_(t),S=MS(x,y,C);d.currentOutputSnapshotRaw=x,d.currentOutputSnapshotResolved=S,d.currentWriteId=jS(t),a.splice(a.indexOf(K),1),s=s.concat(PS(t.serverSyncTree_,d.path,S,d.currentWriteId,d.applyLocally)),s=s.concat(Ri(t.serverSyncTree_,K,!0))}else v=!0,m="nodata",s=s.concat(Ri(t.serverSyncTree_,d.currentWriteId,!0))}_r(t.eventQueue_,n,s),s=[],v&&(e[c].status=2,function(y){setTimeout(y,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(m==="nodata"?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(m),!1,null))))}ef(t,t.transactionQueueTree_);for(let c=0;c<r.length;c++)oo(r[c]);c_(t,t.transactionQueueTree_)}function qS(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&lo(r)===void 0;)r=r_(r,n),e=Re(e),n=le(e);return r}function YS(t,e){const n=[];return QS(t,e,n),n.sort((r,s)=>r.order-s.order),n}function QS(t,e,n){const r=lo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Jc(e,s=>{QS(t,s,n)})}function ef(t,e){const n=lo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,FS(e,n.length>0?n:void 0)}Jc(e,r=>{ef(t,r)})}function XS(t,e){const n=ra(qS(t,e)),r=r_(t.transactionQueueTree_,e);return qF(r,s=>{dh(t,s)}),dh(t,r),US(r,s=>{dh(t,s)}),n}function dh(t,e){const n=lo(e);if(n){const r=[];let s=[],l=-1;for(let a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(b(l===a-1,"All SENT items should be at beginning of queue."),l=a,n[a].status=3,n[a].abortReason="set"):(b(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),s=s.concat(Ri(t.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));l===-1?FS(e,void 0):n.length=l+1,_r(t.eventQueue_,ra(e),s);for(let a=0;a<r.length;a++)oo(r[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _b(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Y0=function(t,e){const n=mb(t),r=n.namespace;n.domain==="firebase.com"&&gr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&gr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OM();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new J1(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Te(n.pathString)}},mb=function(t){let e="",n="",r="",s="",l="",a=!0,c="https",d=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(c=t.substring(0,h-1),t=t.substring(h+2));let v=t.indexOf("/");v===-1&&(v=t.length);let m=t.indexOf("?");m===-1&&(m=t.length),e=t.substring(0,Math.min(v,m)),v<m&&(s=gb(t.substring(v,m)));const y=_b(t.substring(Math.min(t.length,m)));h=e.indexOf(":"),h>=0?(a=c==="https"||c==="wss",d=parseInt(e.substring(h+1),10)):h=e.length;const R=e.slice(0,h);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const x=e.indexOf(".");r=e.substring(0,x).toLowerCase(),n=e.substring(x+1),l=r}"ns"in y&&(l=y.ns)}return{host:e,port:d,domain:n,subdomain:r,secure:a,scheme:c,pathString:s,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vb=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const l=new Array(8);for(s=7;s>=0;s--)l[s]=Q0.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let a=l.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)a+=Q0.charAt(e[s]);return b(a.length===20,"nextPushId: Length should be 20."),a}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class ZS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ce(this._path)?null:lS(this._path)}get ref(){return new wr(this._repo,this._path)}get _queryIdentifier(){const e=L0(this._queryParams),n=Lg(e);return n==="{}"?"default":n}get _queryObject(){return L0(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof f_))return!1;const n=this._repo===e._repo,r=bg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+g2(this._path)}}class wr extends f_{constructor(e,n){super(e,n,new Bg,!1)}get parent(){const e=uS(this._path);return e===null?null:new wr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),r=Js(this.ref,e);return new Hl(this._node.getChild(n),r,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Hl(s,Js(this.ref,r),Be)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tC(t,e){return t=yt(t),t._checkNotDeleted("ref"),e!==void 0?Js(t._root,e):t._root}function Js(t,e){return t=yt(t),le(t._path)===null?ZF("child","path",e,!1):HS("child","path",e,!1),new wr(t._repo,Xe(t._path,e))}function yb(t,e){t=yt(t),s_("push",t._path),BS("push",e,t._path,!0);const n=GS(t._repo),r=vb(n),s=Js(t,r),l=Js(t,r);let a;return e!=null?a=d_(l,e).then(()=>l):a=Promise.resolve(l),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function wb(t){return s_("remove",t._path),d_(t,null)}function d_(t,e){t=yt(t),s_("set",t._path),BS("set",e,t._path,!1);const n=new Gc;return ab(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class tf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new JS("value",this,new Hl(e.snapshotNode,new wr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZS(this,e,n):null}matches(e){return e instanceof tf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class nf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZS(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const r=Js(new wr(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new JS(e.type,this,new Hl(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof nf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Eb(t,e,n,r,s){let l;if(typeof r=="object"&&(l=void 0,s=r),typeof r=="function"&&(l=r),s&&s.onlyOnce){const d=n,h=(v,m)=>{Np(t._repo,t,c),d(v,m)};h.userCallback=n.userCallback,h.context=n.context,n=h}const a=new eC(n,l||void 0),c=e==="value"?new tf(a):new nf(e,a);return cb(t._repo,t,c),()=>Np(t._repo,t,c)}function Sb(t,e,n,r){return Eb(t,"value",e,n,r)}function Cb(t,e,n){let r=null;const s=n?new eC(n):null;e==="value"?r=new tf(s):e&&(r=new nf(e,s)),Np(t._repo,t,r)}TF(wr);PF(wr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="FIREBASE_DATABASE_EMULATOR_HOST",xp={};let Tb=!1;function kb(t,e,n,r){t.repoInfo_=new J1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Rb(t,e,n,r,s){let l=r||t.options.databaseURL;l===void 0&&(t.options.projectId||gr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),l=`${t.options.projectId}-default-rtdb.firebaseio.com`);let a=Y0(l,s),c=a.repoInfo,d,h;typeof process<"u"&&process.env&&(h=process.env[Ib]),h?(d=!0,l=`http://${h}?ns=${c.namespace}`,a=Y0(l,s),c=a.repoInfo):d=!a.repoInfo.secure;const v=s&&d?new Ms(Ms.OWNER):new $M(t.name,t.options,e);eb("Invalid Firebase Database URL",a),ce(a.path)||gr("Database URL must point to the root of a Firebase Database (not including a child path).");const m=xb(c,t,v,new HM(t.name,n));return new Ab(m,t)}function Nb(t,e){const n=xp[e];(!n||n[t.key]!==t)&&gr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fb(t),delete n[t.key]}function xb(t,e,n,r){let s=xp[e.name];s||(s={},xp[e.name]=s);let l=s[t.toURLString()];return l&&gr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new sb(t,Tb,n,r),s[t.toURLString()]=l,l}class Ab{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ob(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wr(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Nb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gr("Cannot call "+e+" on a deleted database.")}}function Pb(t=D1(),e){const n=Og(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=rD("database");r&&Ob(n,...r)}return n}function Ob(t,e,n,r={}){t=yt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gr("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let l;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&gr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new Ms(Ms.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:sD(r.mockUserToken,t.app.options.projectId);l=new Ms(a)}kb(s,e,n,l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){RM(Jl),qs(new Ui("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return Rb(r,s,l,n)},"PUBLIC").setMultipleInstances(!0)),Jr(_0,m0,t),Jr(_0,m0,"esm2017")}cr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Lb();function h_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function nC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Db=nC,rC=new Xl("auth","Firebase",nC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Ag("@firebase/auth");function Lu(t,...e){X0.logLevel<=Ie.ERROR&&X0.error(`Auth (${Jl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,...e){throw p_(t,...e)}function $n(t,...e){return p_(t,...e)}function Mb(t,e,n){const r=Object.assign(Object.assign({},Db()),{[e]:n});return new Xl("auth","Firebase",r).create(e,{appName:t.name})}function p_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rC.create(t,...e)}function Y(t,e,...n){if(!t)throw p_(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lu(e),new Error(e)}function mr(t,e){t||lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=new Map;function ar(t){mr(t instanceof Function,"Expected a class definition");let e=J0.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,J0.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t,e){const n=Og(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),l=n.getOptions();if(cc(l,e??{}))return s;Ln(s,"already-initialized")}return n.initialize({options:e})}function bb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ub(){return Z0()==="http:"||Z0()==="https:"}function Z0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ub()||oD()||"connection"in navigator)?navigator.onLine:!0}function zb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ng()||N1()}get(){return Wb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new ia(3e4,6e4);function ao(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function uo(t,e,n,r,s={}){return sC(t,s,async()=>{let l={},a={};r&&(e==="GET"?a=r:l={body:JSON.stringify(r)});const c=io(Object.assign({key:t.config.apiKey},a)).slice(1),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode),iC.fetch()(oC(t,t.config.apiHost,n,c),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},l))})}async function sC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bb),e);try{const s=new $b(t),l=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await l.json();if("needConfirmation"in a)throw wu(t,"account-exists-with-different-credential",a);if(l.ok&&!("errorMessage"in a))return a;{const c=l.ok?a.errorMessage:a.error.message,[d,h]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(t,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw wu(t,"email-already-in-use",a);if(d==="USER_DISABLED")throw wu(t,"user-disabled",a);const v=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Mb(t,v,h);Ln(t,v)}}catch(s){if(s instanceof li)throw s;Ln(t,"network-request-failed",{message:String(s)})}}async function sa(t,e,n,r,s={}){const l=await uo(t,e,n,r,s);return"mfaPendingCredential"in l&&Ln(t,"multi-factor-auth-required",{_serverResponse:l}),l}function oC(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?g_(t.config,s):`${t.config.apiScheme}://${s}`}class $b{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),Hb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$n(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e){return uo(t,"POST","/v1/accounts:delete",e)}async function Gb(t,e){return uo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jb(t,e=!1){const n=yt(t),r=await n.getIdToken(e),s=__(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const l=typeof s.firebase=="object"?s.firebase:void 0,a=l==null?void 0:l.sign_in_provider;return{claims:s,token:r,authTime:gl(hh(s.auth_time)),issuedAtTime:gl(hh(s.iat)),expirationTime:gl(hh(s.exp)),signInProvider:a||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function hh(t){return Number(t)*1e3}function __(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const s=ac(n);return s?JSON.parse(s):(Lu("Failed to decode base64 JWT payload"),null)}catch(s){return Lu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kb(t){const e=__(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof li&&qb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $l(t,Gb(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const l=s.users[0];t._notifyReloadListener(l);const a=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Jb(l.providerUserInfo):[],c=Xb(t.providerData,a),d=t.isAnonymous,h=!(t.email&&l.passwordHash)&&!(c!=null&&c.length),v=d?h:!1,m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new lC(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(t,m)}async function Qb(t){const e=yt(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jb(t){return t.map(e=>{var{providerId:n}=e,r=h_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){const n=await sC(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:l}=t.config,a=oC(t,s,"/v1/token",`key=${l}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",iC.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:l}=await Zb(e,n);this.updateTokensAndExpiration(r,s,Number(l))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:l}=n,a=new Vl;return r&&(Y(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),l&&(Y(typeof l=="number","internal-error",{appName:e}),a.expirationTime=l),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vl,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Oi{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,l=h_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new lC(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await $l(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jb(this,e)}reload(){return Qb(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Oi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $l(this,Vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,l,a,c,d,h,v;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,R=(l=n.phoneNumber)!==null&&l!==void 0?l:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,K=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,C=(h=n.createdAt)!==null&&h!==void 0?h:void 0,S=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:T,emailVerified:L,isAnonymous:U,providerData:H,stsTokenManager:B}=n;Y(T&&B,e,"internal-error");const G=Vl.fromJSON(this.name,B);Y(typeof T=="string",e,"internal-error"),Pr(m,e.name),Pr(y,e.name),Y(typeof L=="boolean",e,"internal-error"),Y(typeof U=="boolean",e,"internal-error"),Pr(R,e.name),Pr(x,e.name),Pr(D,e.name),Pr(K,e.name),Pr(C,e.name),Pr(S,e.name);const we=new Oi({uid:T,auth:e,email:y,emailVerified:L,displayName:m,isAnonymous:U,photoURL:x,phoneNumber:R,tenantId:D,stsTokenManager:G,createdAt:C,lastLoginAt:S});return H&&Array.isArray(H)&&(we.providerData=H.map(se=>Object.assign({},se))),K&&(we._redirectEventId=K),we}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vl;s.updateFromServerResponse(n);const l=new Oi({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ic(l),l}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aC.type="NONE";const ew=aC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:l}=this.auth;this.fullUserKey=Du(this.userKey,s.apiKey,l),this.fullPersistenceKey=Du("persistence",s.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Oi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Us(ar(ew),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let l=s[0]||ar(ew);const a=Du(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const v=await h._get(a);if(v){const m=Oi._fromJSON(e,v);h!==l&&(c=m),l=h;break}}catch{}const d=s.filter(h=>h._shouldAllowMigration);return!l._shouldAllowMigration||!d.length?new Us(l,e,r):(l=d[0],c&&await l._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==l)try{await h._remove(a)}catch{}})),new Us(l,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hC(e))return"Blackberry";if(pC(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||cC(e))&&!e.includes("edge/"))return"Chrome";if(dC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uC(t=vt()){return/firefox\//i.test(t)}function m_(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cC(t=vt()){return/crios\//i.test(t)}function fC(t=vt()){return/iemobile/i.test(t)}function dC(t=vt()){return/android/i.test(t)}function hC(t=vt()){return/blackberry/i.test(t)}function pC(t=vt()){return/webos/i.test(t)}function rf(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eU(t=vt()){var e;return rf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tU(){return lD()&&document.documentMode===10}function gC(t=vt()){return rf(t)||dC(t)||pC(t)||hC(t)||/windows phone/i.test(t)||fC(t)}function nU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t,e=[]){let n;switch(t){case"Browser":n=tw(vt());break;case"Worker":n=`${tw(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jl}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=l=>new Promise((a,c)=>{try{const d=e(l);a(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nw(this),this.idTokenSubscription=new nw(this),this.beforeStateQueue=new rU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===c)&&(d!=null&&d.user)&&(s=d.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(a,this,"internal-error"),a.then(()=>l(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_C(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function oa(t){return yt(t)}class nw{constructor(e){this.auth=e,this.observer=null,this.addObserver=_D(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sU(t,e,n){const r=oa(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),l=mC(e),{host:a,port:c}=oU(e),d=c===null?"":`:${c}`;r.config.emulator={url:`${l}//${a}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||lU()}function mC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oU(t){const e=mC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const l=s[1];return{host:l,port:rw(r.substr(l.length+1))}}else{const[l,a]=r.split(":");return{host:l,port:rw(a)}}}function rw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lU(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,n){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function aU(t,e){return uo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uU(t,e){return sa(t,"POST","/v1/accounts:signInWithPassword",ao(t,e))}async function cU(t,e){return uo(t,"POST","/v1/accounts:sendOobCode",ao(t,e))}async function fU(t,e){return cU(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dU(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}async function hU(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends v_{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return uU(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dU(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return aU(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hU(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e){return sa(t,"POST","/v1/accounts:signInWithIdp",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU="http://localhost";class Vi extends v_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,l=h_(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Vi(r,s);return a.idToken=l.idToken||void 0,a.accessToken=l.accessToken||void 0,a.secret=l.secret,a.nonce=l.nonce,a.pendingToken=l.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:pU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gU(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _U(t){const e=el(tl(t)).link,n=e?el(tl(e)).deep_link_id:null,r=el(tl(t)).deep_link_id;return(r?el(tl(r)).link:null)||r||n||e||t}class y_{constructor(e){var n,r,s,l,a,c;const d=el(tl(e)),h=(n=d.apiKey)!==null&&n!==void 0?n:null,v=(r=d.oobCode)!==null&&r!==void 0?r:null,m=gU((s=d.mode)!==null&&s!==void 0?s:null);Y(h&&v&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=v,this.continueUrl=(l=d.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(a=d.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=_U(e);try{return new y_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.providerId=co.PROVIDER_ID}static credential(e,n){return Gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=y_.parseLink(n);return Y(r,"argument-error"),Gl._fromEmailAndCode(e,r.code,r.tenantId)}}co.PROVIDER_ID="password";co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends vC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends la{constructor(){super("facebook.com")}static credential(e){return Vi._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends la{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends la{constructor(){super("github.com")}static credential(e){return Vi._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends la{constructor(){super("twitter.com")}static credential(e,n){return Vi._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mU(t,e){return sa(t,"POST","/v1/accounts:signUp",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const l=await Oi._fromIdTokenResponse(e,r,s),a=iw(r);return new Gi({user:l,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=iw(r);return new Gi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function iw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends li{constructor(e,n,r,s){var l;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Tc(e,n,r,s)}}function yC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(t,l,e,r):l})}async function vU(t,e,n=!1){const r=await $l(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yU(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const l=await $l(t,yC(r,s,e,t),n);Y(l.idToken,r,"internal-error");const a=__(l.idToken);Y(a,r,"internal-error");const{sub:c}=a;return Y(t.uid===c,r,"user-mismatch"),Gi._forOperation(t,s,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(t,e,n=!1){const r="signIn",s=await yC(t,r,e),l=await Gi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(l.user),l}async function wU(t,e){return wC(oa(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EU(t,e,n){var r;Y(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Y(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SU(t,e,n){const r=yt(t),s={requestType:"PASSWORD_RESET",email:e};n&&EU(r,s,n),await fU(r,s)}async function CU(t,e,n){const r=oa(t),s=await mU(r,{returnSecureToken:!0,email:e,password:n}),l=await Gi._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(l.user),l}function IU(t,e,n){return wU(yt(t),co.credential(e,n))}function TU(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function kU(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function RU(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}function NU(t){return yt(t).signOut()}const kc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xU(){const t=vt();return m_(t)||rf(t)}const AU=1e3,PU=10;class SC extends EC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xU()&&nU(),this.fallbackToPolling=gC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},l=this.storage.getItem(r);tU()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,PU):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}SC.type="LOCAL";const OU=SC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC extends EC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CC.type="SESSION";const IC=CC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:l}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,l)),d=await LU(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let l,a;return new Promise((c,d)=>{const h=w_("",20);s.port1.start();const v=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),c(y.data.response);break;default:clearTimeout(v),clearTimeout(l),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function MU(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function FU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UU(){return TC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC="firebaseLocalStorageDb",WU=1,Rc="firebaseLocalStorage",RC="fbase_key";class aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function of(t,e){return t.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function zU(){const t=indexedDB.deleteDatabase(kC);return new aa(t).toPromise()}function Pp(){const t=indexedDB.open(kC,WU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rc,{keyPath:RC})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rc)?e(r):(r.close(),await zU(),e(await Pp()))})})}async function sw(t,e,n){const r=of(t,!0).put({[RC]:e,value:n});return new aa(r).toPromise()}async function BU(t,e){const n=of(t,!1).get(e),r=await new aa(n).toPromise();return r===void 0?null:r.value}function ow(t,e){const n=of(t,!0).delete(e);return new aa(n).toPromise()}const HU=800,$U=3;class NC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$U)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sf._getInstance(UU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FU(),!this.activeServiceWorker)return;this.sender=new DU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pp();return await sw(e,kc,"1"),await ow(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ow(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const l=of(s,!1).getAll();return new aa(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:l}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(l)&&(this.notifyListeners(s,l),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NC.type="LOCAL";const VU=NC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jU(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const l=$n("internal-error");l.customData=s,n(l)},r.type="text/javascript",r.charset="UTF-8",GU().appendChild(r)})}function KU(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ia(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(t,e){return e?ar(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends v_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YU(t){return wC(t.auth,new E_(t),t.bypassAuthState)}function QU(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),yU(n,new E_(t),t.bypassAuthState)}async function XU(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),vU(n,new E_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,s,l=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:l,error:a,type:c}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:l||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YU;case"linkViaPopup":case"linkViaRedirect":return XU;case"reauthViaPopup":case"reauthViaRedirect":return QU;default:Ln(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JU=new ia(2e3,1e4);class Rs extends xC{constructor(e,n,r,s,l){super(e,n,s,l),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=w_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,JU.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZU="pendingRedirect",Mu=new Map;class e3 extends xC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const r=await t3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t3(t,e){const n=i3(e),r=r3(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function n3(t,e){Mu.set(t._key(),e)}function r3(t){return ar(t._redirectPersistence)}function i3(t){return Du(ZU,t.config.apiKey,t.name)}async function s3(t,e,n=!1){const r=oa(t),s=qU(r,e),a=await new e3(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o3=10*60*1e3;class l3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!AC(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o3&&this.cachedEventUids.clear(),this.cachedEventUids.has(lw(e))}saveEventToCache(e){this.cachedEventUids.add(lw(e)),this.lastProcessedEventTime=Date.now()}}function lw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function a3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u3(t,e={}){return uo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f3=/^https?/;async function d3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await u3(t);for(const n of e)try{if(h3(n))return}catch{}Ln(t,"unauthorized-domain")}function h3(t){const e=Ap(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!f3.test(n))return!1;if(c3.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p3=new ia(3e4,6e4);function aw(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function g3(t){return new Promise((e,n)=>{var r,s,l;function a(){aw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{aw(),n($n(t,"network-request-failed"))},timeout:p3.get()})}if(!((s=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((l=Vn().gapi)===null||l===void 0)&&l.load)a();else{const c=KU("iframefcb");return Vn()[c]=()=>{gapi.load?a():n($n(t,"network-request-failed"))},jU(`https://apis.google.com/js/api.js?onload=${c}`).catch(d=>n(d))}}).catch(e=>{throw Fu=null,e})}let Fu=null;function _3(t){return Fu=Fu||g3(t),Fu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m3=new ia(5e3,15e3),v3="__/auth/iframe",y3="emulator/auth/iframe",w3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S3(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?g_(e,y3):`https://${t.config.authDomain}/${v3}`,r={apiKey:e.apiKey,appName:t.name,v:Jl},s=E3.get(t.config.apiHost);s&&(r.eid=s);const l=t._getFrameworks();return l.length&&(r.fw=l.join(",")),`${n}?${io(r).slice(1)}`}async function C3(t){const e=await _3(t),n=Vn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:S3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w3,dontclear:!0},r=>new Promise(async(s,l)=>{await r.restyle({setHideOnLeave:!1});const a=$n(t,"network-request-failed"),c=Vn().setTimeout(()=>{l(a)},m3.get());function d(){Vn().clearTimeout(c),s(r)}r.ping(d).then(d,()=>{l(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T3=500,k3=600,R3="_blank",N3="http://localhost";class uw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x3(t,e,n,r=T3,s=k3){const l=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},I3),{width:r.toString(),height:s.toString(),top:l,left:a}),h=vt().toLowerCase();n&&(c=cC(h)?R3:n),uC(h)&&(e=e||N3,d.scrollbars="yes");const v=Object.entries(d).reduce((y,[R,x])=>`${y}${R}=${x},`,"");if(eU(h)&&c!=="_self")return A3(e||"",c),new uw(null);const m=window.open(e||"",c,v);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new uw(m)}function A3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P3="__/auth/handler",O3="emulator/auth/handler";function cw(t,e,n,r,s,l){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jl,eventId:s};if(e instanceof vC){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",cp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(l||{}))a[d]=h}if(e instanceof la){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];return`${L3(t)}?${io(c).slice(1)}`}function L3({config:t}){return t.emulator?g_(t,O3):`https://${t.authDomain}/${P3}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="webStorageSupport";class D3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IC,this._completeRedirectFn=s3,this._overrideRedirectResult=n3}async _openPopup(e,n,r,s){var l;mr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const a=cw(e,n,r,Ap(),s);return x3(e,a,w_())}async _openRedirect(e,n,r,s){return await this._originValidation(e),MU(cw(e,n,r,Ap(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:l}=this.eventManagers[n];return s?Promise.resolve(s):(mr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C3(e),r=new l3(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ph,{type:ph},s=>{var l;const a=(l=s==null?void 0:s[0])===null||l===void 0?void 0:l[ph];a!==void 0&&n(!!a),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=d3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gC()||m_()||rf()}}const M3=D3;var fw="@firebase/auth",dw="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function U3(t){qs(new Ui("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:l,authDomain:a}=r.options;return((c,d)=>{Y(l&&!l.includes(":"),"invalid-api-key",{appName:c.name}),Y(!(a!=null&&a.includes(":")),"argument-error",{appName:c.name});const h={apiKey:l,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_C(t)},v=new iU(c,d,h);return bb(v,n),v})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qs(new Ui("auth-internal",e=>{const n=oa(e.getProvider("auth").getImmediate());return(r=>new F3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jr(fw,dw,b3(t)),Jr(fw,dw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W3=5*60,z3=R1("authIdTokenMaxAge")||W3;let hw=null;const B3=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>z3)return;const s=n==null?void 0:n.token;hw!==s&&(hw=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Yo(t=D1()){const e=Og(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fb(t,{popupRedirectResolver:M3,persistence:[VU,OU,IC]}),r=R1("authTokenSyncURL");if(r){const l=B3(r);kU(n,l,()=>l(n.currentUser)),TU(n,a=>l(a))}const s=k1("auth");return s&&sU(n,`http://${s}`),n}U3("Browser");const H3={apiKey:"AIzaSyBBC2JcpCGrh47Urufoj2pQDXJOr8CU2_Q",authDomain:"halloween-suggestions.firebaseapp.com",projectId:"halloween-suggestions",storageBucket:"halloween-suggestions.appspot.com",messagingSenderId:"708959466491",appId:"1:708959466491:web:f8f4e6984390ac9e7bd15e"},$3=L1(H3),PC=Pb($3),V3=tC(PC,"data/movies"),ua={getMoviesRef:()=>V3,getMovieRef:t=>tC(PC,`data/movies/${t}`),login:({email:t,pass:e})=>{const n=Yo();return IU(n,t,e)},logout:()=>{const t=Yo();return NU(t).then(()=>console.log("You have signed out")).catch(e=>console.log("Error signing out: ",e))},registerUser:({email:t,pass:e})=>{const n=Yo();return CU(n,t,e).then(()=>alert(`Created new user ${t}, logging in now.`)).catch(r=>console.errorr("Error registering user: ",r))},updatePassword:t=>{const e=Yo();return SU(e,t).then(()=>alert(`Password Update Email Sent to ${t}`)).catch(n=>console.error("Error updating password: ",n))},getLoginObserver:t=>{const e=Yo();return RU(e,n=>{n=n||{},t(n)})}};var Zs={},G3={get exports(){return Zs},set exports(t){Zs=t}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(t,e){(function(){var n,r="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,v="__lodash_placeholder__",m=1,y=2,R=4,x=1,D=2,K=1,C=2,S=4,T=8,L=16,U=32,H=64,B=128,G=256,we=512,se=30,zt="...",ai=800,ui=16,fo=1,lf=2,ho=3,gn=1/0,z=9007199254740991,ee=17976931348623157e292,te=0/0,_e=4294967295,Ge=_e-1,Yi=_e>>>1,Gn=[["ary",B],["bind",K],["bindKey",C],["curry",T],["curryRight",L],["flip",we],["partial",U],["partialRight",H],["rearg",G]],Dn="[object Arguments]",Zt="[object Array]",Qi="[object AsyncFunction]",po="[object Boolean]",go="[object Date]",MC="[object DOMException]",ca="[object Error]",fa="[object Function]",S_="[object GeneratorFunction]",_n="[object Map]",_o="[object Number]",FC="[object Null]",jn="[object Object]",C_="[object Promise]",bC="[object Proxy]",mo="[object RegExp]",mn="[object Set]",vo="[object String]",da="[object Symbol]",UC="[object Undefined]",yo="[object WeakMap]",WC="[object WeakSet]",wo="[object ArrayBuffer]",Xi="[object DataView]",af="[object Float32Array]",uf="[object Float64Array]",cf="[object Int8Array]",ff="[object Int16Array]",df="[object Int32Array]",hf="[object Uint8Array]",pf="[object Uint8ClampedArray]",gf="[object Uint16Array]",_f="[object Uint32Array]",zC=/\b__p \+= '';/g,BC=/\b(__p \+=) '' \+/g,HC=/(__e\(.*?\)|\b__t\)) \+\n'';/g,I_=/&(?:amp|lt|gt|quot|#39);/g,T_=/[&<>"']/g,$C=RegExp(I_.source),VC=RegExp(T_.source),GC=/<%-([\s\S]+?)%>/g,jC=/<%([\s\S]+?)%>/g,k_=/<%=([\s\S]+?)%>/g,KC=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qC=/^\w*$/,YC=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mf=/[\\^$.*+?()[\]{}|]/g,QC=RegExp(mf.source),vf=/^\s+/,XC=/\s/,JC=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ZC=/\{\n\/\* \[wrapped with (.+)\] \*/,eI=/,? & /,tI=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,nI=/[()=,{}\[\]\/\s]/,rI=/\\(\\)?/g,iI=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,R_=/\w*$/,sI=/^[-+]0x[0-9a-f]+$/i,oI=/^0b[01]+$/i,lI=/^\[object .+?Constructor\]$/,aI=/^0o[0-7]+$/i,uI=/^(?:0|[1-9]\d*)$/,cI=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ha=/($^)/,fI=/['\n\r\u2028\u2029\\]/g,pa="\\ud800-\\udfff",dI="\\u0300-\\u036f",hI="\\ufe20-\\ufe2f",pI="\\u20d0-\\u20ff",N_=dI+hI+pI,x_="\\u2700-\\u27bf",A_="a-z\\xdf-\\xf6\\xf8-\\xff",gI="\\xac\\xb1\\xd7\\xf7",_I="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",mI="\\u2000-\\u206f",vI=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",P_="A-Z\\xc0-\\xd6\\xd8-\\xde",O_="\\ufe0e\\ufe0f",L_=gI+_I+mI+vI,yf="['’]",yI="["+pa+"]",D_="["+L_+"]",ga="["+N_+"]",M_="\\d+",wI="["+x_+"]",F_="["+A_+"]",b_="[^"+pa+L_+M_+x_+A_+P_+"]",wf="\\ud83c[\\udffb-\\udfff]",EI="(?:"+ga+"|"+wf+")",U_="[^"+pa+"]",Ef="(?:\\ud83c[\\udde6-\\uddff]){2}",Sf="[\\ud800-\\udbff][\\udc00-\\udfff]",Ji="["+P_+"]",W_="\\u200d",z_="(?:"+F_+"|"+b_+")",SI="(?:"+Ji+"|"+b_+")",B_="(?:"+yf+"(?:d|ll|m|re|s|t|ve))?",H_="(?:"+yf+"(?:D|LL|M|RE|S|T|VE))?",$_=EI+"?",V_="["+O_+"]?",CI="(?:"+W_+"(?:"+[U_,Ef,Sf].join("|")+")"+V_+$_+")*",II="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",TI="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",G_=V_+$_+CI,kI="(?:"+[wI,Ef,Sf].join("|")+")"+G_,RI="(?:"+[U_+ga+"?",ga,Ef,Sf,yI].join("|")+")",NI=RegExp(yf,"g"),xI=RegExp(ga,"g"),Cf=RegExp(wf+"(?="+wf+")|"+RI+G_,"g"),AI=RegExp([Ji+"?"+F_+"+"+B_+"(?="+[D_,Ji,"$"].join("|")+")",SI+"+"+H_+"(?="+[D_,Ji+z_,"$"].join("|")+")",Ji+"?"+z_+"+"+B_,Ji+"+"+H_,TI,II,M_,kI].join("|"),"g"),PI=RegExp("["+W_+pa+N_+O_+"]"),OI=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,LI=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],DI=-1,xe={};xe[af]=xe[uf]=xe[cf]=xe[ff]=xe[df]=xe[hf]=xe[pf]=xe[gf]=xe[_f]=!0,xe[Dn]=xe[Zt]=xe[wo]=xe[po]=xe[Xi]=xe[go]=xe[ca]=xe[fa]=xe[_n]=xe[_o]=xe[jn]=xe[mo]=xe[mn]=xe[vo]=xe[yo]=!1;var ke={};ke[Dn]=ke[Zt]=ke[wo]=ke[Xi]=ke[po]=ke[go]=ke[af]=ke[uf]=ke[cf]=ke[ff]=ke[df]=ke[_n]=ke[_o]=ke[jn]=ke[mo]=ke[mn]=ke[vo]=ke[da]=ke[hf]=ke[pf]=ke[gf]=ke[_f]=!0,ke[ca]=ke[fa]=ke[yo]=!1;var MI={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},FI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bI={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},UI={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},WI=parseFloat,zI=parseInt,j_=typeof Fo=="object"&&Fo&&Fo.Object===Object&&Fo,BI=typeof self=="object"&&self&&self.Object===Object&&self,st=j_||BI||Function("return this")(),If=e&&!e.nodeType&&e,ci=If&&!0&&t&&!t.nodeType&&t,K_=ci&&ci.exports===If,Tf=K_&&j_.process,en=function(){try{var I=ci&&ci.require&&ci.require("util").types;return I||Tf&&Tf.binding&&Tf.binding("util")}catch{}}(),q_=en&&en.isArrayBuffer,Y_=en&&en.isDate,Q_=en&&en.isMap,X_=en&&en.isRegExp,J_=en&&en.isSet,Z_=en&&en.isTypedArray;function Bt(I,A,N){switch(N.length){case 0:return I.call(A);case 1:return I.call(A,N[0]);case 2:return I.call(A,N[0],N[1]);case 3:return I.call(A,N[0],N[1],N[2])}return I.apply(A,N)}function HI(I,A,N,$){for(var Z=-1,me=I==null?0:I.length;++Z<me;){var qe=I[Z];A($,qe,N(qe),I)}return $}function tn(I,A){for(var N=-1,$=I==null?0:I.length;++N<$&&A(I[N],N,I)!==!1;);return I}function $I(I,A){for(var N=I==null?0:I.length;N--&&A(I[N],N,I)!==!1;);return I}function em(I,A){for(var N=-1,$=I==null?0:I.length;++N<$;)if(!A(I[N],N,I))return!1;return!0}function Er(I,A){for(var N=-1,$=I==null?0:I.length,Z=0,me=[];++N<$;){var qe=I[N];A(qe,N,I)&&(me[Z++]=qe)}return me}function _a(I,A){var N=I==null?0:I.length;return!!N&&Zi(I,A,0)>-1}function kf(I,A,N){for(var $=-1,Z=I==null?0:I.length;++$<Z;)if(N(A,I[$]))return!0;return!1}function Le(I,A){for(var N=-1,$=I==null?0:I.length,Z=Array($);++N<$;)Z[N]=A(I[N],N,I);return Z}function Sr(I,A){for(var N=-1,$=A.length,Z=I.length;++N<$;)I[Z+N]=A[N];return I}function Rf(I,A,N,$){var Z=-1,me=I==null?0:I.length;for($&&me&&(N=I[++Z]);++Z<me;)N=A(N,I[Z],Z,I);return N}function VI(I,A,N,$){var Z=I==null?0:I.length;for($&&Z&&(N=I[--Z]);Z--;)N=A(N,I[Z],Z,I);return N}function Nf(I,A){for(var N=-1,$=I==null?0:I.length;++N<$;)if(A(I[N],N,I))return!0;return!1}var GI=xf("length");function jI(I){return I.split("")}function KI(I){return I.match(tI)||[]}function tm(I,A,N){var $;return N(I,function(Z,me,qe){if(A(Z,me,qe))return $=me,!1}),$}function ma(I,A,N,$){for(var Z=I.length,me=N+($?1:-1);$?me--:++me<Z;)if(A(I[me],me,I))return me;return-1}function Zi(I,A,N){return A===A?sT(I,A,N):ma(I,nm,N)}function qI(I,A,N,$){for(var Z=N-1,me=I.length;++Z<me;)if($(I[Z],A))return Z;return-1}function nm(I){return I!==I}function rm(I,A){var N=I==null?0:I.length;return N?Pf(I,A)/N:te}function xf(I){return function(A){return A==null?n:A[I]}}function Af(I){return function(A){return I==null?n:I[A]}}function im(I,A,N,$,Z){return Z(I,function(me,qe,Ce){N=$?($=!1,me):A(N,me,qe,Ce)}),N}function YI(I,A){var N=I.length;for(I.sort(A);N--;)I[N]=I[N].value;return I}function Pf(I,A){for(var N,$=-1,Z=I.length;++$<Z;){var me=A(I[$]);me!==n&&(N=N===n?me:N+me)}return N}function Of(I,A){for(var N=-1,$=Array(I);++N<I;)$[N]=A(N);return $}function QI(I,A){return Le(A,function(N){return[N,I[N]]})}function sm(I){return I&&I.slice(0,um(I)+1).replace(vf,"")}function Ht(I){return function(A){return I(A)}}function Lf(I,A){return Le(A,function(N){return I[N]})}function Eo(I,A){return I.has(A)}function om(I,A){for(var N=-1,$=I.length;++N<$&&Zi(A,I[N],0)>-1;);return N}function lm(I,A){for(var N=I.length;N--&&Zi(A,I[N],0)>-1;);return N}function XI(I,A){for(var N=I.length,$=0;N--;)I[N]===A&&++$;return $}var JI=Af(MI),ZI=Af(FI);function eT(I){return"\\"+UI[I]}function tT(I,A){return I==null?n:I[A]}function es(I){return PI.test(I)}function nT(I){return OI.test(I)}function rT(I){for(var A,N=[];!(A=I.next()).done;)N.push(A.value);return N}function Df(I){var A=-1,N=Array(I.size);return I.forEach(function($,Z){N[++A]=[Z,$]}),N}function am(I,A){return function(N){return I(A(N))}}function Cr(I,A){for(var N=-1,$=I.length,Z=0,me=[];++N<$;){var qe=I[N];(qe===A||qe===v)&&(I[N]=v,me[Z++]=N)}return me}function va(I){var A=-1,N=Array(I.size);return I.forEach(function($){N[++A]=$}),N}function iT(I){var A=-1,N=Array(I.size);return I.forEach(function($){N[++A]=[$,$]}),N}function sT(I,A,N){for(var $=N-1,Z=I.length;++$<Z;)if(I[$]===A)return $;return-1}function oT(I,A,N){for(var $=N+1;$--;)if(I[$]===A)return $;return $}function ts(I){return es(I)?aT(I):GI(I)}function vn(I){return es(I)?uT(I):jI(I)}function um(I){for(var A=I.length;A--&&XC.test(I.charAt(A)););return A}var lT=Af(bI);function aT(I){for(var A=Cf.lastIndex=0;Cf.test(I);)++A;return A}function uT(I){return I.match(Cf)||[]}function cT(I){return I.match(AI)||[]}var fT=function I(A){A=A==null?st:ns.defaults(st.Object(),A,ns.pick(st,LI));var N=A.Array,$=A.Date,Z=A.Error,me=A.Function,qe=A.Math,Ce=A.Object,Mf=A.RegExp,dT=A.String,nn=A.TypeError,ya=N.prototype,hT=me.prototype,rs=Ce.prototype,wa=A["__core-js_shared__"],Ea=hT.toString,Ee=rs.hasOwnProperty,pT=0,cm=function(){var i=/[^.]+$/.exec(wa&&wa.keys&&wa.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Sa=rs.toString,gT=Ea.call(Ce),_T=st._,mT=Mf("^"+Ea.call(Ee).replace(mf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ca=K_?A.Buffer:n,Ir=A.Symbol,Ia=A.Uint8Array,fm=Ca?Ca.allocUnsafe:n,Ta=am(Ce.getPrototypeOf,Ce),dm=Ce.create,hm=rs.propertyIsEnumerable,ka=ya.splice,pm=Ir?Ir.isConcatSpreadable:n,So=Ir?Ir.iterator:n,fi=Ir?Ir.toStringTag:n,Ra=function(){try{var i=_i(Ce,"defineProperty");return i({},"",{}),i}catch{}}(),vT=A.clearTimeout!==st.clearTimeout&&A.clearTimeout,yT=$&&$.now!==st.Date.now&&$.now,wT=A.setTimeout!==st.setTimeout&&A.setTimeout,Na=qe.ceil,xa=qe.floor,Ff=Ce.getOwnPropertySymbols,ET=Ca?Ca.isBuffer:n,gm=A.isFinite,ST=ya.join,CT=am(Ce.keys,Ce),Ye=qe.max,ft=qe.min,IT=$.now,TT=A.parseInt,_m=qe.random,kT=ya.reverse,bf=_i(A,"DataView"),Co=_i(A,"Map"),Uf=_i(A,"Promise"),is=_i(A,"Set"),Io=_i(A,"WeakMap"),To=_i(Ce,"create"),Aa=Io&&new Io,ss={},RT=mi(bf),NT=mi(Co),xT=mi(Uf),AT=mi(is),PT=mi(Io),Pa=Ir?Ir.prototype:n,ko=Pa?Pa.valueOf:n,mm=Pa?Pa.toString:n;function g(i){if(We(i)&&!ne(i)&&!(i instanceof fe)){if(i instanceof rn)return i;if(Ee.call(i,"__wrapped__"))return vv(i)}return new rn(i)}var os=function(){function i(){}return function(o){if(!Me(o))return{};if(dm)return dm(o);i.prototype=o;var u=new i;return i.prototype=n,u}}();function Oa(){}function rn(i,o){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=n}g.templateSettings={escape:GC,evaluate:jC,interpolate:k_,variable:"",imports:{_:g}},g.prototype=Oa.prototype,g.prototype.constructor=g,rn.prototype=os(Oa.prototype),rn.prototype.constructor=rn;function fe(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=_e,this.__views__=[]}function OT(){var i=new fe(this.__wrapped__);return i.__actions__=Rt(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=Rt(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=Rt(this.__views__),i}function LT(){if(this.__filtered__){var i=new fe(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function DT(){var i=this.__wrapped__.value(),o=this.__dir__,u=ne(i),f=o<0,p=u?i.length:0,_=jk(0,p,this.__views__),w=_.start,E=_.end,k=E-w,P=f?E:w-1,O=this.__iteratees__,M=O.length,W=0,j=ft(k,this.__takeCount__);if(!u||!f&&p==k&&j==k)return Bm(i,this.__actions__);var Q=[];e:for(;k--&&W<j;){P+=o;for(var ie=-1,X=i[P];++ie<M;){var ue=O[ie],pe=ue.iteratee,Gt=ue.type,St=pe(X);if(Gt==lf)X=St;else if(!St){if(Gt==fo)continue e;break e}}Q[W++]=X}return Q}fe.prototype=os(Oa.prototype),fe.prototype.constructor=fe;function di(i){var o=-1,u=i==null?0:i.length;for(this.clear();++o<u;){var f=i[o];this.set(f[0],f[1])}}function MT(){this.__data__=To?To(null):{},this.size=0}function FT(i){var o=this.has(i)&&delete this.__data__[i];return this.size-=o?1:0,o}function bT(i){var o=this.__data__;if(To){var u=o[i];return u===d?n:u}return Ee.call(o,i)?o[i]:n}function UT(i){var o=this.__data__;return To?o[i]!==n:Ee.call(o,i)}function WT(i,o){var u=this.__data__;return this.size+=this.has(i)?0:1,u[i]=To&&o===n?d:o,this}di.prototype.clear=MT,di.prototype.delete=FT,di.prototype.get=bT,di.prototype.has=UT,di.prototype.set=WT;function Kn(i){var o=-1,u=i==null?0:i.length;for(this.clear();++o<u;){var f=i[o];this.set(f[0],f[1])}}function zT(){this.__data__=[],this.size=0}function BT(i){var o=this.__data__,u=La(o,i);if(u<0)return!1;var f=o.length-1;return u==f?o.pop():ka.call(o,u,1),--this.size,!0}function HT(i){var o=this.__data__,u=La(o,i);return u<0?n:o[u][1]}function $T(i){return La(this.__data__,i)>-1}function VT(i,o){var u=this.__data__,f=La(u,i);return f<0?(++this.size,u.push([i,o])):u[f][1]=o,this}Kn.prototype.clear=zT,Kn.prototype.delete=BT,Kn.prototype.get=HT,Kn.prototype.has=$T,Kn.prototype.set=VT;function qn(i){var o=-1,u=i==null?0:i.length;for(this.clear();++o<u;){var f=i[o];this.set(f[0],f[1])}}function GT(){this.size=0,this.__data__={hash:new di,map:new(Co||Kn),string:new di}}function jT(i){var o=Ga(this,i).delete(i);return this.size-=o?1:0,o}function KT(i){return Ga(this,i).get(i)}function qT(i){return Ga(this,i).has(i)}function YT(i,o){var u=Ga(this,i),f=u.size;return u.set(i,o),this.size+=u.size==f?0:1,this}qn.prototype.clear=GT,qn.prototype.delete=jT,qn.prototype.get=KT,qn.prototype.has=qT,qn.prototype.set=YT;function hi(i){var o=-1,u=i==null?0:i.length;for(this.__data__=new qn;++o<u;)this.add(i[o])}function QT(i){return this.__data__.set(i,d),this}function XT(i){return this.__data__.has(i)}hi.prototype.add=hi.prototype.push=QT,hi.prototype.has=XT;function yn(i){var o=this.__data__=new Kn(i);this.size=o.size}function JT(){this.__data__=new Kn,this.size=0}function ZT(i){var o=this.__data__,u=o.delete(i);return this.size=o.size,u}function ek(i){return this.__data__.get(i)}function tk(i){return this.__data__.has(i)}function nk(i,o){var u=this.__data__;if(u instanceof Kn){var f=u.__data__;if(!Co||f.length<s-1)return f.push([i,o]),this.size=++u.size,this;u=this.__data__=new qn(f)}return u.set(i,o),this.size=u.size,this}yn.prototype.clear=JT,yn.prototype.delete=ZT,yn.prototype.get=ek,yn.prototype.has=tk,yn.prototype.set=nk;function vm(i,o){var u=ne(i),f=!u&&vi(i),p=!u&&!f&&xr(i),_=!u&&!f&&!p&&cs(i),w=u||f||p||_,E=w?Of(i.length,dT):[],k=E.length;for(var P in i)(o||Ee.call(i,P))&&!(w&&(P=="length"||p&&(P=="offset"||P=="parent")||_&&(P=="buffer"||P=="byteLength"||P=="byteOffset")||Jn(P,k)))&&E.push(P);return E}function ym(i){var o=i.length;return o?i[Yf(0,o-1)]:n}function rk(i,o){return ja(Rt(i),pi(o,0,i.length))}function ik(i){return ja(Rt(i))}function Wf(i,o,u){(u!==n&&!wn(i[o],u)||u===n&&!(o in i))&&Yn(i,o,u)}function Ro(i,o,u){var f=i[o];(!(Ee.call(i,o)&&wn(f,u))||u===n&&!(o in i))&&Yn(i,o,u)}function La(i,o){for(var u=i.length;u--;)if(wn(i[u][0],o))return u;return-1}function sk(i,o,u,f){return Tr(i,function(p,_,w){o(f,p,u(p),w)}),f}function wm(i,o){return i&&Fn(o,Ze(o),i)}function ok(i,o){return i&&Fn(o,xt(o),i)}function Yn(i,o,u){o=="__proto__"&&Ra?Ra(i,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):i[o]=u}function zf(i,o){for(var u=-1,f=o.length,p=N(f),_=i==null;++u<f;)p[u]=_?n:wd(i,o[u]);return p}function pi(i,o,u){return i===i&&(u!==n&&(i=i<=u?i:u),o!==n&&(i=i>=o?i:o)),i}function sn(i,o,u,f,p,_){var w,E=o&m,k=o&y,P=o&R;if(u&&(w=p?u(i,f,p,_):u(i)),w!==n)return w;if(!Me(i))return i;var O=ne(i);if(O){if(w=qk(i),!E)return Rt(i,w)}else{var M=dt(i),W=M==fa||M==S_;if(xr(i))return Vm(i,E);if(M==jn||M==Dn||W&&!p){if(w=k||W?{}:uv(i),!E)return k?bk(i,ok(w,i)):Fk(i,wm(w,i))}else{if(!ke[M])return p?i:{};w=Yk(i,M,E)}}_||(_=new yn);var j=_.get(i);if(j)return j;_.set(i,w),Uv(i)?i.forEach(function(X){w.add(sn(X,o,u,X,i,_))}):Fv(i)&&i.forEach(function(X,ue){w.set(ue,sn(X,o,u,ue,i,_))});var Q=P?k?od:sd:k?xt:Ze,ie=O?n:Q(i);return tn(ie||i,function(X,ue){ie&&(ue=X,X=i[ue]),Ro(w,ue,sn(X,o,u,ue,i,_))}),w}function lk(i){var o=Ze(i);return function(u){return Em(u,i,o)}}function Em(i,o,u){var f=u.length;if(i==null)return!f;for(i=Ce(i);f--;){var p=u[f],_=o[p],w=i[p];if(w===n&&!(p in i)||!_(w))return!1}return!0}function Sm(i,o,u){if(typeof i!="function")throw new nn(a);return Do(function(){i.apply(n,u)},o)}function No(i,o,u,f){var p=-1,_=_a,w=!0,E=i.length,k=[],P=o.length;if(!E)return k;u&&(o=Le(o,Ht(u))),f?(_=kf,w=!1):o.length>=s&&(_=Eo,w=!1,o=new hi(o));e:for(;++p<E;){var O=i[p],M=u==null?O:u(O);if(O=f||O!==0?O:0,w&&M===M){for(var W=P;W--;)if(o[W]===M)continue e;k.push(O)}else _(o,M,f)||k.push(O)}return k}var Tr=Ym(Mn),Cm=Ym(Hf,!0);function ak(i,o){var u=!0;return Tr(i,function(f,p,_){return u=!!o(f,p,_),u}),u}function Da(i,o,u){for(var f=-1,p=i.length;++f<p;){var _=i[f],w=o(_);if(w!=null&&(E===n?w===w&&!Vt(w):u(w,E)))var E=w,k=_}return k}function uk(i,o,u,f){var p=i.length;for(u=re(u),u<0&&(u=-u>p?0:p+u),f=f===n||f>p?p:re(f),f<0&&(f+=p),f=u>f?0:zv(f);u<f;)i[u++]=o;return i}function Im(i,o){var u=[];return Tr(i,function(f,p,_){o(f,p,_)&&u.push(f)}),u}function ot(i,o,u,f,p){var _=-1,w=i.length;for(u||(u=Xk),p||(p=[]);++_<w;){var E=i[_];o>0&&u(E)?o>1?ot(E,o-1,u,f,p):Sr(p,E):f||(p[p.length]=E)}return p}var Bf=Qm(),Tm=Qm(!0);function Mn(i,o){return i&&Bf(i,o,Ze)}function Hf(i,o){return i&&Tm(i,o,Ze)}function Ma(i,o){return Er(o,function(u){return Zn(i[u])})}function gi(i,o){o=Rr(o,i);for(var u=0,f=o.length;i!=null&&u<f;)i=i[bn(o[u++])];return u&&u==f?i:n}function km(i,o,u){var f=o(i);return ne(i)?f:Sr(f,u(i))}function wt(i){return i==null?i===n?UC:FC:fi&&fi in Ce(i)?Gk(i):iR(i)}function $f(i,o){return i>o}function ck(i,o){return i!=null&&Ee.call(i,o)}function fk(i,o){return i!=null&&o in Ce(i)}function dk(i,o,u){return i>=ft(o,u)&&i<Ye(o,u)}function Vf(i,o,u){for(var f=u?kf:_a,p=i[0].length,_=i.length,w=_,E=N(_),k=1/0,P=[];w--;){var O=i[w];w&&o&&(O=Le(O,Ht(o))),k=ft(O.length,k),E[w]=!u&&(o||p>=120&&O.length>=120)?new hi(w&&O):n}O=i[0];var M=-1,W=E[0];e:for(;++M<p&&P.length<k;){var j=O[M],Q=o?o(j):j;if(j=u||j!==0?j:0,!(W?Eo(W,Q):f(P,Q,u))){for(w=_;--w;){var ie=E[w];if(!(ie?Eo(ie,Q):f(i[w],Q,u)))continue e}W&&W.push(Q),P.push(j)}}return P}function hk(i,o,u,f){return Mn(i,function(p,_,w){o(f,u(p),_,w)}),f}function xo(i,o,u){o=Rr(o,i),i=hv(i,o);var f=i==null?i:i[bn(ln(o))];return f==null?n:Bt(f,i,u)}function Rm(i){return We(i)&&wt(i)==Dn}function pk(i){return We(i)&&wt(i)==wo}function gk(i){return We(i)&&wt(i)==go}function Ao(i,o,u,f,p){return i===o?!0:i==null||o==null||!We(i)&&!We(o)?i!==i&&o!==o:_k(i,o,u,f,Ao,p)}function _k(i,o,u,f,p,_){var w=ne(i),E=ne(o),k=w?Zt:dt(i),P=E?Zt:dt(o);k=k==Dn?jn:k,P=P==Dn?jn:P;var O=k==jn,M=P==jn,W=k==P;if(W&&xr(i)){if(!xr(o))return!1;w=!0,O=!1}if(W&&!O)return _||(_=new yn),w||cs(i)?ov(i,o,u,f,p,_):$k(i,o,k,u,f,p,_);if(!(u&x)){var j=O&&Ee.call(i,"__wrapped__"),Q=M&&Ee.call(o,"__wrapped__");if(j||Q){var ie=j?i.value():i,X=Q?o.value():o;return _||(_=new yn),p(ie,X,u,f,_)}}return W?(_||(_=new yn),Vk(i,o,u,f,p,_)):!1}function mk(i){return We(i)&&dt(i)==_n}function Gf(i,o,u,f){var p=u.length,_=p,w=!f;if(i==null)return!_;for(i=Ce(i);p--;){var E=u[p];if(w&&E[2]?E[1]!==i[E[0]]:!(E[0]in i))return!1}for(;++p<_;){E=u[p];var k=E[0],P=i[k],O=E[1];if(w&&E[2]){if(P===n&&!(k in i))return!1}else{var M=new yn;if(f)var W=f(P,O,k,i,o,M);if(!(W===n?Ao(O,P,x|D,f,M):W))return!1}}return!0}function Nm(i){if(!Me(i)||Zk(i))return!1;var o=Zn(i)?mT:lI;return o.test(mi(i))}function vk(i){return We(i)&&wt(i)==mo}function yk(i){return We(i)&&dt(i)==mn}function wk(i){return We(i)&&Ja(i.length)&&!!xe[wt(i)]}function xm(i){return typeof i=="function"?i:i==null?At:typeof i=="object"?ne(i)?Om(i[0],i[1]):Pm(i):Xv(i)}function jf(i){if(!Lo(i))return CT(i);var o=[];for(var u in Ce(i))Ee.call(i,u)&&u!="constructor"&&o.push(u);return o}function Ek(i){if(!Me(i))return rR(i);var o=Lo(i),u=[];for(var f in i)f=="constructor"&&(o||!Ee.call(i,f))||u.push(f);return u}function Kf(i,o){return i<o}function Am(i,o){var u=-1,f=Nt(i)?N(i.length):[];return Tr(i,function(p,_,w){f[++u]=o(p,_,w)}),f}function Pm(i){var o=ad(i);return o.length==1&&o[0][2]?fv(o[0][0],o[0][1]):function(u){return u===i||Gf(u,i,o)}}function Om(i,o){return cd(i)&&cv(o)?fv(bn(i),o):function(u){var f=wd(u,i);return f===n&&f===o?Ed(u,i):Ao(o,f,x|D)}}function Fa(i,o,u,f,p){i!==o&&Bf(o,function(_,w){if(p||(p=new yn),Me(_))Sk(i,o,w,u,Fa,f,p);else{var E=f?f(dd(i,w),_,w+"",i,o,p):n;E===n&&(E=_),Wf(i,w,E)}},xt)}function Sk(i,o,u,f,p,_,w){var E=dd(i,u),k=dd(o,u),P=w.get(k);if(P){Wf(i,u,P);return}var O=_?_(E,k,u+"",i,o,w):n,M=O===n;if(M){var W=ne(k),j=!W&&xr(k),Q=!W&&!j&&cs(k);O=k,W||j||Q?ne(E)?O=E:He(E)?O=Rt(E):j?(M=!1,O=Vm(k,!0)):Q?(M=!1,O=Gm(k,!0)):O=[]:Mo(k)||vi(k)?(O=E,vi(E)?O=Bv(E):(!Me(E)||Zn(E))&&(O=uv(k))):M=!1}M&&(w.set(k,O),p(O,k,f,_,w),w.delete(k)),Wf(i,u,O)}function Lm(i,o){var u=i.length;if(u)return o+=o<0?u:0,Jn(o,u)?i[o]:n}function Dm(i,o,u){o.length?o=Le(o,function(_){return ne(_)?function(w){return gi(w,_.length===1?_[0]:_)}:_}):o=[At];var f=-1;o=Le(o,Ht(q()));var p=Am(i,function(_,w,E){var k=Le(o,function(P){return P(_)});return{criteria:k,index:++f,value:_}});return YI(p,function(_,w){return Mk(_,w,u)})}function Ck(i,o){return Mm(i,o,function(u,f){return Ed(i,f)})}function Mm(i,o,u){for(var f=-1,p=o.length,_={};++f<p;){var w=o[f],E=gi(i,w);u(E,w)&&Po(_,Rr(w,i),E)}return _}function Ik(i){return function(o){return gi(o,i)}}function qf(i,o,u,f){var p=f?qI:Zi,_=-1,w=o.length,E=i;for(i===o&&(o=Rt(o)),u&&(E=Le(i,Ht(u)));++_<w;)for(var k=0,P=o[_],O=u?u(P):P;(k=p(E,O,k,f))>-1;)E!==i&&ka.call(E,k,1),ka.call(i,k,1);return i}function Fm(i,o){for(var u=i?o.length:0,f=u-1;u--;){var p=o[u];if(u==f||p!==_){var _=p;Jn(p)?ka.call(i,p,1):Jf(i,p)}}return i}function Yf(i,o){return i+xa(_m()*(o-i+1))}function Tk(i,o,u,f){for(var p=-1,_=Ye(Na((o-i)/(u||1)),0),w=N(_);_--;)w[f?_:++p]=i,i+=u;return w}function Qf(i,o){var u="";if(!i||o<1||o>z)return u;do o%2&&(u+=i),o=xa(o/2),o&&(i+=i);while(o);return u}function oe(i,o){return hd(dv(i,o,At),i+"")}function kk(i){return ym(fs(i))}function Rk(i,o){var u=fs(i);return ja(u,pi(o,0,u.length))}function Po(i,o,u,f){if(!Me(i))return i;o=Rr(o,i);for(var p=-1,_=o.length,w=_-1,E=i;E!=null&&++p<_;){var k=bn(o[p]),P=u;if(k==="__proto__"||k==="constructor"||k==="prototype")return i;if(p!=w){var O=E[k];P=f?f(O,k,E):n,P===n&&(P=Me(O)?O:Jn(o[p+1])?[]:{})}Ro(E,k,P),E=E[k]}return i}var bm=Aa?function(i,o){return Aa.set(i,o),i}:At,Nk=Ra?function(i,o){return Ra(i,"toString",{configurable:!0,enumerable:!1,value:Cd(o),writable:!0})}:At;function xk(i){return ja(fs(i))}function on(i,o,u){var f=-1,p=i.length;o<0&&(o=-o>p?0:p+o),u=u>p?p:u,u<0&&(u+=p),p=o>u?0:u-o>>>0,o>>>=0;for(var _=N(p);++f<p;)_[f]=i[f+o];return _}function Ak(i,o){var u;return Tr(i,function(f,p,_){return u=o(f,p,_),!u}),!!u}function ba(i,o,u){var f=0,p=i==null?f:i.length;if(typeof o=="number"&&o===o&&p<=Yi){for(;f<p;){var _=f+p>>>1,w=i[_];w!==null&&!Vt(w)&&(u?w<=o:w<o)?f=_+1:p=_}return p}return Xf(i,o,At,u)}function Xf(i,o,u,f){var p=0,_=i==null?0:i.length;if(_===0)return 0;o=u(o);for(var w=o!==o,E=o===null,k=Vt(o),P=o===n;p<_;){var O=xa((p+_)/2),M=u(i[O]),W=M!==n,j=M===null,Q=M===M,ie=Vt(M);if(w)var X=f||Q;else P?X=Q&&(f||W):E?X=Q&&W&&(f||!j):k?X=Q&&W&&!j&&(f||!ie):j||ie?X=!1:X=f?M<=o:M<o;X?p=O+1:_=O}return ft(_,Ge)}function Um(i,o){for(var u=-1,f=i.length,p=0,_=[];++u<f;){var w=i[u],E=o?o(w):w;if(!u||!wn(E,k)){var k=E;_[p++]=w===0?0:w}}return _}function Wm(i){return typeof i=="number"?i:Vt(i)?te:+i}function $t(i){if(typeof i=="string")return i;if(ne(i))return Le(i,$t)+"";if(Vt(i))return mm?mm.call(i):"";var o=i+"";return o=="0"&&1/i==-gn?"-0":o}function kr(i,o,u){var f=-1,p=_a,_=i.length,w=!0,E=[],k=E;if(u)w=!1,p=kf;else if(_>=s){var P=o?null:Bk(i);if(P)return va(P);w=!1,p=Eo,k=new hi}else k=o?[]:E;e:for(;++f<_;){var O=i[f],M=o?o(O):O;if(O=u||O!==0?O:0,w&&M===M){for(var W=k.length;W--;)if(k[W]===M)continue e;o&&k.push(M),E.push(O)}else p(k,M,u)||(k!==E&&k.push(M),E.push(O))}return E}function Jf(i,o){return o=Rr(o,i),i=hv(i,o),i==null||delete i[bn(ln(o))]}function zm(i,o,u,f){return Po(i,o,u(gi(i,o)),f)}function Ua(i,o,u,f){for(var p=i.length,_=f?p:-1;(f?_--:++_<p)&&o(i[_],_,i););return u?on(i,f?0:_,f?_+1:p):on(i,f?_+1:0,f?p:_)}function Bm(i,o){var u=i;return u instanceof fe&&(u=u.value()),Rf(o,function(f,p){return p.func.apply(p.thisArg,Sr([f],p.args))},u)}function Zf(i,o,u){var f=i.length;if(f<2)return f?kr(i[0]):[];for(var p=-1,_=N(f);++p<f;)for(var w=i[p],E=-1;++E<f;)E!=p&&(_[p]=No(_[p]||w,i[E],o,u));return kr(ot(_,1),o,u)}function Hm(i,o,u){for(var f=-1,p=i.length,_=o.length,w={};++f<p;){var E=f<_?o[f]:n;u(w,i[f],E)}return w}function ed(i){return He(i)?i:[]}function td(i){return typeof i=="function"?i:At}function Rr(i,o){return ne(i)?i:cd(i,o)?[i]:mv(ye(i))}var Pk=oe;function Nr(i,o,u){var f=i.length;return u=u===n?f:u,!o&&u>=f?i:on(i,o,u)}var $m=vT||function(i){return st.clearTimeout(i)};function Vm(i,o){if(o)return i.slice();var u=i.length,f=fm?fm(u):new i.constructor(u);return i.copy(f),f}function nd(i){var o=new i.constructor(i.byteLength);return new Ia(o).set(new Ia(i)),o}function Ok(i,o){var u=o?nd(i.buffer):i.buffer;return new i.constructor(u,i.byteOffset,i.byteLength)}function Lk(i){var o=new i.constructor(i.source,R_.exec(i));return o.lastIndex=i.lastIndex,o}function Dk(i){return ko?Ce(ko.call(i)):{}}function Gm(i,o){var u=o?nd(i.buffer):i.buffer;return new i.constructor(u,i.byteOffset,i.length)}function jm(i,o){if(i!==o){var u=i!==n,f=i===null,p=i===i,_=Vt(i),w=o!==n,E=o===null,k=o===o,P=Vt(o);if(!E&&!P&&!_&&i>o||_&&w&&k&&!E&&!P||f&&w&&k||!u&&k||!p)return 1;if(!f&&!_&&!P&&i<o||P&&u&&p&&!f&&!_||E&&u&&p||!w&&p||!k)return-1}return 0}function Mk(i,o,u){for(var f=-1,p=i.criteria,_=o.criteria,w=p.length,E=u.length;++f<w;){var k=jm(p[f],_[f]);if(k){if(f>=E)return k;var P=u[f];return k*(P=="desc"?-1:1)}}return i.index-o.index}function Km(i,o,u,f){for(var p=-1,_=i.length,w=u.length,E=-1,k=o.length,P=Ye(_-w,0),O=N(k+P),M=!f;++E<k;)O[E]=o[E];for(;++p<w;)(M||p<_)&&(O[u[p]]=i[p]);for(;P--;)O[E++]=i[p++];return O}function qm(i,o,u,f){for(var p=-1,_=i.length,w=-1,E=u.length,k=-1,P=o.length,O=Ye(_-E,0),M=N(O+P),W=!f;++p<O;)M[p]=i[p];for(var j=p;++k<P;)M[j+k]=o[k];for(;++w<E;)(W||p<_)&&(M[j+u[w]]=i[p++]);return M}function Rt(i,o){var u=-1,f=i.length;for(o||(o=N(f));++u<f;)o[u]=i[u];return o}function Fn(i,o,u,f){var p=!u;u||(u={});for(var _=-1,w=o.length;++_<w;){var E=o[_],k=f?f(u[E],i[E],E,u,i):n;k===n&&(k=i[E]),p?Yn(u,E,k):Ro(u,E,k)}return u}function Fk(i,o){return Fn(i,ud(i),o)}function bk(i,o){return Fn(i,lv(i),o)}function Wa(i,o){return function(u,f){var p=ne(u)?HI:sk,_=o?o():{};return p(u,i,q(f,2),_)}}function ls(i){return oe(function(o,u){var f=-1,p=u.length,_=p>1?u[p-1]:n,w=p>2?u[2]:n;for(_=i.length>3&&typeof _=="function"?(p--,_):n,w&&Et(u[0],u[1],w)&&(_=p<3?n:_,p=1),o=Ce(o);++f<p;){var E=u[f];E&&i(o,E,f,_)}return o})}function Ym(i,o){return function(u,f){if(u==null)return u;if(!Nt(u))return i(u,f);for(var p=u.length,_=o?p:-1,w=Ce(u);(o?_--:++_<p)&&f(w[_],_,w)!==!1;);return u}}function Qm(i){return function(o,u,f){for(var p=-1,_=Ce(o),w=f(o),E=w.length;E--;){var k=w[i?E:++p];if(u(_[k],k,_)===!1)break}return o}}function Uk(i,o,u){var f=o&K,p=Oo(i);function _(){var w=this&&this!==st&&this instanceof _?p:i;return w.apply(f?u:this,arguments)}return _}function Xm(i){return function(o){o=ye(o);var u=es(o)?vn(o):n,f=u?u[0]:o.charAt(0),p=u?Nr(u,1).join(""):o.slice(1);return f[i]()+p}}function as(i){return function(o){return Rf(Yv(qv(o).replace(NI,"")),i,"")}}function Oo(i){return function(){var o=arguments;switch(o.length){case 0:return new i;case 1:return new i(o[0]);case 2:return new i(o[0],o[1]);case 3:return new i(o[0],o[1],o[2]);case 4:return new i(o[0],o[1],o[2],o[3]);case 5:return new i(o[0],o[1],o[2],o[3],o[4]);case 6:return new i(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new i(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=os(i.prototype),f=i.apply(u,o);return Me(f)?f:u}}function Wk(i,o,u){var f=Oo(i);function p(){for(var _=arguments.length,w=N(_),E=_,k=us(p);E--;)w[E]=arguments[E];var P=_<3&&w[0]!==k&&w[_-1]!==k?[]:Cr(w,k);if(_-=P.length,_<u)return nv(i,o,za,p.placeholder,n,w,P,n,n,u-_);var O=this&&this!==st&&this instanceof p?f:i;return Bt(O,this,w)}return p}function Jm(i){return function(o,u,f){var p=Ce(o);if(!Nt(o)){var _=q(u,3);o=Ze(o),u=function(E){return _(p[E],E,p)}}var w=i(o,u,f);return w>-1?p[_?o[w]:w]:n}}function Zm(i){return Xn(function(o){var u=o.length,f=u,p=rn.prototype.thru;for(i&&o.reverse();f--;){var _=o[f];if(typeof _!="function")throw new nn(a);if(p&&!w&&Va(_)=="wrapper")var w=new rn([],!0)}for(f=w?f:u;++f<u;){_=o[f];var E=Va(_),k=E=="wrapper"?ld(_):n;k&&fd(k[0])&&k[1]==(B|T|U|G)&&!k[4].length&&k[9]==1?w=w[Va(k[0])].apply(w,k[3]):w=_.length==1&&fd(_)?w[E]():w.thru(_)}return function(){var P=arguments,O=P[0];if(w&&P.length==1&&ne(O))return w.plant(O).value();for(var M=0,W=u?o[M].apply(this,P):O;++M<u;)W=o[M].call(this,W);return W}})}function za(i,o,u,f,p,_,w,E,k,P){var O=o&B,M=o&K,W=o&C,j=o&(T|L),Q=o&we,ie=W?n:Oo(i);function X(){for(var ue=arguments.length,pe=N(ue),Gt=ue;Gt--;)pe[Gt]=arguments[Gt];if(j)var St=us(X),jt=XI(pe,St);if(f&&(pe=Km(pe,f,p,j)),_&&(pe=qm(pe,_,w,j)),ue-=jt,j&&ue<P){var $e=Cr(pe,St);return nv(i,o,za,X.placeholder,u,pe,$e,E,k,P-ue)}var En=M?u:this,tr=W?En[i]:i;return ue=pe.length,E?pe=sR(pe,E):Q&&ue>1&&pe.reverse(),O&&k<ue&&(pe.length=k),this&&this!==st&&this instanceof X&&(tr=ie||Oo(tr)),tr.apply(En,pe)}return X}function ev(i,o){return function(u,f){return hk(u,i,o(f),{})}}function Ba(i,o){return function(u,f){var p;if(u===n&&f===n)return o;if(u!==n&&(p=u),f!==n){if(p===n)return f;typeof u=="string"||typeof f=="string"?(u=$t(u),f=$t(f)):(u=Wm(u),f=Wm(f)),p=i(u,f)}return p}}function rd(i){return Xn(function(o){return o=Le(o,Ht(q())),oe(function(u){var f=this;return i(o,function(p){return Bt(p,f,u)})})})}function Ha(i,o){o=o===n?" ":$t(o);var u=o.length;if(u<2)return u?Qf(o,i):o;var f=Qf(o,Na(i/ts(o)));return es(o)?Nr(vn(f),0,i).join(""):f.slice(0,i)}function zk(i,o,u,f){var p=o&K,_=Oo(i);function w(){for(var E=-1,k=arguments.length,P=-1,O=f.length,M=N(O+k),W=this&&this!==st&&this instanceof w?_:i;++P<O;)M[P]=f[P];for(;k--;)M[P++]=arguments[++E];return Bt(W,p?u:this,M)}return w}function tv(i){return function(o,u,f){return f&&typeof f!="number"&&Et(o,u,f)&&(u=f=n),o=er(o),u===n?(u=o,o=0):u=er(u),f=f===n?o<u?1:-1:er(f),Tk(o,u,f,i)}}function $a(i){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=an(o),u=an(u)),i(o,u)}}function nv(i,o,u,f,p,_,w,E,k,P){var O=o&T,M=O?w:n,W=O?n:w,j=O?_:n,Q=O?n:_;o|=O?U:H,o&=~(O?H:U),o&S||(o&=~(K|C));var ie=[i,o,p,j,M,Q,W,E,k,P],X=u.apply(n,ie);return fd(i)&&pv(X,ie),X.placeholder=f,gv(X,i,o)}function id(i){var o=qe[i];return function(u,f){if(u=an(u),f=f==null?0:ft(re(f),292),f&&gm(u)){var p=(ye(u)+"e").split("e"),_=o(p[0]+"e"+(+p[1]+f));return p=(ye(_)+"e").split("e"),+(p[0]+"e"+(+p[1]-f))}return o(u)}}var Bk=is&&1/va(new is([,-0]))[1]==gn?function(i){return new is(i)}:kd;function rv(i){return function(o){var u=dt(o);return u==_n?Df(o):u==mn?iT(o):QI(o,i(o))}}function Qn(i,o,u,f,p,_,w,E){var k=o&C;if(!k&&typeof i!="function")throw new nn(a);var P=f?f.length:0;if(P||(o&=~(U|H),f=p=n),w=w===n?w:Ye(re(w),0),E=E===n?E:re(E),P-=p?p.length:0,o&H){var O=f,M=p;f=p=n}var W=k?n:ld(i),j=[i,o,u,f,p,O,M,_,w,E];if(W&&nR(j,W),i=j[0],o=j[1],u=j[2],f=j[3],p=j[4],E=j[9]=j[9]===n?k?0:i.length:Ye(j[9]-P,0),!E&&o&(T|L)&&(o&=~(T|L)),!o||o==K)var Q=Uk(i,o,u);else o==T||o==L?Q=Wk(i,o,E):(o==U||o==(K|U))&&!p.length?Q=zk(i,o,u,f):Q=za.apply(n,j);var ie=W?bm:pv;return gv(ie(Q,j),i,o)}function iv(i,o,u,f){return i===n||wn(i,rs[u])&&!Ee.call(f,u)?o:i}function sv(i,o,u,f,p,_){return Me(i)&&Me(o)&&(_.set(o,i),Fa(i,o,n,sv,_),_.delete(o)),i}function Hk(i){return Mo(i)?n:i}function ov(i,o,u,f,p,_){var w=u&x,E=i.length,k=o.length;if(E!=k&&!(w&&k>E))return!1;var P=_.get(i),O=_.get(o);if(P&&O)return P==o&&O==i;var M=-1,W=!0,j=u&D?new hi:n;for(_.set(i,o),_.set(o,i);++M<E;){var Q=i[M],ie=o[M];if(f)var X=w?f(ie,Q,M,o,i,_):f(Q,ie,M,i,o,_);if(X!==n){if(X)continue;W=!1;break}if(j){if(!Nf(o,function(ue,pe){if(!Eo(j,pe)&&(Q===ue||p(Q,ue,u,f,_)))return j.push(pe)})){W=!1;break}}else if(!(Q===ie||p(Q,ie,u,f,_))){W=!1;break}}return _.delete(i),_.delete(o),W}function $k(i,o,u,f,p,_,w){switch(u){case Xi:if(i.byteLength!=o.byteLength||i.byteOffset!=o.byteOffset)return!1;i=i.buffer,o=o.buffer;case wo:return!(i.byteLength!=o.byteLength||!_(new Ia(i),new Ia(o)));case po:case go:case _o:return wn(+i,+o);case ca:return i.name==o.name&&i.message==o.message;case mo:case vo:return i==o+"";case _n:var E=Df;case mn:var k=f&x;if(E||(E=va),i.size!=o.size&&!k)return!1;var P=w.get(i);if(P)return P==o;f|=D,w.set(i,o);var O=ov(E(i),E(o),f,p,_,w);return w.delete(i),O;case da:if(ko)return ko.call(i)==ko.call(o)}return!1}function Vk(i,o,u,f,p,_){var w=u&x,E=sd(i),k=E.length,P=sd(o),O=P.length;if(k!=O&&!w)return!1;for(var M=k;M--;){var W=E[M];if(!(w?W in o:Ee.call(o,W)))return!1}var j=_.get(i),Q=_.get(o);if(j&&Q)return j==o&&Q==i;var ie=!0;_.set(i,o),_.set(o,i);for(var X=w;++M<k;){W=E[M];var ue=i[W],pe=o[W];if(f)var Gt=w?f(pe,ue,W,o,i,_):f(ue,pe,W,i,o,_);if(!(Gt===n?ue===pe||p(ue,pe,u,f,_):Gt)){ie=!1;break}X||(X=W=="constructor")}if(ie&&!X){var St=i.constructor,jt=o.constructor;St!=jt&&"constructor"in i&&"constructor"in o&&!(typeof St=="function"&&St instanceof St&&typeof jt=="function"&&jt instanceof jt)&&(ie=!1)}return _.delete(i),_.delete(o),ie}function Xn(i){return hd(dv(i,n,Ev),i+"")}function sd(i){return km(i,Ze,ud)}function od(i){return km(i,xt,lv)}var ld=Aa?function(i){return Aa.get(i)}:kd;function Va(i){for(var o=i.name+"",u=ss[o],f=Ee.call(ss,o)?u.length:0;f--;){var p=u[f],_=p.func;if(_==null||_==i)return p.name}return o}function us(i){var o=Ee.call(g,"placeholder")?g:i;return o.placeholder}function q(){var i=g.iteratee||Id;return i=i===Id?xm:i,arguments.length?i(arguments[0],arguments[1]):i}function Ga(i,o){var u=i.__data__;return Jk(o)?u[typeof o=="string"?"string":"hash"]:u.map}function ad(i){for(var o=Ze(i),u=o.length;u--;){var f=o[u],p=i[f];o[u]=[f,p,cv(p)]}return o}function _i(i,o){var u=tT(i,o);return Nm(u)?u:n}function Gk(i){var o=Ee.call(i,fi),u=i[fi];try{i[fi]=n;var f=!0}catch{}var p=Sa.call(i);return f&&(o?i[fi]=u:delete i[fi]),p}var ud=Ff?function(i){return i==null?[]:(i=Ce(i),Er(Ff(i),function(o){return hm.call(i,o)}))}:Rd,lv=Ff?function(i){for(var o=[];i;)Sr(o,ud(i)),i=Ta(i);return o}:Rd,dt=wt;(bf&&dt(new bf(new ArrayBuffer(1)))!=Xi||Co&&dt(new Co)!=_n||Uf&&dt(Uf.resolve())!=C_||is&&dt(new is)!=mn||Io&&dt(new Io)!=yo)&&(dt=function(i){var o=wt(i),u=o==jn?i.constructor:n,f=u?mi(u):"";if(f)switch(f){case RT:return Xi;case NT:return _n;case xT:return C_;case AT:return mn;case PT:return yo}return o});function jk(i,o,u){for(var f=-1,p=u.length;++f<p;){var _=u[f],w=_.size;switch(_.type){case"drop":i+=w;break;case"dropRight":o-=w;break;case"take":o=ft(o,i+w);break;case"takeRight":i=Ye(i,o-w);break}}return{start:i,end:o}}function Kk(i){var o=i.match(ZC);return o?o[1].split(eI):[]}function av(i,o,u){o=Rr(o,i);for(var f=-1,p=o.length,_=!1;++f<p;){var w=bn(o[f]);if(!(_=i!=null&&u(i,w)))break;i=i[w]}return _||++f!=p?_:(p=i==null?0:i.length,!!p&&Ja(p)&&Jn(w,p)&&(ne(i)||vi(i)))}function qk(i){var o=i.length,u=new i.constructor(o);return o&&typeof i[0]=="string"&&Ee.call(i,"index")&&(u.index=i.index,u.input=i.input),u}function uv(i){return typeof i.constructor=="function"&&!Lo(i)?os(Ta(i)):{}}function Yk(i,o,u){var f=i.constructor;switch(o){case wo:return nd(i);case po:case go:return new f(+i);case Xi:return Ok(i,u);case af:case uf:case cf:case ff:case df:case hf:case pf:case gf:case _f:return Gm(i,u);case _n:return new f;case _o:case vo:return new f(i);case mo:return Lk(i);case mn:return new f;case da:return Dk(i)}}function Qk(i,o){var u=o.length;if(!u)return i;var f=u-1;return o[f]=(u>1?"& ":"")+o[f],o=o.join(u>2?", ":" "),i.replace(JC,`{
/* [wrapped with `+o+`] */
`)}function Xk(i){return ne(i)||vi(i)||!!(pm&&i&&i[pm])}function Jn(i,o){var u=typeof i;return o=o??z,!!o&&(u=="number"||u!="symbol"&&uI.test(i))&&i>-1&&i%1==0&&i<o}function Et(i,o,u){if(!Me(u))return!1;var f=typeof o;return(f=="number"?Nt(u)&&Jn(o,u.length):f=="string"&&o in u)?wn(u[o],i):!1}function cd(i,o){if(ne(i))return!1;var u=typeof i;return u=="number"||u=="symbol"||u=="boolean"||i==null||Vt(i)?!0:qC.test(i)||!KC.test(i)||o!=null&&i in Ce(o)}function Jk(i){var o=typeof i;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?i!=="__proto__":i===null}function fd(i){var o=Va(i),u=g[o];if(typeof u!="function"||!(o in fe.prototype))return!1;if(i===u)return!0;var f=ld(u);return!!f&&i===f[0]}function Zk(i){return!!cm&&cm in i}var eR=wa?Zn:Nd;function Lo(i){var o=i&&i.constructor,u=typeof o=="function"&&o.prototype||rs;return i===u}function cv(i){return i===i&&!Me(i)}function fv(i,o){return function(u){return u==null?!1:u[i]===o&&(o!==n||i in Ce(u))}}function tR(i){var o=Qa(i,function(f){return u.size===h&&u.clear(),f}),u=o.cache;return o}function nR(i,o){var u=i[1],f=o[1],p=u|f,_=p<(K|C|B),w=f==B&&u==T||f==B&&u==G&&i[7].length<=o[8]||f==(B|G)&&o[7].length<=o[8]&&u==T;if(!(_||w))return i;f&K&&(i[2]=o[2],p|=u&K?0:S);var E=o[3];if(E){var k=i[3];i[3]=k?Km(k,E,o[4]):E,i[4]=k?Cr(i[3],v):o[4]}return E=o[5],E&&(k=i[5],i[5]=k?qm(k,E,o[6]):E,i[6]=k?Cr(i[5],v):o[6]),E=o[7],E&&(i[7]=E),f&B&&(i[8]=i[8]==null?o[8]:ft(i[8],o[8])),i[9]==null&&(i[9]=o[9]),i[0]=o[0],i[1]=p,i}function rR(i){var o=[];if(i!=null)for(var u in Ce(i))o.push(u);return o}function iR(i){return Sa.call(i)}function dv(i,o,u){return o=Ye(o===n?i.length-1:o,0),function(){for(var f=arguments,p=-1,_=Ye(f.length-o,0),w=N(_);++p<_;)w[p]=f[o+p];p=-1;for(var E=N(o+1);++p<o;)E[p]=f[p];return E[o]=u(w),Bt(i,this,E)}}function hv(i,o){return o.length<2?i:gi(i,on(o,0,-1))}function sR(i,o){for(var u=i.length,f=ft(o.length,u),p=Rt(i);f--;){var _=o[f];i[f]=Jn(_,u)?p[_]:n}return i}function dd(i,o){if(!(o==="constructor"&&typeof i[o]=="function")&&o!="__proto__")return i[o]}var pv=_v(bm),Do=wT||function(i,o){return st.setTimeout(i,o)},hd=_v(Nk);function gv(i,o,u){var f=o+"";return hd(i,Qk(f,oR(Kk(f),u)))}function _v(i){var o=0,u=0;return function(){var f=IT(),p=ui-(f-u);if(u=f,p>0){if(++o>=ai)return arguments[0]}else o=0;return i.apply(n,arguments)}}function ja(i,o){var u=-1,f=i.length,p=f-1;for(o=o===n?f:o;++u<o;){var _=Yf(u,p),w=i[_];i[_]=i[u],i[u]=w}return i.length=o,i}var mv=tR(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(YC,function(u,f,p,_){o.push(p?_.replace(rI,"$1"):f||u)}),o});function bn(i){if(typeof i=="string"||Vt(i))return i;var o=i+"";return o=="0"&&1/i==-gn?"-0":o}function mi(i){if(i!=null){try{return Ea.call(i)}catch{}try{return i+""}catch{}}return""}function oR(i,o){return tn(Gn,function(u){var f="_."+u[0];o&u[1]&&!_a(i,f)&&i.push(f)}),i.sort()}function vv(i){if(i instanceof fe)return i.clone();var o=new rn(i.__wrapped__,i.__chain__);return o.__actions__=Rt(i.__actions__),o.__index__=i.__index__,o.__values__=i.__values__,o}function lR(i,o,u){(u?Et(i,o,u):o===n)?o=1:o=Ye(re(o),0);var f=i==null?0:i.length;if(!f||o<1)return[];for(var p=0,_=0,w=N(Na(f/o));p<f;)w[_++]=on(i,p,p+=o);return w}function aR(i){for(var o=-1,u=i==null?0:i.length,f=0,p=[];++o<u;){var _=i[o];_&&(p[f++]=_)}return p}function uR(){var i=arguments.length;if(!i)return[];for(var o=N(i-1),u=arguments[0],f=i;f--;)o[f-1]=arguments[f];return Sr(ne(u)?Rt(u):[u],ot(o,1))}var cR=oe(function(i,o){return He(i)?No(i,ot(o,1,He,!0)):[]}),fR=oe(function(i,o){var u=ln(o);return He(u)&&(u=n),He(i)?No(i,ot(o,1,He,!0),q(u,2)):[]}),dR=oe(function(i,o){var u=ln(o);return He(u)&&(u=n),He(i)?No(i,ot(o,1,He,!0),n,u):[]});function hR(i,o,u){var f=i==null?0:i.length;return f?(o=u||o===n?1:re(o),on(i,o<0?0:o,f)):[]}function pR(i,o,u){var f=i==null?0:i.length;return f?(o=u||o===n?1:re(o),o=f-o,on(i,0,o<0?0:o)):[]}function gR(i,o){return i&&i.length?Ua(i,q(o,3),!0,!0):[]}function _R(i,o){return i&&i.length?Ua(i,q(o,3),!0):[]}function mR(i,o,u,f){var p=i==null?0:i.length;return p?(u&&typeof u!="number"&&Et(i,o,u)&&(u=0,f=p),uk(i,o,u,f)):[]}function yv(i,o,u){var f=i==null?0:i.length;if(!f)return-1;var p=u==null?0:re(u);return p<0&&(p=Ye(f+p,0)),ma(i,q(o,3),p)}function wv(i,o,u){var f=i==null?0:i.length;if(!f)return-1;var p=f-1;return u!==n&&(p=re(u),p=u<0?Ye(f+p,0):ft(p,f-1)),ma(i,q(o,3),p,!0)}function Ev(i){var o=i==null?0:i.length;return o?ot(i,1):[]}function vR(i){var o=i==null?0:i.length;return o?ot(i,gn):[]}function yR(i,o){var u=i==null?0:i.length;return u?(o=o===n?1:re(o),ot(i,o)):[]}function wR(i){for(var o=-1,u=i==null?0:i.length,f={};++o<u;){var p=i[o];f[p[0]]=p[1]}return f}function Sv(i){return i&&i.length?i[0]:n}function ER(i,o,u){var f=i==null?0:i.length;if(!f)return-1;var p=u==null?0:re(u);return p<0&&(p=Ye(f+p,0)),Zi(i,o,p)}function SR(i){var o=i==null?0:i.length;return o?on(i,0,-1):[]}var CR=oe(function(i){var o=Le(i,ed);return o.length&&o[0]===i[0]?Vf(o):[]}),IR=oe(function(i){var o=ln(i),u=Le(i,ed);return o===ln(u)?o=n:u.pop(),u.length&&u[0]===i[0]?Vf(u,q(o,2)):[]}),TR=oe(function(i){var o=ln(i),u=Le(i,ed);return o=typeof o=="function"?o:n,o&&u.pop(),u.length&&u[0]===i[0]?Vf(u,n,o):[]});function kR(i,o){return i==null?"":ST.call(i,o)}function ln(i){var o=i==null?0:i.length;return o?i[o-1]:n}function RR(i,o,u){var f=i==null?0:i.length;if(!f)return-1;var p=f;return u!==n&&(p=re(u),p=p<0?Ye(f+p,0):ft(p,f-1)),o===o?oT(i,o,p):ma(i,nm,p,!0)}function NR(i,o){return i&&i.length?Lm(i,re(o)):n}var xR=oe(Cv);function Cv(i,o){return i&&i.length&&o&&o.length?qf(i,o):i}function AR(i,o,u){return i&&i.length&&o&&o.length?qf(i,o,q(u,2)):i}function PR(i,o,u){return i&&i.length&&o&&o.length?qf(i,o,n,u):i}var OR=Xn(function(i,o){var u=i==null?0:i.length,f=zf(i,o);return Fm(i,Le(o,function(p){return Jn(p,u)?+p:p}).sort(jm)),f});function LR(i,o){var u=[];if(!(i&&i.length))return u;var f=-1,p=[],_=i.length;for(o=q(o,3);++f<_;){var w=i[f];o(w,f,i)&&(u.push(w),p.push(f))}return Fm(i,p),u}function pd(i){return i==null?i:kT.call(i)}function DR(i,o,u){var f=i==null?0:i.length;return f?(u&&typeof u!="number"&&Et(i,o,u)?(o=0,u=f):(o=o==null?0:re(o),u=u===n?f:re(u)),on(i,o,u)):[]}function MR(i,o){return ba(i,o)}function FR(i,o,u){return Xf(i,o,q(u,2))}function bR(i,o){var u=i==null?0:i.length;if(u){var f=ba(i,o);if(f<u&&wn(i[f],o))return f}return-1}function UR(i,o){return ba(i,o,!0)}function WR(i,o,u){return Xf(i,o,q(u,2),!0)}function zR(i,o){var u=i==null?0:i.length;if(u){var f=ba(i,o,!0)-1;if(wn(i[f],o))return f}return-1}function BR(i){return i&&i.length?Um(i):[]}function HR(i,o){return i&&i.length?Um(i,q(o,2)):[]}function $R(i){var o=i==null?0:i.length;return o?on(i,1,o):[]}function VR(i,o,u){return i&&i.length?(o=u||o===n?1:re(o),on(i,0,o<0?0:o)):[]}function GR(i,o,u){var f=i==null?0:i.length;return f?(o=u||o===n?1:re(o),o=f-o,on(i,o<0?0:o,f)):[]}function jR(i,o){return i&&i.length?Ua(i,q(o,3),!1,!0):[]}function KR(i,o){return i&&i.length?Ua(i,q(o,3)):[]}var qR=oe(function(i){return kr(ot(i,1,He,!0))}),YR=oe(function(i){var o=ln(i);return He(o)&&(o=n),kr(ot(i,1,He,!0),q(o,2))}),QR=oe(function(i){var o=ln(i);return o=typeof o=="function"?o:n,kr(ot(i,1,He,!0),n,o)});function XR(i){return i&&i.length?kr(i):[]}function JR(i,o){return i&&i.length?kr(i,q(o,2)):[]}function ZR(i,o){return o=typeof o=="function"?o:n,i&&i.length?kr(i,n,o):[]}function gd(i){if(!(i&&i.length))return[];var o=0;return i=Er(i,function(u){if(He(u))return o=Ye(u.length,o),!0}),Of(o,function(u){return Le(i,xf(u))})}function Iv(i,o){if(!(i&&i.length))return[];var u=gd(i);return o==null?u:Le(u,function(f){return Bt(o,n,f)})}var eN=oe(function(i,o){return He(i)?No(i,o):[]}),tN=oe(function(i){return Zf(Er(i,He))}),nN=oe(function(i){var o=ln(i);return He(o)&&(o=n),Zf(Er(i,He),q(o,2))}),rN=oe(function(i){var o=ln(i);return o=typeof o=="function"?o:n,Zf(Er(i,He),n,o)}),iN=oe(gd);function sN(i,o){return Hm(i||[],o||[],Ro)}function oN(i,o){return Hm(i||[],o||[],Po)}var lN=oe(function(i){var o=i.length,u=o>1?i[o-1]:n;return u=typeof u=="function"?(i.pop(),u):n,Iv(i,u)});function Tv(i){var o=g(i);return o.__chain__=!0,o}function aN(i,o){return o(i),i}function Ka(i,o){return o(i)}var uN=Xn(function(i){var o=i.length,u=o?i[0]:0,f=this.__wrapped__,p=function(_){return zf(_,i)};return o>1||this.__actions__.length||!(f instanceof fe)||!Jn(u)?this.thru(p):(f=f.slice(u,+u+(o?1:0)),f.__actions__.push({func:Ka,args:[p],thisArg:n}),new rn(f,this.__chain__).thru(function(_){return o&&!_.length&&_.push(n),_}))});function cN(){return Tv(this)}function fN(){return new rn(this.value(),this.__chain__)}function dN(){this.__values__===n&&(this.__values__=Wv(this.value()));var i=this.__index__>=this.__values__.length,o=i?n:this.__values__[this.__index__++];return{done:i,value:o}}function hN(){return this}function pN(i){for(var o,u=this;u instanceof Oa;){var f=vv(u);f.__index__=0,f.__values__=n,o?p.__wrapped__=f:o=f;var p=f;u=u.__wrapped__}return p.__wrapped__=i,o}function gN(){var i=this.__wrapped__;if(i instanceof fe){var o=i;return this.__actions__.length&&(o=new fe(this)),o=o.reverse(),o.__actions__.push({func:Ka,args:[pd],thisArg:n}),new rn(o,this.__chain__)}return this.thru(pd)}function _N(){return Bm(this.__wrapped__,this.__actions__)}var mN=Wa(function(i,o,u){Ee.call(i,u)?++i[u]:Yn(i,u,1)});function vN(i,o,u){var f=ne(i)?em:ak;return u&&Et(i,o,u)&&(o=n),f(i,q(o,3))}function yN(i,o){var u=ne(i)?Er:Im;return u(i,q(o,3))}var wN=Jm(yv),EN=Jm(wv);function SN(i,o){return ot(qa(i,o),1)}function CN(i,o){return ot(qa(i,o),gn)}function IN(i,o,u){return u=u===n?1:re(u),ot(qa(i,o),u)}function kv(i,o){var u=ne(i)?tn:Tr;return u(i,q(o,3))}function Rv(i,o){var u=ne(i)?$I:Cm;return u(i,q(o,3))}var TN=Wa(function(i,o,u){Ee.call(i,u)?i[u].push(o):Yn(i,u,[o])});function kN(i,o,u,f){i=Nt(i)?i:fs(i),u=u&&!f?re(u):0;var p=i.length;return u<0&&(u=Ye(p+u,0)),Za(i)?u<=p&&i.indexOf(o,u)>-1:!!p&&Zi(i,o,u)>-1}var RN=oe(function(i,o,u){var f=-1,p=typeof o=="function",_=Nt(i)?N(i.length):[];return Tr(i,function(w){_[++f]=p?Bt(o,w,u):xo(w,o,u)}),_}),NN=Wa(function(i,o,u){Yn(i,u,o)});function qa(i,o){var u=ne(i)?Le:Am;return u(i,q(o,3))}function xN(i,o,u,f){return i==null?[]:(ne(o)||(o=o==null?[]:[o]),u=f?n:u,ne(u)||(u=u==null?[]:[u]),Dm(i,o,u))}var AN=Wa(function(i,o,u){i[u?0:1].push(o)},function(){return[[],[]]});function PN(i,o,u){var f=ne(i)?Rf:im,p=arguments.length<3;return f(i,q(o,4),u,p,Tr)}function ON(i,o,u){var f=ne(i)?VI:im,p=arguments.length<3;return f(i,q(o,4),u,p,Cm)}function LN(i,o){var u=ne(i)?Er:Im;return u(i,Xa(q(o,3)))}function DN(i){var o=ne(i)?ym:kk;return o(i)}function MN(i,o,u){(u?Et(i,o,u):o===n)?o=1:o=re(o);var f=ne(i)?rk:Rk;return f(i,o)}function FN(i){var o=ne(i)?ik:xk;return o(i)}function bN(i){if(i==null)return 0;if(Nt(i))return Za(i)?ts(i):i.length;var o=dt(i);return o==_n||o==mn?i.size:jf(i).length}function UN(i,o,u){var f=ne(i)?Nf:Ak;return u&&Et(i,o,u)&&(o=n),f(i,q(o,3))}var WN=oe(function(i,o){if(i==null)return[];var u=o.length;return u>1&&Et(i,o[0],o[1])?o=[]:u>2&&Et(o[0],o[1],o[2])&&(o=[o[0]]),Dm(i,ot(o,1),[])}),Ya=yT||function(){return st.Date.now()};function zN(i,o){if(typeof o!="function")throw new nn(a);return i=re(i),function(){if(--i<1)return o.apply(this,arguments)}}function Nv(i,o,u){return o=u?n:o,o=i&&o==null?i.length:o,Qn(i,B,n,n,n,n,o)}function xv(i,o){var u;if(typeof o!="function")throw new nn(a);return i=re(i),function(){return--i>0&&(u=o.apply(this,arguments)),i<=1&&(o=n),u}}var _d=oe(function(i,o,u){var f=K;if(u.length){var p=Cr(u,us(_d));f|=U}return Qn(i,f,o,u,p)}),Av=oe(function(i,o,u){var f=K|C;if(u.length){var p=Cr(u,us(Av));f|=U}return Qn(o,f,i,u,p)});function Pv(i,o,u){o=u?n:o;var f=Qn(i,T,n,n,n,n,n,o);return f.placeholder=Pv.placeholder,f}function Ov(i,o,u){o=u?n:o;var f=Qn(i,L,n,n,n,n,n,o);return f.placeholder=Ov.placeholder,f}function Lv(i,o,u){var f,p,_,w,E,k,P=0,O=!1,M=!1,W=!0;if(typeof i!="function")throw new nn(a);o=an(o)||0,Me(u)&&(O=!!u.leading,M="maxWait"in u,_=M?Ye(an(u.maxWait)||0,o):_,W="trailing"in u?!!u.trailing:W);function j($e){var En=f,tr=p;return f=p=n,P=$e,w=i.apply(tr,En),w}function Q($e){return P=$e,E=Do(ue,o),O?j($e):w}function ie($e){var En=$e-k,tr=$e-P,Jv=o-En;return M?ft(Jv,_-tr):Jv}function X($e){var En=$e-k,tr=$e-P;return k===n||En>=o||En<0||M&&tr>=_}function ue(){var $e=Ya();if(X($e))return pe($e);E=Do(ue,ie($e))}function pe($e){return E=n,W&&f?j($e):(f=p=n,w)}function Gt(){E!==n&&$m(E),P=0,f=k=p=E=n}function St(){return E===n?w:pe(Ya())}function jt(){var $e=Ya(),En=X($e);if(f=arguments,p=this,k=$e,En){if(E===n)return Q(k);if(M)return $m(E),E=Do(ue,o),j(k)}return E===n&&(E=Do(ue,o)),w}return jt.cancel=Gt,jt.flush=St,jt}var BN=oe(function(i,o){return Sm(i,1,o)}),HN=oe(function(i,o,u){return Sm(i,an(o)||0,u)});function $N(i){return Qn(i,we)}function Qa(i,o){if(typeof i!="function"||o!=null&&typeof o!="function")throw new nn(a);var u=function(){var f=arguments,p=o?o.apply(this,f):f[0],_=u.cache;if(_.has(p))return _.get(p);var w=i.apply(this,f);return u.cache=_.set(p,w)||_,w};return u.cache=new(Qa.Cache||qn),u}Qa.Cache=qn;function Xa(i){if(typeof i!="function")throw new nn(a);return function(){var o=arguments;switch(o.length){case 0:return!i.call(this);case 1:return!i.call(this,o[0]);case 2:return!i.call(this,o[0],o[1]);case 3:return!i.call(this,o[0],o[1],o[2])}return!i.apply(this,o)}}function VN(i){return xv(2,i)}var GN=Pk(function(i,o){o=o.length==1&&ne(o[0])?Le(o[0],Ht(q())):Le(ot(o,1),Ht(q()));var u=o.length;return oe(function(f){for(var p=-1,_=ft(f.length,u);++p<_;)f[p]=o[p].call(this,f[p]);return Bt(i,this,f)})}),md=oe(function(i,o){var u=Cr(o,us(md));return Qn(i,U,n,o,u)}),Dv=oe(function(i,o){var u=Cr(o,us(Dv));return Qn(i,H,n,o,u)}),jN=Xn(function(i,o){return Qn(i,G,n,n,n,o)});function KN(i,o){if(typeof i!="function")throw new nn(a);return o=o===n?o:re(o),oe(i,o)}function qN(i,o){if(typeof i!="function")throw new nn(a);return o=o==null?0:Ye(re(o),0),oe(function(u){var f=u[o],p=Nr(u,0,o);return f&&Sr(p,f),Bt(i,this,p)})}function YN(i,o,u){var f=!0,p=!0;if(typeof i!="function")throw new nn(a);return Me(u)&&(f="leading"in u?!!u.leading:f,p="trailing"in u?!!u.trailing:p),Lv(i,o,{leading:f,maxWait:o,trailing:p})}function QN(i){return Nv(i,1)}function XN(i,o){return md(td(o),i)}function JN(){if(!arguments.length)return[];var i=arguments[0];return ne(i)?i:[i]}function ZN(i){return sn(i,R)}function ex(i,o){return o=typeof o=="function"?o:n,sn(i,R,o)}function tx(i){return sn(i,m|R)}function nx(i,o){return o=typeof o=="function"?o:n,sn(i,m|R,o)}function rx(i,o){return o==null||Em(i,o,Ze(o))}function wn(i,o){return i===o||i!==i&&o!==o}var ix=$a($f),sx=$a(function(i,o){return i>=o}),vi=Rm(function(){return arguments}())?Rm:function(i){return We(i)&&Ee.call(i,"callee")&&!hm.call(i,"callee")},ne=N.isArray,ox=q_?Ht(q_):pk;function Nt(i){return i!=null&&Ja(i.length)&&!Zn(i)}function He(i){return We(i)&&Nt(i)}function lx(i){return i===!0||i===!1||We(i)&&wt(i)==po}var xr=ET||Nd,ax=Y_?Ht(Y_):gk;function ux(i){return We(i)&&i.nodeType===1&&!Mo(i)}function cx(i){if(i==null)return!0;if(Nt(i)&&(ne(i)||typeof i=="string"||typeof i.splice=="function"||xr(i)||cs(i)||vi(i)))return!i.length;var o=dt(i);if(o==_n||o==mn)return!i.size;if(Lo(i))return!jf(i).length;for(var u in i)if(Ee.call(i,u))return!1;return!0}function fx(i,o){return Ao(i,o)}function dx(i,o,u){u=typeof u=="function"?u:n;var f=u?u(i,o):n;return f===n?Ao(i,o,n,u):!!f}function vd(i){if(!We(i))return!1;var o=wt(i);return o==ca||o==MC||typeof i.message=="string"&&typeof i.name=="string"&&!Mo(i)}function hx(i){return typeof i=="number"&&gm(i)}function Zn(i){if(!Me(i))return!1;var o=wt(i);return o==fa||o==S_||o==Qi||o==bC}function Mv(i){return typeof i=="number"&&i==re(i)}function Ja(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=z}function Me(i){var o=typeof i;return i!=null&&(o=="object"||o=="function")}function We(i){return i!=null&&typeof i=="object"}var Fv=Q_?Ht(Q_):mk;function px(i,o){return i===o||Gf(i,o,ad(o))}function gx(i,o,u){return u=typeof u=="function"?u:n,Gf(i,o,ad(o),u)}function _x(i){return bv(i)&&i!=+i}function mx(i){if(eR(i))throw new Z(l);return Nm(i)}function vx(i){return i===null}function yx(i){return i==null}function bv(i){return typeof i=="number"||We(i)&&wt(i)==_o}function Mo(i){if(!We(i)||wt(i)!=jn)return!1;var o=Ta(i);if(o===null)return!0;var u=Ee.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&Ea.call(u)==gT}var yd=X_?Ht(X_):vk;function wx(i){return Mv(i)&&i>=-z&&i<=z}var Uv=J_?Ht(J_):yk;function Za(i){return typeof i=="string"||!ne(i)&&We(i)&&wt(i)==vo}function Vt(i){return typeof i=="symbol"||We(i)&&wt(i)==da}var cs=Z_?Ht(Z_):wk;function Ex(i){return i===n}function Sx(i){return We(i)&&dt(i)==yo}function Cx(i){return We(i)&&wt(i)==WC}var Ix=$a(Kf),Tx=$a(function(i,o){return i<=o});function Wv(i){if(!i)return[];if(Nt(i))return Za(i)?vn(i):Rt(i);if(So&&i[So])return rT(i[So]());var o=dt(i),u=o==_n?Df:o==mn?va:fs;return u(i)}function er(i){if(!i)return i===0?i:0;if(i=an(i),i===gn||i===-gn){var o=i<0?-1:1;return o*ee}return i===i?i:0}function re(i){var o=er(i),u=o%1;return o===o?u?o-u:o:0}function zv(i){return i?pi(re(i),0,_e):0}function an(i){if(typeof i=="number")return i;if(Vt(i))return te;if(Me(i)){var o=typeof i.valueOf=="function"?i.valueOf():i;i=Me(o)?o+"":o}if(typeof i!="string")return i===0?i:+i;i=sm(i);var u=oI.test(i);return u||aI.test(i)?zI(i.slice(2),u?2:8):sI.test(i)?te:+i}function Bv(i){return Fn(i,xt(i))}function kx(i){return i?pi(re(i),-z,z):i===0?i:0}function ye(i){return i==null?"":$t(i)}var Rx=ls(function(i,o){if(Lo(o)||Nt(o)){Fn(o,Ze(o),i);return}for(var u in o)Ee.call(o,u)&&Ro(i,u,o[u])}),Hv=ls(function(i,o){Fn(o,xt(o),i)}),eu=ls(function(i,o,u,f){Fn(o,xt(o),i,f)}),Nx=ls(function(i,o,u,f){Fn(o,Ze(o),i,f)}),xx=Xn(zf);function Ax(i,o){var u=os(i);return o==null?u:wm(u,o)}var Px=oe(function(i,o){i=Ce(i);var u=-1,f=o.length,p=f>2?o[2]:n;for(p&&Et(o[0],o[1],p)&&(f=1);++u<f;)for(var _=o[u],w=xt(_),E=-1,k=w.length;++E<k;){var P=w[E],O=i[P];(O===n||wn(O,rs[P])&&!Ee.call(i,P))&&(i[P]=_[P])}return i}),Ox=oe(function(i){return i.push(n,sv),Bt($v,n,i)});function Lx(i,o){return tm(i,q(o,3),Mn)}function Dx(i,o){return tm(i,q(o,3),Hf)}function Mx(i,o){return i==null?i:Bf(i,q(o,3),xt)}function Fx(i,o){return i==null?i:Tm(i,q(o,3),xt)}function bx(i,o){return i&&Mn(i,q(o,3))}function Ux(i,o){return i&&Hf(i,q(o,3))}function Wx(i){return i==null?[]:Ma(i,Ze(i))}function zx(i){return i==null?[]:Ma(i,xt(i))}function wd(i,o,u){var f=i==null?n:gi(i,o);return f===n?u:f}function Bx(i,o){return i!=null&&av(i,o,ck)}function Ed(i,o){return i!=null&&av(i,o,fk)}var Hx=ev(function(i,o,u){o!=null&&typeof o.toString!="function"&&(o=Sa.call(o)),i[o]=u},Cd(At)),$x=ev(function(i,o,u){o!=null&&typeof o.toString!="function"&&(o=Sa.call(o)),Ee.call(i,o)?i[o].push(u):i[o]=[u]},q),Vx=oe(xo);function Ze(i){return Nt(i)?vm(i):jf(i)}function xt(i){return Nt(i)?vm(i,!0):Ek(i)}function Gx(i,o){var u={};return o=q(o,3),Mn(i,function(f,p,_){Yn(u,o(f,p,_),f)}),u}function jx(i,o){var u={};return o=q(o,3),Mn(i,function(f,p,_){Yn(u,p,o(f,p,_))}),u}var Kx=ls(function(i,o,u){Fa(i,o,u)}),$v=ls(function(i,o,u,f){Fa(i,o,u,f)}),qx=Xn(function(i,o){var u={};if(i==null)return u;var f=!1;o=Le(o,function(_){return _=Rr(_,i),f||(f=_.length>1),_}),Fn(i,od(i),u),f&&(u=sn(u,m|y|R,Hk));for(var p=o.length;p--;)Jf(u,o[p]);return u});function Yx(i,o){return Vv(i,Xa(q(o)))}var Qx=Xn(function(i,o){return i==null?{}:Ck(i,o)});function Vv(i,o){if(i==null)return{};var u=Le(od(i),function(f){return[f]});return o=q(o),Mm(i,u,function(f,p){return o(f,p[0])})}function Xx(i,o,u){o=Rr(o,i);var f=-1,p=o.length;for(p||(p=1,i=n);++f<p;){var _=i==null?n:i[bn(o[f])];_===n&&(f=p,_=u),i=Zn(_)?_.call(i):_}return i}function Jx(i,o,u){return i==null?i:Po(i,o,u)}function Zx(i,o,u,f){return f=typeof f=="function"?f:n,i==null?i:Po(i,o,u,f)}var Gv=rv(Ze),jv=rv(xt);function eA(i,o,u){var f=ne(i),p=f||xr(i)||cs(i);if(o=q(o,4),u==null){var _=i&&i.constructor;p?u=f?new _:[]:Me(i)?u=Zn(_)?os(Ta(i)):{}:u={}}return(p?tn:Mn)(i,function(w,E,k){return o(u,w,E,k)}),u}function tA(i,o){return i==null?!0:Jf(i,o)}function nA(i,o,u){return i==null?i:zm(i,o,td(u))}function rA(i,o,u,f){return f=typeof f=="function"?f:n,i==null?i:zm(i,o,td(u),f)}function fs(i){return i==null?[]:Lf(i,Ze(i))}function iA(i){return i==null?[]:Lf(i,xt(i))}function sA(i,o,u){return u===n&&(u=o,o=n),u!==n&&(u=an(u),u=u===u?u:0),o!==n&&(o=an(o),o=o===o?o:0),pi(an(i),o,u)}function oA(i,o,u){return o=er(o),u===n?(u=o,o=0):u=er(u),i=an(i),dk(i,o,u)}function lA(i,o,u){if(u&&typeof u!="boolean"&&Et(i,o,u)&&(o=u=n),u===n&&(typeof o=="boolean"?(u=o,o=n):typeof i=="boolean"&&(u=i,i=n)),i===n&&o===n?(i=0,o=1):(i=er(i),o===n?(o=i,i=0):o=er(o)),i>o){var f=i;i=o,o=f}if(u||i%1||o%1){var p=_m();return ft(i+p*(o-i+WI("1e-"+((p+"").length-1))),o)}return Yf(i,o)}var aA=as(function(i,o,u){return o=o.toLowerCase(),i+(u?Kv(o):o)});function Kv(i){return Sd(ye(i).toLowerCase())}function qv(i){return i=ye(i),i&&i.replace(cI,JI).replace(xI,"")}function uA(i,o,u){i=ye(i),o=$t(o);var f=i.length;u=u===n?f:pi(re(u),0,f);var p=u;return u-=o.length,u>=0&&i.slice(u,p)==o}function cA(i){return i=ye(i),i&&VC.test(i)?i.replace(T_,ZI):i}function fA(i){return i=ye(i),i&&QC.test(i)?i.replace(mf,"\\$&"):i}var dA=as(function(i,o,u){return i+(u?"-":"")+o.toLowerCase()}),hA=as(function(i,o,u){return i+(u?" ":"")+o.toLowerCase()}),pA=Xm("toLowerCase");function gA(i,o,u){i=ye(i),o=re(o);var f=o?ts(i):0;if(!o||f>=o)return i;var p=(o-f)/2;return Ha(xa(p),u)+i+Ha(Na(p),u)}function _A(i,o,u){i=ye(i),o=re(o);var f=o?ts(i):0;return o&&f<o?i+Ha(o-f,u):i}function mA(i,o,u){i=ye(i),o=re(o);var f=o?ts(i):0;return o&&f<o?Ha(o-f,u)+i:i}function vA(i,o,u){return u||o==null?o=0:o&&(o=+o),TT(ye(i).replace(vf,""),o||0)}function yA(i,o,u){return(u?Et(i,o,u):o===n)?o=1:o=re(o),Qf(ye(i),o)}function wA(){var i=arguments,o=ye(i[0]);return i.length<3?o:o.replace(i[1],i[2])}var EA=as(function(i,o,u){return i+(u?"_":"")+o.toLowerCase()});function SA(i,o,u){return u&&typeof u!="number"&&Et(i,o,u)&&(o=u=n),u=u===n?_e:u>>>0,u?(i=ye(i),i&&(typeof o=="string"||o!=null&&!yd(o))&&(o=$t(o),!o&&es(i))?Nr(vn(i),0,u):i.split(o,u)):[]}var CA=as(function(i,o,u){return i+(u?" ":"")+Sd(o)});function IA(i,o,u){return i=ye(i),u=u==null?0:pi(re(u),0,i.length),o=$t(o),i.slice(u,u+o.length)==o}function TA(i,o,u){var f=g.templateSettings;u&&Et(i,o,u)&&(o=n),i=ye(i),o=eu({},o,f,iv);var p=eu({},o.imports,f.imports,iv),_=Ze(p),w=Lf(p,_),E,k,P=0,O=o.interpolate||ha,M="__p += '",W=Mf((o.escape||ha).source+"|"+O.source+"|"+(O===k_?iI:ha).source+"|"+(o.evaluate||ha).source+"|$","g"),j="//# sourceURL="+(Ee.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++DI+"]")+`
`;i.replace(W,function(X,ue,pe,Gt,St,jt){return pe||(pe=Gt),M+=i.slice(P,jt).replace(fI,eT),ue&&(E=!0,M+=`' +
__e(`+ue+`) +
'`),St&&(k=!0,M+=`';
`+St+`;
__p += '`),pe&&(M+=`' +
((__t = (`+pe+`)) == null ? '' : __t) +
'`),P=jt+X.length,X}),M+=`';
`;var Q=Ee.call(o,"variable")&&o.variable;if(!Q)M=`with (obj) {
`+M+`
}
`;else if(nI.test(Q))throw new Z(c);M=(k?M.replace(zC,""):M).replace(BC,"$1").replace(HC,"$1;"),M="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(E?", __e = _.escape":"")+(k?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+M+`return __p
}`;var ie=Qv(function(){return me(_,j+"return "+M).apply(n,w)});if(ie.source=M,vd(ie))throw ie;return ie}function kA(i){return ye(i).toLowerCase()}function RA(i){return ye(i).toUpperCase()}function NA(i,o,u){if(i=ye(i),i&&(u||o===n))return sm(i);if(!i||!(o=$t(o)))return i;var f=vn(i),p=vn(o),_=om(f,p),w=lm(f,p)+1;return Nr(f,_,w).join("")}function xA(i,o,u){if(i=ye(i),i&&(u||o===n))return i.slice(0,um(i)+1);if(!i||!(o=$t(o)))return i;var f=vn(i),p=lm(f,vn(o))+1;return Nr(f,0,p).join("")}function AA(i,o,u){if(i=ye(i),i&&(u||o===n))return i.replace(vf,"");if(!i||!(o=$t(o)))return i;var f=vn(i),p=om(f,vn(o));return Nr(f,p).join("")}function PA(i,o){var u=se,f=zt;if(Me(o)){var p="separator"in o?o.separator:p;u="length"in o?re(o.length):u,f="omission"in o?$t(o.omission):f}i=ye(i);var _=i.length;if(es(i)){var w=vn(i);_=w.length}if(u>=_)return i;var E=u-ts(f);if(E<1)return f;var k=w?Nr(w,0,E).join(""):i.slice(0,E);if(p===n)return k+f;if(w&&(E+=k.length-E),yd(p)){if(i.slice(E).search(p)){var P,O=k;for(p.global||(p=Mf(p.source,ye(R_.exec(p))+"g")),p.lastIndex=0;P=p.exec(O);)var M=P.index;k=k.slice(0,M===n?E:M)}}else if(i.indexOf($t(p),E)!=E){var W=k.lastIndexOf(p);W>-1&&(k=k.slice(0,W))}return k+f}function OA(i){return i=ye(i),i&&$C.test(i)?i.replace(I_,lT):i}var LA=as(function(i,o,u){return i+(u?" ":"")+o.toUpperCase()}),Sd=Xm("toUpperCase");function Yv(i,o,u){return i=ye(i),o=u?n:o,o===n?nT(i)?cT(i):KI(i):i.match(o)||[]}var Qv=oe(function(i,o){try{return Bt(i,n,o)}catch(u){return vd(u)?u:new Z(u)}}),DA=Xn(function(i,o){return tn(o,function(u){u=bn(u),Yn(i,u,_d(i[u],i))}),i});function MA(i){var o=i==null?0:i.length,u=q();return i=o?Le(i,function(f){if(typeof f[1]!="function")throw new nn(a);return[u(f[0]),f[1]]}):[],oe(function(f){for(var p=-1;++p<o;){var _=i[p];if(Bt(_[0],this,f))return Bt(_[1],this,f)}})}function FA(i){return lk(sn(i,m))}function Cd(i){return function(){return i}}function bA(i,o){return i==null||i!==i?o:i}var UA=Zm(),WA=Zm(!0);function At(i){return i}function Id(i){return xm(typeof i=="function"?i:sn(i,m))}function zA(i){return Pm(sn(i,m))}function BA(i,o){return Om(i,sn(o,m))}var HA=oe(function(i,o){return function(u){return xo(u,i,o)}}),$A=oe(function(i,o){return function(u){return xo(i,u,o)}});function Td(i,o,u){var f=Ze(o),p=Ma(o,f);u==null&&!(Me(o)&&(p.length||!f.length))&&(u=o,o=i,i=this,p=Ma(o,Ze(o)));var _=!(Me(u)&&"chain"in u)||!!u.chain,w=Zn(i);return tn(p,function(E){var k=o[E];i[E]=k,w&&(i.prototype[E]=function(){var P=this.__chain__;if(_||P){var O=i(this.__wrapped__),M=O.__actions__=Rt(this.__actions__);return M.push({func:k,args:arguments,thisArg:i}),O.__chain__=P,O}return k.apply(i,Sr([this.value()],arguments))})}),i}function VA(){return st._===this&&(st._=_T),this}function kd(){}function GA(i){return i=re(i),oe(function(o){return Lm(o,i)})}var jA=rd(Le),KA=rd(em),qA=rd(Nf);function Xv(i){return cd(i)?xf(bn(i)):Ik(i)}function YA(i){return function(o){return i==null?n:gi(i,o)}}var QA=tv(),XA=tv(!0);function Rd(){return[]}function Nd(){return!1}function JA(){return{}}function ZA(){return""}function eP(){return!0}function tP(i,o){if(i=re(i),i<1||i>z)return[];var u=_e,f=ft(i,_e);o=q(o),i-=_e;for(var p=Of(f,o);++u<i;)o(u);return p}function nP(i){return ne(i)?Le(i,bn):Vt(i)?[i]:Rt(mv(ye(i)))}function rP(i){var o=++pT;return ye(i)+o}var iP=Ba(function(i,o){return i+o},0),sP=id("ceil"),oP=Ba(function(i,o){return i/o},1),lP=id("floor");function aP(i){return i&&i.length?Da(i,At,$f):n}function uP(i,o){return i&&i.length?Da(i,q(o,2),$f):n}function cP(i){return rm(i,At)}function fP(i,o){return rm(i,q(o,2))}function dP(i){return i&&i.length?Da(i,At,Kf):n}function hP(i,o){return i&&i.length?Da(i,q(o,2),Kf):n}var pP=Ba(function(i,o){return i*o},1),gP=id("round"),_P=Ba(function(i,o){return i-o},0);function mP(i){return i&&i.length?Pf(i,At):0}function vP(i,o){return i&&i.length?Pf(i,q(o,2)):0}return g.after=zN,g.ary=Nv,g.assign=Rx,g.assignIn=Hv,g.assignInWith=eu,g.assignWith=Nx,g.at=xx,g.before=xv,g.bind=_d,g.bindAll=DA,g.bindKey=Av,g.castArray=JN,g.chain=Tv,g.chunk=lR,g.compact=aR,g.concat=uR,g.cond=MA,g.conforms=FA,g.constant=Cd,g.countBy=mN,g.create=Ax,g.curry=Pv,g.curryRight=Ov,g.debounce=Lv,g.defaults=Px,g.defaultsDeep=Ox,g.defer=BN,g.delay=HN,g.difference=cR,g.differenceBy=fR,g.differenceWith=dR,g.drop=hR,g.dropRight=pR,g.dropRightWhile=gR,g.dropWhile=_R,g.fill=mR,g.filter=yN,g.flatMap=SN,g.flatMapDeep=CN,g.flatMapDepth=IN,g.flatten=Ev,g.flattenDeep=vR,g.flattenDepth=yR,g.flip=$N,g.flow=UA,g.flowRight=WA,g.fromPairs=wR,g.functions=Wx,g.functionsIn=zx,g.groupBy=TN,g.initial=SR,g.intersection=CR,g.intersectionBy=IR,g.intersectionWith=TR,g.invert=Hx,g.invertBy=$x,g.invokeMap=RN,g.iteratee=Id,g.keyBy=NN,g.keys=Ze,g.keysIn=xt,g.map=qa,g.mapKeys=Gx,g.mapValues=jx,g.matches=zA,g.matchesProperty=BA,g.memoize=Qa,g.merge=Kx,g.mergeWith=$v,g.method=HA,g.methodOf=$A,g.mixin=Td,g.negate=Xa,g.nthArg=GA,g.omit=qx,g.omitBy=Yx,g.once=VN,g.orderBy=xN,g.over=jA,g.overArgs=GN,g.overEvery=KA,g.overSome=qA,g.partial=md,g.partialRight=Dv,g.partition=AN,g.pick=Qx,g.pickBy=Vv,g.property=Xv,g.propertyOf=YA,g.pull=xR,g.pullAll=Cv,g.pullAllBy=AR,g.pullAllWith=PR,g.pullAt=OR,g.range=QA,g.rangeRight=XA,g.rearg=jN,g.reject=LN,g.remove=LR,g.rest=KN,g.reverse=pd,g.sampleSize=MN,g.set=Jx,g.setWith=Zx,g.shuffle=FN,g.slice=DR,g.sortBy=WN,g.sortedUniq=BR,g.sortedUniqBy=HR,g.split=SA,g.spread=qN,g.tail=$R,g.take=VR,g.takeRight=GR,g.takeRightWhile=jR,g.takeWhile=KR,g.tap=aN,g.throttle=YN,g.thru=Ka,g.toArray=Wv,g.toPairs=Gv,g.toPairsIn=jv,g.toPath=nP,g.toPlainObject=Bv,g.transform=eA,g.unary=QN,g.union=qR,g.unionBy=YR,g.unionWith=QR,g.uniq=XR,g.uniqBy=JR,g.uniqWith=ZR,g.unset=tA,g.unzip=gd,g.unzipWith=Iv,g.update=nA,g.updateWith=rA,g.values=fs,g.valuesIn=iA,g.without=eN,g.words=Yv,g.wrap=XN,g.xor=tN,g.xorBy=nN,g.xorWith=rN,g.zip=iN,g.zipObject=sN,g.zipObjectDeep=oN,g.zipWith=lN,g.entries=Gv,g.entriesIn=jv,g.extend=Hv,g.extendWith=eu,Td(g,g),g.add=iP,g.attempt=Qv,g.camelCase=aA,g.capitalize=Kv,g.ceil=sP,g.clamp=sA,g.clone=ZN,g.cloneDeep=tx,g.cloneDeepWith=nx,g.cloneWith=ex,g.conformsTo=rx,g.deburr=qv,g.defaultTo=bA,g.divide=oP,g.endsWith=uA,g.eq=wn,g.escape=cA,g.escapeRegExp=fA,g.every=vN,g.find=wN,g.findIndex=yv,g.findKey=Lx,g.findLast=EN,g.findLastIndex=wv,g.findLastKey=Dx,g.floor=lP,g.forEach=kv,g.forEachRight=Rv,g.forIn=Mx,g.forInRight=Fx,g.forOwn=bx,g.forOwnRight=Ux,g.get=wd,g.gt=ix,g.gte=sx,g.has=Bx,g.hasIn=Ed,g.head=Sv,g.identity=At,g.includes=kN,g.indexOf=ER,g.inRange=oA,g.invoke=Vx,g.isArguments=vi,g.isArray=ne,g.isArrayBuffer=ox,g.isArrayLike=Nt,g.isArrayLikeObject=He,g.isBoolean=lx,g.isBuffer=xr,g.isDate=ax,g.isElement=ux,g.isEmpty=cx,g.isEqual=fx,g.isEqualWith=dx,g.isError=vd,g.isFinite=hx,g.isFunction=Zn,g.isInteger=Mv,g.isLength=Ja,g.isMap=Fv,g.isMatch=px,g.isMatchWith=gx,g.isNaN=_x,g.isNative=mx,g.isNil=yx,g.isNull=vx,g.isNumber=bv,g.isObject=Me,g.isObjectLike=We,g.isPlainObject=Mo,g.isRegExp=yd,g.isSafeInteger=wx,g.isSet=Uv,g.isString=Za,g.isSymbol=Vt,g.isTypedArray=cs,g.isUndefined=Ex,g.isWeakMap=Sx,g.isWeakSet=Cx,g.join=kR,g.kebabCase=dA,g.last=ln,g.lastIndexOf=RR,g.lowerCase=hA,g.lowerFirst=pA,g.lt=Ix,g.lte=Tx,g.max=aP,g.maxBy=uP,g.mean=cP,g.meanBy=fP,g.min=dP,g.minBy=hP,g.stubArray=Rd,g.stubFalse=Nd,g.stubObject=JA,g.stubString=ZA,g.stubTrue=eP,g.multiply=pP,g.nth=NR,g.noConflict=VA,g.noop=kd,g.now=Ya,g.pad=gA,g.padEnd=_A,g.padStart=mA,g.parseInt=vA,g.random=lA,g.reduce=PN,g.reduceRight=ON,g.repeat=yA,g.replace=wA,g.result=Xx,g.round=gP,g.runInContext=I,g.sample=DN,g.size=bN,g.snakeCase=EA,g.some=UN,g.sortedIndex=MR,g.sortedIndexBy=FR,g.sortedIndexOf=bR,g.sortedLastIndex=UR,g.sortedLastIndexBy=WR,g.sortedLastIndexOf=zR,g.startCase=CA,g.startsWith=IA,g.subtract=_P,g.sum=mP,g.sumBy=vP,g.template=TA,g.times=tP,g.toFinite=er,g.toInteger=re,g.toLength=zv,g.toLower=kA,g.toNumber=an,g.toSafeInteger=kx,g.toString=ye,g.toUpper=RA,g.trim=NA,g.trimEnd=xA,g.trimStart=AA,g.truncate=PA,g.unescape=OA,g.uniqueId=rP,g.upperCase=LA,g.upperFirst=Sd,g.each=kv,g.eachRight=Rv,g.first=Sv,Td(g,function(){var i={};return Mn(g,function(o,u){Ee.call(g.prototype,u)||(i[u]=o)}),i}(),{chain:!1}),g.VERSION=r,tn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){g[i].placeholder=g}),tn(["drop","take"],function(i,o){fe.prototype[i]=function(u){u=u===n?1:Ye(re(u),0);var f=this.__filtered__&&!o?new fe(this):this.clone();return f.__filtered__?f.__takeCount__=ft(u,f.__takeCount__):f.__views__.push({size:ft(u,_e),type:i+(f.__dir__<0?"Right":"")}),f},fe.prototype[i+"Right"]=function(u){return this.reverse()[i](u).reverse()}}),tn(["filter","map","takeWhile"],function(i,o){var u=o+1,f=u==fo||u==ho;fe.prototype[i]=function(p){var _=this.clone();return _.__iteratees__.push({iteratee:q(p,3),type:u}),_.__filtered__=_.__filtered__||f,_}}),tn(["head","last"],function(i,o){var u="take"+(o?"Right":"");fe.prototype[i]=function(){return this[u](1).value()[0]}}),tn(["initial","tail"],function(i,o){var u="drop"+(o?"":"Right");fe.prototype[i]=function(){return this.__filtered__?new fe(this):this[u](1)}}),fe.prototype.compact=function(){return this.filter(At)},fe.prototype.find=function(i){return this.filter(i).head()},fe.prototype.findLast=function(i){return this.reverse().find(i)},fe.prototype.invokeMap=oe(function(i,o){return typeof i=="function"?new fe(this):this.map(function(u){return xo(u,i,o)})}),fe.prototype.reject=function(i){return this.filter(Xa(q(i)))},fe.prototype.slice=function(i,o){i=re(i);var u=this;return u.__filtered__&&(i>0||o<0)?new fe(u):(i<0?u=u.takeRight(-i):i&&(u=u.drop(i)),o!==n&&(o=re(o),u=o<0?u.dropRight(-o):u.take(o-i)),u)},fe.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},fe.prototype.toArray=function(){return this.take(_e)},Mn(fe.prototype,function(i,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),f=/^(?:head|last)$/.test(o),p=g[f?"take"+(o=="last"?"Right":""):o],_=f||/^find/.test(o);p&&(g.prototype[o]=function(){var w=this.__wrapped__,E=f?[1]:arguments,k=w instanceof fe,P=E[0],O=k||ne(w),M=function(ue){var pe=p.apply(g,Sr([ue],E));return f&&W?pe[0]:pe};O&&u&&typeof P=="function"&&P.length!=1&&(k=O=!1);var W=this.__chain__,j=!!this.__actions__.length,Q=_&&!W,ie=k&&!j;if(!_&&O){w=ie?w:new fe(this);var X=i.apply(w,E);return X.__actions__.push({func:Ka,args:[M],thisArg:n}),new rn(X,W)}return Q&&ie?i.apply(this,E):(X=this.thru(M),Q?f?X.value()[0]:X.value():X)})}),tn(["pop","push","shift","sort","splice","unshift"],function(i){var o=ya[i],u=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",f=/^(?:pop|shift)$/.test(i);g.prototype[i]=function(){var p=arguments;if(f&&!this.__chain__){var _=this.value();return o.apply(ne(_)?_:[],p)}return this[u](function(w){return o.apply(ne(w)?w:[],p)})}}),Mn(fe.prototype,function(i,o){var u=g[o];if(u){var f=u.name+"";Ee.call(ss,f)||(ss[f]=[]),ss[f].push({name:o,func:u})}}),ss[za(n,C).name]=[{name:"wrapper",func:n}],fe.prototype.clone=OT,fe.prototype.reverse=LT,fe.prototype.value=DT,g.prototype.at=uN,g.prototype.chain=cN,g.prototype.commit=fN,g.prototype.next=dN,g.prototype.plant=pN,g.prototype.reverse=gN,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=_N,g.prototype.first=g.prototype.head,So&&(g.prototype[So]=hN),g},ns=fT();ci?((ci.exports=ns)._=ns,If._=ns):st._=ns}).call(Fo)})(G3,Zs);const j3=()=>{const[t,e]=je.useState(),[n,r]=je.useState(),[s,l]=je.useState(),[a,c]=je.useState();return Ni("form",{onSubmit:h=>{h.preventDefault();const v=ua.getMoviesRef(),m=yb(v);d_(m,{title:t.value||"",year:n.value||"",image:s.value||"",comment:a.value||""})},children:[de("h2",{children:"Add A Movie"}),de("label",{htmlFor:"titleField",children:"Title"}),de("input",{id:"titleField",type:"text",placeholder:"enter a title",ref:h=>e(h)}),de("label",{htmlFor:"yearField",children:"Year"}),de("input",{id:"yearField",type:"number",placeholder:"enter a year",ref:h=>r(h)}),de("label",{htmlFor:"imageField",children:"Image Url"}),de("input",{id:"imageField",type:"text",placeholder:"enter url including http(s)://",ref:h=>l(h)}),de("label",{htmlFor:"commentField",children:"Comments"}),de("textarea",{id:"commentField",placeholder:"enter comments",ref:h=>c(h)}),de("button",{type:"submit",children:"Add"})]})};var Nc={},K3={get exports(){return Nc},set exports(t){Nc=t}},q3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y3=q3,Q3=Y3;function OC(){}function LC(){}LC.resetWarningCache=OC;var X3=function(){function t(r,s,l,a,c,d){if(d!==Q3){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:LC,resetWarningCache:OC};return n.PropTypes=n,n};K3.exports=X3();const J3=t=>{const e=ua.getMovieRef(t);wb(e)},DC=({movies:t=[],user:e={}})=>{const n=e.email==="slatron@gmail.com";return Ni("table",{className:"movie-table",children:[de("thead",{children:Ni("tr",{children:[de("th",{className:"title",children:"Title"}),de("th",{className:"year",children:"Year"}),de("th",{className:"image",children:"Poster"}),de("th",{className:"comment",children:"Comment"}),n&&de("th",{className:"delete-icon"})]})}),de("tbody",{children:t.map(r=>Ni("tr",{children:[de("td",{className:"title",children:r.title}),de("td",{className:"year",children:r.year}),de("td",{className:"image",children:!Zs.isEmpty(r.image)&&de("img",{src:r.image})}),de("td",{className:"comment",children:r.comment}),n&&de("td",{onClick:()=>J3(r.id),className:"delete-icon",children:"X"})]},r.id))})]})};DC.propTypes={movies:Nc.array,user:Nc.object};const Z3=({setUser:t})=>{const[e,n]=je.useState({}),[r,s]=je.useState({}),[l,a]=je.useState(!1);return Ni("form",{className:"login",onSubmit:d=>{d.preventDefault(),ua.login({email:e.value,pass:r.value}).then(h=>{console.log("response: ",h),console.log("...you are signed in!"),t(h.user)}).catch(h=>{const v=h.code,m=h.message;console.log(v,m)})},children:[de("h2",{onClick:()=>{a(d=>!d)},children:"Login to add or edit movies"}),l&&Ni(VP,{children:[de("label",{htmlFor:"emailField",children:"Email"}),de("input",{id:"emailField",type:"text",placeholder:"enter your email",ref:d=>n(d)}),de("label",{htmlFor:"passField",children:"Password"}),de("input",{id:"passField",type:"text",placeholder:"enter your password",ref:d=>s(d)}),de("button",{type:"submit",children:"login"})]})]})},e4=()=>{const[t,e]=je.useState({}),[n,r]=je.useState(!0);return je.useEffect(()=>{r(!0),ua.getLoginObserver(()=>{e({name:t.email||"Guest",logged_in:!!t.email}),r(!1)})},[]),{loading:n,user:t}};const t4=()=>{const{user:t}=e4(),[e,n]=je.useState([]),[r,s]=je.useState(!0),[l,a]=je.useState({});return je.useEffect(()=>{a(t)},[t]),je.useEffect(()=>{const c=h=>Zs.isNil(h.val())?[]:Object.entries(h.val()).map(([v,m])=>(m.id=v,m)),d=ua.getMoviesRef();return Sb(d,h=>{const v=c(h);v.sort((m,y)=>m.title>y.title?1:-1),n(v),s(!1)}),()=>{Cb(d)}},[]),r||Zs.isEmpty(l)?de("div",{className:"loading",children:"loading..."}):(console.log({user:l}),Ni("div",{className:"App",children:[de("h1",{children:"Mike's Halloween Marathon Suggestions"}),de(DC,{movies:e,user:l}),l.email==="slatron@gmail.com"&&de(j3,{}),l.name==="Guest"&&de(Z3,{setUser:a})]}))};gh.createRoot(document.getElementById("root")).render(de(bP.StrictMode,{children:de(t4,{})}));
