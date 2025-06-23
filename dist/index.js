"use strict";var b=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var p=b(function(F,d){"use strict";var h=require("@stdlib/utils-define-nonenumerable-read-only-property"),g=require("@stdlib/assert-is-function"),q=require("@stdlib/assert-is-iterator-like"),s=require("@stdlib/symbol-iterator"),y=require("@stdlib/dstructs-linked-list"),k=require("@stdlib/string-format");function c(e,n){for(var r=e.first();r;){if(r.value[0]===n)return r;r=r.next}return null}function E(e,n){for(var r=e.first();r;)r.value[2]<n&&e.remove(r),r=r.next;return e}function L(e,n,r){var a,i,o,u,t,l;for(a=new y,i=e[0];u=i.next(),!u.done;)o=n.call(r,u.value),t=c(a,o),t===null&&a.push([o,u.value,1]);if(a.length===0)return a;for(l=1;l<e.length;l++){for(i=e[l];u=i.next(),!u.done;)o=n.call(r,u.value),t=c(a,o),t&&t.value[2]===l&&(t.value[2]+=1);if(E(a,l+1),a.length===0)return a}return a}function m(){var e,n,r,a,i,o,u,t;for(e=[],t=0;t<arguments.length&&q(arguments[t]);t++)e.push(arguments[t]);if(i=e.length,i<2)throw new Error("insufficient arguments. Must provide two or more iterators.");if(i===arguments.length)throw new Error("insufficient arguments. Must provide a hash function.");if(arguments.length>i+2)throw new TypeError("invalid argument. Iterator arguments must be iterator protocol-compliant objects.");if(r=arguments[t],!g(r))throw new TypeError(k("invalid argument. Hash function argument must be a function. Value: `%s`.",r));if(a=arguments[t+1],o={},h(o,"next",l),h(o,"return",w),s){for(t=0;t<i;t++)if(!g(e[t][s])){u=!0;break}u||h(o,s,x)}return u=!1,o;function l(){var v,f;if(u)return{done:!0};if(n===void 0){if(v=L(e,r,a),v.length===0)return u=!0,{done:!0};n=v.iterator()}return f=n.next(),f.done?(u=!0,f):{value:f.value[1],done:!1}}function w(v){return u=!0,arguments.length?{value:v,done:!0}:{done:!0}}function x(){var v,f;for(v=[],f=0;f<i;f++)v.push(e[f][s]());return v.push(r),v.push(a),m.apply(null,v)}}d.exports=m});var I=p();module.exports=I;
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
