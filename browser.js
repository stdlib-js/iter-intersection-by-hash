// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(t){var e,n,s;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,s=parseInt(n,10),!isFinite(s)){if(!r(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===t.specifier||10!==e)&&(s=4294967295+s+1),s<0?(n=(-s).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=s.toString(e),s||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,c=String.prototype.toUpperCase,p=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,_=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":l(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,y,"e"),n=p.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,h,"e+0$1"),n=p.call(n,g,"e-0$1"),t.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===c.call(t.specifier)?c.call(n):f.call(n)}function m(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function x(t,e,r){var n=e-t.length;return n<0?t:t=r?t+m(n):m(n)+t}var E=String.fromCharCode,j=isNaN,S=Array.isArray;function k(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function T(t){var e,r,n,o,a,l,f,c,p;if(!S(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,c=0;c<t.length;c++)if(u(n=t[c]))l+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function O(t){var e,r,n,i;for(r=[],i=0,n=A.exec(t);n;)(e=t.slice(i,A.lastIndex-n[0].length)).length&&r.push(e),r.push(V(n)),i=A.lastIndex,n=A.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function I(t){return"string"==typeof t}function F(t){var e,r,n;if(!I(t))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=O(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return T.apply(null,r)}var $,C=Object.prototype,B=C.toString,P=C.__defineGetter__,R=C.__defineSetter__,L=C.__lookupGetter__,G=C.__lookupSetter__;$=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(L.call(t,e)||G.call(t,e)?(n=t.__proto__,t.__proto__=C,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(t,e,r.get),a&&R&&R.call(t,e,r.set),t};var M=$;function Z(t,e,r){M(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var N=/./;function W(t){return"boolean"==typeof t}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function J(t,e){return null!=t&&z.call(t,e)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",K=X()?function(t){var e,r,n;if(null==t)return H.call(t);r=t[D],e=J(t,D);try{t[D]=void 0}catch(e){return H.call(t)}return n=H.call(t),e?t[D]=r:delete t[D],n}:function(t){return H.call(t)},Q=Boolean,Y=Boolean.prototype.toString,tt=X();function et(t){return"object"==typeof t&&(t instanceof Q||(tt?function(t){try{return Y.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===K(t)))}function rt(t){return W(t)||et(t)}function nt(){return new Function("return this;")()}Z(rt,"isPrimitive",W),Z(rt,"isObject",et);var it="object"==typeof self?self:null,ot="object"==typeof window?window:null,at="object"==typeof globalThis?globalThis:null,st=function(t){if(arguments.length){if(!W(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return nt()}if(at)return at;if(it)return it;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")}(),ut=st.document&&st.document.childNodes,lt=Int8Array;function ft(){return/^\s*function\s*([^(]*)/i}var ct=/^\s*function\s*([^(]*)/i;Z(ft,"REGEXP",ct);var pt=Array.isArray?Array.isArray:function(t){return"[object Array]"===K(t)};function ht(t){return null!==t&&"object"==typeof t}function gt(t){var e,r,n,i;if(("Object"===(r=K(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ct.exec(n.toString()))return e[1]}return ht(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}Z(ht,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!pt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ht));var dt="function"==typeof N||"object"==typeof lt||"function"==typeof ut?function(t){return gt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?gt(t).toLowerCase():e};function vt(t){return"function"===dt(t)}function _t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&vt(t.next)}var yt="function"==typeof q&&"symbol"==typeof q("foo")&&J(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;function bt(t){return M(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,M(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),M(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function wt(){return this instanceof wt?(this._length=0,this._first=null,this._last=null,this):new wt}function mt(t,e){for(var r=t.first();r;){if(r.value[0]===e)return r;r=r.next}return null}function xt(t,e){for(var r=t.first();r;)r.value[2]<e&&t.remove(r),r=r.next;return t}function Et(t,e,r){var n,i,o,a,s,u;for(n=new wt,i=t[0];!(a=i.next()).done;)null===(s=mt(n,o=e.call(r,a.value)))&&n.push([o,a.value,1]);if(0===n.length)return n;for(u=1;u<t.length;u++){for(i=t[u];!(a=i.next()).done;)(s=mt(n,o=e.call(r,a.value)))&&s.value[2]===u&&(s.value[2]+=1);if(xt(n,u+1),0===n.length)return n}return n}return Z(wt.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),Z(wt.prototype,"first",(function(){if(this._length)return this._first})),Z(wt.prototype,"insert",(function(t,e){var r;if(t===this._last)return this.push(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new bt(e),t._next._prev=r,r._next=t._next,t._next=r,r._prev=t,this._length+=1,this})),Z(wt.prototype,"iterator",(function(){var t,e,r,n,i;return r=this,i=-1,t=this.toArray(),Z(e={},"next",(function(){return i+=1,n||i>=t.length?{done:!0}:{value:t[i],done:!1}})),Z(e,"return",(function(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}})),yt&&Z(e,yt,(function(){return r.iterator()})),e})),Z(wt.prototype,"last",(function(){if(this._length)return this._last})),function(t,e,r){M(t,e,{configurable:!1,enumerable:!1,get:r})}(wt.prototype,"length",(function(){return this._length})),Z(wt.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),Z(wt.prototype,"push",(function(t){var e;return e=new bt(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),Z(wt.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),Z(wt.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),Z(wt.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),Z(wt.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),Z(wt.prototype,"unshift",(function(t){var e;return e=new bt(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this})),function t(){var e,r,n,i,o,a,s,u;for(e=[],u=0;u<arguments.length&&_t(arguments[u]);u++)e.push(arguments[u]);if((o=e.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");if(o===arguments.length)throw new Error("insufficient arguments. Must provide a hash function.");if(arguments.length>o+2)throw new TypeError("invalid argument. Iterator arguments must be iterator protocol-compliant objects.");if(!vt(n=arguments[u]))throw new TypeError(F("invalid argument. Hash function argument must be a function. Value: `%s`.",n));if(i=arguments[u+1],Z(a={},"next",l),Z(a,"return",f),yt){for(u=0;u<o;u++)if(!vt(e[u][yt])){s=!0;break}s||Z(a,yt,c)}return s=!1,a;function l(){var t,o;if(s)return{done:!0};if(void 0===r){if(0===(t=Et(e,n,i)).length)return s=!0,{done:!0};r=t.iterator()}return(o=r.next()).done?(s=!0,o):{value:o.value[1],done:!1}}function f(t){return s=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){var r,a;for(r=[],a=0;a<o;a++)r.push(e[a][yt]());return r.push(n),r.push(i),t.apply(null,r)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterIntersectionByHash=e();
//# sourceMappingURL=browser.js.map
