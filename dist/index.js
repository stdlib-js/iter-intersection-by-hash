"use strict";var q=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var w=q(function(F,p){"use strict";var h=require("@stdlib/utils-define-nonenumerable-read-only-property"),g=require("@stdlib/assert-is-function"),y=require("@stdlib/assert-is-iterator-like"),s=require("@stdlib/symbol-iterator"),k=require("@stdlib/dstructs-linked-list"),c=require("@stdlib/string-format");function m(t,n){for(var r=t.first();r;){if(r.value[0]===n)return r;r=r.next}return null}function E(t,n){for(var r=t.first();r;)r.value[2]<n&&t.remove(r),r=r.next;return t}function L(t,n,r){var a,i,o,u,e,f;for(a=new k,i=t[0];u=i.next(),!u.done;)o=n.call(r,u.value),e=m(a,o),e===null&&a.push([o,u.value,1]);if(a.length===0)return a;for(f=1;f<t.length;f++){for(i=t[f];u=i.next(),!u.done;)o=n.call(r,u.value),e=m(a,o),e&&e.value[2]===f&&(e.value[2]+=1);if(E(a,f+1),a.length===0)return a}return a}function d(){var t,n,r,a,i,o,u,e;for(t=[],e=0;e<arguments.length&&y(arguments[e]);e++)t.push(arguments[e]);if(i=t.length,i<2)throw new Error("insufficient arguments. Must provide two or more iterators.");if(i===arguments.length)throw new Error("insufficient arguments. Must provide a hash function.");if(arguments.length>i+2)throw new TypeError(c("invalid argument. Must provide an iterator protocol-compliant object. Argument: `%u`. Value: `%s`.",e,arguments[e]));if(r=arguments[e],!g(r))throw new TypeError(c("invalid argument. Hash function argument must be a function. Value: `%s`.",r));if(a=arguments[e+1],o={},h(o,"next",f),h(o,"return",x),s){for(e=0;e<i;e++)if(!g(t[e][s])){u=!0;break}u||h(o,s,b)}return u=!1,o;function f(){var v,l;if(u)return{done:!0};if(n===void 0){if(v=L(t,r,a),v.length===0)return u=!0,{done:!0};n=v.iterator()}return l=n.next(),l.done?(u=!0,l):{value:l.value[1],done:!1}}function x(v){return u=!0,arguments.length?{value:v,done:!0}:{done:!0}}function b(){var v,l;for(v=[],l=0;l<i;l++)v.push(t[l][s]());return v.push(r),v.push(a),d.apply(null,v)}}p.exports=d});var M=w();module.exports=M;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
