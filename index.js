// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function p(r){return r!=r}var v=Math.ceil;function s(r){return r<0?v(r):l(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY,d=1023;function A(r){return r===w||r===b}var _,m=2147483647,g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",N=g&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return h.call(r);t=r[j],i=j,n=null!=(o=r)&&U.call(o,i);try{r[j]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[j]=t:delete r[j],e}:function(r){return h.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=_,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,L=E,M="function"==typeof Uint8Array,V="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var x,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:x,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new L(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}c(nr,"assign",rr);var tr,er,or=!0===K?1:0,ir=new L(1),ur=new F(ir.buffer);function fr(r){return ir[0]=r,ur[or]}!0===K?(tr=1,er=0):(tr=0,er=1);var ar={HIGH:tr,LOW:er},cr=new L(1),lr=new F(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n){return lr[yr]=r,lr[pr]=n,cr[0]}var sr=[0,0];function br(r,n){var t,e;return nr.assign(r,sr,1,0),t=sr[0],t&=m,e=fr(n),vr(t|=e&=2147483648,sr[1])}function wr(r){return Math.abs(r)}function dr(r,n,t,e){return p(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&wr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var Ar=[0,0],_r=[0,0];function mr(r,n){var t,e;return 0===n||0===r||p(r)||A(r)?r:(dr(r,Ar,1,0),n+=Ar[1],n+=function(r){var n=fr(r);return(n=(2146435072&n)>>>20)-d|0}(r=Ar[0]),n<-1074?br(0,r):n>1023?r<0?b:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr.assign(r,_r,1,0),t=_r[0],t&=2148532223,e*vr(t|=n+d<<20,_r[1])))}var gr=1.4426950408889634,hr=1/(1<<28);function Ur(r){var n;return p(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<hr?1+r:function(r,n,t){var e,o,i,u;return mr(1-(n-(e=r-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=s(r<0?gr*r-.5:gr*r+.5)),1.9082149292705877e-10*n,n)}function jr(r){return l(r)===r}function Nr(r){return jr(r/2)}function Ir(r){return Nr(r>0?r-1:r+1)}var Or=Math.sqrt,Sr=!0===K?0:1,Er=new L(1),Fr=new F(Er.buffer);function Tr(r,n){return Er[0]=r,Fr[Sr]=n>>>0,Er[0]}function Hr(r){return 0|r}var Gr=!0===K?1:0,Pr=new L(1),Lr=new F(Pr.buffer);function Mr(r,n){return Pr[0]=r,Lr[Gr]=n>>>0,Pr[0]}var Vr=1048576,Wr=[1,1.5],xr=[0,.5849624872207642],kr=[0,1.350039202129749e-8],Yr=1048575,qr=1048576,Cr=1083179008,zr=1e300,Br=1e-300,Dr=[0,0],Jr=[0,0];function Kr(r,n){var t,e,o,i,u,f,a,c,l,y,v,s,_,g;if(p(r)||p(n))return NaN;if(nr.assign(n,Dr,1,0),u=Dr[0],0===Dr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Or(r);if(-.5===n)return 1/Or(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wr(r)<1==(n===w)?0:w}(r,n)}if(nr.assign(r,Dr,1,0),i=Dr[0],0===Dr[1]){if(0===i)return function(r,n){return n===b?w:n===w?0:n>0?Ir(n)?r:0:Ir(n)?br(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&Ir(n))return-1;if(A(r))return r===b?Kr(-0,-n):n<0?0:w}if(r<0&&!1===jr(n))return(r-r)/(r-r);if(o=wr(r),t=i&m|0,e=u&m|0,a=u>>>31|0,f=(f=i>>>31|0)&&Ir(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(fr(r)&m)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*zr*zr:f*Br*Br;if(t>1072693248)return 0===a?f*zr*zr:f*Br*Br;v=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Tr(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Jr,o)}else v=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,w,A,_,m,g,h,U,j;return g=0,t<Vr&&(g-=53,t=fr(n*=9007199254740992)),g+=(t>>20)-d|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,g+=1,t-=Vr),u=Tr(o=(_=(n=Mr(n,t))-(c=Wr[U]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Mr(0,e+=U<<18),A=(i=o*o)*i*(0===(j=i)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Tr(a=3+(i=u*u)+(A+=(f=m*(_-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=Tr(y=(_=u*a)+(m=f*a+(A-(a-3-i))*o),0))+.9617966939259756*(m-(y-_))+kr[U])-((s=Tr(s=(p=.9617967009544373*y)+v+(l=xr[U])+(w=g),0))-w-l-p),r[0]=s,r[1]=b,r}(Jr,o,t);if(s=(y=(n-(c=Tr(n,0)))*v[0]+n*v[1])+(l=c*v[0]),nr.assign(s,Dr,1,0),_=Hr(Dr[0]),g=Hr(Dr[1]),_>=Cr){if(0!=(_-Cr|g))return f*zr*zr;if(y+8008566259537294e-32>s-l)return f*zr*zr}else if((_&m)>=1083231232){if(0!=(_-3230714880|g))return f*Br*Br;if(y<=s-l)return f*Br*Br}return s=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&m|0)>>20)-d|0,c=0,l>1071644672&&(o=Mr(0,((c=r+(qr>>y+1)>>>0)&~(Yr>>(y=((c&m)>>20)-d|0)))>>>0),c=(c&Yr|qr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Hr(r=fr(a=1-((a=(i=.6931471824645996*(o=Tr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?mr(a,c):Mr(a,r)}(_,l,y),f*s}function Qr(r,n,t){return p(r)||p(n)||p(t)||t<0||t>1||!y(n)||n===w?NaN:Kr(1-t+t*Ur(r),n)}return c(Qr,"factory",(function(r,n){return p(r)||p(n)||n<0||n>1||!y(r)||r===w?(t=NaN,function(){return t}):function(t){return p(t)?NaN:Kr(1-n+n*Ur(t),r)};var t})),Qr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=n();
//# sourceMappingURL=index.js.map
