/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.min.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/dist/jquery.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return S}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/twig/twig.js":
/*!***********************************!*\
  !*** ./node_modules/twig/twig.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sprintf() {
  //  discuss at: https://locutus.io/php/sprintf/
  // original by: Ash Searle (https://hexmen.com/blog/)
  // improved by: Michael White (https://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Dj
  // improved by: Allidylls
  //    input by: Paulo Freitas
  //    input by: Brett Zamir (https://brett-zamir.me)
  // improved by: Rafał Kukawski (https://kukawski.pl)
  //   example 1: sprintf("%01.2f", 123.1)
  //   returns 1: '123.10'
  //   example 2: sprintf("[%10s]", 'monkey')
  //   returns 2: '[    monkey]'
  //   example 3: sprintf("[%'#10s]", 'monkey')
  //   returns 3: '[####monkey]'
  //   example 4: sprintf("%d", 123456789012345)
  //   returns 4: '123456789012345'
  //   example 5: sprintf('%-03s', 'E')
  //   returns 5: 'E00'
  //   example 6: sprintf('%+010d', 9)
  //   returns 6: '+000000009'
  //   example 7: sprintf('%+0\'@10d', 9)
  //   returns 7: '@@@@@@@@+9'
  //   example 8: sprintf('%.f', 3.14)
  //   returns 8: '3.140000'
  //   example 9: sprintf('%% %2$d', 1, 2)
  //   returns 9: '% 2'

  var regex = /%%|%(?:(\d+)\$)?((?:[-+#0 ]|'[\s\S])*)(\d+)?(?:\.(\d*))?([\s\S])/g;
  var args = arguments;
  var i = 0;
  var format = args[i++];

  var _pad = function _pad(str, len, chr, leftJustify) {
    if (!chr) {
      chr = ' ';
    }
    var padding = str.length >= len ? '' : new Array(1 + len - str.length >>> 0).join(chr);
    return leftJustify ? str + padding : padding + str;
  };

  var justify = function justify(value, prefix, leftJustify, minWidth, padChar) {
    var diff = minWidth - value.length;
    if (diff > 0) {
      // when padding with zeros
      // on the left side
      // keep sign (+ or -) in front
      if (!leftJustify && padChar === '0') {
        value = [value.slice(0, prefix.length), _pad('', diff, '0', true), value.slice(prefix.length)].join('');
      } else {
        value = _pad(value, minWidth, padChar, leftJustify);
      }
    }
    return value;
  };

  var _formatBaseX = function _formatBaseX(value, base, leftJustify, minWidth, precision, padChar) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    value = _pad(number.toString(base), precision || 0, '0', false);
    return justify(value, '', leftJustify, minWidth, padChar);
  };

  // _formatString()
  var _formatString = function _formatString(value, leftJustify, minWidth, precision, customPadChar) {
    if (precision !== null && precision !== undefined) {
      value = value.slice(0, precision);
    }
    return justify(value, '', leftJustify, minWidth, customPadChar);
  };

  // doFormat()
  var doFormat = function doFormat(substring, argIndex, modifiers, minWidth, precision, specifier) {
    var number, prefix, method, textTransform, value;

    if (substring === '%%') {
      return '%';
    }

    // parse modifiers
    var padChar = ' '; // pad with spaces by default
    var leftJustify = false;
    var positiveNumberPrefix = '';
    var j, l;

    for (j = 0, l = modifiers.length; j < l; j++) {
      switch (modifiers.charAt(j)) {
        case ' ':
        case '0':
          padChar = modifiers.charAt(j);
          break;
        case '+':
          positiveNumberPrefix = '+';
          break;
        case '-':
          leftJustify = true;
          break;
        case "'":
          if (j + 1 < l) {
            padChar = modifiers.charAt(j + 1);
            j++;
          }
          break;
      }
    }

    if (!minWidth) {
      minWidth = 0;
    } else {
      minWidth = +minWidth;
    }

    if (!isFinite(minWidth)) {
      throw new Error('Width must be finite');
    }

    if (!precision) {
      precision = specifier === 'd' ? 0 : 'fFeE'.indexOf(specifier) > -1 ? 6 : undefined;
    } else {
      precision = +precision;
    }

    if (argIndex && +argIndex === 0) {
      throw new Error('Argument number must be greater than zero');
    }

    if (argIndex && +argIndex >= args.length) {
      throw new Error('Too few arguments');
    }

    value = argIndex ? args[+argIndex] : args[i++];

    switch (specifier) {
      case '%':
        return '%';
      case 's':
        return _formatString(value + '', leftJustify, minWidth, precision, padChar);
      case 'c':
        return _formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, padChar);
      case 'b':
        return _formatBaseX(value, 2, leftJustify, minWidth, precision, padChar);
      case 'o':
        return _formatBaseX(value, 8, leftJustify, minWidth, precision, padChar);
      case 'x':
        return _formatBaseX(value, 16, leftJustify, minWidth, precision, padChar);
      case 'X':
        return _formatBaseX(value, 16, leftJustify, minWidth, precision, padChar).toUpperCase();
      case 'u':
        return _formatBaseX(value, 10, leftJustify, minWidth, precision, padChar);
      case 'i':
      case 'd':
        number = +value || 0;
        // Plain Math.round doesn't just truncate
        number = Math.round(number - number % 1);
        prefix = number < 0 ? '-' : positiveNumberPrefix;
        value = prefix + _pad(String(Math.abs(number)), precision, '0', false);

        if (leftJustify && padChar === '0') {
          // can't right-pad 0s on integers
          padChar = ' ';
        }
        return justify(value, prefix, leftJustify, minWidth, padChar);
      case 'e':
      case 'E':
      case 'f': // @todo: Should handle locales (as per setlocale)
      case 'F':
      case 'g':
      case 'G':
        number = +value;
        prefix = number < 0 ? '-' : positiveNumberPrefix;
        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(specifier.toLowerCase())];
        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(specifier) % 2];
        value = prefix + Math.abs(number)[method](precision);
        return justify(value, prefix, leftJustify, minWidth, padChar)[textTransform]();
      default:
        // unknown specifier, consume that char and return empty
        return '';
    }
  };

  try {
    return format.replace(regex, doFormat);
  } catch (err) {
    return false;
  }
};
//# sourceMappingURL=sprintf.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _php_cast_int(value) {
  // eslint-disable-line camelcase
  // original by: Rafał Kukawski
  //   example 1: _php_cast_int(false)
  //   returns 1: 0
  //   example 2: _php_cast_int(true)
  //   returns 2: 1
  //   example 3: _php_cast_int(0)
  //   returns 3: 0
  //   example 4: _php_cast_int(1)
  //   returns 4: 1
  //   example 5: _php_cast_int(3.14)
  //   returns 5: 3
  //   example 6: _php_cast_int('')
  //   returns 6: 0
  //   example 7: _php_cast_int('0')
  //   returns 7: 0
  //   example 8: _php_cast_int('abc')
  //   returns 8: 0
  //   example 9: _php_cast_int(null)
  //   returns 9: 0
  //  example 10: _php_cast_int(undefined)
  //  returns 10: 0
  //  example 11: _php_cast_int('123abc')
  //  returns 11: 123
  //  example 12: _php_cast_int('123e4')
  //  returns 12: 123
  //  example 13: _php_cast_int(0x200000001)
  //  returns 13: 8589934593

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'number':
      if (isNaN(value) || !isFinite(value)) {
        // from PHP 7, NaN and Infinity are casted to 0
        return 0;
      }

      return value < 0 ? Math.ceil(value) : Math.floor(value);
    case 'string':
      return parseInt(value, 10) || 0;
    case 'boolean':
    // fall through
    default:
      // Behaviour for types other than float, string, boolean
      // is undefined and can change any time.
      // To not invent complex logic
      // that mimics PHP 7.0 behaviour
      // casting value->bool->number is used
      return +!!value;
  }
};
//# sourceMappingURL=_php_cast_int.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Twig.js
 *
 * @copyright 2011-2020 John Roepke and the Twig.js Contributors
 * @license   Available under the BSD 2-Clause License
 * @link      https://github.com/twigjs/twig.js
 */
module.exports = __webpack_require__(8)();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.factory.js
//
// This file handles creating the Twig library
module.exports = function factory() {
  var Twig = {
    VERSION: '1.14.0'
  };

  __webpack_require__(9)(Twig);

  __webpack_require__(10)(Twig);

  __webpack_require__(11)(Twig);

  __webpack_require__(18)(Twig);

  __webpack_require__(19)(Twig);

  __webpack_require__(20)(Twig);

  __webpack_require__(31)(Twig);

  __webpack_require__(32)(Twig);

  __webpack_require__(34)(Twig);

  __webpack_require__(35)(Twig);

  __webpack_require__(36)(Twig);

  __webpack_require__(37)(Twig);

  __webpack_require__(38)(Twig);

  __webpack_require__(39)(Twig);

  __webpack_require__(40)(Twig);

  Twig.exports.factory = factory;
  return Twig.exports;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// ## twig.core.js
//
// This file handles template level tokenizing, compiling and parsing.
module.exports = function (Twig) {
  'use strict';

  Twig.trace = false;
  Twig.debug = false; // Default caching to true for the improved performance it offers

  Twig.cache = true;

  Twig.noop = function () {};

  Twig.merge = function (target, source, onlyChanged) {
    Object.keys(source).forEach(function (key) {
      if (onlyChanged && !(key in target)) {
        return;
      }

      target[key] = source[key];
    });
    return target;
  };
  /**
   * Exception thrown by twig.js.
   */


  Twig.Error = function (message, file) {
    this.message = message;
    this.name = 'TwigException';
    this.type = 'TwigException';
    this.file = file;
  };
  /**
   * Get the string representation of a Twig error.
   */


  Twig.Error.prototype.toString = function () {
    var output = this.name + ': ' + this.message;
    return output;
  };
  /**
   * Wrapper for logging to the console.
   */


  Twig.log = {
    trace: function trace() {
      if (Twig.trace && console) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.log(Array.prototype.slice.call(args));
      }
    },
    debug: function debug() {
      if (Twig.debug && console) {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        console.log(Array.prototype.slice.call(args));
      }
    }
  };

  if (typeof console === 'undefined') {
    Twig.log.error = function () {};
  } else if (typeof console.error !== 'undefined') {
    Twig.log.error = function () {
      var _console;

      (_console = console).error.apply(_console, arguments);
    };
  } else if (typeof console.log !== 'undefined') {
    Twig.log.error = function () {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    };
  }
  /**
   * Container for methods related to handling high level template tokens
   *      (for example: {{ expression }}, {% logic %}, {# comment #}, raw data)
   */


  Twig.token = {};
  /**
   * Token types.
   */

  Twig.token.type = {
    output: 'output',
    logic: 'logic',
    comment: 'comment',
    raw: 'raw',
    outputWhitespacePre: 'output_whitespace_pre',
    outputWhitespacePost: 'output_whitespace_post',
    outputWhitespaceBoth: 'output_whitespace_both',
    logicWhitespacePre: 'logic_whitespace_pre',
    logicWhitespacePost: 'logic_whitespace_post',
    logicWhitespaceBoth: 'logic_whitespace_both'
  };
  /**
   * Token syntax definitions.
   */

  Twig.token.definitions = [{
    type: Twig.token.type.raw,
    open: '{% raw %}',
    close: '{% endraw %}'
  }, {
    type: Twig.token.type.raw,
    open: '{% verbatim %}',
    close: '{% endverbatim %}'
  }, // *Whitespace type tokens*
  //
  // These typically take the form `{{- expression -}}` or `{{- expression }}` or `{{ expression -}}`.
  {
    type: Twig.token.type.outputWhitespacePre,
    open: '{{-',
    close: '}}'
  }, {
    type: Twig.token.type.outputWhitespacePost,
    open: '{{',
    close: '-}}'
  }, {
    type: Twig.token.type.outputWhitespaceBoth,
    open: '{{-',
    close: '-}}'
  }, {
    type: Twig.token.type.logicWhitespacePre,
    open: '{%-',
    close: '%}'
  }, {
    type: Twig.token.type.logicWhitespacePost,
    open: '{%',
    close: '-%}'
  }, {
    type: Twig.token.type.logicWhitespaceBoth,
    open: '{%-',
    close: '-%}'
  }, // *Output type tokens*
  //
  // These typically take the form `{{ expression }}`.
  {
    type: Twig.token.type.output,
    open: '{{',
    close: '}}'
  }, // *Logic type tokens*
  //
  // These typically take a form like `{% if expression %}` or `{% endif %}`
  {
    type: Twig.token.type.logic,
    open: '{%',
    close: '%}'
  }, // *Comment type tokens*
  //
  // These take the form `{# anything #}`
  {
    type: Twig.token.type.comment,
    open: '{#',
    close: '#}'
  }];
  /**
   * What characters start "strings" in token definitions. We need this to ignore token close
   * strings inside an expression.
   */

  Twig.token.strings = ['"', '\''];

  Twig.token.findStart = function (template) {
    var output = {
      position: null,
      def: null
    };
    var closePosition = null;
    var len = Twig.token.definitions.length;
    var i;
    var tokenTemplate;
    var firstKeyPosition;
    var closeKeyPosition;

    for (i = 0; i < len; i++) {
      tokenTemplate = Twig.token.definitions[i];
      firstKeyPosition = template.indexOf(tokenTemplate.open);
      closeKeyPosition = template.indexOf(tokenTemplate.close);
      Twig.log.trace('Twig.token.findStart: ', 'Searching for ', tokenTemplate.open, ' found at ', firstKeyPosition); // Special handling for mismatched tokens

      if (firstKeyPosition >= 0) {
        // This token matches the template
        if (tokenTemplate.open.length !== tokenTemplate.close.length) {
          // This token has mismatched closing and opening tags
          if (closeKeyPosition < 0) {
            // This token's closing tag does not match the template
            continue;
          }
        }
      } // Does this token occur before any other types?


      if (firstKeyPosition >= 0 && (output.position === null || firstKeyPosition < output.position)) {
        output.position = firstKeyPosition;
        output.def = tokenTemplate;
        closePosition = closeKeyPosition;
      } else if (firstKeyPosition >= 0 && output.position !== null && firstKeyPosition === output.position) {
        /* This token exactly matches another token,
        greedily match to check if this token has a greater specificity */
        if (tokenTemplate.open.length > output.def.open.length) {
          // This token's opening tag is more specific than the previous match
          output.position = firstKeyPosition;
          output.def = tokenTemplate;
          closePosition = closeKeyPosition;
        } else if (tokenTemplate.open.length === output.def.open.length) {
          if (tokenTemplate.close.length > output.def.close.length) {
            // This token's opening tag is as specific as the previous match,
            // but the closing tag has greater specificity
            if (closeKeyPosition >= 0 && closeKeyPosition < closePosition) {
              // This token's closing tag exists in the template,
              // and it occurs sooner than the previous match
              output.position = firstKeyPosition;
              output.def = tokenTemplate;
              closePosition = closeKeyPosition;
            }
          } else if (closeKeyPosition >= 0 && closeKeyPosition < closePosition) {
            // This token's closing tag is not more specific than the previous match,
            // but it occurs sooner than the previous match
            output.position = firstKeyPosition;
            output.def = tokenTemplate;
            closePosition = closeKeyPosition;
          }
        }
      }
    }

    return output;
  };

  Twig.token.findEnd = function (template, tokenDef, start) {
    var end = null;
    var found = false;
    var offset = 0; // String position variables

    var strPos = null;
    var strFound = null;
    var pos = null;
    var endOffset = null;
    var thisStrPos = null;
    var endStrPos = null; // For loop variables

    var i;
    var l;

    while (!found) {
      strPos = null;
      strFound = null;
      pos = template.indexOf(tokenDef.close, offset);

      if (pos >= 0) {
        end = pos;
        found = true;
      } else {
        // Throw an exception
        throw new Twig.Error('Unable to find closing bracket \'' + tokenDef.close + '\' opened near template position ' + start);
      } // Ignore quotes within comments; just look for the next comment close sequence,
      // regardless of what comes before it. https://github.com/justjohn/twig.js/issues/95


      if (tokenDef.type === Twig.token.type.comment) {
        break;
      } // Ignore quotes within raw tag
      // Fixes #283


      if (tokenDef.type === Twig.token.type.raw) {
        break;
      }

      l = Twig.token.strings.length;

      for (i = 0; i < l; i += 1) {
        thisStrPos = template.indexOf(Twig.token.strings[i], offset);

        if (thisStrPos > 0 && thisStrPos < pos && (strPos === null || thisStrPos < strPos)) {
          strPos = thisStrPos;
          strFound = Twig.token.strings[i];
        }
      } // We found a string before the end of the token, now find the string's end and set the search offset to it


      if (strPos !== null) {
        endOffset = strPos + 1;
        end = null;
        found = false;

        for (;;) {
          endStrPos = template.indexOf(strFound, endOffset);

          if (endStrPos < 0) {
            throw Twig.Error('Unclosed string in template');
          } // Ignore escaped quotes


          if (template.slice(endStrPos - 1, endStrPos) === '\\') {
            endOffset = endStrPos + 1;
          } else {
            offset = endStrPos + 1;
            break;
          }
        }
      }
    }

    return end;
  };
  /**
   * Convert a template into high-level tokens.
   */


  Twig.tokenize = function (template) {
    var tokens = []; // An offset for reporting errors locations in the template.

    var errorOffset = 0; // The start and type of the first token found in the template.

    var foundToken = null; // The end position of the matched token.

    var end = null;

    while (template.length > 0) {
      // Find the first occurance of any token type in the template
      foundToken = Twig.token.findStart(template);
      Twig.log.trace('Twig.tokenize: ', 'Found token: ', foundToken);

      if (foundToken.position === null) {
        // No more tokens -> add the rest of the template as a raw-type token
        tokens.push({
          type: Twig.token.type.raw,
          value: template
        });
        template = '';
      } else {
        // Add a raw type token for anything before the start of the token
        if (foundToken.position > 0) {
          tokens.push({
            type: Twig.token.type.raw,
            value: template.slice(0, Math.max(0, foundToken.position))
          });
        }

        template = template.slice(foundToken.position + foundToken.def.open.length);
        errorOffset += foundToken.position + foundToken.def.open.length; // Find the end of the token

        end = Twig.token.findEnd(template, foundToken.def, errorOffset);
        Twig.log.trace('Twig.tokenize: ', 'Token ends at ', end);
        tokens.push({
          type: foundToken.def.type,
          value: template.slice(0, Math.max(0, end)).trim()
        });

        if (template.slice(end + foundToken.def.close.length, end + foundToken.def.close.length + 1) === '\n') {
          switch (foundToken.def.type) {
            case 'logic_whitespace_pre':
            case 'logic_whitespace_post':
            case 'logic_whitespace_both':
            case 'logic':
              // Newlines directly after logic tokens are ignored
              end += 1;
              break;

            default:
              break;
          }
        }

        template = template.slice(end + foundToken.def.close.length); // Increment the position in the template

        errorOffset += end + foundToken.def.close.length;
      }
    }

    return tokens;
  };

  Twig.compile = function (tokens) {
    var self = this;

    try {
      // Output and intermediate stacks
      var output = [];
      var stack = []; // The tokens between open and close tags

      var intermediateOutput = [];
      var token = null;
      var logicToken = null;
      var unclosedToken = null; // Temporary previous token.

      var prevToken = null; // Temporary previous output.

      var prevOutput = null; // Temporary previous intermediate output.

      var prevIntermediateOutput = null; // The previous token's template

      var prevTemplate = null; // Token lookahead

      var nextToken = null; // The output token

      var tokOutput = null; // Logic Token values

      var type = null;
      var open = null;
      var next = null;

      var compileOutput = function compileOutput(token) {
        Twig.expression.compile.call(self, token);

        if (stack.length > 0) {
          intermediateOutput.push(token);
        } else {
          output.push(token);
        }
      };

      var compileLogic = function compileLogic(token) {
        // Compile the logic token
        logicToken = Twig.logic.compile.call(self, token);
        type = logicToken.type;
        open = Twig.logic.handler[type].open;
        next = Twig.logic.handler[type].next;
        Twig.log.trace('Twig.compile: ', 'Compiled logic token to ', logicToken, ' next is: ', next, ' open is : ', open); // Not a standalone token, check logic stack to see if this is expected

        if (open !== undefined && !open) {
          prevToken = stack.pop();
          prevTemplate = Twig.logic.handler[prevToken.type];

          if (!prevTemplate.next.includes(type)) {
            throw new Error(type + ' not expected after a ' + prevToken.type);
          }

          prevToken.output = prevToken.output || [];
          prevToken.output = prevToken.output.concat(intermediateOutput);
          intermediateOutput = [];
          tokOutput = {
            type: Twig.token.type.logic,
            token: prevToken
          };

          if (stack.length > 0) {
            intermediateOutput.push(tokOutput);
          } else {
            output.push(tokOutput);
          }
        } // This token requires additional tokens to complete the logic structure.


        if (next !== undefined && next.length > 0) {
          Twig.log.trace('Twig.compile: ', 'Pushing ', logicToken, ' to logic stack.');

          if (stack.length > 0) {
            // Put any currently held output into the output list of the logic operator
            // currently at the head of the stack before we push a new one on.
            prevToken = stack.pop();
            prevToken.output = prevToken.output || [];
            prevToken.output = prevToken.output.concat(intermediateOutput);
            stack.push(prevToken);
            intermediateOutput = [];
          } // Push the new logic token onto the logic stack


          stack.push(logicToken);
        } else if (open !== undefined && open) {
          tokOutput = {
            type: Twig.token.type.logic,
            token: logicToken
          }; // Standalone token (like {% set ... %}

          if (stack.length > 0) {
            intermediateOutput.push(tokOutput);
          } else {
            output.push(tokOutput);
          }
        }
      };

      while (tokens.length > 0) {
        token = tokens.shift();
        prevOutput = output[output.length - 1];
        prevIntermediateOutput = intermediateOutput[intermediateOutput.length - 1];
        nextToken = tokens[0];
        Twig.log.trace('Compiling token ', token);

        switch (token.type) {
          case Twig.token.type.raw:
            if (stack.length > 0) {
              intermediateOutput.push(token);
            } else {
              output.push(token);
            }

            break;

          case Twig.token.type.logic:
            compileLogic.call(self, token);
            break;
          // Do nothing, comments should be ignored

          case Twig.token.type.comment:
            break;

          case Twig.token.type.output:
            compileOutput.call(self, token);
            break;
          // Kill whitespace ahead and behind this token

          case Twig.token.type.logicWhitespacePre:
          case Twig.token.type.logicWhitespacePost:
          case Twig.token.type.logicWhitespaceBoth:
          case Twig.token.type.outputWhitespacePre:
          case Twig.token.type.outputWhitespacePost:
          case Twig.token.type.outputWhitespaceBoth:
            if (token.type !== Twig.token.type.outputWhitespacePost && token.type !== Twig.token.type.logicWhitespacePost) {
              if (prevOutput) {
                // If the previous output is raw, pop it off
                if (prevOutput.type === Twig.token.type.raw) {
                  output.pop();
                  prevOutput.value = prevOutput.value.trimEnd(); // Repush the previous output

                  output.push(prevOutput);
                }
              }

              if (prevIntermediateOutput) {
                // If the previous intermediate output is raw, pop it off
                if (prevIntermediateOutput.type === Twig.token.type.raw) {
                  intermediateOutput.pop();
                  prevIntermediateOutput.value = prevIntermediateOutput.value.trimEnd(); // Repush the previous intermediate output

                  intermediateOutput.push(prevIntermediateOutput);
                }
              }
            } // Compile this token


            switch (token.type) {
              case Twig.token.type.outputWhitespacePre:
              case Twig.token.type.outputWhitespacePost:
              case Twig.token.type.outputWhitespaceBoth:
                compileOutput.call(self, token);
                break;

              case Twig.token.type.logicWhitespacePre:
              case Twig.token.type.logicWhitespacePost:
              case Twig.token.type.logicWhitespaceBoth:
                compileLogic.call(self, token);
                break;

              default:
                break;
            }

            if (token.type !== Twig.token.type.outputWhitespacePre && token.type !== Twig.token.type.logicWhitespacePre) {
              if (nextToken) {
                // If the next token is raw, shift it out
                if (nextToken.type === Twig.token.type.raw) {
                  tokens.shift();
                  nextToken.value = nextToken.value.trimStart(); // Unshift the next token

                  tokens.unshift(nextToken);
                }
              }
            }

            break;

          default:
            break;
        }

        Twig.log.trace('Twig.compile: ', ' Output: ', output, ' Logic Stack: ', stack, ' Pending Output: ', intermediateOutput);
      } // Verify that there are no logic tokens left in the stack.


      if (stack.length > 0) {
        unclosedToken = stack.pop();
        throw new Error('Unable to find an end tag for ' + unclosedToken.type + ', expecting one of ' + unclosedToken.next);
      }

      return output;
    } catch (error) {
      if (self.options.rethrow) {
        if (error.type === 'TwigException' && !error.file) {
          error.file = self.id;
        }

        throw error;
      } else {
        Twig.log.error('Error compiling twig template ' + self.id + ': ');

        if (error.stack) {
          Twig.log.error(error.stack);
        } else {
          Twig.log.error(error.toString());
        }
      }
    }
  };

  function handleException(state, ex) {
    if (state.template.options.rethrow) {
      if (typeof ex === 'string') {
        ex = new Twig.Error(ex);
      }

      if (ex.type === 'TwigException' && !ex.file) {
        ex.file = state.template.id;
      }

      throw ex;
    } else {
      Twig.log.error('Error parsing twig template ' + state.template.id + ': ');

      if (ex.stack) {
        Twig.log.error(ex.stack);
      } else {
        Twig.log.error(ex.toString());
      }

      if (Twig.debug) {
        return ex.toString();
      }
    }
  }
  /**
   * Tokenize and compile a string template.
   *
   * @param {string} data The template.
   *
   * @return {Array} The compiled tokens.
   */


  Twig.prepare = function (data) {
    // Tokenize
    Twig.log.debug('Twig.prepare: ', 'Tokenizing ', data);
    var rawTokens = Twig.tokenize.call(this, data); // Compile

    Twig.log.debug('Twig.prepare: ', 'Compiling ', rawTokens);
    var tokens = Twig.compile.call(this, rawTokens);
    Twig.log.debug('Twig.prepare: ', 'Compiled ', tokens);
    return tokens;
  };
  /**
   * Join the output token's stack and escape it if needed
   *
   * @param {Array} Output token's stack
   *
   * @return {string|String} Autoescaped output
   */


  Twig.output = function (output) {
    var autoescape = this.options.autoescape;

    if (!autoescape) {
      return output.join('');
    }

    var strategy = typeof autoescape === 'string' ? autoescape : 'html';
    var escapedOutput = output.map(function (str) {
      if (str && str.twigMarkup !== true && str.twigMarkup !== strategy && !(strategy === 'html' && str.twigMarkup === 'html_attr')) {
        str = Twig.filters.escape(str, [strategy]);
      }

      return str;
    });

    if (escapedOutput.length === 0) {
      return '';
    }

    var joinedOutput = escapedOutput.join('');

    if (joinedOutput.length === 0) {
      return '';
    }

    return new Twig.Markup(joinedOutput, true);
  }; // Namespace for template storage and retrieval


  Twig.Templates = {
    /**
     * Registered template loaders - use Twig.Templates.registerLoader to add supported loaders
     * @type {Object}
     */
    loaders: {},

    /**
     * Registered template parsers - use Twig.Templates.registerParser to add supported parsers
     * @type {Object}
     */
    parsers: {},

    /**
     * Cached / loaded templates
     * @type {Object}
     */
    registry: {}
  };
  /**
   * Is this id valid for a twig template?
   *
   * @param {string} id The ID to check.
   *
   * @throws {Twig.Error} If the ID is invalid or used.
   * @return {boolean} True if the ID is valid.
   */

  Twig.validateId = function (id) {
    if (id === 'prototype') {
      throw new Twig.Error(id + ' is not a valid twig identifier');
    } else if (Twig.cache && Object.hasOwnProperty.call(Twig.Templates.registry, id)) {
      throw new Twig.Error('There is already a template with the ID ' + id);
    }

    return true;
  };
  /**
   * Register a template loader
   *
   * @example
   * Twig.extend(function (Twig) {
   *    Twig.Templates.registerLoader('custom_loader', function (location, params, callback, errorCallback) {
   *        // ... load the template ...
   *        params.data = loadedTemplateData;
   *        // create and return the template
   *        var template = new Twig.Template(params);
   *        if (typeof callback === 'function') {
   *            callback(template);
   *        }
   *        return template;
   *    });
   * });
   *
   * @param {String} methodName The method this loader is intended for (ajax, fs)
   * @param {Function} func The function to execute when loading the template
   * @param {Object|undefined} scope Optional scope parameter to bind func to
   *
   * @throws Twig.Error
   *
   * @return {void}
   */


  Twig.Templates.registerLoader = function (methodName, func, scope) {
    if (typeof func !== 'function') {
      throw new Twig.Error('Unable to add loader for ' + methodName + ': Invalid function reference given.');
    }

    if (scope) {
      func = func.bind(scope);
    }

    this.loaders[methodName] = func;
  };
  /**
   * Remove a registered loader
   *
   * @param {String} methodName The method name for the loader you wish to remove
   *
   * @return {void}
   */


  Twig.Templates.unRegisterLoader = function (methodName) {
    if (this.isRegisteredLoader(methodName)) {
      delete this.loaders[methodName];
    }
  };
  /**
   * See if a loader is registered by its method name
   *
   * @param {String} methodName The name of the loader you are looking for
   *
   * @return {boolean}
   */


  Twig.Templates.isRegisteredLoader = function (methodName) {
    return Object.hasOwnProperty.call(this.loaders, methodName);
  };
  /**
   * Register a template parser
   *
   * @example
   * Twig.extend(function (Twig) {
   *    Twig.Templates.registerParser('custom_parser', function (params) {
   *        // this template source can be accessed in params.data
   *        var template = params.data
   *
   *        // ... custom process that modifies the template
   *
   *        // return the parsed template
   *        return template;
   *    });
   * });
   *
   * @param {String} methodName The method this parser is intended for (twig, source)
   * @param {Function} func The function to execute when parsing the template
   * @param {Object|undefined} scope Optional scope parameter to bind func to
   *
   * @throws Twig.Error
   *
   * @return {void}
   */


  Twig.Templates.registerParser = function (methodName, func, scope) {
    if (typeof func !== 'function') {
      throw new Twig.Error('Unable to add parser for ' + methodName + ': Invalid function regerence given.');
    }

    if (scope) {
      func = func.bind(scope);
    }

    this.parsers[methodName] = func;
  };
  /**
   * Remove a registered parser
   *
   * @param {String} methodName The method name for the parser you wish to remove
   *
   * @return {void}
   */


  Twig.Templates.unRegisterParser = function (methodName) {
    if (this.isRegisteredParser(methodName)) {
      delete this.parsers[methodName];
    }
  };
  /**
   * See if a parser is registered by its method name
   *
   * @param {String} methodName The name of the parser you are looking for
   *
   * @return {boolean}
   */


  Twig.Templates.isRegisteredParser = function (methodName) {
    return Object.hasOwnProperty.call(this.parsers, methodName);
  };
  /**
   * Save a template object to the store.
   *
   * @param {Twig.Template} template   The twig.js template to store.
   */


  Twig.Templates.save = function (template) {
    if (template.id === undefined) {
      throw new Twig.Error('Unable to save template with no id');
    }

    Twig.Templates.registry[template.id] = template;
  };
  /**
   * Load a previously saved template from the store.
   *
   * @param {string} id   The ID of the template to load.
   *
   * @return {Twig.Template} A twig.js template stored with the provided ID.
   */


  Twig.Templates.load = function (id) {
    if (!Object.hasOwnProperty.call(Twig.Templates.registry, id)) {
      return null;
    }

    return Twig.Templates.registry[id];
  };
  /**
   * Load a template from a remote location using AJAX and saves in with the given ID.
   *
   * Available parameters:
   *
   *      async:       Should the HTTP request be performed asynchronously.
   *                      Defaults to true.
   *      method:      What method should be used to load the template
   *                      (fs or ajax)
   *      parser:      What method should be used to parse the template
   *                      (twig or source)
   *      precompiled: Has the template already been compiled.
   *
   * @param {string} location  The remote URL to load as a template.
   * @param {Object} params The template parameters.
   * @param {function} callback  A callback triggered when the template finishes loading.
   * @param {function} errorCallback  A callback triggered if an error occurs loading the template.
   *
   *
   */


  Twig.Templates.loadRemote = function (location, params, callback, errorCallback) {
    // Default to the URL so the template is cached.
    var id = typeof params.id === 'undefined' ? location : params.id;
    var cached = Twig.Templates.registry[id]; // Check for existing template

    if (Twig.cache && typeof cached !== 'undefined') {
      // A template is already saved with the given id.
      if (typeof callback === 'function') {
        callback(cached);
      } // TODO: if async, return deferred promise


      return cached;
    } // If the parser name hasn't been set, default it to twig


    params.parser = params.parser || 'twig';
    params.id = id; // Default to async

    if (typeof params.async === 'undefined') {
      params.async = true;
    } // Assume 'fs' if the loader is not defined


    var loader = this.loaders[params.method] || this.loaders.fs;
    return loader.call(this, location, params, callback, errorCallback);
  }; // Determine object type


  function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
  }
  /**
   * A wrapper for template blocks.
   *
   * @param  {Twig.Template} The template that the block was originally defined in.
   * @param  {Object} The compiled block token.
   */


  Twig.Block = function (template, token) {
    this.template = template;
    this.token = token;
  };
  /**
   * Render the block using a specific parse state and context.
   *
   * @param  {Twig.ParseState} parseState
   * @param  {Object} context
   *
   * @return {Promise}
   */


  Twig.Block.prototype.render = function (parseState, context) {
    var originalTemplate = parseState.template;
    var promise;
    parseState.template = this.template;

    if (this.token.expression) {
      promise = Twig.expression.parseAsync.call(parseState, this.token.output, context);
    } else {
      promise = parseState.parseAsync(this.token.output, context);
    }

    return promise.then(function (value) {
      return Twig.expression.parseAsync.call(parseState, {
        type: Twig.expression.type.string,
        value: value
      }, context);
    }).then(function (output) {
      parseState.template = originalTemplate;
      return output;
    });
  };
  /**
   * Holds the state needed to parse a template.
   *
   * @param {Twig.Template} template The template that the tokens being parsed are associated with.
   * @param {Object} blockOverrides Any blocks that should override those defined in the associated template.
   */


  Twig.ParseState = function (template, blockOverrides) {
    this.renderedBlocks = {};
    this.overrideBlocks = blockOverrides === undefined ? {} : blockOverrides;
    this.context = {};
    this.macros = {};
    this.nestingStack = [];
    this.template = template;
  };
  /**
   * Get a block by its name, resolving in the following order:
   *     - override blocks specified when initialized (except when excluded)
   *     - blocks resolved from the associated template
   *     - blocks resolved from the parent template when extending
   *
   * @param {String} name The name of the block to return.
   * @param {Boolean} checkOnlyInheritedBlocks Whether to skip checking the overrides and associated template, will not skip by default.
   *
   * @return {Twig.Block|undefined}
   */


  Twig.ParseState.prototype.getBlock = function (name, checkOnlyInheritedBlocks) {
    var block;

    if (checkOnlyInheritedBlocks !== true) {
      // Blocks specified when initialized
      block = this.overrideBlocks[name];
    }

    if (block === undefined) {
      // Block defined by the associated template
      block = this.template.getBlock(name, checkOnlyInheritedBlocks);
    }

    if (block === undefined && this.template.parentTemplate !== null) {
      // Block defined in the parent template when extending
      block = this.template.parentTemplate.getBlock(name);
    }

    return block;
  };
  /**
   * Get all the available blocks, resolving in the following order:
   *     - override blocks specified when initialized
   *     - blocks resolved from the associated template
   *     - blocks resolved from the parent template when extending (except when excluded)
   *
   * @param {Boolean} includeParentBlocks Whether to get blocks from the parent template when extending, will always do so by default.
   *
   * @return {Object}
   */


  Twig.ParseState.prototype.getBlocks = function (includeParentBlocks) {
    var blocks = {};

    if (includeParentBlocks !== false && this.template.parentTemplate !== null && // Prevent infinite loop
    this.template.parentTemplate !== this.template) {
      // Blocks from the parent template when extending
      blocks = this.template.parentTemplate.getBlocks();
    }

    blocks = _objectSpread(_objectSpread(_objectSpread({}, blocks), this.template.getBlocks()), this.overrideBlocks);
    return blocks;
  };
  /**
   * Get the closest token of a specific type to the current nest level.
   *
   * @param  {String} type  The logic token type
   *
   * @return {Object}
   */


  Twig.ParseState.prototype.getNestingStackToken = function (type) {
    var matchingToken;
    this.nestingStack.forEach(function (token) {
      if (matchingToken === undefined && token.type === type) {
        matchingToken = token;
      }
    });
    return matchingToken;
  };
  /**
   * Parse a set of tokens using the current state.
   *
   * @param {Array} tokens The compiled tokens.
   * @param {Object} context The context to set the state to while parsing.
   * @param {Boolean} allowAsync Whether to parse asynchronously.
   * @param {Object} blocks Blocks that should override any defined while parsing.
   *
   * @return {String} The rendered tokens.
   *
   */


  Twig.ParseState.prototype.parse = function (tokens, context, allowAsync) {
    var state = this;
    var output = []; // Store any error that might be thrown by the promise chain.

    var err = null; // This will be set to isAsync if template renders synchronously

    var isAsync = true;
    var promise = null; // Track logic chains

    var chain = true;

    if (context) {
      state.context = context;
    }
    /*
     * Extracted into it's own function such that the function
     * does not get recreated over and over again in the `forEach`
     * loop below. This method can be compiled and optimized
     * a single time instead of being recreated on each iteration.
     */


    function outputPush(o) {
      output.push(o);
    }

    function parseTokenLogic(logic) {
      if (typeof logic.chain !== 'undefined') {
        chain = logic.chain;
      }

      if (typeof logic.context !== 'undefined') {
        state.context = logic.context;
      }

      if (typeof logic.output !== 'undefined') {
        output.push(logic.output);
      }
    }

    promise = Twig.async.forEach(tokens, function (token) {
      Twig.log.debug('Twig.ParseState.parse: ', 'Parsing token: ', token);

      switch (token.type) {
        case Twig.token.type.raw:
          output.push(Twig.filters.raw(token.value));
          break;

        case Twig.token.type.logic:
          return Twig.logic.parseAsync.call(state, token.token
          /* logicToken */
          , state.context, chain).then(parseTokenLogic);

        case Twig.token.type.comment:
          // Do nothing, comments should be ignored
          break;
        // Fall through whitespace to output

        case Twig.token.type.outputWhitespacePre:
        case Twig.token.type.outputWhitespacePost:
        case Twig.token.type.outputWhitespaceBoth:
        case Twig.token.type.output:
          Twig.log.debug('Twig.ParseState.parse: ', 'Output token: ', token.stack); // Parse the given expression in the given context

          return Twig.expression.parseAsync.call(state, token.stack, state.context).then(outputPush);

        default:
          break;
      }
    }).then(function () {
      output = Twig.output.call(state.template, output);
      isAsync = false;
      return output;
    })["catch"](function (error) {
      if (allowAsync) {
        handleException(state, error);
      }

      err = error;
    }); // If `allowAsync` we will always return a promise since we do not
    // know in advance if we are going to run asynchronously or not.

    if (allowAsync) {
      return promise;
    } // Handle errors here if we fail synchronously.


    if (err !== null) {
      return handleException(state, err);
    } // If `allowAsync` is not true we should not allow the user
    // to use asynchronous functions or filters.


    if (isAsync) {
      throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');
    }

    return output;
  };
  /**
   * Create a new twig.js template.
   *
   * Parameters: {
   *      data:   The template, either pre-compiled tokens or a string template
   *      id:     The name of this template
   * }
   *
   * @param {Object} params The template parameters.
   */


  Twig.Template = function (params) {
    var data = params.data,
        id = params.id,
        base = params.base,
        path = params.path,
        url = params.url,
        name = params.name,
        method = params.method,
        options = params.options; // # What is stored in a Twig.Template
    //
    // The Twig Template hold several chucks of data.
    //
    //     {
    //          id:     The token ID (if any)
    //          tokens: The list of tokens that makes up this template.
    //          base:   The base template (if any)
    //            options:  {
    //                Compiler/parser options
    //
    //                strict_variables: true/false
    //                    Should missing variable/keys emit an error message. If false, they default to null.
    //            }
    //     }
    //

    this.base = base;
    this.blocks = {
      defined: {},
      imported: {}
    };
    this.id = id;
    this.method = method;
    this.name = name;
    this.options = options;
    this.parentTemplate = null;
    this.path = path;
    this.url = url;

    if (is('String', data)) {
      this.tokens = Twig.prepare.call(this, data);
    } else {
      this.tokens = data;
    }

    if (id !== undefined) {
      Twig.Templates.save(this);
    }
  };
  /**
   * Get a block by its name, resolving in the following order:
   *     - blocks defined in the template itself
   *     - blocks imported from another template
   *
   * @param {String} name The name of the block to return.
   * @param {Boolean} checkOnlyInheritedBlocks Whether to skip checking the blocks defined in the template itself, will not skip by default.
   *
   * @return {Twig.Block|undefined}
   */


  Twig.Template.prototype.getBlock = function (name, checkOnlyInheritedBlocks) {
    var checkImports = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var block;

    if (checkOnlyInheritedBlocks !== true) {
      block = this.blocks.defined[name];
    }

    if (checkImports && block === undefined) {
      block = this.blocks.imported[name];
    }

    if (block === undefined && this.parentTemplate !== null) {
      /**
       * Block defined in the parent template when extending.
       * This recursion is useful to inherit from ascendants.
       * But take care of not considering ascendants' {% use %}
       */
      block = this.parentTemplate.getBlock(name, checkOnlyInheritedBlocks, checkImports = false);
    }

    return block;
  };
  /**
   * Get all the available blocks, resolving in the following order:
   *     - blocks defined in the template itself
   *     - blocks imported from other templates
   *
   * @return {Object}
   */


  Twig.Template.prototype.getBlocks = function () {
    var blocks = {};
    blocks = _objectSpread(_objectSpread(_objectSpread({}, blocks), this.blocks.imported), this.blocks.defined);
    return blocks;
  };

  Twig.Template.prototype.render = function (context, params, allowAsync) {
    var template = this;
    params = params || {};
    return Twig.async.potentiallyAsync(template, allowAsync, function () {
      var state = new Twig.ParseState(template, params.blocks);
      return state.parseAsync(template.tokens, context).then(function (output) {
        var parentTemplate;
        var url;

        if (template.parentTemplate !== null) {
          // This template extends another template
          if (template.options.allowInlineIncludes) {
            // The template is provided inline
            parentTemplate = Twig.Templates.load(template.parentTemplate);

            if (parentTemplate) {
              parentTemplate.options = template.options;
            }
          } // Check for the template file via include


          if (!parentTemplate) {
            url = Twig.path.parsePath(template, template.parentTemplate);
            parentTemplate = Twig.Templates.loadRemote(url, {
              method: template.getLoaderMethod(),
              base: template.base,
              async: false,
              id: url,
              options: template.options
            });
          }

          template.parentTemplate = parentTemplate;
          return template.parentTemplate.renderAsync(state.context, {
            blocks: state.getBlocks(false),
            isInclude: true
          });
        }

        if (params.isInclude === true) {
          return output;
        }

        return output.valueOf();
      });
    });
  };

  Twig.Template.prototype.importFile = function (file) {
    var url = null;
    var subTemplate;

    if (!this.url && this.options.allowInlineIncludes) {
      file = this.path ? Twig.path.parsePath(this, file) : file;
      subTemplate = Twig.Templates.load(file);

      if (!subTemplate) {
        subTemplate = Twig.Templates.loadRemote(url, {
          id: file,
          method: this.getLoaderMethod(),
          async: false,
          path: file,
          options: this.options
        });

        if (!subTemplate) {
          throw new Twig.Error('Unable to find the template ' + file);
        }
      }

      subTemplate.options = this.options;
      return subTemplate;
    }

    url = Twig.path.parsePath(this, file); // Load blocks from an external file

    subTemplate = Twig.Templates.loadRemote(url, {
      method: this.getLoaderMethod(),
      base: this.base,
      async: false,
      options: this.options,
      id: url
    });
    return subTemplate;
  };

  Twig.Template.prototype.getLoaderMethod = function () {
    if (this.path) {
      return 'fs';
    }

    if (this.url) {
      return 'ajax';
    }

    return this.method || 'fs';
  };

  Twig.Template.prototype.compile = function (options) {
    // Compile the template into raw JS
    return Twig.compiler.compile(this, options);
  };
  /**
   * Create safe output
   *
   * @param {string} Content safe to output
   *
   * @return {String} Content wrapped into a String
   */


  Twig.Markup = function (content, strategy) {
    if (typeof content !== 'string') {
      return content;
    }
    /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */


    var output = new String(content);
    /* eslint-enable */

    output.twigMarkup = typeof strategy === 'undefined' ? true : strategy;
    return output;
  };

  return Twig;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.compiler.js
//
// This file handles compiling templates into JS
module.exports = function (Twig) {
  /**
   * Namespace for compilation.
   */
  Twig.compiler = {
    module: {}
  }; // Compile a Twig Template to output.

  Twig.compiler.compile = function (template, options) {
    // Get tokens
    var tokens = JSON.stringify(template.tokens);
    var id = template.id;
    var output = null;

    if (options.module) {
      if (Twig.compiler.module[options.module] === undefined) {
        throw new Twig.Error('Unable to find module type ' + options.module);
      }

      output = Twig.compiler.module[options.module](id, tokens, options.twig);
    } else {
      output = Twig.compiler.wrap(id, tokens);
    }

    return output;
  };

  Twig.compiler.module = {
    amd: function amd(id, tokens, pathToTwig) {
      return 'define(["' + pathToTwig + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + Twig.compiler.wrap(id, tokens) + '\n\treturn templates;\n});';
    },
    node: function node(id, tokens) {
      return 'var twig = require("twig").twig;\nexports.template = ' + Twig.compiler.wrap(id, tokens);
    },
    cjs2: function cjs2(id, tokens, pathToTwig) {
      return 'module.declare([{ twig: "' + pathToTwig + '" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = ' + Twig.compiler.wrap(id, tokens) + '\n});';
    }
  };

  Twig.compiler.wrap = function (id, tokens) {
    return 'twig({id:"' + id.replace('"', '\\"') + '", data:' + tokens + ', precompiled: true});\n';
  };

  return Twig;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(12));

// ## twig.expression.js
//
// This file handles tokenizing, compiling and parsing expressions.
module.exports = function (Twig) {
  'use strict';

  function parseParams(state, params, context) {
    if (params) {
      return Twig.expression.parseAsync.call(state, params, context);
    }

    return Twig.Promise.resolve(false);
  }
  /**
   * Namespace for expression handling.
   */


  Twig.expression = {};

  __webpack_require__(17)(Twig);
  /**
   * Reserved word that can't be used as variable names.
   */


  Twig.expression.reservedWords = ['true', 'false', 'null', 'TRUE', 'FALSE', 'NULL', '_context', 'and', 'b-and', 'or', 'b-or', 'b-xor', 'in', 'not in', 'if', 'matches', 'starts', 'ends', 'with'];
  /**
   * The type of tokens used in expressions.
   */

  Twig.expression.type = {
    comma: 'Twig.expression.type.comma',
    operator: {
      unary: 'Twig.expression.type.operator.unary',
      binary: 'Twig.expression.type.operator.binary'
    },
    string: 'Twig.expression.type.string',
    bool: 'Twig.expression.type.bool',
    slice: 'Twig.expression.type.slice',
    array: {
      start: 'Twig.expression.type.array.start',
      end: 'Twig.expression.type.array.end'
    },
    object: {
      start: 'Twig.expression.type.object.start',
      end: 'Twig.expression.type.object.end'
    },
    parameter: {
      start: 'Twig.expression.type.parameter.start',
      end: 'Twig.expression.type.parameter.end'
    },
    subexpression: {
      start: 'Twig.expression.type.subexpression.start',
      end: 'Twig.expression.type.subexpression.end'
    },
    key: {
      period: 'Twig.expression.type.key.period',
      brackets: 'Twig.expression.type.key.brackets'
    },
    filter: 'Twig.expression.type.filter',
    _function: 'Twig.expression.type._function',
    variable: 'Twig.expression.type.variable',
    number: 'Twig.expression.type.number',
    _null: 'Twig.expression.type.null',
    context: 'Twig.expression.type.context',
    test: 'Twig.expression.type.test'
  };
  Twig.expression.set = {
    // What can follow an expression (in general)
    operations: [Twig.expression.type.filter, Twig.expression.type.operator.unary, Twig.expression.type.operator.binary, Twig.expression.type.array.end, Twig.expression.type.object.end, Twig.expression.type.parameter.end, Twig.expression.type.subexpression.end, Twig.expression.type.comma, Twig.expression.type.test],
    expressions: [Twig.expression.type._function, Twig.expression.type.bool, Twig.expression.type.string, Twig.expression.type.variable, Twig.expression.type.number, Twig.expression.type._null, Twig.expression.type.context, Twig.expression.type.parameter.start, Twig.expression.type.array.start, Twig.expression.type.object.start, Twig.expression.type.subexpression.start, Twig.expression.type.operator.unary]
  }; // Most expressions allow a '.' or '[' after them, so we provide a convenience set

  Twig.expression.set.operationsExtended = Twig.expression.set.operations.concat([Twig.expression.type.key.period, Twig.expression.type.key.brackets, Twig.expression.type.slice]); // Some commonly used compile and parse functions.

  Twig.expression.fn = {
    compile: {
      push: function push(token, stack, output) {
        output.push(token);
      },
      pushBoth: function pushBoth(token, stack, output) {
        output.push(token);
        stack.push(token);
      }
    },
    parse: {
      push: function push(token, stack) {
        stack.push(token);
      },
      pushValue: function pushValue(token, stack) {
        stack.push(token.value);
      }
    }
  }; // The regular expressions and compile/parse logic used to match tokens in expressions.
  //
  // Properties:
  //
  //      type:  The type of expression this matches
  //
  //      regex: One or more regular expressions that matche the format of the token.
  //
  //      next:  Valid tokens that can occur next in the expression.
  //
  // Functions:
  //
  //      compile: A function that compiles the raw regular expression match into a token.
  //
  //      parse:   A function that parses the compiled token into output.
  //

  Twig.expression.definitions = [{
    type: Twig.expression.type.test,
    regex: /^is\s+(not)?\s*([a-zA-Z_]\w*(\s?as)?)/,
    next: Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),
    compile: function compile(token, stack, output) {
      token.filter = token.match[2];
      token.modifier = token.match[1];
      delete token.match;
      delete token.value;
      output.push(token);
    },
    parse: function parse(token, stack, context) {
      var value = stack.pop();
      var state = this;
      return parseParams(state, token.params, context).then(function (params) {
        var result = Twig.test(token.filter, value, params);

        if (token.modifier === 'not') {
          stack.push(!result);
        } else {
          stack.push(result);
        }
      });
    }
  }, {
    type: Twig.expression.type.comma,
    // Match a comma
    regex: /^,/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end, Twig.expression.type.object.end]),
    compile: function compile(token, stack, output) {
      var i = stack.length - 1;
      var stackToken;
      delete token.match;
      delete token.value; // Pop tokens off the stack until the start of the object

      for (; i >= 0; i--) {
        stackToken = stack.pop();

        if (stackToken.type === Twig.expression.type.object.start || stackToken.type === Twig.expression.type.parameter.start || stackToken.type === Twig.expression.type.array.start) {
          stack.push(stackToken);
          break;
        }

        output.push(stackToken);
      }

      output.push(token);
    }
  }, {
    /**
     * Match a number (integer or decimal)
     */
    type: Twig.expression.type.number,
    // Match a number
    regex: /^-?\d+(\.\d+)?/,
    next: Twig.expression.set.operations,
    compile: function compile(token, stack, output) {
      token.value = Number(token.value);
      output.push(token);
    },
    parse: Twig.expression.fn.parse.pushValue
  }, {
    type: Twig.expression.type.operator.binary,
    // Match any of ??, ?:, +, *, /, -, %, ~, <, <=, >, >=, !=, ==, **, ?, :, and, b-and, or, b-or, b-xor, in, not in
    // and, or, in, not in, matches, starts with, ends with can be followed by a space or parenthesis
    regex: /(^\?\?|^\?:|^(b-and)|^(b-or)|^(b-xor)|^[+\-~%?]|^[:](?!\d\])|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^(and)[(|\s+]|^(or)[(|\s+]|^(in)[(|\s+]|^(not in)[(|\s+]|^(matches)|^(starts with)|^(ends with)|^\.\.)/,
    next: Twig.expression.set.expressions,
    transform: function transform(match, tokens) {
      switch (match[0]) {
        case 'and(':
        case 'or(':
        case 'in(':
        case 'not in(':
          // Strip off the ( if it exists
          tokens[tokens.length - 1].value = match[2];
          return match[0];

        default:
          return '';
      }
    },
    compile: function compile(token, stack, output) {
      delete token.match;
      token.value = token.value.trim();
      var value = token.value;
      var operator = Twig.expression.operator.lookup(value, token);
      Twig.log.trace('Twig.expression.compile: ', 'Operator: ', operator, ' from ', value);

      while (stack.length > 0 && (stack[stack.length - 1].type === Twig.expression.type.operator.unary || stack[stack.length - 1].type === Twig.expression.type.operator.binary) && (operator.associativity === Twig.expression.operator.leftToRight && operator.precidence >= stack[stack.length - 1].precidence || operator.associativity === Twig.expression.operator.rightToLeft && operator.precidence > stack[stack.length - 1].precidence)) {
        var temp = stack.pop();
        output.push(temp);
      }

      if (value === ':') {
        // Check if this is a ternary or object key being set
        if (stack[stack.length - 1] && stack[stack.length - 1].value === '?') {// Continue as normal for a ternary
        } else {
          // This is not a ternary so we push the token to the output where it can be handled
          //   when the assocated object is closed.
          var keyToken = output.pop();

          if (keyToken.type === Twig.expression.type.string || keyToken.type === Twig.expression.type.variable) {
            token.key = keyToken.value;
          } else if (keyToken.type === Twig.expression.type.number) {
            // Convert integer keys into string keys
            token.key = keyToken.value.toString();
          } else if (keyToken.expression && (keyToken.type === Twig.expression.type.parameter.end || keyToken.type === Twig.expression.type.subexpression.end)) {
            token.params = keyToken.params;
          } else {
            throw new Twig.Error('Unexpected value before \':\' of ' + keyToken.type + ' = ' + keyToken.value);
          }

          output.push(token);
        }
      } else {
        stack.push(operator);
      }
    },
    parse: function parse(token, stack, context) {
      var state = this;

      if (token.key) {
        // Handle ternary ':' operator
        stack.push(token);
      } else if (token.params) {
        // Handle "{(expression):value}"
        return Twig.expression.parseAsync.call(state, token.params, context).then(function (key) {
          token.key = key;
          stack.push(token); // If we're in a loop, we might need token.params later, especially in this form of "(expression):value"

          if (!context.loop) {
            delete token.params;
          }
        });
      } else {
        Twig.expression.operator.parse(token.value, stack);
      }
    }
  }, {
    type: Twig.expression.type.operator.unary,
    // Match any of not
    regex: /(^not\s+)/,
    next: Twig.expression.set.expressions,
    compile: function compile(token, stack, output) {
      delete token.match;
      token.value = token.value.trim();
      var value = token.value;
      var operator = Twig.expression.operator.lookup(value, token);
      Twig.log.trace('Twig.expression.compile: ', 'Operator: ', operator, ' from ', value);

      while (stack.length > 0 && (stack[stack.length - 1].type === Twig.expression.type.operator.unary || stack[stack.length - 1].type === Twig.expression.type.operator.binary) && (operator.associativity === Twig.expression.operator.leftToRight && operator.precidence >= stack[stack.length - 1].precidence || operator.associativity === Twig.expression.operator.rightToLeft && operator.precidence > stack[stack.length - 1].precidence)) {
        var temp = stack.pop();
        output.push(temp);
      }

      stack.push(operator);
    },
    parse: function parse(token, stack) {
      Twig.expression.operator.parse(token.value, stack);
    }
  }, {
    /**
     * Match a string. This is anything between a pair of single or double quotes.
     */
    type: Twig.expression.type.string,
    // See: http://blog.stevenlevithan.com/archives/match-quoted-string
    regex: /^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var value = token.value;
      delete token.match; // Remove the quotes from the string

      if (value.slice(0, 1) === '"') {
        value = value.replace('\\"', '"');
      } else {
        value = value.replace('\\\'', '\'');
      }

      token.value = value.slice(1, -1).replace(/\\n/g, '\n').replace(/\\r/g, '\r');
      Twig.log.trace('Twig.expression.compile: ', 'String value: ', token.value);
      output.push(token);
    },
    parse: Twig.expression.fn.parse.pushValue
  }, {
    /**
     * Match a subexpression set start.
     */
    type: Twig.expression.type.subexpression.start,
    regex: /^\(/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.subexpression.end]),
    compile: function compile(token, stack, output) {
      token.value = '(';
      output.push(token);
      stack.push(token);
    },
    parse: Twig.expression.fn.parse.push
  }, {
    /**
     * Match a subexpression set end.
     */
    type: Twig.expression.type.subexpression.end,
    regex: /^\)/,
    next: Twig.expression.set.operationsExtended,
    validate: function validate(match, tokens) {
      // Iterate back through previous tokens to ensure we follow a subexpression start
      var i = tokens.length - 1;
      var foundSubexpressionStart = false;
      var nextSubexpressionStartInvalid = false;
      var unclosedParameterCount = 0;

      while (!foundSubexpressionStart && i >= 0) {
        var token = tokens[i];
        foundSubexpressionStart = token.type === Twig.expression.type.subexpression.start; // If we have previously found a subexpression end, then this subexpression start is the start of
        // that subexpression, not the subexpression we are searching for

        if (foundSubexpressionStart && nextSubexpressionStartInvalid) {
          nextSubexpressionStartInvalid = false;
          foundSubexpressionStart = false;
        } // Count parameter tokens to ensure we dont return truthy for a parameter opener


        if (token.type === Twig.expression.type.parameter.start) {
          unclosedParameterCount++;
        } else if (token.type === Twig.expression.type.parameter.end) {
          unclosedParameterCount--;
        } else if (token.type === Twig.expression.type.subexpression.end) {
          nextSubexpressionStartInvalid = true;
        }

        i--;
      } // If we found unclosed parameters, return false
      // If we didnt find subexpression start, return false
      // Otherwise return true


      return foundSubexpressionStart && unclosedParameterCount === 0;
    },
    compile: function compile(token, stack, output) {
      // This is basically a copy of parameter end compilation
      var stackToken;
      var endToken = token;
      stackToken = stack.pop();

      while (stack.length > 0 && stackToken.type !== Twig.expression.type.subexpression.start) {
        output.push(stackToken);
        stackToken = stack.pop();
      } // Move contents of parens into preceding filter


      var paramStack = [];

      while (token.type !== Twig.expression.type.subexpression.start) {
        // Add token to arguments stack
        paramStack.unshift(token);
        token = output.pop();
      }

      paramStack.unshift(token); // If the token at the top of the *stack* is a function token, pop it onto the output queue.
      // Get the token preceding the parameters

      stackToken = stack[stack.length - 1];

      if (stackToken === undefined || stackToken.type !== Twig.expression.type._function && stackToken.type !== Twig.expression.type.filter && stackToken.type !== Twig.expression.type.test && stackToken.type !== Twig.expression.type.key.brackets) {
        endToken.expression = true; // Remove start and end token from stack

        paramStack.pop();
        paramStack.shift();
        endToken.params = paramStack;
        output.push(endToken);
      } else {
        // This should never be hit
        endToken.expression = false;
        stackToken.params = paramStack;
      }
    },
    parse: function parse(token, stack, context) {
      var state = this;

      if (token.expression) {
        return Twig.expression.parseAsync.call(state, token.params, context).then(function (value) {
          stack.push(value);
        });
      }

      throw new Twig.Error('Unexpected subexpression end when token is not marked as an expression');
    }
  }, {
    /**
     * Match a parameter set start.
     */
    type: Twig.expression.type.parameter.start,
    regex: /^\(/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),
    validate: function validate(match, tokens) {
      var lastToken = tokens[tokens.length - 1]; // We can't use the regex to test if we follow a space because expression is trimmed

      return lastToken && !Twig.expression.reservedWords.includes(lastToken.value.trim());
    },
    compile: Twig.expression.fn.compile.pushBoth,
    parse: Twig.expression.fn.parse.push
  }, {
    /**
     * Match a parameter set end.
     */
    type: Twig.expression.type.parameter.end,
    regex: /^\)/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var stackToken;
      var endToken = token;
      stackToken = stack.pop();

      while (stack.length > 0 && stackToken.type !== Twig.expression.type.parameter.start) {
        output.push(stackToken);
        stackToken = stack.pop();
      } // Move contents of parens into preceding filter


      var paramStack = [];

      while (token.type !== Twig.expression.type.parameter.start) {
        // Add token to arguments stack
        paramStack.unshift(token);
        token = output.pop();
      }

      paramStack.unshift(token); // Get the token preceding the parameters

      token = output[output.length - 1];

      if (token === undefined || token.type !== Twig.expression.type._function && token.type !== Twig.expression.type.filter && token.type !== Twig.expression.type.test && token.type !== Twig.expression.type.key.brackets) {
        endToken.expression = true; // Remove start and end token from stack

        paramStack.pop();
        paramStack.shift();
        endToken.params = paramStack;
        output.push(endToken);
      } else {
        endToken.expression = false;
        token.params = paramStack;
      }
    },
    parse: function parse(token, stack, context) {
      var newArray = [];
      var arrayEnded = false;
      var value = null;
      var state = this;

      if (token.expression) {
        return Twig.expression.parseAsync.call(state, token.params, context).then(function (value) {
          stack.push(value);
        });
      }

      while (stack.length > 0) {
        value = stack.pop(); // Push values into the array until the start of the array

        if (value && value.type && value.type === Twig.expression.type.parameter.start) {
          arrayEnded = true;
          break;
        }

        newArray.unshift(value);
      }

      if (!arrayEnded) {
        throw new Twig.Error('Expected end of parameter set.');
      }

      stack.push(newArray);
    }
  }, {
    type: Twig.expression.type.slice,
    regex: /^\[(\d*:\d*)\]/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var sliceRange = token.match[1].split(':'); // SliceStart can be undefined when we pass parameters to the slice filter later

      var sliceStart = sliceRange[0] ? parseInt(sliceRange[0], 10) : undefined;
      var sliceEnd = sliceRange[1] ? parseInt(sliceRange[1], 10) : undefined;
      token.value = 'slice';
      token.params = [sliceStart, sliceEnd]; // SliceEnd can't be undefined as the slice filter doesn't check for this, but it does check the length
      // of the params array, so just shorten it.

      if (!sliceEnd) {
        token.params = [sliceStart];
      }

      output.push(token);
    },
    parse: function parse(token, stack) {
      var input = stack.pop();
      var params = token.params;
      var state = this;
      stack.push(Twig.filter.call(state, token.value, input, params));
    }
  }, {
    /**
     * Match an array start.
     */
    type: Twig.expression.type.array.start,
    regex: /^\[/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),
    compile: Twig.expression.fn.compile.pushBoth,
    parse: Twig.expression.fn.parse.push
  }, {
    /**
     * Match an array end.
     */
    type: Twig.expression.type.array.end,
    regex: /^\]/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var i = stack.length - 1;
      var stackToken; // Pop tokens off the stack until the start of the object

      for (; i >= 0; i--) {
        stackToken = stack.pop();

        if (stackToken.type === Twig.expression.type.array.start) {
          break;
        }

        output.push(stackToken);
      }

      output.push(token);
    },
    parse: function parse(token, stack) {
      var newArray = [];
      var arrayEnded = false;
      var value = null;

      while (stack.length > 0) {
        value = stack.pop(); // Push values into the array until the start of the array

        if (value && value.type && value.type === Twig.expression.type.array.start) {
          arrayEnded = true;
          break;
        }

        newArray.unshift(value);
      }

      if (!arrayEnded) {
        throw new Twig.Error('Expected end of array.');
      }

      stack.push(newArray);
    }
  }, // Token that represents the start of a hash map '}'
  //
  // Hash maps take the form:
  //    { "key": 'value', "another_key": item }
  //
  // Keys must be quoted (either single or double) and values can be any expression.
  {
    type: Twig.expression.type.object.start,
    regex: /^\{/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),
    compile: Twig.expression.fn.compile.pushBoth,
    parse: Twig.expression.fn.parse.push
  }, // Token that represents the end of a Hash Map '}'
  //
  // This is where the logic for building the internal
  // representation of a hash map is defined.
  {
    type: Twig.expression.type.object.end,
    regex: /^\}/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var i = stack.length - 1;
      var stackToken; // Pop tokens off the stack until the start of the object

      for (; i >= 0; i--) {
        stackToken = stack.pop();

        if (stackToken && stackToken.type === Twig.expression.type.object.start) {
          break;
        }

        output.push(stackToken);
      }

      output.push(token);
    },
    parse: function parse(endToken, stack) {
      var newObject = {};
      var objectEnded = false;
      var token = null;
      var hasValue = false;
      var value = null;

      while (stack.length > 0) {
        token = stack.pop(); // Push values into the array until the start of the object

        if (token && token.type && token.type === Twig.expression.type.object.start) {
          objectEnded = true;
          break;
        }

        if (token && token.type && (token.type === Twig.expression.type.operator.binary || token.type === Twig.expression.type.operator.unary) && token.key) {
          if (!hasValue) {
            throw new Twig.Error('Missing value for key \'' + token.key + '\' in object definition.');
          }

          newObject[token.key] = value; // Preserve the order that elements are added to the map
          // This is necessary since JavaScript objects don't
          // guarantee the order of keys

          if (newObject._keys === undefined) {
            newObject._keys = [];
          }

          newObject._keys.unshift(token.key); // Reset value check


          value = null;
          hasValue = false;
        } else {
          hasValue = true;
          value = token;
        }
      }

      if (!objectEnded) {
        throw new Twig.Error('Unexpected end of object.');
      }

      stack.push(newObject);
    }
  }, // Token representing a filter
  //
  // Filters can follow any expression and take the form:
  //    expression|filter(optional, args)
  //
  // Filter parsing is done in the Twig.filters namespace.
  {
    type: Twig.expression.type.filter,
    // Match a | then a letter or _, then any number of letters, numbers, _ or -
    regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_-]*)/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: function compile(token, stack, output) {
      token.value = token.match[1];
      output.push(token);
    },
    parse: function parse(token, stack, context) {
      var input = stack.pop();
      var state = this;
      return parseParams(state, token.params, context).then(function (params) {
        return Twig.filter.call(state, token.value, input, params);
      }).then(function (value) {
        stack.push(value);
      });
    }
  }, {
    type: Twig.expression.type._function,
    // Match any letter or _, then any number of letters, numbers, _ or - followed by (
    regex: /^([a-zA-Z_]\w*)\s*\(/,
    next: Twig.expression.type.parameter.start,
    validate: function validate(match) {
      // Make sure this function is not a reserved word
      return match[1] && !Twig.expression.reservedWords.includes(match[1]);
    },
    transform: function transform() {
      return '(';
    },
    compile: function compile(token, stack, output) {
      var fn = token.match[1];
      token.fn = fn; // Cleanup token

      delete token.match;
      delete token.value;
      output.push(token);
    },
    parse: function parse(token, stack, context) {
      var state = this;
      var fn = token.fn;
      var value;
      return parseParams(state, token.params, context).then(function (params) {
        if (Twig.functions[fn]) {
          // Get the function from the built-in functions
          value = Twig.functions[fn].apply(state, params);
        } else if (typeof context[fn] === 'function') {
          // Get the function from the user/context defined functions
          value = context[fn].apply(context, (0, _toConsumableArray2["default"])(params));
        } else {
          throw new Twig.Error(fn + ' function does not exist and is not defined in the context');
        }

        return value;
      }).then(function (result) {
        stack.push(result);
      });
    }
  }, // Token representing a variable.
  //
  // Variables can contain letters, numbers, underscores and
  // dashes, but must start with a letter or underscore.
  //
  // Variables are retrieved from the render context and take
  // the value of 'undefined' if the given variable doesn't
  // exist in the context.
  {
    type: Twig.expression.type.variable,
    // Match any letter or _, then any number of letters, numbers, _ or -
    regex: /^[a-zA-Z_]\w*/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: Twig.expression.fn.compile.push,
    validate: function validate(match) {
      return !Twig.expression.reservedWords.includes(match[0]);
    },
    parse: function parse(token, stack, context) {
      var state = this; // Get the variable from the context

      return Twig.expression.resolveAsync.call(state, context[token.value], context).then(function (value) {
        if (state.template.options.strictVariables && value === undefined) {
          throw new Twig.Error('Variable "' + token.value + '" does not exist.');
        }

        stack.push(value);
      });
    }
  }, {
    type: Twig.expression.type.key.period,
    regex: /^\.(\w+)/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: function compile(token, stack, output) {
      token.key = token.match[1];
      delete token.match;
      delete token.value;
      output.push(token);
    },
    parse: function parse(token, stack, context, nextToken) {
      var state = this;
      var key = token.key;
      var object = stack.pop();
      var value;

      if (object && !Object.prototype.hasOwnProperty.call(object, key) && state.template.options.strictVariables) {
        var keys = Object.keys(object);

        if (keys.length > 0) {
          throw new Twig.Error('Key "' + key + '" for object with keys "' + Object.keys(object).join(', ') + '" does not exist.');
        } else {
          throw new Twig.Error('Key "' + key + '" does not exist as the object is empty.');
        }
      }

      return parseParams(state, token.params, context).then(function (params) {
        if (object === null || object === undefined) {
          value = undefined;
        } else {
          var capitalize = function capitalize(value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1);
          }; // Get the variable from the context


          if ((0, _typeof2["default"])(object) === 'object' && key in object) {
            value = object[key];
          } else if (object['get' + capitalize(key)]) {
            value = object['get' + capitalize(key)];
          } else if (object['is' + capitalize(key)]) {
            value = object['is' + capitalize(key)];
          } else {
            value = undefined;
          }
        } // When resolving an expression we need to pass nextToken in case the expression is a function


        return Twig.expression.resolveAsync.call(state, value, context, params, nextToken, object);
      }).then(function (result) {
        stack.push(result);
      });
    }
  }, {
    type: Twig.expression.type.key.brackets,
    regex: /^\[([^\]:]*)\]/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: function compile(token, stack, output) {
      var match = token.match[1];
      delete token.value;
      delete token.match; // The expression stack for the key

      token.stack = Twig.expression.compile({
        value: match
      }).stack;
      output.push(token);
    },
    parse: function parse(token, stack, context, nextToken) {
      // Evaluate key
      var state = this;
      var params = null;
      var object;
      var value;
      return parseParams(state, token.params, context).then(function (parameters) {
        params = parameters;
        return Twig.expression.parseAsync.call(state, token.stack, context);
      }).then(function (key) {
        object = stack.pop();

        if (object && !Object.prototype.hasOwnProperty.call(object, key) && state.template.options.strictVariables) {
          var keys = Object.keys(object);

          if (keys.length > 0) {
            throw new Twig.Error('Key "' + key + '" for array with keys "' + keys.join(', ') + '" does not exist.');
          } else {
            throw new Twig.Error('Key "' + key + '" does not exist as the array is empty.');
          }
        } else if (object === null || object === undefined) {
          return null;
        } // Get the variable from the context


        if ((0, _typeof2["default"])(object) === 'object' && key in object) {
          value = object[key];
        } else {
          value = null;
        } // When resolving an expression we need to pass nextToken in case the expression is a function


        return Twig.expression.resolveAsync.call(state, value, object, params, nextToken);
      }).then(function (result) {
        stack.push(result);
      });
    }
  }, {
    /**
     * Match a null value.
     */
    type: Twig.expression.type._null,
    // Match a number
    regex: /^(null|NULL|none|NONE)/,
    next: Twig.expression.set.operations,
    compile: function compile(token, stack, output) {
      delete token.match;
      token.value = null;
      output.push(token);
    },
    parse: Twig.expression.fn.parse.pushValue
  }, {
    /**
     * Match the context
     */
    type: Twig.expression.type.context,
    regex: /^_context/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: Twig.expression.fn.compile.push,
    parse: function parse(token, stack, context) {
      stack.push(context);
    }
  }, {
    /**
     * Match a boolean
     */
    type: Twig.expression.type.bool,
    regex: /^(true|TRUE|false|FALSE)/,
    next: Twig.expression.set.operations,
    compile: function compile(token, stack, output) {
      token.value = token.match[0].toLowerCase() === 'true';
      delete token.match;
      output.push(token);
    },
    parse: Twig.expression.fn.parse.pushValue
  }];
  /**
   * Resolve a context value.
   *
   * If the value is a function, it is executed with a context parameter.
   *
   * @param {string} key The context object key.
   * @param {Object} context The render context.
   */

  Twig.expression.resolveAsync = function (value, context, params, nextToken, object) {
    var state = this;

    if (typeof value !== 'function') {
      return Twig.Promise.resolve(value);
    }

    var promise = Twig.Promise.resolve(params);
    /*
    If value is a function, it will have been impossible during the compile stage to determine that a following
    set of parentheses were parameters for this function.
     Those parentheses will have therefore been marked as an expression, with their own parameters, which really
    belong to this function.
     Those parameters will also need parsing in case they are actually an expression to pass as parameters.
        */

    if (nextToken && nextToken.type === Twig.expression.type.parameter.end) {
      // When parsing these parameters, we need to get them all back, not just the last item on the stack.
      var tokensAreParameters = true;
      promise = promise.then(function () {
        return nextToken.params && Twig.expression.parseAsync.call(state, nextToken.params, context, tokensAreParameters);
      }).then(function (p) {
        // Clean up the parentheses tokens on the next loop
        nextToken.cleanup = true;
        return p;
      });
    }

    return promise.then(function (params) {
      return value.apply(object || context, params || []);
    });
  };

  Twig.expression.resolve = function (value, context, params, nextToken, object) {
    return Twig.async.potentiallyAsync(this, false, function () {
      return Twig.expression.resolveAsync.call(this, value, context, params, nextToken, object);
    });
  };
  /**
   * Registry for logic handlers.
   */


  Twig.expression.handler = {};
  /**
   * Define a new expression type, available at Twig.logic.type.{type}
   *
   * @param {string} type The name of the new type.
   */

  Twig.expression.extendType = function (type) {
    Twig.expression.type[type] = 'Twig.expression.type.' + type;
  };
  /**
   * Extend the expression parsing functionality with a new definition.
   *
   * Token definitions follow this format:
   *  {
   *      type:     One of Twig.expression.type.[type], either pre-defined or added using
   *                    Twig.expression.extendType
   *
   *      next:     Array of types from Twig.expression.type that can follow this token,
   *
   *      regex:    A regex or array of regex's that should match the token.
   *
   *      compile: function(token, stack, output) called when this token is being compiled.
   *                   Should return an object with stack and output set.
   *
   *      parse:   function(token, stack, context) called when this token is being parsed.
   *                   Should return an object with stack and context set.
   *  }
   *
   * @param {Object} definition A token definition.
   */


  Twig.expression.extend = function (definition) {
    if (!definition.type) {
      throw new Twig.Error('Unable to extend logic definition. No type provided for ' + definition);
    }

    Twig.expression.handler[definition.type] = definition;
  }; // Extend with built-in expressions


  while (Twig.expression.definitions.length > 0) {
    Twig.expression.extend(Twig.expression.definitions.shift());
  }
  /**
   * Break an expression into tokens defined in Twig.expression.definitions.
   *
   * @param {string} expression The string to tokenize.
   *
   * @return {Array} An array of tokens.
   */


  Twig.expression.tokenize = function (expression) {
    var tokens = []; // Keep an offset of the location in the expression for error messages.

    var expOffset = 0; // The valid next tokens of the previous token

    var next = null; // Match information

    var type;
    var regex;
    var regexI; // The possible next token for the match

    var tokenNext; // Has a match been found from the definitions

    var matchFound;
    var invalidMatches = [];

    var matchFunction = function matchFunction() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Don't pass arguments to `Array.slice`, that is a performance killer
      var matchI = arguments.length - 2;
      var match = new Array(matchI);

      while (matchI-- > 0) {
        match[matchI] = args[matchI];
      }

      Twig.log.trace('Twig.expression.tokenize', 'Matched a ', type, ' regular expression of ', match);

      if (next && !next.includes(type)) {
        invalidMatches.push(type + ' cannot follow a ' + tokens[tokens.length - 1].type + ' at template:' + expOffset + ' near \'' + match[0].slice(0, 20) + '...\''); // Not a match, don't change the expression

        return match[0];
      }

      var handler = Twig.expression.handler[type]; // Validate the token if a validation function is provided

      if (handler.validate && !handler.validate(match, tokens)) {
        return match[0];
      }

      invalidMatches = [];
      tokens.push({
        type: type,
        value: match[0],
        match: match
      });
      matchFound = true;
      next = tokenNext;
      expOffset += match[0].length; // Does the token need to return output back to the expression string
      // e.g. a function match of cycle( might return the '(' back to the expression
      // This allows look-ahead to differentiate between token types (e.g. functions and variable names)

      if (handler.transform) {
        return handler.transform(match, tokens);
      }

      return '';
    };

    Twig.log.debug('Twig.expression.tokenize', 'Tokenizing expression ', expression);

    while (expression.length > 0) {
      expression = expression.trim();

      for (type in Twig.expression.handler) {
        if (Object.hasOwnProperty.call(Twig.expression.handler, type)) {
          tokenNext = Twig.expression.handler[type].next;
          regex = Twig.expression.handler[type].regex;
          Twig.log.trace('Checking type ', type, ' on ', expression);
          matchFound = false;

          if (Array.isArray(regex)) {
            regexI = regex.length;

            while (regexI-- > 0) {
              expression = expression.replace(regex[regexI], matchFunction);
            }
          } else {
            expression = expression.replace(regex, matchFunction);
          } // An expression token has been matched. Break the for loop and start trying to
          //  match the next template (if expression isn't empty.)


          if (matchFound) {
            break;
          }
        }
      }

      if (!matchFound) {
        if (invalidMatches.length > 0) {
          throw new Twig.Error(invalidMatches.join(' OR '));
        } else {
          throw new Twig.Error('Unable to parse \'' + expression + '\' at template position' + expOffset);
        }
      }
    }

    Twig.log.trace('Twig.expression.tokenize', 'Tokenized to ', tokens);
    return tokens;
  };
  /**
   * Compile an expression token.
   *
   * @param {Object} rawToken The uncompiled token.
   *
   * @return {Object} The compiled token.
   */


  Twig.expression.compile = function (rawToken) {
    var expression = rawToken.value; // Tokenize expression

    var tokens = Twig.expression.tokenize(expression);
    var token = null;
    var output = [];
    var stack = [];
    var tokenTemplate = null;
    Twig.log.trace('Twig.expression.compile: ', 'Compiling ', expression); // Push tokens into RPN stack using the Shunting-yard algorithm
    // See http://en.wikipedia.org/wiki/Shunting_yard_algorithm

    while (tokens.length > 0) {
      token = tokens.shift();
      tokenTemplate = Twig.expression.handler[token.type];
      Twig.log.trace('Twig.expression.compile: ', 'Compiling ', token); // Compile the template

      tokenTemplate.compile(token, stack, output);
      Twig.log.trace('Twig.expression.compile: ', 'Stack is', stack);
      Twig.log.trace('Twig.expression.compile: ', 'Output is', output);
    }

    while (stack.length > 0) {
      output.push(stack.pop());
    }

    Twig.log.trace('Twig.expression.compile: ', 'Final output is', output);
    rawToken.stack = output;
    delete rawToken.value;
    return rawToken;
  };
  /**
   * Parse an RPN expression stack within a context.
   *
   * @param {Array} tokens An array of compiled expression tokens.
   * @param {Object} context The render context to parse the tokens with.
   *
   * @return {Object} The result of parsing all the tokens. The result
   *                  can be anything, String, Array, Object, etc... based on
   *                  the given expression.
   */


  Twig.expression.parse = function (tokens, context, tokensAreParameters, allowAsync) {
    var state = this; // If the token isn't an array, make it one.

    if (!Array.isArray(tokens)) {
      tokens = [tokens];
    } // The output stack


    var stack = [];
    var loopTokenFixups = [];
    var binaryOperator = Twig.expression.type.operator.binary;
    return Twig.async.potentiallyAsync(state, allowAsync, function () {
      return Twig.async.forEach(tokens, function (token, index) {
        var tokenTemplate = null;
        var nextToken = null;
        var result; // If the token is marked for cleanup, we don't need to parse it

        if (token.cleanup) {
          return;
        } // Determine the token that follows this one so that we can pass it to the parser


        if (tokens.length > index + 1) {
          nextToken = tokens[index + 1];
        }

        tokenTemplate = Twig.expression.handler[token.type];

        if (tokenTemplate.parse) {
          result = tokenTemplate.parse.call(state, token, stack, context, nextToken);
        } // Store any binary tokens for later if we are in a loop.


        if (token.type === binaryOperator && context.loop) {
          loopTokenFixups.push(token);
        }

        return result;
      }).then(function () {
        // Check every fixup and remove "key" as long as they still have "params". This covers the use case where
        // a ":" operator is used in a loop with a "(expression):" statement. We need to be able to evaluate the expression
        var len = loopTokenFixups.length;
        var loopTokenFixup = null;

        while (len-- > 0) {
          loopTokenFixup = loopTokenFixups[len];

          if (loopTokenFixup.params && loopTokenFixup.key) {
            delete loopTokenFixup.key;
          }
        } // If parse has been called with a set of tokens that are parameters, we need to return the whole stack,
        // wrapped in an Array.


        if (tokensAreParameters) {
          var params = stack.splice(0);
          stack.push(params);
        } // Pop the final value off the stack


        return stack.pop();
      });
    });
  };

  return Twig;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(13);

var iterableToArray = __webpack_require__(14);

var unsupportedIterableToArray = __webpack_require__(15);

var nonIterableSpread = __webpack_require__(16);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(3);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(3);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.expression.operator.js
//
// This file handles operator lookups and parsing.
module.exports = function (Twig) {
  'use strict';
  /**
   * Operator associativity constants.
   */

  Twig.expression.operator = {
    leftToRight: 'leftToRight',
    rightToLeft: 'rightToLeft'
  };

  var containment = function containment(a, b) {
    if (b === undefined || b === null) {
      return null;
    }

    if (b.indexOf !== undefined) {
      // String
      return (a === b || a !== '') && b.includes(a);
    }

    var el;

    for (el in b) {
      if (Object.hasOwnProperty.call(b, el) && b[el] === a) {
        return true;
      }
    }

    return false;
  };
  /**
   * Get the precidence and associativity of an operator. These follow the order that C/C++ use.
   * See http://en.wikipedia.org/wiki/Operators_in_C_and_C++ for the table of values.
   */


  Twig.expression.operator.lookup = function (operator, token) {
    switch (operator) {
      case '..':
        token.precidence = 20;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case ',':
        token.precidence = 18;
        token.associativity = Twig.expression.operator.leftToRight;
        break;
      // Ternary

      case '?:':
      case '?':
      case ':':
        token.precidence = 16;
        token.associativity = Twig.expression.operator.rightToLeft;
        break;
      // Null-coalescing operator

      case '??':
        token.precidence = 15;
        token.associativity = Twig.expression.operator.rightToLeft;
        break;

      case 'or':
        token.precidence = 14;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'and':
        token.precidence = 13;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'b-or':
        token.precidence = 12;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'b-xor':
        token.precidence = 11;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'b-and':
        token.precidence = 10;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case '==':
      case '!=':
        token.precidence = 9;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case '<':
      case '<=':
      case '>':
      case '>=':
      case 'not in':
      case 'in':
        token.precidence = 8;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case '~': // String concatination

      case '+':
      case '-':
        token.precidence = 6;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case '//':
      case '**':
      case '*':
      case '/':
      case '%':
        token.precidence = 5;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'not':
        token.precidence = 3;
        token.associativity = Twig.expression.operator.rightToLeft;
        break;

      case 'matches':
        token.precidence = 8;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'starts with':
        token.precidence = 8;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'ends with':
        token.precidence = 8;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      default:
        throw new Twig.Error('Failed to lookup operator: ' + operator + ' is an unknown operator.');
    }

    token.operator = operator;
    return token;
  };
  /**
   * Handle operations on the RPN stack.
   *
   * Returns the updated stack.
   */


  Twig.expression.operator.parse = function (operator, stack) {
    Twig.log.trace('Twig.expression.operator.parse: ', 'Handling ', operator);
    var a;
    var b;
    var c;

    if (operator === '?') {
      c = stack.pop();
    }

    b = stack.pop();

    if (operator !== 'not') {
      a = stack.pop();
    }

    if (operator !== 'in' && operator !== 'not in' && operator !== '??') {
      if (a && Array.isArray(a)) {
        a = a.length;
      }

      if (operator !== '?' && b && Array.isArray(b)) {
        b = b.length;
      }
    }

    if (operator === 'matches') {
      if (b && typeof b === 'string') {
        var reParts = b.match(/^\/(.*)\/([gims]?)$/);
        var reBody = reParts[1];
        var reFlags = reParts[2];
        b = new RegExp(reBody, reFlags);
      }
    }

    switch (operator) {
      case ':':
        // Ignore
        break;

      case '??':
        if (a === undefined) {
          a = b;
          b = c;
          c = undefined;
        }

        if (a !== undefined && a !== null) {
          stack.push(a);
        } else {
          stack.push(b);
        }

        break;

      case '?:':
        if (Twig.lib.boolval(a)) {
          stack.push(a);
        } else {
          stack.push(b);
        }

        break;

      case '?':
        if (a === undefined) {
          // An extended ternary.
          a = b;
          b = c;
          c = undefined;
        }

        if (Twig.lib.boolval(a)) {
          stack.push(b);
        } else {
          stack.push(c);
        }

        break;

      case '+':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a + b);
        break;

      case '-':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a - b);
        break;

      case '*':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a * b);
        break;

      case '/':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a / b);
        break;

      case '//':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(Math.floor(a / b));
        break;

      case '%':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a % b);
        break;

      case '~':
        stack.push((typeof a !== 'undefined' && a !== null ? a.toString() : '') + (typeof b !== 'undefined' && b !== null ? b.toString() : ''));
        break;

      case 'not':
      case '!':
        stack.push(!Twig.lib.boolval(b));
        break;

      case '<':
        stack.push(a < b);
        break;

      case '<=':
        stack.push(a <= b);
        break;

      case '>':
        stack.push(a > b);
        break;

      case '>=':
        stack.push(a >= b);
        break;

      case '===':
        stack.push(a === b);
        break;

      case '==':
        /* eslint-disable-next-line eqeqeq */
        stack.push(a == b);
        break;

      case '!==':
        stack.push(a !== b);
        break;

      case '!=':
        /* eslint-disable-next-line eqeqeq */
        stack.push(a != b);
        break;

      case 'or':
        stack.push(Twig.lib.boolval(a) || Twig.lib.boolval(b));
        break;

      case 'b-or':
        stack.push(a | b);
        break;

      case 'b-xor':
        stack.push(a ^ b);
        break;

      case 'and':
        stack.push(Twig.lib.boolval(a) && Twig.lib.boolval(b));
        break;

      case 'b-and':
        stack.push(a & b);
        break;

      case '**':
        stack.push(Math.pow(a, b));
        break;

      case 'not in':
        stack.push(!containment(a, b));
        break;

      case 'in':
        stack.push(containment(a, b));
        break;

      case 'matches':
        stack.push(b.test(a));
        break;

      case 'starts with':
        stack.push(typeof a === 'string' && a.indexOf(b) === 0);
        break;

      case 'ends with':
        stack.push(typeof a === 'string' && a.includes(b, a.length - b.length));
        break;

      case '..':
        stack.push(Twig.functions.range(a, b));
        break;

      default:
        throw new Twig.Error('Failed to parse operator: ' + operator + ' is an unknown operator.');
    }
  };

  return Twig;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

// ## twig.filters.js
//
// This file handles parsing filters.
module.exports = function (Twig) {
  // Determine object type
  function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
  }

  Twig.filters = {
    // String Filters
    upper: function upper(value) {
      if (typeof value !== 'string') {
        return value;
      }

      return value.toUpperCase();
    },
    lower: function lower(value) {
      if (typeof value !== 'string') {
        return value;
      }

      return value.toLowerCase();
    },
    capitalize: function capitalize(value) {
      if (typeof value !== 'string') {
        return value;
      }

      return value.slice(0, 1).toUpperCase() + value.toLowerCase().slice(1);
    },
    title: function title(value) {
      if (typeof value !== 'string') {
        return value;
      }

      return value.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
        return p1 + p2.toUpperCase();
      });
    },
    length: function length(value) {
      if (Twig.lib.is('Array', value) || typeof value === 'string') {
        return value.length;
      }

      if (Twig.lib.is('Object', value)) {
        if (value._keys === undefined) {
          return Object.keys(value).length;
        }

        return value._keys.length;
      }

      return 0;
    },
    // Array/Object Filters
    reverse: function reverse(value) {
      if (is('Array', value)) {
        return value.reverse();
      }

      if (is('String', value)) {
        return value.split('').reverse().join('');
      }

      if (is('Object', value)) {
        var keys = value._keys || Object.keys(value).reverse();
        value._keys = keys;
        return value;
      }
    },
    sort: function sort(value) {
      if (is('Array', value)) {
        return value.sort();
      }

      if (is('Object', value)) {
        // Sorting objects isn't obvious since the order of
        // returned keys isn't guaranteed in JavaScript.
        // Because of this we use a "hidden" key called _keys to
        // store the keys in the order we want to return them.
        delete value._keys;
        var keys = Object.keys(value);
        var sortedKeys = keys.sort(function (a, b) {
          var a1;
          var b1; // If a and b are comparable, we're fine :-)

          if (value[a] > value[b] === !(value[a] <= value[b])) {
            return value[a] > value[b] ? 1 : value[a] < value[b] ? -1 : 0;
          } // If a and b can be parsed as numbers, we can compare
          // their numeric value


          if (!isNaN(a1 = parseFloat(value[a])) && !isNaN(b1 = parseFloat(value[b]))) {
            return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
          } // If one of the values is a string, we convert the
          // other value to string as well


          if (typeof value[a] === 'string') {
            return value[a] > value[b].toString() ? 1 : value[a] < value[b].toString() ? -1 : 0;
          }

          if (typeof value[b] === 'string') {
            return value[a].toString() > value[b] ? 1 : value[a].toString() < value[b] ? -1 : 0;
          } // Everything failed - return 'null' as sign, that
          // the values are not comparable


          return null;
        });
        value._keys = sortedKeys;
        return value;
      }
    },
    keys: function keys(value) {
      if (value === undefined || value === null) {
        return;
      }

      var keyset = value._keys || Object.keys(value);
      var output = [];
      keyset.forEach(function (key) {
        if (key === '_keys') {
          return;
        } // Ignore the _keys property


        if (Object.hasOwnProperty.call(value, key)) {
          output.push(key);
        }
      });
      return output;
    },

    /* eslint-disable-next-line camelcase */
    url_encode: function url_encode(value) {
      if (value === undefined || value === null) {
        return;
      }

      if (Twig.lib.is('Object', value)) {
        var serialize = function serialize(obj, prefix) {
          var result = [];
          var keyset = obj._keys || Object.keys(obj);
          keyset.forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
              return;
            }

            var resultKey = prefix ? prefix + '[' + key + ']' : key;
            var resultValue = obj[key];
            result.push(Twig.lib.is('Object', resultValue) || Array.isArray(resultValue) ? serialize(resultValue, resultKey) : encodeURIComponent(resultKey) + '=' + encodeURIComponent(resultValue));
          });
          return result.join('&amp;');
        };

        return serialize(value);
      }

      var result = encodeURIComponent(value);
      result = result.replace('\'', '%27');
      return result;
    },
    join: function join(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      var joinStr = '';
      var output = [];
      var keyset = null;

      if (params && params[0]) {
        joinStr = params[0];
      }

      if (is('Array', value)) {
        output = value;
      } else {
        keyset = value._keys || Object.keys(value);
        keyset.forEach(function (key) {
          if (key === '_keys') {
            return;
          } // Ignore the _keys property


          if (Object.hasOwnProperty.call(value, key)) {
            output.push(value[key]);
          }
        });
      }

      return output.join(joinStr);
    },
    "default": function _default(value, params) {
      if (params !== undefined && params.length > 1) {
        throw new Twig.Error('default filter expects one argument');
      }

      if (value === undefined || value === null || value === '') {
        if (params === undefined) {
          return '';
        }

        return params[0];
      }

      return value;
    },

    /* eslint-disable-next-line camelcase */
    json_encode: function json_encode(value) {
      if (value === undefined || value === null) {
        return 'null';
      }

      if ((0, _typeof2["default"])(value) === 'object' && is('Array', value)) {
        var output = [];
        value.forEach(function (v) {
          output.push(Twig.filters.json_encode(v));
        });
        return '[' + output.join(',') + ']';
      }

      if ((0, _typeof2["default"])(value) === 'object' && is('Date', value)) {
        return '"' + value.toISOString() + '"';
      }

      if ((0, _typeof2["default"])(value) === 'object') {
        var keyset = value._keys || Object.keys(value);
        var _output = [];
        keyset.forEach(function (key) {
          _output.push(JSON.stringify(key) + ':' + Twig.filters.json_encode(value[key]));
        });
        return '{' + _output.join(',') + '}';
      }

      return JSON.stringify(value);
    },
    merge: function merge(value, params) {
      var obj = [];
      var arrIndex = 0;
      var keyset = []; // Check to see if all the objects being merged are arrays

      if (is('Array', value)) {
        params.forEach(function (param) {
          if (!is('Array', param)) {
            obj = {};
          }
        });
      } else {
        // Create obj as an Object
        obj = {};
      }

      if (!is('Array', obj)) {
        obj._keys = [];
      }

      if (is('Array', value)) {
        value.forEach(function (val) {
          if (obj._keys) {
            obj._keys.push(arrIndex);
          }

          obj[arrIndex] = val;
          arrIndex++;
        });
      } else {
        keyset = value._keys || Object.keys(value);
        keyset.forEach(function (key) {
          obj[key] = value[key];

          obj._keys.push(key); // Handle edge case where a number index in an object is greater than
          //   the array counter. In such a case, the array counter is increased
          //   one past the index.
          //
          // Example {{ ["a", "b"]|merge({"4":"value"}, ["c", "d"])
          // Without this, d would have an index of "4" and overwrite the value
          //   of "value"


          var intKey = parseInt(key, 10);

          if (!isNaN(intKey) && intKey >= arrIndex) {
            arrIndex = intKey + 1;
          }
        });
      } // Mixin the merge arrays


      params.forEach(function (param) {
        if (is('Array', param)) {
          param.forEach(function (val) {
            if (obj._keys) {
              obj._keys.push(arrIndex);
            }

            obj[arrIndex] = val;
            arrIndex++;
          });
        } else {
          keyset = param._keys || Object.keys(param);
          keyset.forEach(function (key) {
            if (!obj[key]) {
              obj._keys.push(key);
            }

            obj[key] = param[key];
            var intKey = parseInt(key, 10);

            if (!isNaN(intKey) && intKey >= arrIndex) {
              arrIndex = intKey + 1;
            }
          });
        }
      });

      if (params.length === 0) {
        throw new Twig.Error('Filter merge expects at least one parameter');
      }

      return obj;
    },
    date: function date(value, params) {
      var date = Twig.functions.date(value);
      var format = params && Boolean(params.length) ? params[0] : 'F j, Y H:i';
      return Twig.lib.date(format.replace(/\\\\/g, '\\'), date);
    },

    /* eslint-disable-next-line camelcase */
    date_modify: function date_modify(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      if (params === undefined || params.length !== 1) {
        throw new Twig.Error('date_modify filter expects 1 argument');
      }

      var modifyText = params[0];
      var time;

      if (Twig.lib.is('Date', value)) {
        time = Twig.lib.strtotime(modifyText, value.getTime() / 1000);
      }

      if (Twig.lib.is('String', value)) {
        time = Twig.lib.strtotime(modifyText, Twig.lib.strtotime(value));
      }

      if (Twig.lib.is('Number', value)) {
        time = Twig.lib.strtotime(modifyText, value);
      }

      return new Date(time * 1000);
    },
    replace: function replace(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      var pairs = params[0];
      var tag;

      for (tag in pairs) {
        if (Object.hasOwnProperty.call(pairs, tag) && tag !== '_keys') {
          value = Twig.lib.replaceAll(value, tag, pairs[tag]);
        }
      }

      return value;
    },
    format: function format(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      return Twig.lib.vsprintf(value, params);
    },
    striptags: function striptags(value, allowed) {
      if (value === undefined || value === null) {
        return;
      }

      return Twig.lib.stripTags(value, allowed);
    },
    escape: function escape(value, params) {
      if (value === undefined || value === null || value === '') {
        return;
      }

      var strategy = 'html';

      if (params && Boolean(params.length) && params[0] !== true) {
        strategy = params[0];
      }

      if (strategy === 'html') {
        var rawValue = value.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        return new Twig.Markup(rawValue, 'html');
      }

      if (strategy === 'js') {
        var _rawValue = value.toString();

        var result = '';

        for (var i = 0; i < _rawValue.length; i++) {
          if (_rawValue[i].match(/^[a-zA-Z0-9,._]$/)) {
            result += _rawValue[i];
          } else {
            var _char = _rawValue.charAt(i);

            var charCode = _rawValue.charCodeAt(i); // A few characters have short escape sequences in JSON and JavaScript.
            // Escape sequences supported only by JavaScript, not JSON, are ommitted.
            // \" is also supported but omitted, because the resulting string is not HTML safe.


            var shortMap = {
              '\\': '\\\\',
              '/': '\\/',
              "\b": '\\b',
              "\f": '\\f',
              "\n": '\\n',
              "\r": '\\r',
              "\t": '\\t'
            };

            if (shortMap[_char]) {
              result += shortMap[_char];
            } else {
              result += Twig.lib.sprintf("\\u%04s", charCode.toString(16).toUpperCase());
            }
          }
        }

        return new Twig.Markup(result, 'js');
      }

      if (strategy === 'css') {
        var _rawValue2 = value.toString();

        var _result = '';

        for (var _i = 0; _i < _rawValue2.length; _i++) {
          if (_rawValue2[_i].match(/^[a-zA-Z0-9]$/)) {
            _result += _rawValue2[_i];
          } else {
            var _charCode = _rawValue2.charCodeAt(_i);

            _result += '\\' + _charCode.toString(16).toUpperCase() + ' ';
          }
        }

        return new Twig.Markup(_result, 'css');
      }

      if (strategy === 'url') {
        var _result2 = Twig.filters.url_encode(value);

        return new Twig.Markup(_result2, 'url');
      }

      if (strategy === 'html_attr') {
        var _rawValue3 = value.toString();

        var _result3 = '';

        for (var _i2 = 0; _i2 < _rawValue3.length; _i2++) {
          if (_rawValue3[_i2].match(/^[a-zA-Z0-9,.\-_]$/)) {
            _result3 += _rawValue3[_i2];
          } else if (_rawValue3[_i2].match(/^[&<>"]$/)) {
            _result3 += _rawValue3[_i2].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
          } else {
            var _charCode2 = _rawValue3.charCodeAt(_i2); // The following replaces characters undefined in HTML with
            // the hex entity for the Unicode replacement character.


            if (_charCode2 <= 0x1F && _charCode2 !== 0x09 && _charCode2 !== 0x0A && _charCode2 !== 0x0D) {
              _result3 += '&#xFFFD;';
            } else if (_charCode2 < 0x80) {
              _result3 += Twig.lib.sprintf('&#x%02s;', _charCode2.toString(16).toUpperCase());
            } else {
              _result3 += Twig.lib.sprintf('&#x%04s;', _charCode2.toString(16).toUpperCase());
            }
          }
        }

        return new Twig.Markup(_result3, 'html_attr');
      }

      throw new Twig.Error('escape strategy unsupported');
    },

    /* Alias of escape */
    e: function e(value, params) {
      return Twig.filters.escape(value, params);
    },
    nl2br: function nl2br(value) {
      if (value === undefined || value === null || value === '') {
        return;
      }

      var linebreakTag = 'BACKSLASH_n_replace';
      var br = '<br />' + linebreakTag;
      value = Twig.filters.escape(value).replace(/\r\n/g, br).replace(/\r/g, br).replace(/\n/g, br);
      value = Twig.lib.replaceAll(value, linebreakTag, '\n');
      return new Twig.Markup(value);
    },

    /**
     * Adapted from: http://phpjs.org/functions/number_format:481
     */

    /* eslint-disable-next-line camelcase */
    number_format: function number_format(value, params) {
      var number = value;
      var decimals = params && params[0] ? params[0] : undefined;
      var dec = params && params[1] !== undefined ? params[1] : '.';
      var sep = params && params[2] !== undefined ? params[2] : ',';
      number = String(number).replace(/[^0-9+\-Ee.]/g, '');
      var n = isFinite(Number(number)) ? Number(number) : 0;
      var prec = isFinite(Number(decimals)) ? Math.abs(decimals) : 0;
      var s = '';

      var toFixedFix = function toFixedFix(n, prec) {
        var k = Math.pow(10, prec);
        return String(Math.round(n * k) / k);
      }; // Fix for IE parseFloat(0.55).toFixed(0) = 0;


      s = (prec ? toFixedFix(n, prec) : String(Math.round(n))).split('.');

      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }

      if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
      }

      return s.join(dec);
    },
    trim: function trim(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      var str = String(value);
      var whitespace;

      if (params && params[0]) {
        whitespace = String(params[0]);
      } else {
        whitespace = " \n\r\t\f\x0B\xA0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u2028\u2029\u3000";
      }

      for (var i = 0; i < str.length; i++) {
        if (!whitespace.includes(str.charAt(i))) {
          str = str.slice(Math.max(0, i));
          break;
        }
      }

      for (var _i3 = str.length - 1; _i3 >= 0; _i3--) {
        if (!whitespace.includes(str.charAt(_i3))) {
          str = str.slice(0, Math.max(0, _i3 + 1));
          break;
        }
      }

      return whitespace.includes(str.charAt(0)) ? '' : str;
    },
    truncate: function truncate(value, params) {
      var length = 30;
      var preserve = false;
      var separator = '...';
      value = String(value);

      if (params) {
        if (params[0]) {
          length = params[0];
        }

        if (params[1]) {
          preserve = params[1];
        }

        if (params[2]) {
          separator = params[2];
        }
      }

      if (value.length > length) {
        if (preserve) {
          length = value.indexOf(' ', length);

          if (length === -1) {
            return value;
          }
        }

        value = value.slice(0, length) + separator;
      }

      return value;
    },
    slice: function slice(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      if (params === undefined || params.length === 0) {
        throw new Twig.Error('slice filter expects at least 1 argument');
      } // Default to start of string


      var start = params[0] || 0; // Default to length of string

      var length = params.length > 1 ? params[1] : value.length; // Handle negative start values

      var startIndex = start >= 0 ? start : Math.max(value.length + start, 0);

      if (Twig.lib.is('Array', value)) {
        var output = [];

        for (var i = startIndex; i < startIndex + length && i < value.length; i++) {
          output.push(value[i]);
        }

        return output;
      }

      if (Twig.lib.is('String', value)) {
        return value.slice(startIndex, startIndex + length);
      }

      throw new Twig.Error('slice filter expects value to be an array or string');
    },
    abs: function abs(value) {
      if (value === undefined || value === null) {
        return;
      }

      return Math.abs(value);
    },
    first: function first(value) {
      if (is('Array', value)) {
        return value[0];
      }

      if (is('Object', value)) {
        if ('_keys' in value) {
          return value[value._keys[0]];
        }
      } else if (typeof value === 'string') {
        return value.slice(0, 1);
      }
    },
    split: function split(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      if (params === undefined || params.length === 0 || params.length > 2) {
        throw new Twig.Error('split filter expects 1 or 2 argument');
      }

      if (Twig.lib.is('String', value)) {
        var delimiter = params[0];
        var limit = params[1];
        var split = value.split(delimiter);

        if (limit === undefined) {
          return split;
        }

        if (limit < 0) {
          return value.split(delimiter, split.length + limit);
        }

        var limitedSplit = [];

        if (delimiter === '') {
          // Empty delimiter
          // "aabbcc"|split('', 2)
          //     -> ['aa', 'bb', 'cc']
          while (split.length > 0) {
            var temp = '';

            for (var i = 0; i < limit && split.length > 0; i++) {
              temp += split.shift();
            }

            limitedSplit.push(temp);
          }
        } else {
          // Non-empty delimiter
          // "one,two,three,four,five"|split(',', 3)
          //     -> ['one', 'two', 'three,four,five']
          for (var _i4 = 0; _i4 < limit - 1 && split.length > 0; _i4++) {
            limitedSplit.push(split.shift());
          }

          if (split.length > 0) {
            limitedSplit.push(split.join(delimiter));
          }
        }

        return limitedSplit;
      }

      throw new Twig.Error('split filter expects value to be a string');
    },
    last: function last(value) {
      if (Twig.lib.is('Object', value)) {
        var keys;

        if (value._keys === undefined) {
          keys = Object.keys(value);
        } else {
          keys = value._keys;
        }

        return value[keys[keys.length - 1]];
      }

      if (Twig.lib.is('Number', value)) {
        return value.toString().slice(-1);
      } // String|array


      return value[value.length - 1];
    },
    raw: function raw(value) {
      return new Twig.Markup(value || '');
    },
    batch: function batch(items, params) {
      var size = params.shift();
      var fill = params.shift();
      var last;
      var missing;

      if (!Twig.lib.is('Array', items)) {
        throw new Twig.Error('batch filter expects items to be an array');
      }

      if (!Twig.lib.is('Number', size)) {
        throw new Twig.Error('batch filter expects size to be a number');
      }

      size = Math.ceil(size);
      var result = Twig.lib.chunkArray(items, size);

      if (fill && items.length % size !== 0) {
        last = result.pop();
        missing = size - last.length;

        while (missing--) {
          last.push(fill);
        }

        result.push(last);
      }

      return result;
    },
    round: function round(value, params) {
      params = params || [];
      var precision = params.length > 0 ? params[0] : 0;
      var method = params.length > 1 ? params[1] : 'common';
      value = parseFloat(value);

      if (precision && !Twig.lib.is('Number', precision)) {
        throw new Twig.Error('round filter expects precision to be a number');
      }

      if (method === 'common') {
        return Twig.lib.round(value, precision);
      }

      if (!Twig.lib.is('Function', Math[method])) {
        throw new Twig.Error('round filter expects method to be \'floor\', \'ceil\', or \'common\'');
      }

      return Math[method](value * Math.pow(10, precision)) / Math.pow(10, precision);
    },
    spaceless: function spaceless(value) {
      return value.replace(/>\s+</g, '><').trim();
    }
  };

  Twig.filter = function (filter, value, params) {
    var state = this;

    if (!Twig.filters[filter]) {
      throw new Twig.Error('Unable to find filter ' + filter);
    }

    return Twig.filters[filter].call(state, value, params);
  };

  Twig.filter.extend = function (filter, definition) {
    Twig.filters[filter] = definition;
  };

  return Twig;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

// ## twig.functions.js
//
// This file handles parsing filters.
module.exports = function (Twig) {
  /**
   * @constant
   * @type {string}
   */
  var TEMPLATE_NOT_FOUND_MESSAGE = 'Template "{name}" is not defined.';
  Twig.functions = {
    //  Attribute, block, constant, date, dump, parent, random,.
    // Range function from http://phpjs.org/functions/range:499
    // Used under an MIT License
    range: function range(low, high, step) {
      // http://kevin.vanzonneveld.net
      // +   original by: Waldo Malqui Silva
      // *     example 1: range ( 0, 12 );
      // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      // *     example 2: range( 0, 100, 10 );
      // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      // *     example 3: range( 'a', 'i' );
      // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
      // *     example 4: range( 'c', 'a' );
      // *     returns 4: ['c', 'b', 'a']
      var matrix = [];
      var inival;
      var endval;
      var walker = step || 1;
      var chars = false;

      if (!isNaN(low) && !isNaN(high)) {
        inival = parseInt(low, 10);
        endval = parseInt(high, 10);
      } else if (isNaN(low) && isNaN(high)) {
        chars = true;
        inival = low.charCodeAt(0);
        endval = high.charCodeAt(0);
      } else {
        inival = isNaN(low) ? 0 : low;
        endval = isNaN(high) ? 0 : high;
      }

      var plus = !(inival > endval);

      if (plus) {
        while (inival <= endval) {
          matrix.push(chars ? String.fromCharCode(inival) : inival);
          inival += walker;
        }
      } else {
        while (inival >= endval) {
          matrix.push(chars ? String.fromCharCode(inival) : inival);
          inival -= walker;
        }
      }

      return matrix;
    },
    cycle: function cycle(arr, i) {
      var pos = i % arr.length;
      return arr[pos];
    },
    dump: function dump() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Don't pass arguments to `Array.slice`, that is a performance killer
      var argsCopy = [].concat(args);
      var state = this;
      var EOL = '\n';
      var indentChar = '  ';
      var indentTimes = 0;
      var out = '';

      var indent = function indent(times) {
        var ind = '';

        while (times > 0) {
          times--;
          ind += indentChar;
        }

        return ind;
      };

      var displayVar = function displayVar(variable) {
        out += indent(indentTimes);

        if ((0, _typeof2["default"])(variable) === 'object') {
          dumpVar(variable);
        } else if (typeof variable === 'function') {
          out += 'function()' + EOL;
        } else if (typeof variable === 'string') {
          out += 'string(' + variable.length + ') "' + variable + '"' + EOL;
        } else if (typeof variable === 'number') {
          out += 'number(' + variable + ')' + EOL;
        } else if (typeof variable === 'boolean') {
          out += 'bool(' + variable + ')' + EOL;
        }
      };

      var dumpVar = function dumpVar(variable) {
        var i;

        if (variable === null) {
          out += 'NULL' + EOL;
        } else if (variable === undefined) {
          out += 'undefined' + EOL;
        } else if ((0, _typeof2["default"])(variable) === 'object') {
          out += indent(indentTimes) + (0, _typeof2["default"])(variable);
          indentTimes++;

          out += '(' + function (obj) {
            var size = 0;
            var key;

            for (key in obj) {
              if (Object.hasOwnProperty.call(obj, key)) {
                size++;
              }
            }

            return size;
          }(variable) + ') {' + EOL;

          for (i in variable) {
            if (Object.hasOwnProperty.call(variable, i)) {
              out += indent(indentTimes) + '[' + i + ']=> ' + EOL;
              displayVar(variable[i]);
            }
          }

          indentTimes--;
          out += indent(indentTimes) + '}' + EOL;
        } else {
          displayVar(variable);
        }
      }; // Handle no argument case by dumping the entire render context


      if (argsCopy.length === 0) {
        argsCopy.push(state.context);
      }

      argsCopy.forEach(function (variable) {
        dumpVar(variable);
      });
      return out;
    },
    date: function date(_date) {
      var dateObj;

      if (_date === undefined || _date === null || _date === '') {
        dateObj = new Date();
      } else if (Twig.lib.is('Date', _date)) {
        dateObj = _date;
      } else if (Twig.lib.is('String', _date)) {
        if (_date.match(/^\d+$/)) {
          dateObj = new Date(_date * 1000);
        } else {
          dateObj = new Date(Twig.lib.strtotime(_date) * 1000);
        }
      } else if (Twig.lib.is('Number', _date)) {
        // Timestamp
        dateObj = new Date(_date * 1000);
      } else {
        throw new Twig.Error('Unable to parse date ' + _date);
      }

      return dateObj;
    },
    block: function block(blockName) {
      var state = this;
      var block = state.getBlock(blockName);

      if (block !== undefined) {
        return block.render(state, state.context);
      }
    },
    parent: function parent() {
      var state = this;
      return state.getBlock(state.getNestingStackToken(Twig.logic.type.block).blockName, true).render(state, state.context);
    },
    attribute: function attribute(object, method, params) {
      if (Twig.lib.is('Object', object)) {
        if (Object.hasOwnProperty.call(object, method)) {
          if (typeof object[method] === 'function') {
            return object[method].apply(undefined, params);
          }

          return object[method];
        }
      } // Array will return element 0-index


      return object ? object[method] || undefined : undefined;
    },
    max: function max(values) {
      if (Twig.lib.is('Object', values)) {
        delete values._keys;
        return Twig.lib.max(values);
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return Reflect.apply(Twig.lib.max, null, [values].concat(args));
    },
    min: function min(values) {
      if (Twig.lib.is('Object', values)) {
        delete values._keys;
        return Twig.lib.min(values);
      }

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return Reflect.apply(Twig.lib.min, null, [values].concat(args));
    },

    /* eslint-disable-next-line camelcase */
    template_from_string: function template_from_string(template) {
      var state = this;

      if (template === undefined) {
        template = '';
      }

      return Twig.Templates.parsers.twig({
        options: state.template.options,
        data: template
      });
    },
    random: function random(value) {
      var LIMIT_INT31 = 0x80000000;

      function getRandomNumber(n) {
        var random = Math.floor(Math.random() * LIMIT_INT31);
        var min = Math.min.call(null, 0, n);
        var max = Math.max.call(null, 0, n);
        return min + Math.floor((max - min + 1) * random / LIMIT_INT31);
      }

      if (Twig.lib.is('Number', value)) {
        return getRandomNumber(value);
      }

      if (Twig.lib.is('String', value)) {
        return value.charAt(getRandomNumber(value.length - 1));
      }

      if (Twig.lib.is('Array', value)) {
        return value[getRandomNumber(value.length - 1)];
      }

      if (Twig.lib.is('Object', value)) {
        var keys = Object.keys(value);
        return value[keys[getRandomNumber(keys.length - 1)]];
      }

      return getRandomNumber(LIMIT_INT31 - 1);
    },

    /**
     * Returns the content of a template without rendering it
     * @param {string} name
     * @param {boolean} [ignoreMissing=false]
     * @returns {string}
     */
    source: function source(name, ignoreMissing) {
      var templateSource;
      var templateFound = false;
      var isNodeEnvironment =   true && typeof module.exports !== 'undefined' && typeof window === 'undefined';
      var loader;
      var path = name; // If we are running in a node.js environment, set the loader to 'fs'.

      if (isNodeEnvironment) {
        loader = 'fs';
      } else {
        loader = 'ajax';
      } // Build the params object


      var params = {
        id: name,
        path: path,
        method: loader,
        parser: 'source',
        async: false,
        fetchTemplateSource: true
      }; // Default ignoreMissing to false

      if (typeof ignoreMissing === 'undefined') {
        ignoreMissing = false;
      } // Try to load the remote template
      //
      // on exception, log it


      try {
        templateSource = Twig.Templates.loadRemote(name, params); // If the template is undefined or null, set the template to an empty string and do NOT flip the
        // boolean indicating we found the template
        //
        // else, all is good! flip the boolean indicating we found the template

        if (typeof templateSource === 'undefined' || templateSource === null) {
          templateSource = '';
        } else {
          templateFound = true;
        }
      } catch (error) {
        Twig.log.debug('Twig.functions.source: ', 'Problem loading template  ', error);
      } // If the template was NOT found AND we are not ignoring missing templates, return the same message
      // that is returned by the PHP implementation of the twig source() function
      //
      // else, return the template source


      if (!templateFound && !ignoreMissing) {
        return TEMPLATE_NOT_FOUND_MESSAGE.replace('{name}', name);
      }

      return templateSource;
    }
  };

  Twig._function = function (_function, value, params) {
    if (!Twig.functions[_function]) {
      throw new Twig.Error('Unable to find function ' + _function);
    }

    return Twig.functions[_function](value, params);
  };

  Twig._function.extend = function (_function, definition) {
    Twig.functions[_function] = definition;
  };

  return Twig;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.lib.js
//
// This file contains 3rd party libraries used within twig.
//
// Copies of the licenses for the code included here can be found in the
// LICENSES.md file.
//
module.exports = function (Twig) {
  // Namespace for libraries
  Twig.lib = {};
  Twig.lib.sprintf = __webpack_require__(4);
  Twig.lib.vsprintf = __webpack_require__(21);
  Twig.lib.round = __webpack_require__(22);
  Twig.lib.max = __webpack_require__(24);
  Twig.lib.min = __webpack_require__(25);
  Twig.lib.stripTags = __webpack_require__(26);
  Twig.lib.strtotime = __webpack_require__(28);
  Twig.lib.date = __webpack_require__(29);
  Twig.lib.boolval = __webpack_require__(30);

  Twig.lib.is = function (type, obj) {
    if (typeof obj === 'undefined' || obj === null) {
      return false;
    }

    switch (type) {
      case 'Array':
        return Array.isArray(obj);

      case 'Date':
        return obj instanceof Date;

      case 'String':
        return typeof obj === 'string' || obj instanceof String;

      case 'Number':
        return typeof obj === 'number' || obj instanceof Number;

      case 'Function':
        return typeof obj === 'function';

      case 'Object':
        return obj instanceof Object;

      default:
        return false;
    }
  };

  Twig.lib.replaceAll = function (string, search, replace) {
    // Escape possible regular expression syntax
    var searchEscaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return string.replace(new RegExp(searchEscaped, 'g'), replace);
  }; // Chunk an array (arr) into arrays of (size) items, returns an array of arrays, or an empty array on invalid input


  Twig.lib.chunkArray = function (arr, size) {
    var returnVal = [];
    var x = 0;
    var len = arr.length;

    if (size < 1 || !Array.isArray(arr)) {
      return [];
    }

    while (x < len) {
      returnVal.push(arr.slice(x, x += size));
    }

    return returnVal;
  };

  return Twig;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function vsprintf(format, args) {
  //  discuss at: https://locutus.io/php/vsprintf/
  // original by: ejsanders
  //   example 1: vsprintf('%04d-%02d-%02d', [1988, 8, 1])
  //   returns 1: '1988-08-01'

  var sprintf = __webpack_require__(4);

  return sprintf.apply(this, [format].concat(args));
};
//# sourceMappingURL=vsprintf.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function roundToInt(value, mode) {
  var tmp = Math.floor(Math.abs(value) + 0.5);

  if (mode === 'PHP_ROUND_HALF_DOWN' && value === tmp - 0.5 || mode === 'PHP_ROUND_HALF_EVEN' && value === 0.5 + 2 * Math.floor(tmp / 2) || mode === 'PHP_ROUND_HALF_ODD' && value === 0.5 + 2 * Math.floor(tmp / 2) - 1) {
    tmp -= 1;
  }

  return value < 0 ? -tmp : tmp;
}

module.exports = function round(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'PHP_ROUND_HALF_UP';

  //  discuss at: https://locutus.io/php/round/
  // original by: Philip Peterson
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: T.Wild
  //  revised by: Rafał Kukawski (https://blog.kukawski.pl)
  //    input by: Greenseed
  //    input by: meo
  //    input by: William
  //    input by: Josep Sanz (https://www.ws3.es/)
  // bugfixed by: Brett Zamir (https://brett-zamir.me)
  //  revised by: Rafał Kukawski
  //   example 1: round(1241757, -3)
  //   returns 1: 1242000
  //   example 2: round(3.6)
  //   returns 2: 4
  //   example 3: round(2.835, 2)
  //   returns 3: 2.84
  //   example 4: round(1.1749999999999, 2)
  //   returns 4: 1.17
  //   example 5: round(58551.799999999996, 2)
  //   returns 5: 58551.8
  //   example 6: round(4096.485, 2)
  //   returns 6: 4096.49

  var floatCast = __webpack_require__(23);
  var intCast = __webpack_require__(5);
  var p;

  // the code is heavily based on the native PHP implementation
  // https://github.com/php/php-src/blob/PHP-7.4/ext/standard/math.c#L355

  value = floatCast(value);
  precision = intCast(precision);
  p = Math.pow(10, precision);

  if (isNaN(value) || !isFinite(value)) {
    return value;
  }

  // if value already integer and positive precision
  // then nothing to do, return early
  if (Math.trunc(value) === value && precision >= 0) {
    return value;
  }

  // PHP does a pre-rounding before rounding to desired precision
  // https://wiki.php.net/rfc/rounding#pre-rounding_to_the_value_s_precision_if_possible
  var preRoundPrecision = 14 - Math.floor(Math.log10(Math.abs(value)));

  if (preRoundPrecision > precision && preRoundPrecision - 15 < precision) {
    value = roundToInt(value * Math.pow(10, preRoundPrecision), mode);
    value /= Math.pow(10, Math.abs(precision - preRoundPrecision));
  } else {
    value *= p;
  }

  value = roundToInt(value, mode);

  return value / p;
};
//# sourceMappingURL=round.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _php_cast_float(value) {
  // eslint-disable-line camelcase
  // original by: Rafał Kukawski
  //   example 1: _php_cast_float(false)
  //   returns 1: 0
  //   example 2: _php_cast_float(true)
  //   returns 2: 1
  //   example 3: _php_cast_float(0)
  //   returns 3: 0
  //   example 4: _php_cast_float(1)
  //   returns 4: 1
  //   example 5: _php_cast_float(3.14)
  //   returns 5: 3.14
  //   example 6: _php_cast_float('')
  //   returns 6: 0
  //   example 7: _php_cast_float('0')
  //   returns 7: 0
  //   example 8: _php_cast_float('abc')
  //   returns 8: 0
  //   example 9: _php_cast_float(null)
  //   returns 9: 0
  //  example 10: _php_cast_float(undefined)
  //  returns 10: 0
  //  example 11: _php_cast_float('123abc')
  //  returns 11: 123
  //  example 12: _php_cast_float('123e4')
  //  returns 12: 1230000
  //  example 13: _php_cast_float(0x200000001)
  //  returns 13: 8589934593
  //  example 14: _php_cast_float('3.14abc')
  //  returns 14: 3.14

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'number':
      return value;
    case 'string':
      return parseFloat(value) || 0;
    case 'boolean':
    // fall through
    default:
      // PHP docs state, that for types other than string
      // conversion is {input type}->int->float
      return __webpack_require__(5)(value);
  }
};
//# sourceMappingURL=_php_cast_float.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function max() {
  //  discuss at: https://locutus.io/php/max/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Jack
  //      note 1: Long code cause we're aiming for maximum PHP compatibility
  //   example 1: max(1, 3, 5, 6, 7)
  //   returns 1: 7
  //   example 2: max([2, 4, 5])
  //   returns 2: 5
  //   example 3: max(0, 'hello')
  //   returns 3: 0
  //   example 4: max('hello', 0)
  //   returns 4: 'hello'
  //   example 5: max(-1, 'hello')
  //   returns 5: 'hello'
  //   example 6: max([2, 4, 8], [2, 5, 7])
  //   returns 6: [2, 5, 7]

  var ar;
  var retVal;
  var i = 0;
  var n = 0;
  var argv = arguments;
  var argc = argv.length;
  var _obj2Array = function _obj2Array(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    } else {
      var ar = [];
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ar.push(obj[i]);
        }
      }
      return ar;
    }
  };
  var _compare = function _compare(current, next) {
    var i = 0;
    var n = 0;
    var tmp = 0;
    var nl = 0;
    var cl = 0;

    if (current === next) {
      return 0;
    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
        current = _obj2Array(current);
        next = _obj2Array(next);
        cl = current.length;
        nl = next.length;
        if (nl > cl) {
          return 1;
        } else if (nl < cl) {
          return -1;
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i]);
          if (tmp === 1) {
            return 1;
          } else if (tmp === -1) {
            return -1;
          }
        }
        return 0;
      }
      return -1;
    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
      return 1;
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0;
      }
      return current < 0 ? 1 : -1;
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0;
      }
      return next > 0 ? 1 : -1;
    }

    if (next === current) {
      return 0;
    }

    return next > current ? 1 : -1;
  };

  if (argc === 0) {
    throw new Error('At least one value should be passed to max()');
  } else if (argc === 1) {
    if (_typeof(argv[0]) === 'object') {
      ar = _obj2Array(argv[0]);
    } else {
      throw new Error('Wrong parameter count for max()');
    }
    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for max()');
    }
  } else {
    ar = argv;
  }

  retVal = ar[0];
  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === 1) {
      retVal = ar[i];
    }
  }

  return retVal;
};
//# sourceMappingURL=max.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function min() {
  //  discuss at: https://locutus.io/php/min/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Jack
  //      note 1: Long code cause we're aiming for maximum PHP compatibility
  //   example 1: min(1, 3, 5, 6, 7)
  //   returns 1: 1
  //   example 2: min([2, 4, 5])
  //   returns 2: 2
  //   example 3: min(0, 'hello')
  //   returns 3: 0
  //   example 4: min('hello', 0)
  //   returns 4: 'hello'
  //   example 5: min(-1, 'hello')
  //   returns 5: -1
  //   example 6: min([2, 4, 8], [2, 5, 7])
  //   returns 6: [2, 4, 8]

  var ar;
  var retVal;
  var i = 0;
  var n = 0;
  var argv = arguments;
  var argc = argv.length;
  var _obj2Array = function _obj2Array(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    }
    var ar = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ar.push(obj[i]);
      }
    }
    return ar;
  };

  var _compare = function _compare(current, next) {
    var i = 0;
    var n = 0;
    var tmp = 0;
    var nl = 0;
    var cl = 0;

    if (current === next) {
      return 0;
    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
        current = _obj2Array(current);
        next = _obj2Array(next);
        cl = current.length;
        nl = next.length;
        if (nl > cl) {
          return 1;
        } else if (nl < cl) {
          return -1;
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i]);
          if (tmp === 1) {
            return 1;
          } else if (tmp === -1) {
            return -1;
          }
        }
        return 0;
      }
      return -1;
    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
      return 1;
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0;
      }
      return current < 0 ? 1 : -1;
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0;
      }
      return next > 0 ? 1 : -1;
    }

    if (next === current) {
      return 0;
    }

    return next > current ? 1 : -1;
  };

  if (argc === 0) {
    throw new Error('At least one value should be passed to min()');
  } else if (argc === 1) {
    if (_typeof(argv[0]) === 'object') {
      ar = _obj2Array(argv[0]);
    } else {
      throw new Error('Wrong parameter count for min()');
    }

    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for min()');
    }
  } else {
    ar = argv;
  }

  retVal = ar[0];

  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === -1) {
      retVal = ar[i];
    }
  }

  return retVal;
};
//# sourceMappingURL=min.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function strip_tags(input, allowed) {
  // eslint-disable-line camelcase
  //  discuss at: https://locutus.io/php/strip_tags/
  // original by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Luke Godfrey
  // improved by: Kevin van Zonneveld (https://kvz.io)
  //    input by: Pul
  //    input by: Alex
  //    input by: Marc Palau
  //    input by: Brett Zamir (https://brett-zamir.me)
  //    input by: Bobby Drake
  //    input by: Evertjan Garretsen
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Eric Nagel
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Tomasz Wesolowski
  // bugfixed by: Tymon Sturgeon (https://scryptonite.com)
  // bugfixed by: Tim de Koning (https://www.kingsquare.nl)
  //  revised by: Rafał Kukawski (https://blog.kukawski.pl)
  //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>')
  //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
  //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>')
  //   returns 2: '<p>Kevin van Zonneveld</p>'
  //   example 3: strip_tags("<a href='https://kvz.io'>Kevin van Zonneveld</a>", "<a>")
  //   returns 3: "<a href='https://kvz.io'>Kevin van Zonneveld</a>"
  //   example 4: strip_tags('1 < 5 5 > 1')
  //   returns 4: '1 < 5 5 > 1'
  //   example 5: strip_tags('1 <br/> 1')
  //   returns 5: '1  1'
  //   example 6: strip_tags('1 <br/> 1', '<br>')
  //   returns 6: '1 <br/> 1'
  //   example 7: strip_tags('1 <br/> 1', '<br><br/>')
  //   returns 7: '1 <br/> 1'
  //   example 8: strip_tags('<i>hello</i> <<foo>script>world<</foo>/script>')
  //   returns 8: 'hello world'
  //   example 9: strip_tags(4)
  //   returns 9: '4'

  var _phpCastString = __webpack_require__(27);

  // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

  var tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi;
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

  var after = _phpCastString(input);
  // removes tha '<' char at the end of the string to replicate PHP's behaviour
  after = after.substring(after.length - 1) === '<' ? after.substring(0, after.length - 1) : after;

  // recursively remove tags to ensure that the returned string doesn't contain forbidden tags after previous passes (e.g. '<<bait/>switch/>')
  while (true) {
    var before = after;
    after = before.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });

    // return once no more tags are removed
    if (before === after) {
      return after;
    }
  }
};
//# sourceMappingURL=strip_tags.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _phpCastString(value) {
  // original by: Rafał Kukawski
  //   example 1: _phpCastString(true)
  //   returns 1: '1'
  //   example 2: _phpCastString(false)
  //   returns 2: ''
  //   example 3: _phpCastString('foo')
  //   returns 3: 'foo'
  //   example 4: _phpCastString(0/0)
  //   returns 4: 'NAN'
  //   example 5: _phpCastString(1/0)
  //   returns 5: 'INF'
  //   example 6: _phpCastString(-1/0)
  //   returns 6: '-INF'
  //   example 7: _phpCastString(null)
  //   returns 7: ''
  //   example 8: _phpCastString(undefined)
  //   returns 8: ''
  //   example 9: _phpCastString([])
  //   returns 9: 'Array'
  //   example 10: _phpCastString({})
  //   returns 10: 'Object'
  //   example 11: _phpCastString(0)
  //   returns 11: '0'
  //   example 12: _phpCastString(1)
  //   returns 12: '1'
  //   example 13: _phpCastString(3.14)
  //   returns 13: '3.14'

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'boolean':
      return value ? '1' : '';
    case 'string':
      return value;
    case 'number':
      if (isNaN(value)) {
        return 'NAN';
      }

      if (!isFinite(value)) {
        return (value < 0 ? '-' : '') + 'INF';
      }

      return value + '';
    case 'undefined':
      return '';
    case 'object':
      if (Array.isArray(value)) {
        return 'Array';
      }

      if (value !== null) {
        return 'Object';
      }

      return '';
    case 'function':
    // fall through
    default:
      throw new Error('Unsupported value type');
  }
};
//# sourceMappingURL=_phpCastString.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reSpace = '[ \\t]+';
var reSpaceOpt = '[ \\t]*';
var reMeridian = '(?:([ap])\\.?m\\.?([\\t ]|$))';
var reHour24 = '(2[0-4]|[01]?[0-9])';
var reHour24lz = '([01][0-9]|2[0-4])';
var reHour12 = '(0?[1-9]|1[0-2])';
var reMinute = '([0-5]?[0-9])';
var reMinutelz = '([0-5][0-9])';
var reSecond = '(60|[0-5]?[0-9])';
var reSecondlz = '(60|[0-5][0-9])';
var reFrac = '(?:\\.([0-9]+))';

var reDayfull = 'sunday|monday|tuesday|wednesday|thursday|friday|saturday';
var reDayabbr = 'sun|mon|tue|wed|thu|fri|sat';
var reDaytext = reDayfull + '|' + reDayabbr + '|weekdays?';

var reReltextnumber = 'first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth';
var reReltexttext = 'next|last|previous|this';
var reReltextunit = '(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|' + reDaytext;

var reYear = '([0-9]{1,4})';
var reYear2 = '([0-9]{2})';
var reYear4 = '([0-9]{4})';
var reYear4withSign = '([+-]?[0-9]{4})';
var reMonth = '(1[0-2]|0?[0-9])';
var reMonthlz = '(0[0-9]|1[0-2])';
var reDay = '(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)';
var reDaylz = '(0[0-9]|[1-2][0-9]|3[01])';

var reMonthFull = 'january|february|march|april|may|june|july|august|september|october|november|december';
var reMonthAbbr = 'jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec';
var reMonthroman = 'i[vx]|vi{0,3}|xi{0,2}|i{1,3}';
var reMonthText = '(' + reMonthFull + '|' + reMonthAbbr + '|' + reMonthroman + ')';

var reTzCorrection = '((?:GMT)?([+-])' + reHour24 + ':?' + reMinute + '?)';
var reDayOfYear = '(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])';
var reWeekOfYear = '(0[1-9]|[1-4][0-9]|5[0-3])';

var reDateNoYear = reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]*';

function processMeridian(hour, meridian) {
  meridian = meridian && meridian.toLowerCase();

  switch (meridian) {
    case 'a':
      hour += hour === 12 ? -12 : 0;
      break;
    case 'p':
      hour += hour !== 12 ? 12 : 0;
      break;
  }

  return hour;
}

function processYear(yearStr) {
  var year = +yearStr;

  if (yearStr.length < 4 && year < 100) {
    year += year < 70 ? 2000 : 1900;
  }

  return year;
}

function lookupMonth(monthStr) {
  return {
    jan: 0,
    january: 0,
    i: 0,
    feb: 1,
    february: 1,
    ii: 1,
    mar: 2,
    march: 2,
    iii: 2,
    apr: 3,
    april: 3,
    iv: 3,
    may: 4,
    v: 4,
    jun: 5,
    june: 5,
    vi: 5,
    jul: 6,
    july: 6,
    vii: 6,
    aug: 7,
    august: 7,
    viii: 7,
    sep: 8,
    sept: 8,
    september: 8,
    ix: 8,
    oct: 9,
    october: 9,
    x: 9,
    nov: 10,
    november: 10,
    xi: 10,
    dec: 11,
    december: 11,
    xii: 11
  }[monthStr.toLowerCase()];
}

function lookupWeekday(dayStr) {
  var desiredSundayNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var dayNumbers = {
    mon: 1,
    monday: 1,
    tue: 2,
    tuesday: 2,
    wed: 3,
    wednesday: 3,
    thu: 4,
    thursday: 4,
    fri: 5,
    friday: 5,
    sat: 6,
    saturday: 6,
    sun: 0,
    sunday: 0
  };

  return dayNumbers[dayStr.toLowerCase()] || desiredSundayNumber;
}

function lookupRelative(relText) {
  var relativeNumbers = {
    last: -1,
    previous: -1,
    this: 0,
    first: 1,
    next: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eight: 8,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12
  };

  var relativeBehavior = {
    this: 1
  };

  var relTextLower = relText.toLowerCase();

  return {
    amount: relativeNumbers[relTextLower],
    behavior: relativeBehavior[relTextLower] || 0
  };
}

function processTzCorrection(tzOffset, oldValue) {
  var reTzCorrectionLoose = /(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i;
  tzOffset = tzOffset && tzOffset.match(reTzCorrectionLoose);

  if (!tzOffset) {
    return oldValue;
  }

  var sign = tzOffset[1] === '-' ? 1 : -1;
  var hours = +tzOffset[2];
  var minutes = +tzOffset[4];

  if (!tzOffset[4] && !tzOffset[3]) {
    minutes = Math.floor(hours % 100);
    hours = Math.floor(hours / 100);
  }

  return sign * (hours * 60 + minutes);
}

var formats = {
  yesterday: {
    regex: /^yesterday/i,
    name: 'yesterday',
    callback: function callback() {
      this.rd -= 1;
      return this.resetTime();
    }
  },

  now: {
    regex: /^now/i,
    name: 'now'
    // do nothing
  },

  noon: {
    regex: /^noon/i,
    name: 'noon',
    callback: function callback() {
      return this.resetTime() && this.time(12, 0, 0, 0);
    }
  },

  midnightOrToday: {
    regex: /^(midnight|today)/i,
    name: 'midnight | today',
    callback: function callback() {
      return this.resetTime();
    }
  },

  tomorrow: {
    regex: /^tomorrow/i,
    name: 'tomorrow',
    callback: function callback() {
      this.rd += 1;
      return this.resetTime();
    }
  },

  timestamp: {
    regex: /^@(-?\d+)/i,
    name: 'timestamp',
    callback: function callback(match, timestamp) {
      this.rs += +timestamp;
      this.y = 1970;
      this.m = 0;
      this.d = 1;
      this.dates = 0;

      return this.resetTime() && this.zone(0);
    }
  },

  firstOrLastDay: {
    regex: /^(first|last) day of/i,
    name: 'firstdayof | lastdayof',
    callback: function callback(match, day) {
      if (day.toLowerCase() === 'first') {
        this.firstOrLastDayOfMonth = 1;
      } else {
        this.firstOrLastDayOfMonth = -1;
      }
    }
  },

  backOrFrontOf: {
    regex: RegExp('^(back|front) of ' + reHour24 + reSpaceOpt + reMeridian + '?', 'i'),
    name: 'backof | frontof',
    callback: function callback(match, side, hours, meridian) {
      var back = side.toLowerCase() === 'back';
      var hour = +hours;
      var minute = 15;

      if (!back) {
        hour -= 1;
        minute = 45;
      }

      hour = processMeridian(hour, meridian);

      return this.resetTime() && this.time(hour, minute, 0, 0);
    }
  },

  weekdayOf: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reDayfull + '|' + reDayabbr + ')' + reSpace + 'of', 'i'),
    name: 'weekdayof'
    // todo
  },

  mssqltime: {
    regex: RegExp('^' + reHour12 + ':' + reMinutelz + ':' + reSecondlz + '[:.]([0-9]+)' + reMeridian, 'i'),
    name: 'mssqltime',
    callback: function callback(match, hour, minute, second, frac, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, +frac.substr(0, 3));
    }
  },

  timeLong12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'timelong12',
    callback: function callback(match, hour, minute, second, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  timeShort12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'timeshort12',
    callback: function callback(match, hour, minute, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  },

  timeTiny12: {
    regex: RegExp('^' + reHour12 + reSpaceOpt + reMeridian, 'i'),
    name: 'timetiny12',
    callback: function callback(match, hour, meridian) {
      return this.time(processMeridian(+hour, meridian), 0, 0, 0);
    }
  },

  soap: {
    regex: RegExp('^' + reYear4 + '-' + reMonthlz + '-' + reDaylz + 'T' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reFrac + reTzCorrection + '?', 'i'),
    name: 'soap',
    callback: function callback(match, year, month, day, hour, minute, second, frac, tzCorrection) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, +frac.substr(0, 3)) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  wddx: {
    regex: RegExp('^' + reYear4 + '-' + reMonth + '-' + reDay + 'T' + reHour24 + ':' + reMinute + ':' + reSecond),
    name: 'wddx',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  exif: {
    regex: RegExp('^' + reYear4 + ':' + reMonthlz + ':' + reDaylz + ' ' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz, 'i'),
    name: 'exif',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpc: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + 'T' + reHour24 + ':' + reMinutelz + ':' + reSecondlz),
    name: 'xmlrpc',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpcNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + '[Tt]' + reHour24 + reMinutelz + reSecondlz),
    name: 'xmlrpcnocolon',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  clf: {
    regex: RegExp('^' + reDay + '/(' + reMonthAbbr + ')/' + reYear4 + ':' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reSpace + reTzCorrection, 'i'),
    name: 'clf',
    callback: function callback(match, day, month, year, hour, minute, second, tzCorrection) {
      return this.ymd(+year, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  iso8601long: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond + reFrac, 'i'),
    name: 'iso8601long',
    callback: function callback(match, hour, minute, second, frac) {
      return this.time(+hour, +minute, +second, +frac.substr(0, 3));
    }
  },

  dateTextual: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]+' + reYear, 'i'),
    name: 'datetextual',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  pointedDate4: {
    regex: RegExp('^' + reDay + '[.\\t-]' + reMonth + '[.-]' + reYear4),
    name: 'pointeddate4',
    callback: function callback(match, day, month, year) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pointedDate2: {
    regex: RegExp('^' + reDay + '[.\\t]' + reMonth + '\\.' + reYear2),
    name: 'pointeddate2',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  timeLong24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond),
    name: 'timelong24',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  dateNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz),
    name: 'datenocolon',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pgydotd: {
    regex: RegExp('^' + reYear4 + '\\.?' + reDayOfYear),
    name: 'pgydotd',
    callback: function callback(match, year, day) {
      return this.ymd(+year, 0, +day);
    }
  },

  timeShort24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'timeshort24',
    callback: function callback(match, hour, minute) {
      return this.time(+hour, +minute, 0, 0);
    }
  },

  iso8601noColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz + reSecondlz, 'i'),
    name: 'iso8601nocolon',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  iso8601dateSlash: {
    // eventhough the trailing slash is optional in PHP
    // here it's mandatory and inputs without the slash
    // are handled by dateslash
    regex: RegExp('^' + reYear4 + '/' + reMonthlz + '/' + reDaylz + '/'),
    name: 'iso8601dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  dateSlash: {
    regex: RegExp('^' + reYear4 + '/' + reMonth + '/' + reDay),
    name: 'dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  american: {
    regex: RegExp('^' + reMonth + '/' + reDay + '/' + reYear),
    name: 'american',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  americanShort: {
    regex: RegExp('^' + reMonth + '/' + reDay),
    name: 'americanshort',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, month - 1, +day);
    }
  },

  gnuDateShortOrIso8601date2: {
    // iso8601date2 is complete subset of gnudateshort
    regex: RegExp('^' + reYear + '-' + reMonth + '-' + reDay),
    name: 'gnudateshort | iso8601date2',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  iso8601date4: {
    regex: RegExp('^' + reYear4withSign + '-' + reMonthlz + '-' + reDaylz),
    name: 'iso8601date4',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  gnuNoColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz, 'i'),
    name: 'gnunocolon',
    callback: function callback(match, hour, minute) {
      // this rule is a special case
      // if time was already set once by any preceding rule, it sets the captured value as year
      switch (this.times) {
        case 0:
          return this.time(+hour, +minute, 0, this.f);
        case 1:
          this.y = hour * 100 + +minute;
          this.times++;

          return true;
        default:
          return false;
      }
    }
  },

  gnuDateShorter: {
    regex: RegExp('^' + reYear4 + '-' + reMonth),
    name: 'gnudateshorter',
    callback: function callback(match, year, month) {
      return this.ymd(+year, month - 1, 1);
    }
  },

  pgTextReverse: {
    // note: allowed years are from 32-9999
    // years below 32 should be treated as days in datefull
    regex: RegExp('^' + '(\\d{3,4}|[4-9]\\d|3[2-9])-(' + reMonthAbbr + ')-' + reDaylz, 'i'),
    name: 'pgtextreverse',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateFull: {
    regex: RegExp('^' + reDay + '[ \\t.-]*' + reMonthText + '[ \\t.-]*' + reYear, 'i'),
    name: 'datefull',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoDay: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reYear4, 'i'),
    name: 'datenoday',
    callback: function callback(match, month, year) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  dateNoDayRev: {
    regex: RegExp('^' + reYear4 + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenodayrev',
    callback: function callback(match, year, month) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  pgTextShort: {
    regex: RegExp('^(' + reMonthAbbr + ')-' + reDaylz + '-' + reYear, 'i'),
    name: 'pgtextshort',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoYear: {
    regex: RegExp('^' + reDateNoYear, 'i'),
    name: 'datenoyear',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  dateNoYearRev: {
    regex: RegExp('^' + reDay + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenoyearrev',
    callback: function callback(match, day, month) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  isoWeekDay: {
    regex: RegExp('^' + reYear4 + '-?W' + reWeekOfYear + '(?:-?([0-7]))?'),
    name: 'isoweekday | isoweek',
    callback: function callback(match, year, week, day) {
      day = day ? +day : 1;

      if (!this.ymd(+year, 0, 1)) {
        return false;
      }

      // get day of week for Jan 1st
      var dayOfWeek = new Date(this.y, this.m, this.d).getDay();

      // and use the day to figure out the offset for day 1 of week 1
      dayOfWeek = 0 - (dayOfWeek > 4 ? dayOfWeek - 7 : dayOfWeek);

      this.rd += dayOfWeek + (week - 1) * 7 + day;
    }
  },

  relativeText: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reReltextunit + ')', 'i'),
    name: 'relativetext',
    callback: function callback(match, relValue, relUnit) {
      // todo: implement handling of 'this time-unit'
      // eslint-disable-next-line no-unused-vars
      var _lookupRelative = lookupRelative(relValue),
          amount = _lookupRelative.amount,
          behavior = _lookupRelative.behavior;

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':case 'monday':
        case 'tue':case 'tuesday':
        case 'wed':case 'wednesday':
        case 'thu':case 'thursday':
        case 'fri':case 'friday':
        case 'sat':case 'saturday':
        case 'sun':case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
        case 'weekday':
        case 'weekdays':
          // todo
          break;
      }
    }
  },

  relative: {
    regex: RegExp('^([+-]*)[ \\t]*(\\d+)' + reSpaceOpt + '(' + reReltextunit + '|week)', 'i'),
    name: 'relative',
    callback: function callback(match, signs, relValue, relUnit) {
      var minuses = signs.replace(/[^-]/g, '').length;

      var amount = +relValue * Math.pow(-1, minuses);

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':case 'monday':
        case 'tue':case 'tuesday':
        case 'wed':case 'wednesday':
        case 'thu':case 'thursday':
        case 'fri':case 'friday':
        case 'sat':case 'saturday':
        case 'sun':case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
        case 'weekday':
        case 'weekdays':
          // todo
          break;
      }
    }
  },

  dayText: {
    regex: RegExp('^(' + reDaytext + ')', 'i'),
    name: 'daytext',
    callback: function callback(match, dayText) {
      this.resetTime();
      this.weekday = lookupWeekday(dayText, 0);

      if (this.weekdayBehavior !== 2) {
        this.weekdayBehavior = 1;
      }
    }
  },

  relativeTextWeek: {
    regex: RegExp('^(' + reReltexttext + ')' + reSpace + 'week', 'i'),
    name: 'relativetextweek',
    callback: function callback(match, relText) {
      this.weekdayBehavior = 2;

      switch (relText.toLowerCase()) {
        case 'this':
          this.rd += 0;
          break;
        case 'next':
          this.rd += 7;
          break;
        case 'last':
        case 'previous':
          this.rd -= 7;
          break;
      }

      if (isNaN(this.weekday)) {
        this.weekday = 1;
      }
    }
  },

  monthFullOrMonthAbbr: {
    regex: RegExp('^(' + reMonthFull + '|' + reMonthAbbr + ')', 'i'),
    name: 'monthfull | monthabbr',
    callback: function callback(match, month) {
      return this.ymd(this.y, lookupMonth(month), this.d);
    }
  },

  tzCorrection: {
    regex: RegExp('^' + reTzCorrection, 'i'),
    name: 'tzcorrection',
    callback: function callback(tzCorrection) {
      return this.zone(processTzCorrection(tzCorrection));
    }
  },

  ago: {
    regex: /^ago/i,
    name: 'ago',
    callback: function callback() {
      this.ry = -this.ry;
      this.rm = -this.rm;
      this.rd = -this.rd;
      this.rh = -this.rh;
      this.ri = -this.ri;
      this.rs = -this.rs;
      this.rf = -this.rf;
    }
  },

  year4: {
    regex: RegExp('^' + reYear4),
    name: 'year4',
    callback: function callback(match, year) {
      this.y = +year;
      return true;
    }
  },

  whitespace: {
    regex: /^[ .,\t]+/,
    name: 'whitespace'
    // do nothing
  },

  dateShortWithTimeLong: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond, 'i'),
    name: 'dateshortwithtimelong',
    callback: function callback(match, month, day, hour, minute, second) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  dateShortWithTimeLong12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimelong12',
    callback: function callback(match, month, day, hour, minute, second, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  dateShortWithTimeShort: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'dateshortwithtimeshort',
    callback: function callback(match, month, day, hour, minute) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, 0, 0);
    }
  },

  dateShortWithTimeShort12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimeshort12',
    callback: function callback(match, month, day, hour, minute, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  }
};

var resultProto = {
  // date
  y: NaN,
  m: NaN,
  d: NaN,
  // time
  h: NaN,
  i: NaN,
  s: NaN,
  f: NaN,

  // relative shifts
  ry: 0,
  rm: 0,
  rd: 0,
  rh: 0,
  ri: 0,
  rs: 0,
  rf: 0,

  // weekday related shifts
  weekday: NaN,
  weekdayBehavior: 0,

  // first or last day of month
  // 0 none, 1 first, -1 last
  firstOrLastDayOfMonth: 0,

  // timezone correction in minutes
  z: NaN,

  // counters
  dates: 0,
  times: 0,
  zones: 0,

  // helper functions
  ymd: function ymd(y, m, d) {
    if (this.dates > 0) {
      return false;
    }

    this.dates++;
    this.y = y;
    this.m = m;
    this.d = d;
    return true;
  },
  time: function time(h, i, s, f) {
    if (this.times > 0) {
      return false;
    }

    this.times++;
    this.h = h;
    this.i = i;
    this.s = s;
    this.f = f;

    return true;
  },
  resetTime: function resetTime() {
    this.h = 0;
    this.i = 0;
    this.s = 0;
    this.f = 0;
    this.times = 0;

    return true;
  },
  zone: function zone(minutes) {
    if (this.zones <= 1) {
      this.zones++;
      this.z = minutes;
      return true;
    }

    return false;
  },
  toDate: function toDate(relativeTo) {
    if (this.dates && !this.times) {
      this.h = this.i = this.s = this.f = 0;
    }

    // fill holes
    if (isNaN(this.y)) {
      this.y = relativeTo.getFullYear();
    }

    if (isNaN(this.m)) {
      this.m = relativeTo.getMonth();
    }

    if (isNaN(this.d)) {
      this.d = relativeTo.getDate();
    }

    if (isNaN(this.h)) {
      this.h = relativeTo.getHours();
    }

    if (isNaN(this.i)) {
      this.i = relativeTo.getMinutes();
    }

    if (isNaN(this.s)) {
      this.s = relativeTo.getSeconds();
    }

    if (isNaN(this.f)) {
      this.f = relativeTo.getMilliseconds();
    }

    // adjust special early
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        this.d = 1;
        break;
      case -1:
        this.d = 0;
        this.m += 1;
        break;
    }

    if (!isNaN(this.weekday)) {
      var date = new Date(relativeTo.getTime());
      date.setFullYear(this.y, this.m, this.d);
      date.setHours(this.h, this.i, this.s, this.f);

      var dow = date.getDay();

      if (this.weekdayBehavior === 2) {
        // To make "this week" work, where the current day of week is a "sunday"
        if (dow === 0 && this.weekday !== 0) {
          this.weekday = -6;
        }

        // To make "sunday this week" work, where the current day of week is not a "sunday"
        if (this.weekday === 0 && dow !== 0) {
          this.weekday = 7;
        }

        this.d -= dow;
        this.d += this.weekday;
      } else {
        var diff = this.weekday - dow;

        // some PHP magic
        if (this.rd < 0 && diff < 0 || this.rd >= 0 && diff <= -this.weekdayBehavior) {
          diff += 7;
        }

        if (this.weekday >= 0) {
          this.d += diff;
        } else {
          this.d -= 7 - (Math.abs(this.weekday) - dow);
        }

        this.weekday = NaN;
      }
    }

    // adjust relative
    this.y += this.ry;
    this.m += this.rm;
    this.d += this.rd;

    this.h += this.rh;
    this.i += this.ri;
    this.s += this.rs;
    this.f += this.rf;

    this.ry = this.rm = this.rd = 0;
    this.rh = this.ri = this.rs = this.rf = 0;

    var result = new Date(relativeTo.getTime());
    // since Date constructor treats years <= 99 as 1900+
    // it can't be used, thus this weird way
    result.setFullYear(this.y, this.m, this.d);
    result.setHours(this.h, this.i, this.s, this.f);

    // note: this is done twice in PHP
    // early when processing special relatives
    // and late
    // todo: check if the logic can be reduced
    // to just one time action
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        result.setDate(1);
        break;
      case -1:
        result.setMonth(result.getMonth() + 1, 0);
        break;
    }

    // adjust timezone
    if (!isNaN(this.z) && result.getTimezoneOffset() !== this.z) {
      result.setUTCFullYear(result.getFullYear(), result.getMonth(), result.getDate());

      result.setUTCHours(result.getHours(), result.getMinutes() + this.z, result.getSeconds(), result.getMilliseconds());
    }

    return result;
  }
};

module.exports = function strtotime(str, now) {
  //       discuss at: https://locutus.io/php/strtotime/
  //      original by: Caio Ariede (https://caioariede.com)
  //      improved by: Kevin van Zonneveld (https://kvz.io)
  //      improved by: Caio Ariede (https://caioariede.com)
  //      improved by: A. Matías Quezada (https://amatiasq.com)
  //      improved by: preuter
  //      improved by: Brett Zamir (https://brett-zamir.me)
  //      improved by: Mirko Faber
  //         input by: David
  //      bugfixed by: Wagner B. Soares
  //      bugfixed by: Artur Tchernychev
  //      bugfixed by: Stephan Bösch-Plepelits (https://github.com/plepe)
  // reimplemented by: Rafał Kukawski
  //           note 1: Examples all have a fixed timestamp to prevent
  //           note 1: tests to fail because of variable time(zones)
  //        example 1: strtotime('+1 day', 1129633200)
  //        returns 1: 1129719600
  //        example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200)
  //        returns 2: 1130425202
  //        example 3: strtotime('last month', 1129633200)
  //        returns 3: 1127041200
  //        example 4: strtotime('2009-05-04 08:30:00+00')
  //        returns 4: 1241425800
  //        example 5: strtotime('2009-05-04 08:30:00+02:00')
  //        returns 5: 1241418600

  if (now == null) {
    now = Math.floor(Date.now() / 1000);
  }

  // the rule order is important
  // if multiple rules match, the longest match wins
  // if multiple rules match the same string, the first match wins
  var rules = [formats.yesterday, formats.now, formats.noon, formats.midnightOrToday, formats.tomorrow, formats.timestamp, formats.firstOrLastDay, formats.backOrFrontOf,
  // formats.weekdayOf, // not yet implemented
  formats.timeTiny12, formats.timeShort12, formats.timeLong12, formats.mssqltime, formats.timeShort24, formats.timeLong24, formats.iso8601long, formats.gnuNoColon, formats.iso8601noColon, formats.americanShort, formats.american, formats.iso8601date4, formats.iso8601dateSlash, formats.dateSlash, formats.gnuDateShortOrIso8601date2, formats.gnuDateShorter, formats.dateFull, formats.pointedDate4, formats.pointedDate2, formats.dateNoDay, formats.dateNoDayRev, formats.dateTextual, formats.dateNoYear, formats.dateNoYearRev, formats.dateNoColon, formats.xmlRpc, formats.xmlRpcNoColon, formats.soap, formats.wddx, formats.exif, formats.pgydotd, formats.isoWeekDay, formats.pgTextShort, formats.pgTextReverse, formats.clf, formats.year4, formats.ago, formats.dayText, formats.relativeTextWeek, formats.relativeText, formats.monthFullOrMonthAbbr, formats.tzCorrection, formats.dateShortWithTimeShort12, formats.dateShortWithTimeLong12, formats.dateShortWithTimeShort, formats.dateShortWithTimeLong, formats.relative, formats.whitespace];

  var result = Object.create(resultProto);

  while (str.length) {
    var longestMatch = null;
    var finalRule = null;

    for (var i = 0, l = rules.length; i < l; i++) {
      var format = rules[i];

      var match = str.match(format.regex);

      if (match) {
        if (!longestMatch || match[0].length > longestMatch[0].length) {
          longestMatch = match;
          finalRule = format;
        }
      }
    }

    if (!finalRule || finalRule.callback && finalRule.callback.apply(result, longestMatch) === false) {
      return false;
    }

    str = str.substr(longestMatch[0].length);
    finalRule = null;
    longestMatch = null;
  }

  return Math.floor(result.toDate(new Date(now * 1000)) / 1000);
};
//# sourceMappingURL=strtotime.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function date(format, timestamp) {
  //  discuss at: https://locutus.io/php/date/
  // original by: Carlos R. L. Rodrigues (https://www.jsfromhell.com)
  // original by: gettimeofday
  //    parts by: Peter-Paul Koch (https://www.quirksmode.org/js/beat.html)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: MeEtc (https://yass.meetcweb.com)
  // improved by: Brad Touesnard
  // improved by: Tim Wiel
  // improved by: Bryan Elliott
  // improved by: David Randall
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Brett Zamir (https://brett-zamir.me)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Thomas Beaucourt (https://www.webapp.fr)
  // improved by: JT
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Rafał Kukawski (https://blog.kukawski.pl)
  // improved by: Theriault (https://github.com/Theriault)
  //    input by: Brett Zamir (https://brett-zamir.me)
  //    input by: majak
  //    input by: Alex
  //    input by: Martin
  //    input by: Alex Wilson
  //    input by: Haravikk
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: majak
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Brett Zamir (https://brett-zamir.me)
  // bugfixed by: omid (https://locutus.io/php/380:380#comment_137122)
  // bugfixed by: Chris (https://www.devotis.nl/)
  //      note 1: Uses global: locutus to store the default timezone
  //      note 1: Although the function potentially allows timezone info
  //      note 1: (see notes), it currently does not set
  //      note 1: per a timezone specified by date_default_timezone_set(). Implementers might use
  //      note 1: $locutus.currentTimezoneOffset and
  //      note 1: $locutus.currentTimezoneDST set by that function
  //      note 1: in order to adjust the dates in this function
  //      note 1: (or our other date functions!) accordingly
  //   example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400)
  //   returns 1: '07:09:40 m is month'
  //   example 2: date('F j, Y, g:i a', 1062462400)
  //   returns 2: 'September 2, 2003, 12:26 am'
  //   example 3: date('Y W o', 1062462400)
  //   returns 3: '2003 36 2003'
  //   example 4: var $x = date('Y m d', (new Date()).getTime() / 1000)
  //   example 4: $x = $x + ''
  //   example 4: var $result = $x.length // 2009 01 09
  //   returns 4: 10
  //   example 5: date('W', 1104534000)
  //   returns 5: '52'
  //   example 6: date('B t', 1104534000)
  //   returns 6: '999 31'
  //   example 7: date('W U', 1293750000.82); // 2010-12-31
  //   returns 7: '52 1293750000'
  //   example 8: date('W', 1293836400); // 2011-01-01
  //   returns 8: '52'
  //   example 9: date('W Y-m-d', 1293974054); // 2011-01-02
  //   returns 9: '52 2011-01-02'
  //        test: skip-1 skip-2 skip-5

  var jsdate, f;
  // Keep this here (works, but for code commented-out below for file size reasons)
  // var tal= [];
  var txtWords = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // trailing backslash -> (dropped)
  // a backslash followed by any character (including backslash) -> the character
  // empty string -> empty string
  var formatChr = /\\?(.?)/gi;
  var formatChrCb = function formatChrCb(t, s) {
    return f[t] ? f[t]() : s;
  };
  var _pad = function _pad(n, c) {
    n = String(n);
    while (n.length < c) {
      n = '0' + n;
    }
    return n;
  };
  f = {
    // Day
    d: function d() {
      // Day of month w/leading 0; 01..31
      return _pad(f.j(), 2);
    },
    D: function D() {
      // Shorthand day name; Mon...Sun
      return f.l().slice(0, 3);
    },
    j: function j() {
      // Day of month; 1..31
      return jsdate.getDate();
    },
    l: function l() {
      // Full day name; Monday...Sunday
      return txtWords[f.w()] + 'day';
    },
    N: function N() {
      // ISO-8601 day of week; 1[Mon]..7[Sun]
      return f.w() || 7;
    },
    S: function S() {
      // Ordinal suffix for day of month; st, nd, rd, th
      var j = f.j();
      var i = j % 10;
      if (i <= 3 && parseInt(j % 100 / 10, 10) === 1) {
        i = 0;
      }
      return ['st', 'nd', 'rd'][i - 1] || 'th';
    },
    w: function w() {
      // Day of week; 0[Sun]..6[Sat]
      return jsdate.getDay();
    },
    z: function z() {
      // Day of year; 0..365
      var a = new Date(f.Y(), f.n() - 1, f.j());
      var b = new Date(f.Y(), 0, 1);
      return Math.round((a - b) / 864e5);
    },

    // Week
    W: function W() {
      // ISO-8601 week number
      var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
      var b = new Date(a.getFullYear(), 0, 4);
      return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
    },

    // Month
    F: function F() {
      // Full month name; January...December
      return txtWords[6 + f.n()];
    },
    m: function m() {
      // Month w/leading 0; 01...12
      return _pad(f.n(), 2);
    },
    M: function M() {
      // Shorthand month name; Jan...Dec
      return f.F().slice(0, 3);
    },
    n: function n() {
      // Month; 1...12
      return jsdate.getMonth() + 1;
    },
    t: function t() {
      // Days in month; 28...31
      return new Date(f.Y(), f.n(), 0).getDate();
    },

    // Year
    L: function L() {
      // Is leap year?; 0 or 1
      var j = f.Y();
      return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
    },
    o: function o() {
      // ISO-8601 year
      var n = f.n();
      var W = f.W();
      var Y = f.Y();
      return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
    },
    Y: function Y() {
      // Full year; e.g. 1980...2010
      return jsdate.getFullYear();
    },
    y: function y() {
      // Last two digits of year; 00...99
      return f.Y().toString().slice(-2);
    },

    // Time
    a: function a() {
      // am or pm
      return jsdate.getHours() > 11 ? 'pm' : 'am';
    },
    A: function A() {
      // AM or PM
      return f.a().toUpperCase();
    },
    B: function B() {
      // Swatch Internet time; 000..999
      var H = jsdate.getUTCHours() * 36e2;
      // Hours
      var i = jsdate.getUTCMinutes() * 60;
      // Minutes
      // Seconds
      var s = jsdate.getUTCSeconds();
      return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
    },
    g: function g() {
      // 12-Hours; 1..12
      return f.G() % 12 || 12;
    },
    G: function G() {
      // 24-Hours; 0..23
      return jsdate.getHours();
    },
    h: function h() {
      // 12-Hours w/leading 0; 01..12
      return _pad(f.g(), 2);
    },
    H: function H() {
      // 24-Hours w/leading 0; 00..23
      return _pad(f.G(), 2);
    },
    i: function i() {
      // Minutes w/leading 0; 00..59
      return _pad(jsdate.getMinutes(), 2);
    },
    s: function s() {
      // Seconds w/leading 0; 00..59
      return _pad(jsdate.getSeconds(), 2);
    },
    u: function u() {
      // Microseconds; 000000-999000
      return _pad(jsdate.getMilliseconds() * 1000, 6);
    },

    // Timezone
    e: function e() {
      // Timezone identifier; e.g. Atlantic/Azores, ...
      // The following works, but requires inclusion of the very large
      // timezone_abbreviations_list() function.
      /*              return that.date_default_timezone_get();
       */
      var msg = 'Not supported (see source code of date() for timezone on how to add support)';
      throw new Error(msg);
    },
    I: function I() {
      // DST observed?; 0 or 1
      // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
      // If they are not equal, then DST is observed.
      var a = new Date(f.Y(), 0);
      // Jan 1
      var c = Date.UTC(f.Y(), 0);
      // Jan 1 UTC
      var b = new Date(f.Y(), 6);
      // Jul 1
      // Jul 1 UTC
      var d = Date.UTC(f.Y(), 6);
      return a - c !== b - d ? 1 : 0;
    },
    O: function O() {
      // Difference to GMT in hour format; e.g. +0200
      var tzo = jsdate.getTimezoneOffset();
      var a = Math.abs(tzo);
      return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
    },
    P: function P() {
      // Difference to GMT w/colon; e.g. +02:00
      var O = f.O();
      return O.substr(0, 3) + ':' + O.substr(3, 2);
    },
    T: function T() {
      // The following works, but requires inclusion of the very
      // large timezone_abbreviations_list() function.
      /*              var abbr, i, os, _default;
      if (!tal.length) {
        tal = that.timezone_abbreviations_list();
      }
      if ($locutus && $locutus.default_timezone) {
        _default = $locutus.default_timezone;
        for (abbr in tal) {
          for (i = 0; i < tal[abbr].length; i++) {
            if (tal[abbr][i].timezone_id === _default) {
              return abbr.toUpperCase();
            }
          }
        }
      }
      for (abbr in tal) {
        for (i = 0; i < tal[abbr].length; i++) {
          os = -jsdate.getTimezoneOffset() * 60;
          if (tal[abbr][i].offset === os) {
            return abbr.toUpperCase();
          }
        }
      }
      */
      return 'UTC';
    },
    Z: function Z() {
      // Timezone offset in seconds (-43200...50400)
      return -jsdate.getTimezoneOffset() * 60;
    },

    // Full Date/Time
    c: function c() {
      // ISO-8601 date.
      return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
    },
    r: function r() {
      // RFC 2822
      return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
    },
    U: function U() {
      // Seconds since UNIX epoch
      return jsdate / 1000 | 0;
    }
  };

  var _date = function _date(format, timestamp) {
    jsdate = timestamp === undefined ? new Date() // Not provided
    : timestamp instanceof Date ? new Date(timestamp) // JS Date()
    : new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
    ;
    return format.replace(formatChr, formatChrCb);
  };

  return _date(format, timestamp);
};
//# sourceMappingURL=date.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function boolval(mixedVar) {
  // original by: Will Rowe
  //   example 1: boolval(true)
  //   returns 1: true
  //   example 2: boolval(false)
  //   returns 2: false
  //   example 3: boolval(0)
  //   returns 3: false
  //   example 4: boolval(0.0)
  //   returns 4: false
  //   example 5: boolval('')
  //   returns 5: false
  //   example 6: boolval('0')
  //   returns 6: false
  //   example 7: boolval([])
  //   returns 7: false
  //   example 8: boolval('')
  //   returns 8: false
  //   example 9: boolval(null)
  //   returns 9: false
  //   example 10: boolval(undefined)
  //   returns 10: false
  //   example 11: boolval('true')
  //   returns 11: true

  if (mixedVar === false) {
    return false;
  }

  if (mixedVar === 0 || mixedVar === 0.0) {
    return false;
  }

  if (mixedVar === '' || mixedVar === '0') {
    return false;
  }

  if (Array.isArray(mixedVar) && mixedVar.length === 0) {
    return false;
  }

  if (mixedVar === null || mixedVar === undefined) {
    return false;
  }

  return true;
};
//# sourceMappingURL=boolval.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Twig) {
  'use strict';

  Twig.Templates.registerLoader('ajax', function (location, params, callback, errorCallback) {
    var template;
    var precompiled = params.precompiled;
    var parser = this.parsers[params.parser] || this.parser.twig;

    if (typeof XMLHttpRequest === 'undefined') {
      throw new Twig.Error('Unsupported platform: Unable to do ajax requests ' + 'because there is no "XMLHTTPRequest" implementation');
    }

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      var data = null;

      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200 || window.cordova && xmlhttp.status === 0) {
          Twig.log.debug('Got template ', xmlhttp.responseText);

          if (precompiled === true) {
            data = JSON.parse(xmlhttp.responseText);
          } else {
            data = xmlhttp.responseText;
          }

          params.url = location;
          params.data = data;
          template = parser.call(this, params);

          if (typeof callback === 'function') {
            callback(template);
          }
        } else if (typeof errorCallback === 'function') {
          errorCallback(xmlhttp);
        }
      }
    };

    xmlhttp.open('GET', location, Boolean(params.async));
    xmlhttp.overrideMimeType('text/plain');
    xmlhttp.send();

    if (params.async) {
      // TODO: return deferred promise
      return true;
    }

    return template;
  });
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Twig) {
  'use strict';

  var fs;
  var path;

  try {
    // Require lib dependencies at runtime
    fs = __webpack_require__(33);
    path = __webpack_require__(6);
  } catch (error) {
    // NOTE: this is in a try/catch to avoid errors cross platform
    console.warn('Missing fs and path modules. ' + error);
  }

  Twig.Templates.registerLoader('fs', function (location, params, callback, errorCallback) {
    var template;
    var data = null;
    var precompiled = params.precompiled;
    var parser = this.parsers[params.parser] || this.parser.twig;

    if (!fs || !path) {
      throw new Twig.Error('Unsupported platform: Unable to load from file ' + 'because there is no "fs" or "path" implementation');
    }

    var loadTemplateFn = function loadTemplateFn(err, data) {
      if (err) {
        if (typeof errorCallback === 'function') {
          errorCallback(err);
        }

        return;
      }

      if (precompiled === true) {
        data = JSON.parse(data);
      }

      params.data = data;
      params.path = params.path || location; // Template is in data

      template = parser.call(this, params);

      if (typeof callback === 'function') {
        callback(template);
      }
    };

    params.path = params.path || location;

    if (params.async) {
      fs.stat(params.path, function (err, stats) {
        if (err || !stats.isFile()) {
          if (typeof errorCallback === 'function') {
            errorCallback(new Twig.Error('Unable to find template file ' + params.path));
          }

          return;
        }

        fs.readFile(params.path, 'utf8', loadTemplateFn);
      }); // TODO: return deferred promise

      return true;
    }

    try {
      if (!fs.statSync(params.path).isFile()) {
        throw new Twig.Error('Unable to find template file ' + params.path);
      }
    } catch (error) {
      throw new Twig.Error('Unable to find template file ' + params.path + '. ' + error);
    }

    data = fs.readFileSync(params.path, 'utf8');
    loadTemplateFn(undefined, data);
    return template;
  });
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! fs */ 0);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// ## twig.logic.js
//
// This file handles tokenizing, compiling and parsing logic tokens. {% ... %}
module.exports = function (Twig) {
  'use strict';
  /**
   * Namespace for logic handling.
   */

  Twig.logic = {};
  /**
   * Logic token types.
   */

  Twig.logic.type = {
    if_: 'Twig.logic.type.if',
    endif: 'Twig.logic.type.endif',
    for_: 'Twig.logic.type.for',
    endfor: 'Twig.logic.type.endfor',
    else_: 'Twig.logic.type.else',
    elseif: 'Twig.logic.type.elseif',
    set: 'Twig.logic.type.set',
    setcapture: 'Twig.logic.type.setcapture',
    endset: 'Twig.logic.type.endset',
    filter: 'Twig.logic.type.filter',
    endfilter: 'Twig.logic.type.endfilter',
    apply: 'Twig.logic.type.apply',
    endapply: 'Twig.logic.type.endapply',
    "do": 'Twig.logic.type.do',
    shortblock: 'Twig.logic.type.shortblock',
    block: 'Twig.logic.type.block',
    endblock: 'Twig.logic.type.endblock',
    extends_: 'Twig.logic.type.extends',
    use: 'Twig.logic.type.use',
    include: 'Twig.logic.type.include',
    spaceless: 'Twig.logic.type.spaceless',
    endspaceless: 'Twig.logic.type.endspaceless',
    macro: 'Twig.logic.type.macro',
    endmacro: 'Twig.logic.type.endmacro',
    import_: 'Twig.logic.type.import',
    from: 'Twig.logic.type.from',
    embed: 'Twig.logic.type.embed',
    endembed: 'Twig.logic.type.endembed',
    "with": 'Twig.logic.type.with',
    endwith: 'Twig.logic.type.endwith',
    deprecated: 'Twig.logic.type.deprecated'
  }; // Regular expressions for handling logic tokens.
  //
  // Properties:
  //
  //      type:  The type of expression this matches
  //
  //      regex: A regular expression that matches the format of the token
  //
  //      next:  What logic tokens (if any) pop this token off the logic stack. If empty, the
  //             logic token is assumed to not require an end tag and isn't push onto the stack.
  //
  //      open:  Does this tag open a logic expression or is it standalone. For example,
  //             {% endif %} cannot exist without an opening {% if ... %} tag, so open = false.
  //
  //  Functions:
  //
  //      compile: A function that handles compiling the token into an output token ready for
  //               parsing with the parse function.
  //
  //      parse:   A function that parses the compiled token into output (HTML / whatever the
  //               template represents).

  Twig.logic.definitions = [{
    /**
     * If type logic tokens.
     *
     *  Format: {% if expression %}
     */
    type: Twig.logic.type.if_,
    regex: /^if\s?([\s\S]+)$/,
    next: [Twig.logic.type.else_, Twig.logic.type.elseif, Twig.logic.type.endif],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1]; // Compile the expression.

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (result) {
        chain = true;

        if (Twig.lib.boolval(result)) {
          chain = false;
          return state.parseAsync(token.output, context);
        }

        return '';
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * Else if type logic tokens.
     *
     *  Format: {% elseif expression %}
     */
    type: Twig.logic.type.elseif,
    regex: /^elseif\s?([^\s].*)$/,
    next: [Twig.logic.type.else_, Twig.logic.type.elseif, Twig.logic.type.endif],
    open: false,
    compile: function compile(token) {
      var expression = token.match[1]; // Compile the expression.

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (result) {
        if (chain && Twig.lib.boolval(result)) {
          chain = false;
          return state.parseAsync(token.output, context);
        }

        return '';
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * Else type logic tokens.
     *
     *  Format: {% else %}
     */
    type: Twig.logic.type.else_,
    regex: /^else$/,
    next: [Twig.logic.type.endif, Twig.logic.type.endfor],
    open: false,
    parse: function parse(token, context, chain) {
      var promise = Twig.Promise.resolve('');
      var state = this;

      if (chain) {
        promise = state.parseAsync(token.output, context);
      }

      return promise.then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * End if type logic tokens.
     *
     *  Format: {% endif %}
     */
    type: Twig.logic.type.endif,
    regex: /^endif$/,
    next: [],
    open: false
  }, {
    /**
     * For type logic tokens.
     *
     *  Format: {% for expression %}
     */
    type: Twig.logic.type.for_,
    regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([\S\s]+?)(?:\s+if\s+([^\s].*))?$/,
    next: [Twig.logic.type.else_, Twig.logic.type.endfor],
    open: true,
    compile: function compile(token) {
      var keyValue = token.match[1];
      var expression = token.match[2];
      var conditional = token.match[3];
      var kvSplit = null;
      token.keyVar = null;
      token.valueVar = null;

      if (keyValue.includes(',')) {
        kvSplit = keyValue.split(',');

        if (kvSplit.length === 2) {
          token.keyVar = kvSplit[0].trim();
          token.valueVar = kvSplit[1].trim();
        } else {
          throw new Twig.Error('Invalid expression in for loop: ' + keyValue);
        }
      } else {
        token.valueVar = keyValue.trim();
      } // Valid expressions for a for loop
      //   for item     in expression
      //   for key,item in expression
      // Compile the expression.


      token.expression = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack; // Compile the conditional (if available)

      if (conditional) {
        token.conditional = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: conditional
        }).stack;
      }

      delete token.match;
      return token;
    },
    parse: function parse(token, context, continueChain) {
      // Parse expression
      var output = [];
      var len;
      var index = 0;
      var keyset;
      var state = this;
      var conditional = token.conditional;

      var buildLoop = function buildLoop(index, len) {
        var isConditional = conditional !== undefined;
        return {
          index: index + 1,
          index0: index,
          revindex: isConditional ? undefined : len - index,
          revindex0: isConditional ? undefined : len - index - 1,
          first: index === 0,
          last: isConditional ? undefined : index === len - 1,
          length: isConditional ? undefined : len,
          parent: context
        };
      }; // Run once for each iteration of the loop


      var loop = function loop(key, value) {
        var innerContext = _objectSpread({}, context);

        innerContext[token.valueVar] = value;

        if (token.keyVar) {
          innerContext[token.keyVar] = key;
        } // Loop object


        innerContext.loop = buildLoop(index, len);
        var promise = conditional === undefined ? Twig.Promise.resolve(true) : Twig.expression.parseAsync.call(state, conditional, innerContext);
        return promise.then(function (condition) {
          if (!condition) {
            return;
          }

          return state.parseAsync(token.output, innerContext).then(function (tokenOutput) {
            output.push(tokenOutput);
            index += 1;
          });
        }).then(function () {
          // Delete loop-related variables from the context
          delete innerContext.loop;
          delete innerContext[token.valueVar];
          delete innerContext[token.keyVar]; // Merge in values that exist in context but have changed
          // in inner_context.

          Twig.merge(context, innerContext, true);
        });
      };

      return Twig.expression.parseAsync.call(state, token.expression, context).then(function (result) {
        if (Array.isArray(result)) {
          len = result.length;
          return Twig.async.forEach(result, function (value) {
            var key = index;
            return loop(key, value);
          });
        }

        if (Twig.lib.is('Object', result)) {
          if (result._keys === undefined) {
            keyset = Object.keys(result);
          } else {
            keyset = result._keys;
          }

          len = keyset.length;
          return Twig.async.forEach(keyset, function (key) {
            // Ignore the _keys property, it's internal to twig.js
            if (key === '_keys') {
              return;
            }

            return loop(key, result[key]);
          });
        }
      }).then(function () {
        // Only allow else statements if no output was generated
        continueChain = output.length === 0;
        return {
          chain: continueChain,
          context: context,
          output: Twig.output.call(state.template, output)
        };
      });
    }
  }, {
    /**
     * End for type logic tokens.
     *
     *  Format: {% endfor %}
     */
    type: Twig.logic.type.endfor,
    regex: /^endfor$/,
    next: [],
    open: false
  }, {
    /**
     * Set type logic tokens.
     *
     *  Format: {% set key = expression %}
     */
    type: Twig.logic.type.set,
    regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      //
      var key = token.match[1].trim();
      var expression = token.match[2]; // Compile the expression.

      var expressionStack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      token.key = key;
      token.expression = expressionStack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, continueChain) {
      var key = token.key;
      var state = this;
      return Twig.expression.parseAsync.call(state, token.expression, context).then(function (value) {
        if (value === context) {
          /*  If storing the context in a variable, it needs to be a clone of the current state of context.
              Otherwise we have a context with infinite recursion.
              Fixes #341
          */
          value = _objectSpread({}, value);
        }

        context[key] = value;
        return {
          chain: continueChain,
          context: context
        };
      });
    }
  }, {
    /**
     * Set capture type logic tokens.
     *
     *  Format: {% set key %}
     */
    type: Twig.logic.type.setcapture,
    regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
    next: [Twig.logic.type.endset],
    open: true,
    compile: function compile(token) {
      var key = token.match[1].trim();
      token.key = key;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, continueChain) {
      var state = this;
      var key = token.key;
      return state.parseAsync(token.output, context).then(function (output) {
        // Set on both the global and local context
        state.context[key] = output;
        context[key] = output;
        return {
          chain: continueChain,
          context: context
        };
      });
    }
  }, {
    /**
     * End set type block logic tokens.
     *
     *  Format: {% endset %}
     */
    type: Twig.logic.type.endset,
    regex: /^endset$/,
    next: [],
    open: false
  }, {
    /**
     * Filter logic tokens.
     *
     *  Format: {% filter upper %} or {% filter lower|escape %}
     */
    type: Twig.logic.type.filter,
    regex: /^filter\s+(.+)$/,
    next: [Twig.logic.type.endfilter],
    open: true,
    compile: function compile(token) {
      var expression = '|' + token.match[1].trim(); // Compile the expression.

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return state.parseAsync(token.output, context).then(function (output) {
        var stack = [{
          type: Twig.expression.type.string,
          value: output
        }].concat(token.stack);
        return Twig.expression.parseAsync.call(state, stack, context);
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * End filter logic tokens.
     *
     *  Format: {% endfilter %}
     */
    type: Twig.logic.type.endfilter,
    regex: /^endfilter$/,
    next: [],
    open: false
  }, {
    /**
     * Apply logic tokens.
     *
     *  Format: {% apply upper %} or {% apply lower|escape %}
     */
    type: Twig.logic.type.apply,
    regex: /^apply\s+(.+)$/,
    next: [Twig.logic.type.endapply],
    open: true,
    compile: function compile(token) {
      var expression = '|' + token.match[1].trim(); // Compile the expression.

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return state.parseAsync(token.output, context).then(function (output) {
        var stack = [{
          type: Twig.expression.type.string,
          value: output
        }].concat(token.stack);
        return Twig.expression.parseAsync.call(state, stack, context);
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * End apply logic tokens.
     *
     *  Format: {% endapply %}
     */
    type: Twig.logic.type.endapply,
    regex: /^endapply$/,
    next: [],
    open: false
  }, {
    /**
     * Set type logic tokens.
     *
     *  Format: {% do expression %}
     */
    type: Twig.logic.type["do"],
    regex: /^do\s+([\S\s]+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      //
      var expression = token.match[1]; // Compile the expression.

      var expressionStack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      token.expression = expressionStack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, continueChain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.expression, context).then(function () {
        return {
          chain: continueChain,
          context: context
        };
      });
    }
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% block title %}
     */
    type: Twig.logic.type.block,
    regex: /^block\s+(\w+)$/,
    next: [Twig.logic.type.endblock],
    open: true,
    compile: function compile(token) {
      token.blockName = token.match[1].trim();
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      var promise = Twig.Promise.resolve();
      state.template.blocks.defined[token.blockName] = new Twig.Block(state.template, token);

      if (state.template.parentTemplate === null || state.template.parentTemplate instanceof Twig.Template) {
        promise = state.getBlock(token.blockName).render(state, context);
      }

      return promise.then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * Block shorthand logic tokens.
     *
     *  Format: {% block title expression %}
     */
    type: Twig.logic.type.shortblock,
    regex: /^block\s+(\w+)\s+(.+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var template = this;
      token.expression = token.match[2].trim();
      token.output = Twig.expression.compile({
        type: Twig.expression.type.expression,
        value: token.expression
      }).stack;
      return Twig.logic.handler[Twig.logic.type.block].compile.apply(template, [token]);
    },
    parse: function parse() {
      var state = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return Twig.logic.handler[Twig.logic.type.block].parse.apply(state, args);
    }
  }, {
    /**
     * End block logic tokens.
     *
     *  Format: {% endblock %}
     */
    type: Twig.logic.type.endblock,
    regex: /^endblock(?:\s+(\w+))?$/,
    next: [],
    open: false
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% extends "template.twig" %}
     */
    type: Twig.logic.type.extends_,
    regex: /^extends\s+(.+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1].trim();
      delete token.match;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (fileName) {
        if (Array.isArray(fileName)) {
          var result = fileName.reverse().reduce(function (acc, file) {
            try {
              return {
                render: state.template.importFile(file),
                fileName: file
              };
              /* eslint-disable-next-line no-unused-vars */
            } catch (error) {
              return acc;
            }
          }, {
            render: null,
            fileName: null
          });

          if (result.fileName !== null) {
            state.template.parentTemplate = result.fileName;
          }
        } else {
          state.template.parentTemplate = fileName;
        }

        return {
          chain: chain,
          output: ''
        };
      });
    }
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% use "template.twig" %}
     */
    type: Twig.logic.type.use,
    regex: /^use\s+(.+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1].trim();
      delete token.match;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (filePath) {
        // Create a new state instead of using the current state
        // any defined blocks will be created in isolation
        var useTemplate = state.template.importFile(filePath);
        var useState = new Twig.ParseState(useTemplate);
        return useState.parseAsync(useTemplate.tokens).then(function () {
          state.template.blocks.imported = _objectSpread(_objectSpread({}, state.template.blocks.imported), useState.getBlocks());
        });
      }).then(function () {
        return {
          chain: chain,
          output: ''
        };
      });
    }
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% includes "template.twig" [with {some: 'values'} only] %}
     */
    type: Twig.logic.type.include,
    regex: /^include\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var match = token.match;
      var expression = match[1].trim();
      var ignoreMissing = match[2] !== undefined;
      var withContext = match[3];
      var only = match[4] !== undefined && match[4].length;
      delete token.match;
      token.only = only;
      token.ignoreMissing = ignoreMissing;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;

      if (withContext !== undefined) {
        token.withStack = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: withContext.trim()
        }).stack;
      }

      return token;
    },
    parse: function parse(token, context, chain) {
      // Resolve filename
      var innerContext = token.only ? {} : _objectSpread({}, context);
      var ignoreMissing = token.ignoreMissing;
      var state = this;
      var promise = null;
      var result = {
        chain: chain,
        output: ''
      };

      if (typeof token.withStack === 'undefined') {
        promise = Twig.Promise.resolve();
      } else {
        promise = Twig.expression.parseAsync.call(state, token.withStack, context).then(function (withContext) {
          innerContext = _objectSpread(_objectSpread({}, innerContext), withContext);
        });
      }

      return promise.then(function () {
        return Twig.expression.parseAsync.call(state, token.stack, context);
      }).then(function (file) {
        var files;

        if (Array.isArray(file)) {
          files = file;
        } else {
          files = [file];
        }

        var result = files.reduce(function (acc, file) {
          if (acc.render === null) {
            if (file instanceof Twig.Template) {
              return {
                render: file.renderAsync(innerContext, {
                  isInclude: true
                }),
                lastError: null
              };
            }

            try {
              return {
                render: state.template.importFile(file).renderAsync(innerContext, {
                  isInclude: true
                }),
                lastError: null
              };
            } catch (error) {
              return {
                render: null,
                lastError: error
              };
            }
          }

          return acc;
        }, {
          render: null,
          lastError: null
        });

        if (result.render !== null) {
          return result.render;
        }

        if (result.render === null && ignoreMissing) {
          return '';
        }

        throw result.lastError;
      }).then(function (output) {
        if (output !== '') {
          result.output = output;
        }

        return result;
      });
    }
  }, {
    type: Twig.logic.type.spaceless,
    regex: /^spaceless$/,
    next: [Twig.logic.type.endspaceless],
    open: true,
    // Parse the html and return it without any spaces between tags
    parse: function parse(token, context, chain) {
      var state = this; // Parse the output without any filter

      return state.parseAsync(token.output, context).then(function (tokenOutput) {
        var // A regular expression to find closing and opening tags with spaces between them
        rBetweenTagSpaces = />\s+</g; // Replace all space between closing and opening html tags

        var output = tokenOutput.replace(rBetweenTagSpaces, '><').trim(); // Rewrap output as a Twig.Markup

        output = new Twig.Markup(output);
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, // Add the {% endspaceless %} token
  {
    type: Twig.logic.type.endspaceless,
    regex: /^endspaceless$/,
    next: [],
    open: false
  }, {
    /**
     * Macro logic tokens.
     *
     * Format: {% macro input(name = default, value, type, size) %}
     *
     */
    type: Twig.logic.type.macro,
    regex: /^macro\s+(\w+)\s*\(\s*((?:\w+(?:\s*=\s*([\s\S]+))?(?:,\s*)?)*)\s*\)$/,
    next: [Twig.logic.type.endmacro],
    open: true,
    compile: function compile(token) {
      var macroName = token.match[1];
      var rawParameters = token.match[2].split(/\s*,\s*/);
      var parameters = rawParameters.map(function (rawParameter) {
        return rawParameter.split(/\s*=\s*/)[0];
      });
      var parametersCount = parameters.length; // Duplicate check

      if (parametersCount > 1) {
        var uniq = {};

        for (var i = 0; i < parametersCount; i++) {
          var parameter = parameters[i];

          if (uniq[parameter]) {
            throw new Twig.Error('Duplicate arguments for parameter: ' + parameter);
          } else {
            uniq[parameter] = 1;
          }
        }
      }

      token.macroName = macroName;
      token.parameters = parameters;
      token.defaults = rawParameters.reduce(function (defaults, rawParameter) {
        var pair = rawParameter.split(/\s*=\s*/);
        var key = pair[0];
        var expression = pair[1];

        if (expression) {
          defaults[key] = Twig.expression.compile.call(this, {
            type: Twig.expression.type.expression,
            value: expression
          }).stack;
        } else {
          defaults[key] = undefined;
        }

        return defaults;
      }, {});
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;

      state.macros[token.macroName] = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        // Pass global context and other macros
        var macroContext = _objectSpread(_objectSpread({}, context), {}, {
          _self: state.macros
        }); // Save arguments


        return Twig.async.forEach(token.parameters, function (prop, i) {
          // Add parameters from context to macroContext
          if (typeof args[i] !== 'undefined') {
            macroContext[prop] = args[i];
            return true;
          }

          if (typeof token.defaults[prop] !== 'undefined') {
            return Twig.expression.parseAsync.call(this, token.defaults[prop], context).then(function (value) {
              macroContext[prop] = value;
              return Twig.Promise.resolve();
            });
          }

          macroContext[prop] = undefined;
          return true;
        }).then(function () {
          // Render
          return state.parseAsync(token.output, macroContext);
        });
      };

      return {
        chain: chain,
        output: ''
      };
    }
  }, {
    /**
     * End macro logic tokens.
     *
     * Format: {% endmacro %}
     */
    type: Twig.logic.type.endmacro,
    regex: /^endmacro$/,
    next: [],
    open: false
  }, {
    /*
    * Import logic tokens.
    *
    * Format: {% import "template.twig" as form %}
    */
    type: Twig.logic.type.import_,
    regex: /^import\s+(.+)\s+as\s+(\w+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1].trim();
      var contextName = token.match[2].trim();
      delete token.match;
      token.expression = expression;
      token.contextName = contextName;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      var output = {
        chain: chain,
        output: ''
      };

      if (token.expression === '_self') {
        context[token.contextName] = state.macros;
        return output;
      }

      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (filePath) {
        return state.template.importFile(filePath || token.expression);
      }).then(function (importTemplate) {
        var importState = new Twig.ParseState(importTemplate);
        return importState.parseAsync(importTemplate.tokens).then(function () {
          context[token.contextName] = importState.macros;
          return output;
        });
      });
    }
  }, {
    /*
    * From logic tokens.
    *
    * Format: {% from "template.twig" import func as form %}
    */
    type: Twig.logic.type.from,
    regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1].trim();
      var macroExpressions = token.match[2].trim().split(/\s*,\s*/);
      var macroNames = {};

      var _iterator = _createForOfIteratorHelper(macroExpressions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var res = _step.value;
          // Match function as variable
          var macroMatch = res.match(/^(\w+)\s+as\s+(\w+)$/);

          if (macroMatch) {
            macroNames[macroMatch[1].trim()] = macroMatch[2].trim();
          } else if (res.match(/^(\w+)$/)) {
            macroNames[res] = res;
          } else {// ignore import
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      delete token.match;
      token.expression = expression;
      token.macroNames = macroNames;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      var promise;

      if (token.expression === '_self') {
        promise = Twig.Promise.resolve(state.macros);
      } else {
        promise = Twig.expression.parseAsync.call(state, token.stack, context).then(function (filePath) {
          return state.template.importFile(filePath || token.expression);
        }).then(function (importTemplate) {
          var importState = new Twig.ParseState(importTemplate);
          return importState.parseAsync(importTemplate.tokens).then(function () {
            return importState.macros;
          });
        });
      }

      return promise.then(function (macros) {
        for (var macroName in token.macroNames) {
          if (macros[macroName] !== undefined) {
            context[token.macroNames[macroName]] = macros[macroName];
          }
        }

        return {
          chain: chain,
          output: ''
        };
      });
    }
  }, {
    /**
     * The embed tag combines the behaviour of include and extends.
     * It allows you to include another template's contents, just like include does.
     *
     *  Format: {% embed "template.twig" [with {some: 'values'} only] %}
     */
    type: Twig.logic.type.embed,
    regex: /^embed\s+(.+?)(?:\s+(ignore missing))?(?:\s+with\s+([\S\s]+?))?(?:\s+(only))?$/,
    next: [Twig.logic.type.endembed],
    open: true,
    compile: function compile(token) {
      var match = token.match;
      var expression = match[1].trim();
      var ignoreMissing = match[2] !== undefined;
      var withContext = match[3];
      var only = match[4] !== undefined && match[4].length;
      delete token.match;
      token.only = only;
      token.ignoreMissing = ignoreMissing;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;

      if (withContext !== undefined) {
        token.withStack = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: withContext.trim()
        }).stack;
      }

      return token;
    },
    parse: function parse(token, context, chain) {
      var embedContext = {};
      var promise = Twig.Promise.resolve();
      var state = this;

      if (!token.only) {
        embedContext = _objectSpread({}, context);
      }

      if (token.withStack !== undefined) {
        promise = Twig.expression.parseAsync.call(state, token.withStack, context).then(function (withContext) {
          embedContext = _objectSpread(_objectSpread({}, embedContext), withContext);
        });
      }

      return promise.then(function () {
        return Twig.expression.parseAsync.call(state, token.stack, embedContext);
      }).then(function (fileName) {
        var embedOverrideTemplate = new Twig.Template({
          data: token.output,
          id: state.template.id,
          base: state.template.base,
          path: state.template.path,
          url: state.template.url,
          name: state.template.name,
          method: state.template.method,
          options: state.template.options
        });

        try {
          embedOverrideTemplate.importFile(fileName);
        } catch (error) {
          if (token.ignoreMissing) {
            return '';
          } // Errors preserve references to variables in scope,
          // this removes `this` from the scope.


          state = null;
          throw error;
        }

        embedOverrideTemplate.parentTemplate = fileName;
        return embedOverrideTemplate.renderAsync(embedContext, {
          isInclude: true
        });
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  },
  /* Add the {% endembed %} token
   *
   */
  {
    type: Twig.logic.type.endembed,
    regex: /^endembed$/,
    next: [],
    open: false
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% with {some: 'values'} [only] %}
     */
    type: Twig.logic.type["with"],
    regex: /^(?:with\s+([\S\s]+?))(?:\s|$)(only)?$/,
    next: [Twig.logic.type.endwith],
    open: true,
    compile: function compile(token) {
      var match = token.match;
      var withContext = match[1];
      var only = match[2] !== undefined && match[2].length;
      delete token.match;
      token.only = only;

      if (withContext !== undefined) {
        token.withStack = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: withContext.trim()
        }).stack;
      }

      return token;
    },
    parse: function parse(token, context, chain) {
      // Resolve filename
      var innerContext = {};
      var i;
      var state = this;
      var promise = Twig.Promise.resolve();

      if (!token.only) {
        innerContext = _objectSpread({}, context);
      }

      if (token.withStack !== undefined) {
        promise = Twig.expression.parseAsync.call(state, token.withStack, context).then(function (withContext) {
          for (i in withContext) {
            if (Object.hasOwnProperty.call(withContext, i)) {
              innerContext[i] = withContext[i];
            }
          }
        });
      }

      return promise.then(function () {
        return state.parseAsync(token.output, innerContext);
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    type: Twig.logic.type.endwith,
    regex: /^endwith$/,
    next: [],
    open: false
  }, {
    /**
     * Deprecated type logic tokens.
     *
     *  Format: {% deprecated 'Description' %}
     */
    type: Twig.logic.type.deprecated,
    regex: /^deprecated\s+(.+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      console.warn('Deprecation notice: ' + token.match[1]);
      return token;
    },
    parse: function parse() {
      return {};
    }
  }];
  /**
   * Registry for logic handlers.
   */

  Twig.logic.handler = {};
  /**
   * Define a new token type, available at Twig.logic.type.{type}
   */

  Twig.logic.extendType = function (type, value) {
    value = value || 'Twig.logic.type' + type;
    Twig.logic.type[type] = value;
  };
  /**
   * Extend the logic parsing functionality with a new token definition.
   *
   * // Define a new tag
   * Twig.logic.extend({
   *     type: Twig.logic.type.{type},
   *     // The pattern to match for this token
   *     regex: ...,
   *     // What token types can follow this token, leave blank if any.
   *     next: [ ... ]
   *     // Create and return compiled version of the token
   *     compile: function(token) { ... }
   *     // Parse the compiled token with the context provided by the render call
   *     //   and whether this token chain is complete.
   *     parse: function(token, context, chain) { ... }
   * });
   *
   * @param {Object} definition The new logic expression.
   */


  Twig.logic.extend = function (definition) {
    if (definition.type) {
      Twig.logic.extendType(definition.type);
    } else {
      throw new Twig.Error('Unable to extend logic definition. No type provided for ' + definition);
    }

    Twig.logic.handler[definition.type] = definition;
  }; // Extend with built-in expressions


  while (Twig.logic.definitions.length > 0) {
    Twig.logic.extend(Twig.logic.definitions.shift());
  }
  /**
   * Compile a logic token into an object ready for parsing.
   *
   * @param {Object} rawToken An uncompiled logic token.
   *
   * @return {Object} A compiled logic token, ready for parsing.
   */


  Twig.logic.compile = function (rawToken) {
    var expression = rawToken.value.trim();
    var token = Twig.logic.tokenize.call(this, expression);
    var tokenTemplate = Twig.logic.handler[token.type]; // Check if the token needs compiling

    if (tokenTemplate.compile) {
      token = tokenTemplate.compile.call(this, token);
      Twig.log.trace('Twig.logic.compile: ', 'Compiled logic token to ', token);
    }

    return token;
  };
  /**
   * Tokenize logic expressions. This function matches token expressions against regular
   * expressions provided in token definitions provided with Twig.logic.extend.
   *
   * @param {string} expression the logic token expression to tokenize
   *                (i.e. what's between {% and %})
   *
   * @return {Object} The matched token with type set to the token type and match to the regex match.
   */


  Twig.logic.tokenize = function (expression) {
    var tokenTemplateType = null;
    var tokenType = null;
    var tokenRegex = null;
    var regexArray = null;
    var regexLen = null;
    var regexI = null;
    var match = null; // Ignore whitespace around expressions.

    expression = expression.trim();

    for (tokenTemplateType in Twig.logic.handler) {
      if (Object.hasOwnProperty.call(Twig.logic.handler, tokenTemplateType)) {
        // Get the type and regex for this template type
        tokenType = Twig.logic.handler[tokenTemplateType].type;
        tokenRegex = Twig.logic.handler[tokenTemplateType].regex; // Handle multiple regular expressions per type.

        regexArray = tokenRegex;

        if (!Array.isArray(tokenRegex)) {
          regexArray = [tokenRegex];
        }

        regexLen = regexArray.length; // Check regular expressions in the order they were specified in the definition.

        for (regexI = 0; regexI < regexLen; regexI++) {
          match = regexArray[regexI].exec(expression);

          if (match !== null) {
            Twig.log.trace('Twig.logic.tokenize: ', 'Matched a ', tokenType, ' regular expression of ', match);
            return {
              type: tokenType,
              match: match
            };
          }
        }
      }
    } // No regex matches


    throw new Twig.Error('Unable to parse \'' + expression.trim() + '\'');
  };
  /**
   * Parse a logic token within a given context.
   *
   * What are logic chains?
   *      Logic chains represent a series of tokens that are connected,
   *          for example:
   *          {% if ... %} {% else %} {% endif %}
   *
   *      The chain parameter is used to signify if a chain is open of closed.
   *      open:
   *          More tokens in this chain should be parsed.
   *      closed:
   *          This token chain has completed parsing and any additional
   *          tokens (else, elseif, etc...) should be ignored.
   *
   * @param {Object} token The compiled token.
   * @param {Object} context The render context.
   * @param {boolean} chain Is this an open logic chain. If false, that means a
   *                        chain is closed and no further cases should be parsed.
   */


  Twig.logic.parse = function (token, context, chain, allowAsync) {
    return Twig.async.potentiallyAsync(this, allowAsync, function () {
      Twig.log.debug('Twig.logic.parse: ', 'Parsing logic token ', token);
      var tokenTemplate = Twig.logic.handler[token.type];
      var result;
      var state = this;

      if (!tokenTemplate.parse) {
        return '';
      }

      state.nestingStack.unshift(token);
      result = tokenTemplate.parse.call(state, token, context || {}, chain);

      if (Twig.isPromise(result)) {
        result = result.then(function (result) {
          state.nestingStack.shift();
          return result;
        });
      } else {
        state.nestingStack.shift();
      }

      return result;
    });
  };

  return Twig;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Twig) {
  'use strict';

  Twig.Templates.registerParser('source', function (params) {
    return params.data || '';
  });
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Twig) {
  'use strict';

  Twig.Templates.registerParser('twig', function (params) {
    return new Twig.Template(params);
  });
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

// ## twig.path.js
//
// This file handles path parsing
module.exports = function (Twig) {
  'use strict';
  /**
   * Namespace for path handling.
   */

  Twig.path = {};
  /**
   * Generate the canonical version of a url based on the given base path and file path and in
   * the previously registered namespaces.
   *
   * @param  {string} template The Twig Template
   * @param  {string} _file    The file path, may be relative and may contain namespaces.
   *
   * @return {string}          The canonical version of the path
   */

  Twig.path.parsePath = function (template, _file) {
    var k = null;
    var namespaces = template.options.namespaces;
    var file = _file || '';
    var hasNamespaces = namespaces && (0, _typeof2["default"])(namespaces) === 'object';

    if (hasNamespaces) {
      for (k in namespaces) {
        if (!file.includes(k)) {
          continue;
        } // Check if keyed namespace exists at path's start


        var colon = new RegExp('^' + k + '::');
        var atSign = new RegExp('^@' + k + '/'); // Add slash to the end of path

        var namespacePath = namespaces[k].replace(/([^/])$/, '$1/');

        if (colon.test(file)) {
          file = file.replace(colon, namespacePath);
          return file;
        }

        if (atSign.test(file)) {
          file = file.replace(atSign, namespacePath);
          return file;
        }
      }
    }

    return Twig.path.relativePath(template, file);
  };
  /**
   * Generate the relative canonical version of a url based on the given base path and file path.
   *
   * @param {Twig.Template} template The Twig.Template.
   * @param {string} _file The file path, relative to the base path.
   *
   * @return {string} The canonical version of the path.
   */


  Twig.path.relativePath = function (template, _file) {
    var base;
    var basePath;
    var sepChr = '/';
    var newPath = [];
    var file = _file || '';
    var val;

    if (template.url) {
      if (typeof template.base === 'undefined') {
        base = template.url;
      } else {
        // Add slash to the end of path
        base = template.base.replace(/([^/])$/, '$1/');
      }
    } else if (template.path) {
      // Get the system-specific path separator
      var path = __webpack_require__(6);

      var sep = path.sep || sepChr;
      var relative = new RegExp('^\\.{1,2}' + sep.replace('\\', '\\\\'));
      file = file.replace(/\//g, sep);

      if (template.base !== undefined && file.match(relative) === null) {
        file = file.replace(template.base, '');
        base = template.base + sep;
      } else {
        base = path.normalize(template.path);
      }

      base = base.replace(sep + sep, sep);
      sepChr = sep;
    } else if ((template.name || template.id) && template.method && template.method !== 'fs' && template.method !== 'ajax') {
      // Custom registered loader
      base = template.base || template.name || template.id;
    } else {
      throw new Twig.Error('Cannot extend an inline template.');
    }

    basePath = base.split(sepChr); // Remove file from url

    basePath.pop();
    basePath = basePath.concat(file.split(sepChr));

    while (basePath.length > 0) {
      val = basePath.shift();

      if (val === '.') {// Ignore
      } else if (val === '..' && newPath.length > 0 && newPath[newPath.length - 1] !== '..') {
        newPath.pop();
      } else {
        newPath.push(val);
      }
    }

    return newPath.join(sepChr);
  };

  return Twig;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.tests.js
//
// This file handles expression tests. (is empty, is not defined, etc...)
module.exports = function (Twig) {
  'use strict';

  Twig.tests = {
    empty: function empty(value) {
      if (value === null || value === undefined) {
        return true;
      } // Handler numbers


      if (typeof value === 'number') {
        return false;
      } // Numbers are never "empty"
      // Handle strings and arrays


      if (value.length > 0) {
        return false;
      } // Handle objects


      for (var key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
          return false;
        }
      }

      return true;
    },
    odd: function odd(value) {
      return value % 2 === 1;
    },
    even: function even(value) {
      return value % 2 === 0;
    },
    divisibleby: function divisibleby(value, params) {
      return value % params[0] === 0;
    },
    defined: function defined(value) {
      return value !== undefined;
    },
    none: function none(value) {
      return value === null;
    },
    "null": function _null(value) {
      return this.none(value); // Alias of none
    },
    'same as': function sameAs(value, params) {
      return value === params[0];
    },
    sameas: function sameas(value, params) {
      console.warn('`sameas` is deprecated use `same as`');
      return Twig.tests['same as'](value, params);
    },
    iterable: function iterable(value) {
      return value && (Twig.lib.is('Array', value) || Twig.lib.is('Object', value));
    }
    /*
    Constant ?
     */

  };

  Twig.test = function (test, value, params) {
    if (!Twig.tests[test]) {
      throw Twig.Error('Test ' + test + ' is not defined.');
    }

    return Twig.tests[test](value, params);
  };

  Twig.test.extend = function (test, definition) {
    Twig.tests[test] = definition;
  };

  return Twig;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.async.js
//
// This file handles asynchronous tasks within twig.
module.exports = function (Twig) {
  'use strict';

  var STATE_UNKNOWN = 0;
  var STATE_RESOLVED = 1;
  var STATE_REJECTED = 2;

  Twig.ParseState.prototype.parseAsync = function (tokens, context) {
    return this.parse(tokens, context, true);
  };

  Twig.expression.parseAsync = function (tokens, context, tokensAreParameters) {
    var state = this;
    return Twig.expression.parse.call(state, tokens, context, tokensAreParameters, true);
  };

  Twig.logic.parseAsync = function (token, context, chain) {
    var state = this;
    return Twig.logic.parse.call(state, token, context, chain, true);
  };

  Twig.Template.prototype.renderAsync = function (context, params) {
    return this.render(context, params, true);
  };

  Twig.async = {};
  /**
   * Checks for `thenable` objects
   */

  Twig.isPromise = function (obj) {
    return obj && obj.then && typeof obj.then === 'function';
  };
  /**
   * Handling of code paths that might either return a promise
   * or a value depending on whether async code is used.
   *
   * @see https://github.com/twigjs/twig.js/blob/master/ASYNC.md#detecting-asynchronous-behaviour
   */


  function potentiallyAsyncSlow(that, allowAsync, action) {
    var result = action.call(that);
    var err = null;
    var isAsync = true;

    if (!Twig.isPromise(result)) {
      return result;
    }

    result.then(function (res) {
      result = res;
      isAsync = false;
    })["catch"](function (error) {
      err = error;
    });

    if (err !== null) {
      throw err;
    }

    if (isAsync) {
      throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');
    }

    return result;
  }

  Twig.async.potentiallyAsync = function (that, allowAsync, action) {
    if (allowAsync) {
      return Twig.Promise.resolve(action.call(that));
    }

    return potentiallyAsyncSlow(that, allowAsync, action);
  };

  function run(fn, resolve, reject) {
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  function pending(handlers, onResolved, onRejected) {
    var h = [onResolved, onRejected, -2]; // The promise has yet to be rejected or resolved.

    if (!handlers) {
      handlers = h;
    } else if (handlers[2] === -2) {
      // Only allocate an array when there are multiple handlers
      handlers = [handlers, h];
    } else {
      handlers.push(h);
    }

    return handlers;
  }
  /**
   * Really small thenable to represent promises that resolve immediately.
   *
   */


  Twig.Thenable = function (then, value, state) {
    this.then = then;
    this._value = state ? value : null;
    this._state = state || STATE_UNKNOWN;
  };

  Twig.Thenable.prototype["catch"] = function (onRejected) {
    // THe promise will not throw, it has already resolved.
    if (this._state === STATE_RESOLVED) {
      return this;
    }

    return this.then(null, onRejected);
  };
  /**
   * The `then` method attached to a Thenable when it has resolved.
   *
   */


  Twig.Thenable.resolvedThen = function (onResolved) {
    try {
      return Twig.Promise.resolve(onResolved(this._value));
    } catch (error) {
      return Twig.Promise.reject(error);
    }
  };
  /**
   * The `then` method attached to a Thenable when it has rejected.
   *
   */


  Twig.Thenable.rejectedThen = function (onResolved, onRejected) {
    // Shortcut for rejected twig promises
    if (!onRejected || typeof onRejected !== 'function') {
      return this;
    }

    var value = this._value;
    var result;

    try {
      result = onRejected(value);
    } catch (error) {
      result = Twig.Promise.reject(error);
    }

    return Twig.Promise.resolve(result);
  };
  /**
   * An alternate implementation of a Promise that does not fully follow
   * the spec, but instead works fully synchronous while still being
   * thenable.
   *
   * These promises can be mixed with regular promises at which point
   * the synchronous behaviour is lost.
   */


  Twig.Promise = function (executor) {
    var state = STATE_UNKNOWN;
    var value = null;

    var changeState = function changeState(nextState, nextValue) {
      state = nextState;
      value = nextValue;
    };

    function onReady(v) {
      changeState(STATE_RESOLVED, v);
    }

    function onReject(e) {
      changeState(STATE_REJECTED, e);
    }

    run(executor, onReady, onReject); // If the promise settles right after running the executor we can
    // return a Promise with it's state already set.
    //
    // Twig.Promise.resolve and Twig.Promise.reject both use the more
    // efficient `Twig.Thenable` for this purpose.

    if (state === STATE_RESOLVED) {
      return Twig.Promise.resolve(value);
    }

    if (state === STATE_REJECTED) {
      return Twig.Promise.reject(value);
    } // If we managed to get here our promise is going to resolve asynchronous.


    changeState = new Twig.FullPromise();
    return changeState.promise;
  };
  /**
   * Promise implementation that can handle being resolved at any later time.
   *
   */


  Twig.FullPromise = function () {
    var handlers = null; // The state has been changed to either resolve, or reject
    // which means we should call the handler.

    function resolved(onResolved) {
      onResolved(p._value);
    }

    function rejected(onResolved, onRejected) {
      onRejected(p._value);
    }

    var append = function append(onResolved, onRejected) {
      handlers = pending(handlers, onResolved, onRejected);
    };

    function changeState(newState, v) {
      if (p._state) {
        return;
      }

      p._value = v;
      p._state = newState;
      append = newState === STATE_RESOLVED ? resolved : rejected;

      if (!handlers) {
        return;
      }

      if (handlers[2] === -2) {
        append(handlers[0], handlers[1]);
        handlers = null;
        return;
      }

      handlers.forEach(function (h) {
        append(h[0], h[1]);
      });
      handlers = null;
    }

    var p = new Twig.Thenable(function (onResolved, onRejected) {
      var hasResolved = typeof onResolved === 'function'; // Shortcut for resolved twig promises

      if (p._state === STATE_RESOLVED && !hasResolved) {
        return Twig.Promise.resolve(p._value);
      }

      if (p._state === STATE_RESOLVED) {
        try {
          return Twig.Promise.resolve(onResolved(p._value));
        } catch (error) {
          return Twig.Promise.reject(error);
        }
      }

      var hasRejected = typeof onRejected === 'function';
      return new Twig.Promise(function (resolve, reject) {
        append(hasResolved ? function (result) {
          try {
            resolve(onResolved(result));
          } catch (error) {
            reject(error);
          }
        } : resolve, hasRejected ? function (err) {
          try {
            resolve(onRejected(err));
          } catch (error) {
            reject(error);
          }
        } : reject);
      });
    });
    changeState.promise = p;
    return changeState;
  };

  Twig.Promise.defaultResolved = new Twig.Thenable(Twig.Thenable.resolvedThen, undefined, STATE_RESOLVED);
  Twig.Promise.emptyStringResolved = new Twig.Thenable(Twig.Thenable.resolvedThen, '', STATE_RESOLVED);

  Twig.Promise.resolve = function (value) {
    if (arguments.length === 0 || typeof value === 'undefined') {
      return Twig.Promise.defaultResolved;
    }

    if (Twig.isPromise(value)) {
      return value;
    } // Twig often resolves with an empty string, we optimize for this
    // scenario by returning a fixed promise. This reduces the load on
    // garbage collection.


    if (value === '') {
      return Twig.Promise.emptyStringResolved;
    }

    return new Twig.Thenable(Twig.Thenable.resolvedThen, value, STATE_RESOLVED);
  };

  Twig.Promise.reject = function (e) {
    // `e` should never be a promise.
    return new Twig.Thenable(Twig.Thenable.rejectedThen, e, STATE_REJECTED);
  };

  Twig.Promise.all = function (promises) {
    var results = new Array(promises.length);
    return Twig.async.forEach(promises, function (p, index) {
      if (!Twig.isPromise(p)) {
        results[index] = p;
        return;
      }

      if (p._state === STATE_RESOLVED) {
        results[index] = p._value;
        return;
      }

      return p.then(function (v) {
        results[index] = v;
      });
    }).then(function () {
      return results;
    });
  };
  /**
  * Go over each item in a fashion compatible with Twig.forEach,
  * allow the function to return a promise or call the third argument
  * to signal it is finished.
  *
  * Each item in the array will be called sequentially.
  */


  Twig.async.forEach = function (arr, callback) {
    var len = arr ? arr.length : 0;
    var index = 0;

    function next() {
      var resp = null;

      do {
        if (index === len) {
          return Twig.Promise.resolve();
        }

        resp = callback(arr[index], index);
        index++; // While the result of the callback is not a promise or it is
        // a promise that has settled we can use a regular loop which
        // is much faster.
      } while (!resp || !Twig.isPromise(resp) || resp._state === STATE_RESOLVED);

      return resp.then(next);
    }

    return next();
  };

  return Twig;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.exports.js
//
// This file provides extension points and other hooks into the twig functionality.
module.exports = function (Twig) {
  'use strict';

  Twig.exports = {
    VERSION: Twig.VERSION
  };
  /**
   * Create and compile a twig.js template.
   *
   * @param {Object} param Paramteres for creating a Twig template.
   *
   * @return {Twig.Template} A Twig template ready for rendering.
   */

  Twig.exports.twig = function (params) {
    'use strict';

    var id = params.id;
    var options = {
      strictVariables: params.strict_variables || false,
      // TODO: turn autoscape on in the next major version
      autoescape: params.autoescape !== null && params.autoescape || false,
      allowInlineIncludes: params.allowInlineIncludes || false,
      rethrow: params.rethrow || false,
      namespaces: params.namespaces
    };

    if (Twig.cache && id) {
      Twig.validateId(id);
    }

    if (params.debug !== undefined) {
      Twig.debug = params.debug;
    }

    if (params.trace !== undefined) {
      Twig.trace = params.trace;
    }

    if (params.data !== undefined) {
      return Twig.Templates.parsers.twig({
        data: params.data,
        path: Object.hasOwnProperty.call(params, 'path') ? params.path : undefined,
        module: params.module,
        id: id,
        options: options
      });
    }

    if (params.ref !== undefined) {
      if (params.id !== undefined) {
        throw new Twig.Error('Both ref and id cannot be set on a twig.js template.');
      }

      return Twig.Templates.load(params.ref);
    }

    if (params.method !== undefined) {
      if (!Twig.Templates.isRegisteredLoader(params.method)) {
        throw new Twig.Error('Loader for "' + params.method + '" is not defined.');
      }

      return Twig.Templates.loadRemote(params.name || params.href || params.path || id || undefined, {
        id: id,
        method: params.method,
        parser: params.parser || 'twig',
        base: params.base,
        module: params.module,
        precompiled: params.precompiled,
        async: params.async,
        options: options
      }, params.load, params.error);
    }

    if (params.href !== undefined) {
      return Twig.Templates.loadRemote(params.href, {
        id: id,
        method: 'ajax',
        parser: params.parser || 'twig',
        base: params.base,
        module: params.module,
        precompiled: params.precompiled,
        async: params.async,
        options: options
      }, params.load, params.error);
    }

    if (params.path !== undefined) {
      return Twig.Templates.loadRemote(params.path, {
        id: id,
        method: 'fs',
        parser: params.parser || 'twig',
        base: params.base,
        module: params.module,
        precompiled: params.precompiled,
        async: params.async,
        options: options
      }, params.load, params.error);
    }
  }; // Extend Twig with a new filter.


  Twig.exports.extendFilter = function (filter, definition) {
    Twig.filter.extend(filter, definition);
  }; // Extend Twig with a new function.


  Twig.exports.extendFunction = function (fn, definition) {
    Twig._function.extend(fn, definition);
  }; // Extend Twig with a new test.


  Twig.exports.extendTest = function (test, definition) {
    Twig.test.extend(test, definition);
  }; // Extend Twig with a new definition.


  Twig.exports.extendTag = function (definition) {
    Twig.logic.extend(definition);
  }; // Provide an environment for extending Twig core.
  // Calls fn with the internal Twig object.


  Twig.exports.extend = function (fn) {
    fn(Twig);
  };
  /**
   * Provide an extension for use with express 2.
   *
   * @param {string} markup The template markup.
   * @param {array} options The express options.
   *
   * @return {string} The rendered template.
   */


  Twig.exports.compile = function (markup, options) {
    var id = options.filename;
    var path = options.filename; // Try to load the template from the cache

    var template = new Twig.Template({
      data: markup,
      path: path,
      id: id,
      options: options.settings['twig options']
    }); // Twig.Templates.load(id) ||

    return function (context) {
      return template.render(context);
    };
  };
  /**
   * Provide an extension for use with express 3.
   *
   * @param {string} path The location of the template file on disk.
   * @param {Object|Function} The options or callback.
   * @param {Function} fn callback.
   *
   * @throws Twig.Error
   */


  Twig.exports.renderFile = function (path, options, fn) {
    // Handle callback in options
    if (typeof options === 'function') {
      fn = options;
      options = {};
    }

    options = options || {};
    var settings = options.settings || {}; // Mixin any options provided to the express app.

    var viewOptions = settings['twig options'];
    var params = {
      path: path,
      base: settings.views,
      load: function load(template) {
        // Render and return template as a simple string, see https://github.com/twigjs/twig.js/pull/348 for more information
        if (!viewOptions || !viewOptions.allowAsync) {
          fn(null, String(template.render(options)));
          return;
        }

        template.renderAsync(options).then(function (out) {
          return fn(null, out);
        }, fn);
      },
      error: function error(err) {
        fn(err);
      }
    };

    if (viewOptions) {
      for (var option in viewOptions) {
        if (Object.hasOwnProperty.call(viewOptions, option)) {
          params[option] = viewOptions[option];
        }
      }
    }

    Twig.exports.twig(params);
  }; // Express 3 handler


  Twig.exports.__express = Twig.exports.renderFile;
  /**
   * Shoud Twig.js cache templates.
   * Disable during development to see changes to templates without
   * reloading, and disable in production to improve performance.
   *
   * @param {boolean} cache
   */

  Twig.exports.cache = function (cache) {
    Twig.cache = cache;
  }; // We need to export the path module so we can effectively test it


  Twig.exports.path = Twig.path; // Export our filters.
  // Resolves #307

  Twig.exports.filters = Twig.filters; // Export our tests.

  Twig.exports.tests = Twig.tests; // Export our functions.

  Twig.exports.functions = Twig.functions;
  Twig.exports.Promise = Twig.Promise;
  return Twig;
};

/***/ })
/******/ ]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_pages_index_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/pages/index.twig */ "./src/template/pages/index.twig");
/* harmony import */ var _template_pages_index_twig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_pages_index_twig__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/main.js */ "./src/scripts/main.js");
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_main_js__WEBPACK_IMPORTED_MODULE_2__);

// Import styles

// Import scripts

// console.log('complete');

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/**
 * инициализация всех инициализаций
 */

$(document).ready(function () {
	Abo.init();
});

var Abo = {
	init() {
		this.test();
	},

	test: function () {
		console.log('hello');
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery/dist/jquery.min.js */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/template/blocks/reg-form.twig":
/*!*******************************************!*\
  !*** ./src/template/blocks/reg-form.twig ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<section class=\"reg-form\">\n\t<div class=\"reg-form__logo\">\n\t\t<img src=\"../img/logo.svg\" alt=\"\">\n\t</div>\n\t<div class=\"reg-form__title\">\n\t\tРегистрация\n\t</div>\n\t<div class=\"reg-form__descr\">\n\t\tПожалуйста введите ваши данные для входа\n\t</div>\n\t<form action=\"\" class=\"reg-form__form\">\n\t\t<div class=\"reg-form__wr\">\n\t\t\t<label for=\"\" class=\"reg-form__form-label\">\n\t\t\t\tEmail Address\n\t\t\t\t<input type=\"email\" class=\"reg-form__form-input\">\n\t\t\t\t<span></span>\n\t\t\t</label>\n\t\t\t<label for=\"\" class=\"reg-form__form-label\">\n\t\t\t\tPassword\n\t\t\t\t<input type=\"password\" placeholder=\"*******************\" class=\"reg-form__form-input\">\n\t\t\t\t<span></span>\n\t\t\t</label>\n\t\t\t<label for=\"\" class=\"reg-form__form-label\">\n\t\t\t\tConfirm password\n\t\t\t\t<input type=\"password\" placeholder=\"*******************\" class=\"reg-form__form-input\">\n\t\t\t\t<span></span>\n\t\t\t</label>\n\t\t</div>\n\t\t<div class=\"reg-form__form-check-wr\">\n\t\t\t<label for=\"check\"class=\"reg-form__form-checkbox-label\">\n\t\t\t\t<input type=\"checkbox\" id=\"check\" class=\"reg-form__form-checkbox\">\n\t\t\t\tСогласен с обработкой персональных данных\n\t\t\t</label>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"reg-form__form-submit\">\n\t\t\tВход →\n\t\t</button>\n\t\t<div class=\"reg-form__auth\">\n\t\t\tУ вас есть аккаунт? <a href=\"#\" class=\"reg-form__auth-link\">Войдите под своими данными</a>\n\t\t</div>\n\t\t<div class=\"reg-form__bottom\">\n\t\t\t<a href=\"#\">Политика конфиденциальности</a>\n\t\t\t<a href=\"#\">Правила использования</a>\n\t\t</div>\n\t</form>\n</section>"}],
    template = twig({"id":"$resolved:3cb40fc6eecc60a0a48f5dbfed58207b2d5e3b44bb0848250ecda41d1db1b7fe4737a7f98e275d56fa737e67b03446bedbf7a7e2b7da48e6eb52c8e22cf23646:reg-form.twig","data":[{"type":"raw","value":"<section class=\"reg-form\">\n\t<div class=\"reg-form__logo\">\n\t\t<img src=\"../img/logo.svg\" alt=\"\">\n\t</div>\n\t<div class=\"reg-form__title\">\n\t\tРегистрация\n\t</div>\n\t<div class=\"reg-form__descr\">\n\t\tПожалуйста введите ваши данные для входа\n\t</div>\n\t<form action=\"\" class=\"reg-form__form\">\n\t\t<div class=\"reg-form__wr\">\n\t\t\t<label for=\"\" class=\"reg-form__form-label\">\n\t\t\t\tEmail Address\n\t\t\t\t<input type=\"email\" class=\"reg-form__form-input\">\n\t\t\t\t<span></span>\n\t\t\t</label>\n\t\t\t<label for=\"\" class=\"reg-form__form-label\">\n\t\t\t\tPassword\n\t\t\t\t<input type=\"password\" placeholder=\"*******************\" class=\"reg-form__form-input\">\n\t\t\t\t<span></span>\n\t\t\t</label>\n\t\t\t<label for=\"\" class=\"reg-form__form-label\">\n\t\t\t\tConfirm password\n\t\t\t\t<input type=\"password\" placeholder=\"*******************\" class=\"reg-form__form-input\">\n\t\t\t\t<span></span>\n\t\t\t</label>\n\t\t</div>\n\t\t<div class=\"reg-form__form-check-wr\">\n\t\t\t<label for=\"check\"class=\"reg-form__form-checkbox-label\">\n\t\t\t\t<input type=\"checkbox\" id=\"check\" class=\"reg-form__form-checkbox\">\n\t\t\t\tСогласен с обработкой персональных данных\n\t\t\t</label>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"reg-form__form-submit\">\n\t\t\tВход →\n\t\t</button>\n\t\t<div class=\"reg-form__auth\">\n\t\t\tУ вас есть аккаунт? <a href=\"#\" class=\"reg-form__auth-link\">Войдите под своими данными</a>\n\t\t</div>\n\t\t<div class=\"reg-form__bottom\">\n\t\t\t<a href=\"#\">Политика конфиденциальности</a>\n\t\t\t<a href=\"#\">Правила использования</a>\n\t\t</div>\n\t</form>\n</section>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/layouts/layout.twig":
/*!******************************************!*\
  !*** ./src/template/layouts/layout.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"\n<!DOCTYPE html>\n<html>\n<head>\n\t<meta name=\"viewport\" content=\"width=device-width\">\n\t<meta name=\"MobileOptimized\" content=\"375\"/>\n\t<meta name=\"HandheldFriendly\" content=\"true\"/>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"format-detection\" content=\"telephone=no\">\n\t<meta name=\"viewport min-width=375px\" content=\"min-width=375, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">\n\t<title>Абориген</title>\n\t<meta property=\"og:url\" content=\"https://aborigen.ru/\">\n\t<meta property=\"og:type\" content=\"website\">\n\t<meta property=\"og:title\" content=\"Абориген\">\n\t<meta property=\"og:site_name\" content=\"Aborigen\">\n\t<meta property=\"og:locale\" content=\"ru_RU\">\n</head>\n<body>\n\t\t"},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"main","output":[]}},{"type":"raw","value":"</bod>\n</html>"}],
    template = twig({"id":"$resolved:0152f66c9e7cd9face943e34d5b55d868291eccd74f548fcbeef7e1626b0242d44ef7e5bb3a36e075e42386b6b9320be2ec1f6d6254d060cab6a1adc80cb42b1:layout.twig","data":[{"type":"raw","value":"\n<!DOCTYPE html>\n<html>\n<head>\n\t<meta name=\"viewport\" content=\"width=device-width\">\n\t<meta name=\"MobileOptimized\" content=\"375\"/>\n\t<meta name=\"HandheldFriendly\" content=\"true\"/>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"format-detection\" content=\"telephone=no\">\n\t<meta name=\"viewport min-width=375px\" content=\"min-width=375, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">\n\t<title>Абориген</title>\n\t<meta property=\"og:url\" content=\"https://aborigen.ru/\">\n\t<meta property=\"og:type\" content=\"website\">\n\t<meta property=\"og:title\" content=\"Абориген\">\n\t<meta property=\"og:site_name\" content=\"Aborigen\">\n\t<meta property=\"og:locale\" content=\"ru_RU\">\n</head>\n<body>\n\t\t"},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"main","output":[]}},{"type":"raw","value":"</bod>\n</html>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/pages/index.twig":
/*!***************************************!*\
  !*** ./src/template/pages/index.twig ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../blocks/reg-form.twig */ "./src/template/blocks/reg-form.twig");

__webpack_require__(/*! ../layouts/layout.twig */ "./src/template/layouts/layout.twig");

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.extends","stack":[{"type":"Twig.expression.type.string","value":"$resolved:0152f66c9e7cd9face943e34d5b55d868291eccd74f548fcbeef7e1626b0242d44ef7e5bb3a36e075e42386b6b9320be2ec1f6d6254d060cab6a1adc80cb42b1:layout.twig"}]}},{"type":"raw","value":"\n"},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"main","output":[{"type":"raw","value":"\t<div class=\"main__left\">\n\t\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:3cb40fc6eecc60a0a48f5dbfed58207b2d5e3b44bb0848250ecda41d1db1b7fe4737a7f98e275d56fa737e67b03446bedbf7a7e2b7da48e6eb52c8e22cf23646:reg-form.twig"}]}},{"type":"raw","value":"\t</div>\n\t<div class=\"main__right\">\n\t\t\n\t</div>\n"}]}}],
    template = twig({"id":"$resolved:c6cf119ee5e7d53f574196343b197739f53629de4f06cc6f5a1581f858d5ca2895f784e5d0f4192088c79ffc2673c87846742cf28679d1d19060576313e36a5e:index.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.extends","stack":[{"type":"Twig.expression.type.string","value":"$resolved:0152f66c9e7cd9face943e34d5b55d868291eccd74f548fcbeef7e1626b0242d44ef7e5bb3a36e075e42386b6b9320be2ec1f6d6254d060cab6a1adc80cb42b1:layout.twig"}]}},{"type":"raw","value":"\n"},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"main","output":[{"type":"raw","value":"\t<div class=\"main__left\">\n\t\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:3cb40fc6eecc60a0a48f5dbfed58207b2d5e3b44bb0848250ecda41d1db1b7fe4737a7f98e275d56fa737e67b03446bedbf7a7e2b7da48e6eb52c8e22cf23646:reg-form.twig"}]}},{"type":"raw","value":"\t</div>\n\t<div class=\"main__right\">\n\t\t\n\t</div>\n"}]}}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.js.map