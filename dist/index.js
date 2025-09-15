"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(h,s){
var f=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/math-base-special-pow/dist'),y=require('@stdlib/constants-float64-pinf/dist');function I(e,r,a){var i;return t(e)||t(r)||t(a)||a<0||a>1||!f(r)||r===y?NaN:(i=1-a+a*g(e),x(i,r))}s.exports=I
});var N=v(function(j,q){
var m=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),F=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-exp/dist'),w=require('@stdlib/math-base-special-pow/dist'),P=require('@stdlib/constants-float64-pinf/dist');function d(e,r){if(u(e)||u(r)||r<0||r>1||!m(e)||e===P)return F(NaN);return a;function a(i){var n;return u(i)?NaN:(n=1-r+r*b(i),w(n,e))}}q.exports=d
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=o(),O=N();l(c,"factory",O);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
