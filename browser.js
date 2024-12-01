// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(t){var e,n,s;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,s=parseInt(n,10),!isFinite(s)){if(!r(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===t.specifier||10!==e)&&(s=4294967295+s+1),s<0?(n=(-s).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=s.toString(e),s||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,c=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,_=/\.0*e/,y=/(\..*[^0])0*e/;function b(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":l(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=c.call(n,y,"$1e"),n=c.call(n,_,"e"),n=c.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=c.call(n,p,"e+0$1"),n=c.call(n,h,"e-0$1"),t.alternate&&(n=c.call(n,g,"$1."),n=c.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===f.call(t.specifier)?f.call(n):u.call(n)}function w(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var m=String.fromCharCode,x=Array.isArray;function E(t){return t!=t}function j(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function S(t){var e,r,n,o,a,l,u,f,c,p,h,g,d;if(!x(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",u=1,f=0;f<t.length;f++)if("string"==typeof(n=t[f]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,c=0;c<r.length;c++)switch(o=r.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,E(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,h=n.width,g=n.padRight,d=void 0,(d=h-p.length)<0?p:p=g?p+w(d):w(d)+p)),l+=n.arg||"",u+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function A(t){var e,r,n,i;for(r=[],i=0,n=k.exec(t);n;)(e=t.slice(i,k.lastIndex-n[0].length)).length&&r.push(e),r.push(T(n)),i=k.lastIndex,n=k.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function V(t){var e,r;if("string"!=typeof t)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[A(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return S.apply(null,e)}var I,O=Object.prototype,P=O.toString,C=O.__defineGetter__,F=O.__defineSetter__,$=O.__lookupGetter__,B=O.__lookupSetter__;I=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&($.call(t,e)||B.call(t,e)?(n=t.__proto__,t.__proto__=O,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(t,e,r.get),a&&F&&F.call(t,e,r.set),t};var R=I;function L(t,e,r){R(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var G=/./;function Z(t){return"boolean"==typeof t}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function N(t,e){return null!=t&&X.call(t,e)}var z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof z?z.toStringTag:"",J=U()?function(t){var e,r,n;if(null==t)return W.call(t);r=t[H],e=N(t,H);try{t[H]=void 0}catch(e){return W.call(t)}return n=W.call(t),e?t[H]=r:delete t[H],n}:function(t){return W.call(t)},q=Boolean,D=Boolean.prototype.toString,K=U();function Q(t){return"object"==typeof t&&(t instanceof q||(K?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===J(t)))}function Y(t){return Z(t)||Q(t)}L(Y,"isPrimitive",Z),L(Y,"isObject",Q);var tt="object"==typeof self?self:null,et="object"==typeof window?window:null,rt="object"==typeof globalThis?globalThis:null,nt=function(t){if(arguments.length){if(!Z(t))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(rt)return rt;if(tt)return tt;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")}(),it=nt.document&&nt.document.childNodes,ot=Int8Array;function at(){return/^\s*function\s*([^(]*)/i}var st=/^\s*function\s*([^(]*)/i;L(at,"REGEXP",st);var lt=Array.isArray?Array.isArray:function(t){return"[object Array]"===J(t)};function ut(t){return null!==t&&"object"==typeof t}function ft(t){var e,r,n,i;if(("Object"===(r=J(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=st.exec(n.toString()))return e[1]}return ut(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}L(ut,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!lt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ut));var ct="function"==typeof G||"object"==typeof ot||"function"==typeof it?function(t){return ft(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?ft(t).toLowerCase():e};function pt(t){return"function"===ct(t)}var ht="function"==typeof z&&"symbol"==typeof z("foo")&&N(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;function gt(t){return R(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,R(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),R(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function dt(){return this instanceof dt?(this._length=0,this._first=null,this._last=null,this):new dt}function vt(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}function _t(t,e){for(var r=t.first();r;){if(r.value[0]===e)return r;r=r.next}return null}function yt(t,e){for(var r=t.first();r;)r.value[2]<e&&t.remove(r),r=r.next;return t}return L(dt.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),L(dt.prototype,"first",(function(){if(this._length)return this._first})),L(dt.prototype,"insert",(function(t,e){var r;if(t===this._last)return this.push(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new gt(e),t._next._prev=r,r._next=t._next,t._next=r,r._prev=t,this._length+=1,this})),L(dt.prototype,"iterator",(function(){var t,e,r,n,i;return r=this,i=-1,t=this.toArray(),L(e={},"next",(function(){return i+=1,n||i>=t.length?{done:!0}:{value:t[i],done:!1}})),L(e,"return",(function(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}})),ht&&L(e,ht,(function(){return r.iterator()})),e})),L(dt.prototype,"last",(function(){if(this._length)return this._last})),function(t,e,r){R(t,e,{configurable:!1,enumerable:!1,get:r})}(dt.prototype,"length",(function(){return this._length})),L(dt.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),L(dt.prototype,"push",(function(t){var e;return e=new gt(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),L(dt.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),L(dt.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),L(dt.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),L(dt.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),L(dt.prototype,"unshift",(function(t){var e;return e=new gt(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this})),function t(){var e,r,n,i,o,a,s,l,u,f;for(e=[],l=0;l<arguments.length&&(f=void 0,f=typeof(u=arguments[l]),null!==u&&("object"===f||"function"===f)&&pt(u.next));l++)e.push(arguments[l]);if((o=e.length)<2)throw new Error(vt("0P90I"));if(o===arguments.length)throw new Error(vt("0P90L"));if(arguments.length>o+2)throw new TypeError(vt("0P90M"));if(!pt(n=arguments[l]))throw new TypeError(vt("0P94C",n));if(i=arguments[l+1],L(a={},"next",(function(){var t,o;if(s)return{done:!0};if(void 0===r){if(t=function(t,e,r){var n,i,o,a,s,l;for(n=new dt,i=t[0];!(a=i.next()).done;)null===(s=_t(n,o=e.call(r,a.value)))&&n.push([o,a.value,1]);if(0===n.length)return n;for(l=1;l<t.length;l++){for(i=t[l];!(a=i.next()).done;)(s=_t(n,o=e.call(r,a.value)))&&s.value[2]===l&&(s.value[2]+=1);if(yt(n,l+1),0===n.length)return n}return n}(e,n,i),0===t.length)return s=!0,{done:!0};r=t.iterator()}return(o=r.next()).done?(s=!0,o):{value:o.value[1],done:!1}})),L(a,"return",(function(t){return s=!0,arguments.length?{value:t,done:!0}:{done:!0}})),ht){for(l=0;l<o;l++)if(!pt(e[l][ht])){s=!0;break}s||L(a,ht,(function(){var r,a;for(r=[],a=0;a<o;a++)r.push(e[a][ht]());return r.push(n),r.push(i),t.apply(null,r)}))}return s=!1,a}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterIntersectionByHash=e();
//# sourceMappingURL=browser.js.map
