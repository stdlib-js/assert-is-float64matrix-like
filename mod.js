// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,f=i.__defineGetter__,u=i.__defineSetter__,a=i.__lookupGetter__,s=i.__lookupSetter__;var c=function(t,r,e){var n,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(t,r)||s.call(t,r)?(n=t.__proto__,t.__proto__=i,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),l="get"in e,h="set"in e,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&f&&f.call(t,r,e.get),h&&u&&u.call(t,r,e.set),t},l=n,h=c,p=e()?l:h,y=p;var _=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},v=_;var g=function(t){return"boolean"==typeof t};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return d&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var O=function(t){return w.call(t)},j=Object.prototype.hasOwnProperty;var A=function(t,r){return null!=t&&j.call(t,r)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=A,I=E,S=m;var N=O,P=function(t){var r,e,n;if(null==t)return S.call(t);e=t[I],r=U(t,I);try{t[I]=void 0}catch(r){return S.call(t)}return n=S.call(t),r?t[I]=e:delete t[I],n},T=b()?P:N,x=Boolean.prototype.toString;var B=T,R=function(t){try{return x.call(t),!0}catch(t){return!1}},L=b();var M=function(t){return"object"==typeof t&&(t instanceof Boolean||(L?R(t):"[object Boolean]"===B(t)))},F=g,C=M;var V=v,D=function(t){return F(t)||C(t)},G=M;V(D,"isPrimitive",g),V(D,"isObject",G);var Y=D;var J=function(){return new Function("return this;")()},k="object"==typeof self?self:null,W="object"==typeof window?window:null,X="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},$="object"==typeof X?X:null;module.exports=$;var H=Y.isPrimitive,z=J,q=k,K=W,Q=t(Object.freeze({__proto__:null}));var Z=function(t){if(arguments.length){if(!H(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return z()}if(q)return q;if(K)return K;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")},tt=Z,rt=tt();var et=function(){return"function"==typeof rt.BigInt&&"function"==typeof BigInt&&"bigint"==typeof rt.BigInt("1")&&"bigint"==typeof BigInt("1")},nt=p;var it=function(t,r,e){nt(t,r,{configurable:!1,enumerable:!1,get:e})},ot=it,ft={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var ut=function(t){return ft[t]||null};var at=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0};var st=function(t){return Math.abs(t)};var ct=function(t){var r,e,n,i,o,f;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=st(t[0]),f=1;f<e;f++){if(o=st(t[f]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2};var lt=function(t,r){return r&&(2===t||3===t)};var ht=function(t,r){return r&&(1===t||3===t)};var pt=function(t,r,e){var n,i,o,f,u;for(n=t.length,i=e,o=e,u=0;u<n;u++){if(0===t[u])return[e,e];(f=r[u])>0?o+=f*(t[u]-1):f<0&&(i+=f*(t[u]-1))}return[i,o]};v(pt,"assign",(function(t,r,e,n){var i,o,f,u,a;for(i=t.length,o=e,f=e,a=0;a<i;a++){if(0===t[a])return n[0]=e,n[1]=e,n;(u=r[a])>0?f+=u*(t[a]-1):u<0&&(o+=u*(t[a]-1))}return n[0]=o,n[1]=f,n}));var yt=pt;var _t=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=yt(r,e,n))[1]-o[0]+1};var vt=function(t){return{ROW_MAJOR_CONTIGUOUS:t.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY}};var gt=function(t){var r,e,n,i,o,f;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(f=0;f<n;f++)t-=o=t%e[f],t/=e[f],i+=o*r[f];return this._accessors?this._buffer.get(i):this._buffer[i]}for(f=n-1;f>=0;f--)t-=o=t%e[f],t/=e[f],i+=o*r[f];return this._accessors?this._buffer.get(i):this._buffer[i]};var dt=function(t,r){var e,n,i,o,f,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=f=t%n[u],t/=n[u],o+=f*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(u=i-1;u>=0;u--)t-=f=t%n[u],t/=n[u],o+=f*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this};var bt=function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this};var mt=function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]};var wt=function(t){return t.re};var Ot=function(t){return t.im},jt=wt,At=Ot;var Et=function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(jt(e),At(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t};var Ut=function(t){return"string"==typeof t},It=String.prototype.valueOf;var St=T,Nt=function(t){try{return It.call(t),!0}catch(t){return!1}},Pt=b();var Tt=function(t){return"object"==typeof t&&(t instanceof String||(Pt?Nt(t):"[object String]"===St(t)))},xt=Ut,Bt=Tt;var Rt=v,Lt=function(t){return xt(t)||Bt(t)},Mt=Tt;Rt(Lt,"isPrimitive",Ut),Rt(Lt,"isObject",Mt);var Ft=Lt,Ct=Ft.isPrimitive,Vt=/[-\/\\^$*+?.()|[\]{}]/g;var Dt=function(t){var r,e;if(!Ct(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(Vt,"\\$&"):(r=(r=t.substring(1,e)).replace(Vt,"\\$&"),t=t[0]+r+t.substring(e))},Gt=/./,Yt=tt(),Jt=Yt.document&&Yt.document.childNodes,kt=Int8Array,Wt=Gt,Xt=Jt,$t=kt;var Ht=function(){return"function"==typeof Wt||"object"==typeof $t||"function"==typeof Xt};var zt=function(){return/^\s*function\s*([^(]*)/i},qt=zt;v(qt,"REGEXP",zt());var Kt=qt,Qt=T;var Zt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Qt(t)},tr=Zt;var rr=function(t){return null!==t&&"object"==typeof t};v(rr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!tr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(rr));var er=rr,nr=er;var ir=T,or=Kt.REGEXP,fr=function(t){return nr(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ur=function(t){var r,e,n;if(("Object"===(e=ir(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=or.exec(n.toString()))return r[1]}return fr(t)?"Buffer":e},ar=ur;var sr=ur;var cr=function(t){var r;return null===t?"null":"object"===(r=typeof t)?ar(t).toLowerCase():r},lr=function(t){return sr(t).toLowerCase()},hr=Ht()?lr:cr,pr=hr;var yr=function(t){return"function"===pr(t)},_r=RegExp.prototype.exec;var vr=T,gr=function(t){try{return _r.call(t),!0}catch(t){return!1}},dr=b();var br=Dt,mr=yr,wr=Ft.isPrimitive,Or=function(t){return"object"==typeof t&&(t instanceof RegExp||(dr?gr(t):"[object RegExp]"===vr(t)))};var jr=function(t,r,e){if(!wr(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(wr(r))r=br(r),r=new RegExp(r,"g");else if(!Or(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!wr(e)&&!mr(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return t.replace(r,e)},Ar=wt,Er=Ot,Ur={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Ir=function(){var t,r,e,n,i,o,f;if(r=this._shape.length,n="ndarray( '"+(i=this._dtype)+"', ",t="",this._length<=100)if("complex64"===i||"complex128"===i)for(f=0;f<this._length;f++)o=this.iget(f),t+=Ar(o)+", "+Er(o),f<this._length-1&&(t+=", ");else for(f=0;f<this._length;f++)t+=this.iget(f),f<this._length-1&&(t+=", ");else{if("complex64"===i||"complex128"===i)for(f=0;f<3;f++)o=this.iget(f),t+=Ar(o)+", "+Er(o),f<2&&(t+=", ");else for(f=0;f<3;f++)t+=this.iget(f),f<2&&(t+=", ");if(t+=", ..., ","complex64"===i||"complex128"===i)for(f=2;f>=0;f--)o=this.iget(this._length-1-f),t+=Ar(o)+", "+Er(o),f>0&&(t+=", ");else for(f=2;f>=0;f--)t+=this.iget(this._length-1-f),f>0&&(t+=", ")}if(e=Ur[this.dtype],n+=jr(e,"{{data}}",t),n+=", ",n+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",n+=", ",n+="[ ",0===r)n+="0";else for(f=0;f<r;f++)this._strides[f]<0?n+=-this._strides[f]:n+=this._strides[f],f<r-1&&(n+=", ");return n+=" ]",n+=", ",n+="0",n+=", ",n+="'"+this._order+"'",n+=" )"},Sr=T,Nr="function"==typeof Uint8Array;var Pr="function"==typeof Uint8Array?Uint8Array:null,Tr=function(t){return Nr&&t instanceof Uint8Array||"[object Uint8Array]"===Sr(t)},xr=Pr;var Br=function(){var t,r;if("function"!=typeof xr)return!1;try{r=new xr(r=[1,3.14,-3.14,256,257]),t=Tr(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Rr="function"==typeof Uint8Array?Uint8Array:void 0,Lr=function(){throw new Error("not implemented")},Mr=Br()?Rr:Lr,Fr=T,Cr="function"==typeof Uint16Array;var Vr="function"==typeof Uint16Array?Uint16Array:null,Dr=function(t){return Cr&&t instanceof Uint16Array||"[object Uint16Array]"===Fr(t)},Gr=Vr;var Yr=function(){var t,r;if("function"!=typeof Gr)return!1;try{r=new Gr(r=[1,3.14,-3.14,65536,65537]),t=Dr(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Jr,kr="function"==typeof Uint16Array?Uint16Array:void 0,Wr=function(){throw new Error("not implemented")},Xr={uint16:Yr()?kr:Wr,uint8:Mr};(Jr=new Xr.uint16(1))[0]=4660;var $r=52===new Xr.uint8(Jr.buffer)[0],Hr=T,zr="function"==typeof ArrayBuffer;var qr=function(t){return zr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===Hr(t)},Kr=T,Qr="function"==typeof Float64Array;var Zr=function(t){return Qr&&t instanceof Float64Array||"[object Float64Array]"===Kr(t)},te="function"==typeof Float64Array?Float64Array:null,re=Zr,ee=te;var ne=function(){var t,r;if("function"!=typeof ee)return!1;try{r=new ee([1,3.14,-3.14,NaN]),t=re(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var ie,oe="function"==typeof Float64Array?Float64Array:void 0,fe=function(){throw new Error("not implemented")};ie=ne()?oe:fe;var ue="function"==typeof ArrayBuffer?ArrayBuffer:null,ae=qr,se=ie,ce=ue;var le=function(){var t,r,e;if("function"!=typeof ce)return!1;try{e=new ce(16),(t=ae(e)&&"function"==typeof ce.isView)&&((r=new se(e))[0]=-3.14,r[1]=NaN,t=t&&ce.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t};var he="function"==typeof ArrayBuffer?ArrayBuffer:void 0,pe=function(){throw new Error("not implemented")},ye=le()?he:pe,_e=T,ve="function"==typeof DataView;var ge="function"==typeof DataView?DataView:null,de=function(t){return ve&&t instanceof DataView||"[object DataView]"===_e(t)},be=ye,me=ge;var we=function(){var t,r,e;if("function"!=typeof me)return!1;try{e=new be(24),r=new me(e,8),(t=de(r)&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t};var Oe="function"==typeof DataView?DataView:void 0,je=function(){throw new Error("not implemented")},Ae=we()?Oe:je,Ee="function"==typeof BigInt?BigInt:void 0,Ue=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Ie=function(){return Ue.slice()};var Se=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Ne=p;var Pe=function(t,r,e){Ne(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},Te=Pe;var xe=function(t){return Object.keys(Object(t))},Be=xe;var Re=function(){return function(){return 2!==(Be(arguments)||"").length}(1,2)},Le=void 0!==Object.keys,Me=T;var Fe=function(t){return"[object Arguments]"===Me(t)},Ce=Fe;var Ve=function(){return Ce(arguments)}();var De=function(t){return"number"==typeof t},Ge=Number,Ye=Ge.prototype.toString;var Je=T,ke=Ge,We=function(t){try{return Ye.call(t),!0}catch(t){return!1}},Xe=b();var $e=function(t){return"object"==typeof t&&(t instanceof ke||(Xe?We(t):"[object Number]"===Je(t)))},He=De,ze=$e;var qe=v,Ke=function(t){return He(t)||ze(t)},Qe=$e;qe(Ke,"isPrimitive",De),qe(Ke,"isObject",Qe);var Ze=Ke;var tn=function(t){return t!=t},rn=Ze.isPrimitive,en=tn;var nn=function(t){return rn(t)&&en(t)},on=Ze.isObject,fn=tn;var un=function(t){return on(t)&&fn(t.valueOf())},an=nn,sn=un;var cn=v,ln=function(t){return an(t)||sn(t)},hn=un;cn(ln,"isPrimitive",nn),cn(ln,"isObject",hn);var pn=ln,yn=Number.POSITIVE_INFINITY,_n=Ge.NEGATIVE_INFINITY,vn=Math.floor,gn=vn;var dn=function(t){return gn(t)===t},bn=yn,mn=_n,wn=dn;var On=function(t){return t<bn&&t>mn&&wn(t)},jn=Ze.isPrimitive,An=On;var En=function(t){return jn(t)&&An(t)},Un=Ze.isObject,In=On;var Sn=function(t){return Un(t)&&In(t.valueOf())},Nn=En,Pn=Sn;var Tn=v,xn=function(t){return Nn(t)||Pn(t)},Bn=Sn;Tn(xn,"isPrimitive",En),Tn(xn,"isObject",Bn);var Rn,Ln=xn,Mn=Object.prototype.propertyIsEnumerable;Rn=!Mn.call("beep","0");var Fn=Ft,Cn=pn.isPrimitive,Vn=Ln.isPrimitive,Dn=Mn,Gn=Rn;var Yn=function(t,r){var e;return null!=t&&(!(e=Dn.call(t,r))&&Gn&&Fn(t)?!Cn(r=+r)&&Vn(r)&&r>=0&&r<t.length:e)},Jn=Yn,kn=A,Wn=Jn,Xn=Zt,$n=dn;var Hn=Ve?Fe:function(t){return null!==t&&"object"==typeof t&&!Xn(t)&&"number"==typeof t.length&&$n(t.length)&&t.length>=0&&t.length<=4294967295&&kn(t,"callee")&&!Wn(t,"callee")},zn=Hn,qn=xe,Kn=Array.prototype.slice;var Qn=function(t){return zn(t)?qn(Kn.call(t)):qn(t)};var Zn=Jn((function(){}),"prototype"),ti=!Jn({toString:null},"toString"),ri=dn;var ei=pn,ni=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ri(t.length)&&t.length>=0&&t.length<=9007199254740991},ii=Ft.isPrimitive,oi=Ln.isPrimitive;var fi,ui=function(t){return t.constructor&&t.constructor.prototype===t},ai="undefined"==typeof window?void 0:window,si=A,ci=function(t,r,e){var n,i;if(!ni(t)&&!ii(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!oi(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(ei(r)){for(;i<n;i++)if(ei(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1},li=hr,hi=ui,pi=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],yi=ai;fi=function(){var t;if("undefined"===li(yi))return!1;for(t in yi)try{-1===ci(pi,t)&&si(yi,t)&&null!==yi[t]&&"object"===li(yi[t])&&hi(yi[t])}catch(t){return!0}return!1}();var _i="undefined"!=typeof window,vi=fi,gi=ui,di=_i;var bi=er,mi=A,wi=Hn,Oi=Zn,ji=ti,Ai=function(t){if(!1===di&&!vi)return gi(t);try{return gi(t)}catch(t){return!1}},Ei=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ui,Ii=xe,Si=Qn,Ni=function(t){var r,e,n,i,o,f,u;if(i=[],wi(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!mi(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof t)&&!bi(t))return i;e=Oi&&n}for(o in t)e&&"prototype"===o||!mi(t,o)||i.push(String(o));if(ji)for(r=Ai(t),u=0;u<Ei.length;u++)f=Ei[u],r&&"constructor"===f||!mi(t,f)||i.push(String(f));return i};Ui=Le?Re()?Si:Ii:Ni;var Pi=Te,Ti=Ui;var xi=function(t,r){var e,n,i;for(e=Ti(r),i=0;i<e.length;i++)n=e[i],Pi(t,n,r[n]);return t},Bi=Ie,Ri=Se,Li=xi;v(Bi,"enum",Ri),Li(Bi,Ri());var Mi=Bi,Fi=["row-major","column-major"];var Ci=function(){return Fi.slice()};v(Ci,"enum",(function(){return{"row-major":1,"column-major":2}}));var Vi=Ci,Di=["throw","clamp","wrap"];var Gi=function(){return Di.slice()};v(Gi,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Yi=Gi,Ji=$r,ki=ye,Wi=Ae,Xi=Ee,$i=Vi.enum,Hi=Yi.enum,zi=(0,Mi.enum)(),qi=$i(),Ki=Hi();var Qi=function(){var t,r,e,n,i,o,f,u,a,s,c,l,h,p;if(a=this._mode||"throw",f=this._submode||[a],e=33+16*(l=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===e)return u;for(u=new Wi(new ki(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,Ji?1:0),s+=1,u.setInt16(s,zi[n],Ji),s+=2,u.setBigInt64(s,Xi(l),Ji),c=8*l,s+=8,p=0;p<l;p++)u.setBigInt64(s,Xi(i[p]),Ji),u.setBigInt64(s+c,Xi(o[p]*t),Ji),s+=8;for(s+=c,u.setBigInt64(s,Xi(this._offset*t),Ji),s+=8,u.setInt8(s,qi[this._order]),s+=1,u.setInt8(s,Ki[a]),s+=1,u.setBigInt64(s,Xi(h),Ji),s+=8,p=0;p<h;p++)u.setInt8(s,Ki[f[p]]),s+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(s,r,Ji),this.__meta_dataview__=u,u},Zi=$r,to=Mr,ro=Ae,eo=vn;var no=function(t){var r,e,n,i;return r=new to(8),0===t||(i=(4294967295&t)>>>0,n=eo(t/4294967296),e=new ro(r.buffer),Zi?(e.setUint32(0,i,Zi),e.setUint32(4,n,Zi)):(e.setUint32(0,n,Zi),e.setUint32(4,i,Zi))),r},io=$r,oo=Ae,fo=vn,uo=new Mr(8),ao=new oo(uo.buffer);var so=no;v(so,"assign",(function(t,r,e,n){var i,o,f;if(0===t){for(f=0;f<uo.length;f++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=fo(t/4294967296),io?(ao.setUint32(0,o,io),ao.setUint32(4,i,io)):(ao.setUint32(0,i,io),ao.setUint32(4,o,io)),f=0;f<uo.length;f++)r[n]=uo[f],n+=e;return r}));var co=$r,lo=ye,ho=Ae,po=Mr,yo=Vi.enum,_o=Yi.enum,vo=so.assign,go=(0,Mi.enum)(),bo=yo(),mo=_o();var wo=et,Oo=v,jo=ot,Ao=ut,Eo=at,Uo=ct,Io=lt,So=ht,No=_t,Po=vt,To=gt,xo=dt,Bo=bt,Ro=mt,Lo=Et,Mo=Ir,Fo=Qi,Co=function(){var t,r,e,n,i,o,f,u,a,s,c,l,h,p,y;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(h=this._ndims)+(p=u.length),(a=this.__meta_dataview__)&&a.byteLength===n)return a;for(a=new ho(new lo(n)),r=new po(a.buffer),o=this._shape,f=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,a.setInt8(c,co?1:0),c+=1,a.setInt16(c,go[i],co),vo(h,r,1,c+=2),l=8*h,c+=8,y=0;y<h;y++)vo(o[y],r,1,c),vo(f[y]*t,r,1,c+l),c+=8;for(c+=l,vo(this._offset*t,r,1,c),c+=8,a.setInt8(c,bo[this._order]),c+=1,a.setInt8(c,mo[s]),vo(p,r,1,c+=1),c+=8,y=0;y<p;y++)a.setInt8(c,mo[u[y]]),c+=1;return e=0,e|=this._flags.READONLY?4:0,a.setInt32(c,e,co),this.__meta_dataview__=a,a};function Vo(t,r,e,n,i,o){var f,u,a,s,c;if(!(this instanceof Vo))return new Vo(t,r,e,n,i,o);for(s=1,c=0;c<e.length;c++)s*=e[c];return u=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=Ao(t),this._buffer=r,this._dtype=t,this._length=s,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=Boolean(r.get&&r.set),this._iterationOrder=Eo(n),f=No(s,e,n,i,this._iterationOrder),a=Uo(n),this._flags={ROW_MAJOR_CONTIGUOUS:So(a,f),COLUMN_MAJOR_CONTIGUOUS:Io(a,f),READONLY:!1},this.__meta_dataview__=null,this}Oo(Vo,"name","ndarray"),jo(Vo.prototype,"byteLength",(function(){return this._byteLength})),jo(Vo.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),jo(Vo.prototype,"data",(function(){return this._buffer})),jo(Vo.prototype,"dtype",(function(){return this._dtype})),jo(Vo.prototype,"flags",(function(){return Po(this._flags)})),jo(Vo.prototype,"length",(function(){return this._length})),jo(Vo.prototype,"ndims",(function(){return this._ndims})),jo(Vo.prototype,"offset",(function(){return this._offset})),jo(Vo.prototype,"order",(function(){return this._order})),jo(Vo.prototype,"shape",(function(){return this._shape.slice()})),jo(Vo.prototype,"strides",(function(){return this._strides.slice()})),Oo(Vo.prototype,"get",Ro),Oo(Vo.prototype,"iget",To),Oo(Vo.prototype,"set",Bo),Oo(Vo.prototype,"iset",xo),Oo(Vo.prototype,"toString",Mo),Oo(Vo.prototype,"toJSON",Lo),Oo(Vo.prototype,"__array_meta_dataview__",wo()?Fo:Co);var Do=Vo;var Go=function(t){return t instanceof Do||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set};var Yo=function(t){return Go(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length};function Jo(t){return Yo(t)&&Zr(t.data)}export{Jo as default};
//# sourceMappingURL=mod.js.map
