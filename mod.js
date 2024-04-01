// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(t){var e,n,s;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,s=parseInt(n,10),!isFinite(s)){if(!r(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===t.specifier||10!==e)&&(s=4294967295+s+1),s<0?(n=(-s).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=s.toString(e),s||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,c=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,_=/\.0*e/,y=/(\..*[^0])0*e/;function b(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":l(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=c.call(n,y,"$1e"),n=c.call(n,_,"e"),n=c.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=c.call(n,p,"e+0$1"),n=c.call(n,h,"e-0$1"),t.alternate&&(n=c.call(n,g,"$1."),n=c.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===f.call(t.specifier)?f.call(n):u.call(n)}function w(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var m=String.fromCharCode,x=isNaN,E=Array.isArray;function j(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function S(t){var e,r,n,o,a,l,u,f,c,p,h,g,d;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",u=1,f=0;f<t.length;f++)if(n=t[f],"string"==typeof n)l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,c=0;c<r.length;c++)switch(o=r.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,x(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,h=n.width,g=n.padRight,d=void 0,(d=h-p.length)<0?p:p=g?p+w(d):w(d)+p)),l+=n.arg||"",u+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function A(t){var e,r,n,i;for(r=[],i=0,n=k.exec(t);n;)(e=t.slice(i,k.lastIndex-n[0].length)).length&&r.push(e),r.push(T(n)),i=k.lastIndex,n=k.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function V(t){var e,r;if("string"!=typeof t)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[A(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return S.apply(null,e)}var O,P=Object.prototype,C=P.toString,I=P.__defineGetter__,F=P.__defineSetter__,$=P.__lookupGetter__,R=P.__lookupSetter__;O=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&($.call(t,e)||R.call(t,e)?(n=t.__proto__,t.__proto__=P,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(t,e,r.get),a&&F&&F.call(t,e,r.set),t};var B=O;function L(t,e,r){B(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var G=/./;function Z(t){return"boolean"==typeof t}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(t,e){return null!=t&&W.call(t,e)}var z="function"==typeof Symbol?Symbol:void 0,J="function"==typeof z?z.toStringTag:"";var q=N()?function(t){var e,r,n;if(null==t)return U.call(t);r=t[J],e=X(t,J);try{t[J]=void 0}catch(e){return U.call(t)}return n=U.call(t),e?t[J]=r:delete t[J],n}:function(t){return U.call(t)},D=Boolean,H=Boolean.prototype.toString;var K=N();function Q(t){return"object"==typeof t&&(t instanceof D||(K?function(t){try{return H.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===q(t)))}function Y(t){return Z(t)||Q(t)}L(Y,"isPrimitive",Z),L(Y,"isObject",Q);var tt="object"==typeof self?self:null,et="object"==typeof window?window:null,rt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nt="object"==typeof rt?rt:null,it="object"==typeof globalThis?globalThis:null;var ot=function(t){if(arguments.length){if(!Z(t))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(it)return it;if(tt)return tt;if(et)return et;if(nt)return nt;throw new Error("unexpected error. Unable to resolve global object.")}(),at=ot.document&&ot.document.childNodes,st=Int8Array;function lt(){return/^\s*function\s*([^(]*)/i}var ut=/^\s*function\s*([^(]*)/i;L(lt,"REGEXP",ut);var ft=Array.isArray?Array.isArray:function(t){return"[object Array]"===q(t)};function ct(t){return null!==t&&"object"==typeof t}function pt(t){var e,r,n,i;if(("Object"===(r=q(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ut.exec(n.toString()))return e[1]}return ct(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}L(ct,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!ft(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ct));var ht="function"==typeof G||"object"==typeof st||"function"==typeof at?function(t){return pt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?pt(t).toLowerCase():e};function gt(t){return"function"===ht(t)}var dt="function"==typeof z&&"symbol"==typeof z("foo")&&X(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;function vt(t){return B(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,B(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),B(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function _t(){return this instanceof _t?(this._length=0,this._first=null,this._last=null,this):new _t}function yt(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}function bt(t,e){for(var r=t.first();r;){if(r.value[0]===e)return r;r=r.next}return null}function wt(t,e){for(var r=t.first();r;)r.value[2]<e&&t.remove(r),r=r.next;return t}function mt(){var t,e,r,n,i,o,a,s,l,u;for(t=[],s=0;s<arguments.length&&(u=void 0,u=typeof(l=arguments[s]),null!==l&&("object"===u||"function"===u)&&gt(l.next));s++)t.push(arguments[s]);if((i=t.length)<2)throw new Error(yt("0P90I"));if(i===arguments.length)throw new Error(yt("0P90L"));if(arguments.length>i+2)throw new TypeError(yt("0P90M"));if(!gt(r=arguments[s]))throw new TypeError(yt("0P94C",r));if(n=arguments[s+1],L(o={},"next",(function(){var i,o;if(a)return{done:!0};if(void 0===e){if(i=function(t,e,r){var n,i,o,a,s,l;for(n=new _t,i=t[0];!(a=i.next()).done;)null===(s=bt(n,o=e.call(r,a.value)))&&n.push([o,a.value,1]);if(0===n.length)return n;for(l=1;l<t.length;l++){for(i=t[l];!(a=i.next()).done;)(s=bt(n,o=e.call(r,a.value)))&&s.value[2]===l&&(s.value[2]+=1);if(wt(n,l+1),0===n.length)return n}return n}(t,r,n),0===i.length)return a=!0,{done:!0};e=i.iterator()}if((o=e.next()).done)return a=!0,o;return{value:o.value[1],done:!1}})),L(o,"return",(function(t){if(a=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),dt){for(s=0;s<i;s++)if(!gt(t[s][dt])){a=!0;break}a||L(o,dt,(function(){var e,o;for(e=[],o=0;o<i;o++)e.push(t[o][dt]());return e.push(r),e.push(n),mt.apply(null,e)}))}return a=!1,o}L(_t.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),L(_t.prototype,"first",(function(){if(this._length)return this._first})),L(_t.prototype,"insert",(function(t,e){var r;if(t===this._last)return this.push(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new vt(e),t._next._prev=r,r._next=t._next,t._next=r,r._prev=t,this._length+=1,this})),L(_t.prototype,"iterator",(function(){var t,e,r,n,i;return r=this,i=-1,t=this.toArray(),L(e={},"next",(function(){if(i+=1,n||i>=t.length)return{done:!0};return{value:t[i],done:!1}})),L(e,"return",(function(t){if(n=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),dt&&L(e,dt,(function(){return r.iterator()})),e})),L(_t.prototype,"last",(function(){if(this._length)return this._last})),function(t,e,r){B(t,e,{configurable:!1,enumerable:!1,get:r})}(_t.prototype,"length",(function(){return this._length})),L(_t.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),L(_t.prototype,"push",(function(t){var e;return e=new vt(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),L(_t.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),L(_t.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),L(_t.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),L(_t.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),L(_t.prototype,"unshift",(function(t){var e;return e=new vt(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this}));export{mt as default};
//# sourceMappingURL=mod.js.map
