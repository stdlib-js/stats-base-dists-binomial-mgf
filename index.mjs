// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function d(t,m,d){var o;return e(t)||e(m)||e(d)||d<0||d>1||!s(m)||m===r?NaN:(o=1-d+d*n(t),i(o,m))}function o(t,d){return e(t)||e(d)||d<0||d>1||!s(t)||t===r?m(NaN):function(s){var r;if(e(s))return NaN;return r=1-d+d*n(s),i(r,t)}}t(d,"factory",o);export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
