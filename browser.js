// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,v,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,g,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,f,s,l,p,g,y,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))c+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,E(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,y=t.padRight,d=void 0,(d=g-p.length)<0?p:p=y?p+m(d):m(d)+p)),c+=t.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){var e,n;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var j=Object.prototype,N=j.toString,T=j.__defineGetter__,O=j.__defineSetter__,V=j.__lookupGetter__,$=j.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=j,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return r!=r}var P=Math.ceil;function R(r){return r<0?P(r):W(r)}var M=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,X=1023,Y=1023,q=-1023,z=-1074;function B(r){return r===Z||r===M}var D,J=2147483648,K=2147483647,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),rr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"",ir=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return rr.call(r);n=r[tr],a=tr,e=null!=(i=r)&&er.call(i,a);try{r[tr]=void 0}catch(e){return rr.call(r)}return t=rr.call(r),e?r[tr]=n:delete r[tr],t}:function(r){return rr.call(r)},ar="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===ir(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr,fr=D,sr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),n=e,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===ir(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var gr,yr=cr,dr="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),n=e,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===ir(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,br=gr,mr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),n=e,r=(mr&&n instanceof Uint16Array||"[object Uint16Array]"===ir(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:wr,uint8:br};(Er=new Ur.uint16(1))[0]=4660;var Sr,Ir,xr=52===new Ur.uint8(Er.buffer)[0];!0===xr?(Sr=1,Ir=0):(Sr=0,Ir=1);var kr={HIGH:Sr,LOW:Ir},Fr=new yr(1),jr=new fr(Fr.buffer),Nr=kr.HIGH,Tr=kr.LOW;function Or(r,e,n,t){return Fr[0]=r,e[t]=jr[Nr],e[t+n]=jr[Tr],e}function Vr(r){return Or(r,[0,0],1,0)}H(Vr,"assign",Or);var $r,Gr,Hr=!0===xr?1:0,Wr=new yr(1),Cr=new fr(Wr.buffer);function Lr(r){return Wr[0]=r,Cr[Hr]}!0===xr?($r=1,Gr=0):($r=0,Gr=1);var Pr={HIGH:$r,LOW:Gr},Rr=new yr(1),Mr=new fr(Rr.buffer),Zr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e){return Mr[Zr]=r,Mr[Xr]=e,Rr[0]}var qr=[0,0];function zr(r,e){var n,t;return Vr.assign(r,qr,1,0),n=qr[0],n&=K,t=Lr(e),Yr(n|=t&=J,qr[1])}var Br=22250738585072014e-324;function Dr(r){return Math.abs(r)}var Jr=4503599627370496;function Kr(r,e,n,t){return L(r)||B(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Dr(r)<Br?(e[t]=r*Jr,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=2146435072,re=2220446049250313e-31,ee=2148532223,ne=[0,0],te=[0,0];function ie(r,e){var n,t;return 0===e||0===r||L(r)||B(r)?r:(Kr(r,ne,1,0),r=ne[0],e+=ne[1],e+=function(r){var e=Lr(r);return(e=(e&Qr)>>>20)-X|0}(r),e<z?zr(0,r):e>Y?r<0?M:Z:(e<=q?(e+=52,t=re):t=1,Vr.assign(r,te,1,0),n=te[0],n&=ee,t*Yr(n|=e+X<<20,te[1])))}var ae=.6931471803691238,oe=1.9082149292705877e-10,ue=1.4426950408889634,ce=709.782712893384,fe=-745.1332191019411,se=1/(1<<28),le=-se;function pe(r){var e;return L(r)||r===Z?r:r===M?0:r>ce?Z:r<fe?0:r>le&&r<se?1+r:function(r,e,n){var t,i,a,o;return ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=R(r<0?ue*r-.5:ue*r+.5))*ae,e*oe,e)}function ge(r){return W(r)===r}function ye(r){return ge(r/2)}function de(r){return ye(r>0?r-1:r+1)}var he=Math.sqrt,ve=!0===xr?0:1,we=new yr(1),be=new fr(we.buffer);function me(r,e){return we[0]=r,be[ve]=e>>>0,we[0]}function Ae(r){return 0|r}var _e=1072693247,Ee=1e300,Ue=1e-300,Se=!0===xr?1:0,Ie=new yr(1),xe=new fr(Ie.buffer);function ke(r,e){return Ie[0]=r,xe[Se]=e>>>0,Ie[0]}var Fe=1048575,je=1048576,Ne=1072693248,Te=536870912,Oe=524288,Ve=20,$e=9007199254740992,Ge=.9617966939259756,He=.9617967009544373,We=-7.028461650952758e-9,Ce=[1,1.5],Le=[0,.5849624872207642],Pe=[0,1.350039202129749e-8],Re=1.4426950408889634,Me=1.4426950216293335,Ze=1.9259629911266175e-8,Xe=.6931471805599453,Ye=1048575,qe=1048576,ze=1071644672,Be=20,De=.6931471824645996,Je=-1.904654299957768e-9,Ke=1072693247,Qe=1105199104,rn=1139802112,en=1083179008,nn=1072693248,tn=1083231232,an=3230714880,on=31,un=1e300,cn=1e-300,fn=8008566259537294e-32,sn=[0,0],ln=[0,0];function pn(r,e){var n,t,i,a,o,u,c,f,s,l,p,g,y,d;if(L(r)||L(e))return NaN;if(Vr.assign(e,sn,1,0),o=sn[0],0===sn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return he(r);if(-.5===e)return 1/he(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(B(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Dr(r)<1==(e===Z)?0:Z}(r,e)}if(Vr.assign(r,sn,1,0),a=sn[0],0===sn[1]){if(0===a)return function(r,e){return e===M?Z:e===Z?0:e>0?de(e)?r:0:de(e)?zr(Z,r):Z}(r,e);if(1===r)return 1;if(-1===r&&de(e))return-1;if(B(r))return r===M?pn(-0,-e):e<0?0:Z}if(r<0&&!1===ge(e))return(r-r)/(r-r);if(i=Dr(r),n=a&K|0,t=o&K|0,c=o>>>on|0,u=(u=a>>>on|0)&&de(e)?-1:1,t>Qe){if(t>rn)return function(r,e){return(Lr(r)&K)<=_e?e<0?Ee*Ee:Ue*Ue:e>0?Ee*Ee:Ue*Ue}(r,e);if(n<Ke)return 1===c?u*un*un:u*cn*cn;if(n>nn)return 0===c?u*un*un:u*cn*cn;p=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Ze-a*Re)-((t=me(t=(o=Me*i)+u,0))-o),r[0]=t,r[1]=n,r}(ln,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,y,d,h,v,w,b,m,A,_,E;return m=0,n<je&&(m-=53,n=Lr(e*=$e)),m+=(n>>Ve)-X|0,n=(A=n&Fe|0)|Ne|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=je),o=me(i=(w=(e=ke(e,n))-(f=Ce[_]))*(b=1/(e+f)),0),t=(n>>1|Te)+Oe,c=ke(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=me(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=me(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0),p=He*l,d=(g=We*l+(b-(l-w))*Ge+Pe[_])-((y=me(y=p+g+(s=Le[_])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(ln,i,n);if(g=(l=(e-(f=me(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Vr.assign(g,sn,1,0),y=Ae(sn[0]),d=Ae(sn[1]),y>=en){if(0!=(y-en|d))return u*un*un;if(l+fn>g-s)return u*un*un}else if((y&K)>=tn){if(0!=(y-an|d))return u*cn*cn;if(l<=g-s)return u*cn*cn}return g=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&K|0)>>Be)-X|0,f=0,s>ze&&(i=ke(0,((f=r+(qe>>l+1)>>>0)&~(Ye>>(l=((f&K)>>Be)-X|0)))>>>0),f=(f&Ye|qe)>>Be-l>>>0,r<0&&(f=-f),e-=i),r=Ae(r=Lr(c=1-((c=(a=(i=me(i=n+e,0))*De)+(o=(n-(i-e))*Xe+i*Je))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<Be>>>0)>>Be<=0?ie(c,f):ke(c,r)}(y,s,l),u*g}function gn(r,e,n){return L(r)||L(e)||L(n)||n<0||n>1||!C(e)||e===Z?NaN:pn(1-n+n*pe(r),e)}return H(gn,"factory",(function(r,e){return L(r)||L(e)||e<0||e>1||!C(r)||r===Z?(n=NaN,function(){return n}):function(n){return L(n)?NaN:pn(1-e+e*pe(n),r)};var n})),gn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
