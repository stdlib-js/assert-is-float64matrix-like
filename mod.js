// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,f=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var s,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||a.call(t,e)?(s=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=s):t[e]=r.value),l="get"in r,h="set"in r,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,e,r.get),h&&f&&f.call(t,e,r.set),t};var s=e;function c(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"boolean"==typeof t}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return h&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&_.call(t,e)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var b=p()?function(t){var e,r,n;if(null==t)return y.call(t);r=t[d],e=g(t,d);try{t[d]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[d]=r:delete t[d],n}:function(t){return y.call(t)},m=Boolean.prototype.toString;var v=p();function w(t){return"object"==typeof t&&(t instanceof Boolean||(v?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function O(t){return l(t)||w(t)}function A(){return new Function("return this;")()}c(O,"isPrimitive",l),c(O,"isObject",w);var j="object"==typeof self?self:null,E="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof U?U:null;function S(t){if(arguments.length){if(!l(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(j)return j;if(E)return E;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}var N=S();function x(t,e,r){s(t,e,{configurable:!1,enumerable:!1,get:r})}var T={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function B(t){return Math.abs(t)}function R(t,e){return e&&(2===t||3===t)}function L(t,e){return e&&(1===t||3===t)}function M(t,e,r){var n,i,o,f,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(f=e[u])>0?o+=f*(t[u]-1):f<0&&(i+=f*(t[u]-1))}return[i,o]}function F(t){return t.re}function C(t){return t.im}function P(t){return"string"==typeof t}c(M,"assign",(function(t,e,r,n){var i,o,f,u,a;for(i=t.length,o=r,f=r,a=0;a<i;a++){if(0===t[a])return n[0]=r,n[1]=r,n;(u=e[a])>0?f+=u*(t[a]-1):u<0&&(o+=u*(t[a]-1))}return n[0]=o,n[1]=f,n}));var V=String.prototype.valueOf;var D=p();function G(t){return"object"==typeof t&&(t instanceof String||(D?function(t){try{return V.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function Y(t){return P(t)||G(t)}c(Y,"isPrimitive",P),c(Y,"isObject",G);var J=/[-\/\\^$*+?.()|[\]{}]/g;var k=/./,W=S(),X=W.document&&W.document.childNodes,$=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var q=/^\s*function\s*([^(]*)/i;c(H,"REGEXP",q);var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};function K(t){return null!==t&&"object"==typeof t}function Q(t){var e,r,n,i;if(("Object"===(r=b(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=q.exec(n.toString()))return e[1]}return K(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}c(K,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!z(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(K));var Z="function"==typeof k||"object"==typeof $||"function"==typeof X?function(t){return Q(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Q(t).toLowerCase():e};var tt=RegExp.prototype.exec;var et=p();function rt(t){return"object"==typeof t&&(t instanceof RegExp||(et?function(t){try{return tt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===b(t)))}function nt(t,e,r){if(!P(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(P(e))e=function(t){var e,r;if(!P(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(J,"\\$&"):(e=(e=t.substring(1,r)).replace(J,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!rt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!P(r)&&"function"!==Z(r))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+r+"`.");return t.replace(e,r)}var it={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var ot="function"==typeof Uint8Array;var ft="function"==typeof Uint8Array?Uint8Array:null;var ut,at="function"==typeof Uint8Array?Uint8Array:void 0;ut=function(){var t,e,r;if("function"!=typeof ft)return!1;try{e=new ft(e=[1,3.14,-3.14,256,257]),r=e,t=(ot&&r instanceof Uint8Array||"[object Uint8Array]"===b(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?at:function(){throw new Error("not implemented")};var st=ut,ct="function"==typeof Uint16Array;var lt="function"==typeof Uint16Array?Uint16Array:null;var ht,pt="function"==typeof Uint16Array?Uint16Array:void 0;ht=function(){var t,e,r;if("function"!=typeof lt)return!1;try{e=new lt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(ct&&r instanceof Uint16Array||"[object Uint16Array]"===b(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?pt:function(){throw new Error("not implemented")};var yt,_t={uint16:ht,uint8:st};(yt=new _t.uint16(1))[0]=4660;var gt=52===new _t.uint8(yt.buffer)[0],dt="function"==typeof ArrayBuffer;var bt="function"==typeof Float64Array;function mt(t){return bt&&t instanceof Float64Array||"[object Float64Array]"===b(t)}var vt="function"==typeof Float64Array?Float64Array:null;var wt,Ot="function"==typeof Float64Array?Float64Array:void 0;wt=function(){var t,e;if("function"!=typeof vt)return!1;try{t=mt(e=new vt([1,3.14,-3.14,NaN]))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Ot:function(){throw new Error("not implemented")};var At=wt,jt="function"==typeof ArrayBuffer?ArrayBuffer:null;var Et,Ut="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Et=function(){var t,e,r,n;if("function"!=typeof jt)return!1;try{r=new jt(16),n=r,(t=(dt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===b(n))&&"function"==typeof jt.isView)&&((e=new At(r))[0]=-3.14,e[1]=NaN,t=t&&jt.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?Ut:function(){throw new Error("not implemented")};var It=Et,St="function"==typeof DataView;var Nt="function"==typeof DataView?DataView:null;var xt,Tt="function"==typeof DataView?DataView:void 0;xt=function(){var t,e,r,n;if("function"!=typeof Nt)return!1;try{r=new It(24),e=new Nt(r,8),n=e,(t=(St&&n instanceof DataView||"[object DataView]"===b(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?Tt:function(){throw new Error("not implemented")};var Bt=xt,Rt="function"==typeof BigInt?BigInt:void 0,Lt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Mt(){return Lt.slice()}function Ft(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ct(t,e,r){s(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Pt(t){return Object.keys(Object(t))}var Vt=void 0!==Object.keys;function Dt(t){return"[object Arguments]"===b(t)}var Gt=function(){return Dt(arguments)}();function Yt(t){return"number"==typeof t}var Jt=Number,kt=Jt.prototype.toString;var Wt=p();function Xt(t){return"object"==typeof t&&(t instanceof Jt||(Wt?function(t){try{return kt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function $t(t){return Yt(t)||Xt(t)}function Ht(t){return t!=t}function qt(t){return Yt(t)&&Ht(t)}function zt(t){return Xt(t)&&Ht(t.valueOf())}function Kt(t){return qt(t)||zt(t)}c($t,"isPrimitive",Yt),c($t,"isObject",Xt),c(Kt,"isPrimitive",qt),c(Kt,"isObject",zt);var Qt=Number.POSITIVE_INFINITY,Zt=Jt.NEGATIVE_INFINITY,te=Math.floor;function ee(t){return te(t)===t}function re(t){return t<Qt&&t>Zt&&ee(t)}function ne(t){return Yt(t)&&re(t)}function ie(t){return Xt(t)&&re(t.valueOf())}function oe(t){return ne(t)||ie(t)}c(oe,"isPrimitive",ne),c(oe,"isObject",ie);var fe=Object.prototype.propertyIsEnumerable;var ue=!fe.call("beep","0");function ae(t,e){var r;return null!=t&&(!(r=fe.call(t,e))&&ue&&Y(t)?!qt(e=+e)&&ne(e)&&e>=0&&e<t.length:r)}var se=Gt?Dt:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&ee(t.length)&&t.length>=0&&t.length<=4294967295&&g(t,"callee")&&!ae(t,"callee")},ce=Array.prototype.slice;var le=ae((function(){}),"prototype"),he=!ae({toString:null},"toString");function pe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ee(t.length)&&t.length>=0&&t.length<=9007199254740991}function ye(t,e,r){var n,i;if(!pe(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!ne(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Kt(e)){for(;i<n;i++)if(Kt(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function _e(t){return t.constructor&&t.constructor.prototype===t}var ge=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],de="undefined"==typeof window?void 0:window;var be=function(){var t;if("undefined"===Z(de))return!1;for(t in de)try{-1===ye(ge,t)&&g(de,t)&&null!==de[t]&&"object"===Z(de[t])&&_e(de[t])}catch(t){return!0}return!1}(),me="undefined"!=typeof window;var ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var we=Vt?function(){return 2!==(Pt(arguments)||"").length}(1,2)?function(t){return se(t)?Pt(ce.call(t)):Pt(t)}:Pt:function(t){var e,r,n,i,o,f,u;if(i=[],se(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!g(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof t)&&!K(t))return i;r=le&&n}for(o in t)r&&"prototype"===o||!g(t,o)||i.push(String(o));if(he)for(e=function(t){if(!1===me&&!be)return _e(t);try{return _e(t)}catch(t){return!1}}(t),u=0;u<ve.length;u++)f=ve[u],e&&"constructor"===f||!g(t,f)||i.push(String(f));return i};c(Mt,"enum",Ft),function(t,e){var r,n,i;for(r=we(e),i=0;i<r.length;i++)Ct(t,n=r[i],e[n])}(Mt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Oe=["row-major","column-major"];function Ae(){return{"row-major":1,"column-major":2}}c((function(){return Oe.slice()}),"enum",Ae);var je=["throw","clamp","wrap"];function Ee(){return{throw:1,clamp:2,wrap:3}}c((function(){return je.slice()}),"enum",Ee);var Ue={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Ie={"row-major":1,"column-major":2},Se={throw:1,clamp:2,wrap:3};var Ne=new st(8),xe=new Bt(Ne.buffer);function Te(t,e,r,n){var i,o,f;if(0===t){for(f=0;f<Ne.length;f++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=te(t/4294967296),gt?(xe.setUint32(0,o,gt),xe.setUint32(4,i,gt)):(xe.setUint32(0,i,gt),xe.setUint32(4,o,gt)),f=0;f<Ne.length;f++)e[n]=Ne[f],n+=r;return e}c((function(t){var e,r,n,i;return e=new st(8),0===t||(i=(4294967295&t)>>>0,n=te(t/4294967296),r=new Bt(e.buffer),gt?(r.setUint32(0,i,gt),r.setUint32(4,n,gt)):(r.setUint32(0,n,gt),r.setUint32(4,i,gt))),e}),"assign",Te);var Be={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Re={"row-major":1,"column-major":2},Le={throw:1,clamp:2,wrap:3};function Me(t,e,r,n,i,o){var f,u,a,s,c;if(!(this instanceof Me))return new Me(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=function(t){return T[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),f=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=M(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),a=function(t){var e,r,n,i,o,f;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=B(t[0]),f=1;f<r;f++){if(o=B(t[f]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:L(a,f),COLUMN_MAJOR_CONTIGUOUS:R(a,f),READONLY:!1},this.__meta_dataview__=null,this}function Fe(t){return function(t){return t instanceof Me||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length}function Ce(t){return Fe(t)&&mt(t.data)}c(Me,"name","ndarray"),x(Me.prototype,"byteLength",(function(){return this._byteLength})),x(Me.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),x(Me.prototype,"data",(function(){return this._buffer})),x(Me.prototype,"dtype",(function(){return this._dtype})),x(Me.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),x(Me.prototype,"length",(function(){return this._length})),x(Me.prototype,"ndims",(function(){return this._ndims})),x(Me.prototype,"offset",(function(){return this._offset})),x(Me.prototype,"order",(function(){return this._order})),x(Me.prototype,"shape",(function(){return this._shape.slice()})),x(Me.prototype,"strides",(function(){return this._strides.slice()})),c(Me.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),c(Me.prototype,"iget",(function(t){var e,r,n,i,o,f;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(f=0;f<n;f++)t-=o=t%r[f],t/=r[f],i+=o*e[f];return this._accessors?this._buffer.get(i):this._buffer[i]}for(f=n-1;f>=0;f--)t-=o=t%r[f],t/=r[f],i+=o*e[f];return this._accessors?this._buffer.get(i):this._buffer[i]})),c(Me.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),c(Me.prototype,"iset",(function(t,e){var r,n,i,o,f,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=f=t%n[u],t/=n[u],o+=f*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=f=t%n[u],t/=n[u],o+=f*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),c(Me.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=F(i=this.iget(o))+", "+C(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=F(i=this.iget(o))+", "+C(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=F(i=this.iget(this._length-1-o))+", "+C(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=nt(it[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),c(Me.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(F(r),C(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),c(Me.prototype,"__array_meta_dataview__","function"==typeof N.BigInt&&"function"==typeof BigInt&&"bigint"==typeof N.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,f,u,a,s,c,l,h,p;if(a=this._mode||"throw",f=this._submode||[a],r=33+16*(l=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new Bt(new It(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,gt?1:0),s+=1,u.setInt16(s,Ue[n],gt),s+=2,u.setBigInt64(s,Rt(l),gt),c=8*l,s+=8,p=0;p<l;p++)u.setBigInt64(s,Rt(i[p]),gt),u.setBigInt64(s+c,Rt(o[p]*t),gt),s+=8;for(s+=c,u.setBigInt64(s,Rt(this._offset*t),gt),s+=8,u.setInt8(s,Ie[this._order]),s+=1,u.setInt8(s,Se[a]),s+=1,u.setBigInt64(s,Rt(h),gt),s+=8,p=0;p<h;p++)u.setInt8(s,Se[f[p]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(s,e,gt),this.__meta_dataview__=u,u}:function(){var t,e,r,n,i,o,f,u,a,s,c,l,h,p,y;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(h=this._ndims)+(p=u.length),(a=this.__meta_dataview__)&&a.byteLength===n)return a;for(a=new Bt(new It(n)),e=new st(a.buffer),o=this._shape,f=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,a.setInt8(c,gt?1:0),c+=1,a.setInt16(c,Be[i],gt),Te(h,e,1,c+=2),l=8*h,c+=8,y=0;y<h;y++)Te(o[y],e,1,c),Te(f[y]*t,e,1,c+l),c+=8;for(c+=l,Te(this._offset*t,e,1,c),c+=8,a.setInt8(c,Re[this._order]),c+=1,a.setInt8(c,Le[s]),Te(p,e,1,c+=1),c+=8,y=0;y<p;y++)a.setInt8(c,Le[u[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,a.setInt32(c,r,gt),this.__meta_dataview__=a,a});export{Ce as default};
//# sourceMappingURL=mod.js.map
