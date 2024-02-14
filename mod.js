// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,b,"e"),i=f.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,h,"e+0$1"),i=f.call(i,g,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var E=String.fromCharCode,k=isNaN,S=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,i,a,o,l,p,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(c(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=j.exec(e);i;)(r=e.slice(n,j.lastIndex-i[0].length)).length&&t.push(r),t.push(T(i)),n=j.lastIndex,i=j.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function I(e){var r,t;if(!F(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $.apply(null,r)}var C,R=Object.prototype,Z=R.toString,O=R.__defineGetter__,W=R.__defineSetter__,L=R.__lookupGetter__,P=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||P.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&W&&W.call(e,r,t.set),e};var G=C;function N(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=/./;function X(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&H.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var K=B()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[D],r=J(e,D);try{e[D]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[D]=t:delete e[D],i}:function(e){return z.call(e)},Q=Boolean,Y=Boolean.prototype.toString;var ee=B();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return X(e)||re(e)}function ie(e){return"number"==typeof e}function ne(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ae(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ne(n):ne(n)+e,i&&(e="-"+e)),e}N(te,"isPrimitive",X),N(te,"isObject",re);var oe=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ce(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ie(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ae(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ae(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===se.call(e.specifier)?se.call(t):oe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function le(e){return"string"==typeof e}var pe=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,he=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,we=/^(\d+)$/,ve=/^(\d+)e/,be=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function _e(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":pe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=he.call(t,me,"$1e"),t=he.call(t,ye,"e"),t=he.call(t,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=he.call(t,ge,"e+0$1"),t=he.call(t,de,"e-0$1"),e.alternate&&(t=he.call(t,we,"$1."),t=he.call(t,ve,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===fe.call(e.specifier)?fe.call(t):ue.call(t)}function xe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ee(e,r,t){var i=r-e.length;return i<0?e:e=t?e+xe(i):xe(i)+e}var ke=String.fromCharCode,Se=isNaN,Ve=Array.isArray;function $e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function je(e){var r,t,i,n,a,o,s,c,l;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(le(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=$e(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,Se(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,Se(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ce(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Se(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Se(a)?String(i.arg):ke(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_e(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ae(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ee(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var Te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ae(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Fe(e){var r,t,i,n;for(t=[],n=0,i=Te.exec(e);i;)(r=e.slice(n,Te.lastIndex-i[0].length)).length&&t.push(r),t.push(Ae(i)),n=Te.lastIndex,i=Te.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ie(e){return"string"==typeof e}function Ce(e){var r,t;if(!Ie(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Fe(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return je.apply(null,r)}function Re(){return new Function("return this;")()}var Ze="object"==typeof self?self:null,Oe="object"==typeof window?window:null,We="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Le="object"==typeof We?We:null,Pe="object"==typeof globalThis?globalThis:null;var Ge=function(e){if(arguments.length){if(!X(e))throw new TypeError(Ce("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Re()}if(Pe)return Pe;if(Ze)return Ze;if(Oe)return Oe;if(Le)return Le;throw new Error("unexpected error. Unable to resolve global object.")}(),Ne=Ge.document&&Ge.document.childNodes,Ue=Int8Array;function Xe(){return/^\s*function\s*([^(]*)/i}var Me=/^\s*function\s*([^(]*)/i;N(Xe,"REGEXP",Me);var Be=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ze(e){return null!==e&&"object"==typeof e}function He(e){var r,t,i,n;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Me.exec(i.toString()))return r[1]}return ze(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}N(ze,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ce("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Be(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(ze));var Je="function"==typeof U||"object"==typeof Ue||"function"==typeof Ne?function(e){return He(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?He(e).toLowerCase():r};function qe(e){return"function"===Je(e)}function De(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&qe(e.next)}var Ke="function"==typeof Symbol?Symbol:void 0;var Qe="function"==typeof Ke&&"symbol"==typeof Ke("foo")&&J(Ke,"iterator")&&"symbol"==typeof Ke.iterator?Symbol.iterator:null,Ye="function"==typeof Object.defineProperty?Object.defineProperty:null;var er=Object.defineProperty;function rr(e){return"number"==typeof e}function tr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ir(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+tr(n):tr(n)+e,i&&(e="-"+e)),e}var nr=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!rr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ir(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ir(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ar.call(e.specifier)?ar.call(t):nr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function sr(e){return"string"==typeof e}var cr=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,ur=String.prototype.replace,fr=/e\+(\d)$/,hr=/e-(\d)$/,gr=/^(\d+)$/,dr=/^(\d+)e/,wr=/\.0$/,vr=/\.0*e/,br=/(\..*[^0])0*e/;function yr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!rr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":cr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ur.call(t,br,"$1e"),t=ur.call(t,vr,"e"),t=ur.call(t,wr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ur.call(t,fr,"e+0$1"),t=ur.call(t,hr,"e-0$1"),e.alternate&&(t=ur.call(t,gr,"$1."),t=ur.call(t,dr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===pr.call(e.specifier)?pr.call(t):lr.call(t)}function mr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _r(e,r,t){var i=r-e.length;return i<0?e:e=t?e+mr(i):mr(i)+e}var xr=String.fromCharCode,Er=isNaN,kr=Array.isArray;function Sr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Vr(e){var r,t,i,n,a,o,s,c,l;if(!kr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(sr(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=Sr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,Er(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,Er(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=or(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Er(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Er(a)?String(i.arg):xr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=yr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ir(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_r(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var $r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Tr(e){var r,t,i,n;for(t=[],n=0,i=$r.exec(e);i;)(r=e.slice(n,$r.lastIndex-i[0].length)).length&&t.push(r),t.push(jr(i)),n=$r.lastIndex,i=$r.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ar(e){return"string"==typeof e}function Fr(e){var r,t;if(!Ar(e))throw new TypeError(Fr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Tr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Vr.apply(null,r)}var Ir,Cr=Object.prototype,Rr=Cr.toString,Zr=Cr.__defineGetter__,Or=Cr.__defineSetter__,Wr=Cr.__lookupGetter__,Lr=Cr.__lookupSetter__;Ir=function(){try{return Ye({},"x",{}),!0}catch(e){return!1}}()?er:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Rr.call(e))throw new TypeError(Fr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Rr.call(t))throw new TypeError(Fr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Wr.call(e,r)||Lr.call(e,r)?(i=e.__proto__,e.__proto__=Cr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Zr&&Zr.call(e,r,t.get),o&&Or&&Or.call(e,r,t.set),e};var Pr=Ir;function Gr(e){return Pr(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=e,Pr(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),Pr(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function Nr(){return this instanceof Nr?(this._length=0,this._first=null,this._last=null,this):new Nr}function Ur(e){return"number"==typeof e}function Xr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Mr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Xr(n):Xr(n)+e,i&&(e="-"+e)),e}N(Nr.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),N(Nr.prototype,"first",(function(){if(this._length)return this._first})),N(Nr.prototype,"insert",(function(e,r){var t;if(e===this._last)return this.push(r);for(t=this._first;t!==this._last&&t!==e;)t=t._next;if(t===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t=new Gr(r),e._next._prev=t,t._next=e._next,e._next=t,t._prev=e,this._length+=1,this})),N(Nr.prototype,"iterator",(function(){var e,r,t,i,n;return t=this,n=-1,e=this.toArray(),N(r={},"next",(function(){if(n+=1,i||n>=e.length)return{done:!0};return{value:e[n],done:!1}})),N(r,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Qe&&N(r,Qe,(function(){return t.iterator()})),r})),N(Nr.prototype,"last",(function(){if(this._length)return this._last})),function(e,r,t){Pr(e,r,{configurable:!1,enumerable:!1,get:t})}(Nr.prototype,"length",(function(){return this._length})),N(Nr.prototype,"pop",(function(){var e;return this._length&&(e=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),e})),N(Nr.prototype,"push",(function(e){var r;return r=new Gr(e),0===this._length?(this._first=r,this._last=r):(r._prev=this._last,this._last._next=r,this._last=r),this._length+=1,this})),N(Nr.prototype,"remove",(function(e){var r,t;if(e===this._first)return this.shift();if(e===this._last)return this.pop();for(r=e.value,t=this._first;t!==this._last&&t!==e;)t=t._next;if(t===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return e._prev._next=e._next,e._next._prev=e._prev,this._length-=1,r})),N(Nr.prototype,"shift",(function(){var e;return this._length&&(e=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),e})),N(Nr.prototype,"toArray",(function(){var e,r,t;for(r=[],e=this._first,t=0;t<this._length;t++)r.push(e.value),e=e.next;return r})),N(Nr.prototype,"toJSON",(function(){var e={type:"linked-list"};return e.data=this.toArray(),e})),N(Nr.prototype,"unshift",(function(e){var r;return r=new Gr(e),0===this._length?(this._first=r,this._last=r):(r._next=this._first,this._first._prev=r,this._first=r),this._length+=1,this}));var Br=String.prototype.toLowerCase,zr=String.prototype.toUpperCase;function Hr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ur(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Mr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Mr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===zr.call(e.specifier)?zr.call(t):Br.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Jr(e){return"string"==typeof e}var qr=Math.abs,Dr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase,Qr=String.prototype.replace,Yr=/e\+(\d)$/,et=/e-(\d)$/,rt=/^(\d+)$/,tt=/^(\d+)e/,it=/\.0$/,nt=/\.0*e/,at=/(\..*[^0])0*e/;function ot(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ur(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":qr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Qr.call(t,at,"$1e"),t=Qr.call(t,nt,"e"),t=Qr.call(t,it,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Qr.call(t,Yr,"e+0$1"),t=Qr.call(t,et,"e-0$1"),e.alternate&&(t=Qr.call(t,rt,"$1."),t=Qr.call(t,tt,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Kr.call(e.specifier)?Kr.call(t):Dr.call(t)}function st(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ct(e,r,t){var i=r-e.length;return i<0?e:e=t?e+st(i):st(i)+e}var lt=String.fromCharCode,pt=isNaN,ut=Array.isArray;function ft(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ht(e){var r,t,i,n,a,o,s,c,l;if(!ut(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Jr(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=ft(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,pt(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,pt(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Hr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!pt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=pt(a)?String(i.arg):lt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ot(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Mr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ct(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var gt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function dt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function wt(e){var r,t,i,n;for(t=[],n=0,i=gt.exec(e);i;)(r=e.slice(n,gt.lastIndex-i[0].length)).length&&t.push(r),t.push(dt(i)),n=gt.lastIndex,i=gt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function vt(e){return"string"==typeof e}function bt(e){var r,t,i;if(!vt(e))throw new TypeError(bt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=wt(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return ht.apply(null,t)}function yt(e,r){for(var t=e.first();t;){if(t.value[0]===r)return t;t=t.next}return null}function mt(e,r){for(var t=e.first();t;)t.value[2]<r&&e.remove(t),t=t.next;return e}function _t(e,r,t){var i,n,a,o,s,c;for(i=new Nr,n=e[0];!(o=n.next()).done;)null===(s=yt(i,a=r.call(t,o.value)))&&i.push([a,o.value,1]);if(0===i.length)return i;for(c=1;c<e.length;c++){for(n=e[c];!(o=n.next()).done;)(s=yt(i,a=r.call(t,o.value)))&&s.value[2]===c&&(s.value[2]+=1);if(mt(i,c+1),0===i.length)return i}return i}function xt(){var e,r,t,i,n,a,o,s;for(e=[],s=0;s<arguments.length&&De(arguments[s]);s++)e.push(arguments[s]);if((n=e.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");if(n===arguments.length)throw new Error("insufficient arguments. Must provide a hash function.");if(arguments.length>n+2)throw new TypeError("invalid argument. Iterator arguments must be iterator protocol-compliant objects.");if(!qe(t=arguments[s]))throw new TypeError(bt("invalid argument. Hash function argument must be a function. Value: `%s`.",t));if(i=arguments[s+1],N(a={},"next",c),N(a,"return",l),Qe){for(s=0;s<n;s++)if(!qe(e[s][Qe])){o=!0;break}o||N(a,Qe,p)}return o=!1,a;function c(){var n,a;if(o)return{done:!0};if(void 0===r){if(0===(n=_t(e,t,i)).length)return o=!0,{done:!0};r=n.iterator()}return(a=r.next()).done?(o=!0,a):{value:a.value[1],done:!1}}function l(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function p(){var r,a;for(r=[],a=0;a<n;a++)r.push(e[a][Qe]());return r.push(t),r.push(i),xt.apply(null,r)}}export{xt as default};
//# sourceMappingURL=mod.js.map
