<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Binomial][binomial-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = (1-p + pe^t)^n" alt="Moment-generating function (MGF) for a binomial distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = (1-p + pe^t)^n
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = (1-p + pe^t)^n" data-equation="eq:binomial_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/mgf/docs/img/equation_binomial_mgf.svg" alt="Moment-generating function (MGF) for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where the nonnegative integer `n` is the number of trials and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-binomial-mgf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats-base-dists-binomial-mgf' );
```

#### mgf( t, n, p )

Evaluates the [moment-generating function][mgf] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = mgf( 0.5, 20, 0.2 );
// returns ~11.471

y = mgf( 5.0, 20, 0.2 );
// returns ~4.798e29

y = mgf( 0.9, 10, 0.4 );
// returns ~99.338

y = mgf( 0.0, 10, 0.4 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 20, 0.5 );
// returns NaN

y = mgf( 0.0, NaN, 0.5 );
// returns NaN

y = mgf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 1.5, 0.5 );
// returns NaN

y = mgf( 0.2, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 20, -1.0 );
// returns NaN

y = mgf( 0.2, 20, 1.5 );
// returns NaN
```

#### mgf.factory( n, p )

Returns a function for evaluating the [moment-generating function][mgf] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var myMGF = mgf.factory( 10, 0.5 );

var y = myMGF( 0.3 );
// returns ~5.013
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var mgf = require( '@stdlib/stats-base-dists-binomial-mgf' );

var opts = {
    'dtype': 'float64'
};
var t = discreteUniform( 10, 0, 5, opts );
var n = discreteUniform( 10, 0, 10, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 't: %0.4f, n: %0.4f, p: %0.4f, M_X(t;n,p): %0.4f', t, n, p, mgf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/binomial/mgf.h"
```

#### stdlib_base_dists_binomial_mgf( t, n, p )

Evaluates the [moment-generating function][mgf] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```c
double out = stdlib_base_dists_binomial_mgf( 0.5, 20, 0.2 );
// returns ~11.471
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **n**: `[in] int32_t` number of trials.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_binomial_mgf( const double t, const int32_t n, const double p );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/binomial/mgf.h"
#include "stdlib/math/base/special/ceil.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * (max - min) );
}

int main( void ) {
    int32_t n;
    double p;
    double t;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        n = (int32_t)stdlib_base_ceil( random_uniform( 0, 100 ) );
        p = random_uniform( 0, 1 );
        t = random_uniform( 0, 5 );
        y = stdlib_base_dists_binomial_mgf( t, n, p );
        printf( "t: %lf, n: %d, p: %lf, M_X(t;n,p): %lf\n", t, n, p, y );
    }

    return 0;
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-binomial-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-binomial-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-binomial-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-binomial-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-binomial-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-binomial-mgf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-binomial-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-mgf/main/LICENSE

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
