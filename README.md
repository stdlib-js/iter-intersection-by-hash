<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# iterIntersectionByHash

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which returns the intersection of two or more [iterators][mdn-iterator-protocol] according to a hash function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-intersection-by-hash
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
var iterIntersectionByHash = require( '@stdlib/iter-intersection-by-hash' );
```

#### iterIntersectionByHash( iter0, ...iterator, hashFcn\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which returns the intersection of two or more [iterators][mdn-iterator-protocol] according to a hash function.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function hashFcn( v ) {
    return v.toString();
}

var it1 = array2iterator( [ 2, 1, 1, 2, 4 ] );
var it2 = array2iterator( [ 3, 4, 3 ] );

var it = iterIntersectionByHash( it1, it2, hashFcn );
// returns <Object>

var v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

A hash function is provided one argument:

-   **v**: the current iterated value.

To set the execution context of the hash function, provide a `thisArg`.

<!-- eslint-disable object-curly-newline -->

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function hashFcn( v ) {
    this.count += 1;
    return JSON.stringify( v );
}

var values1 = [
    { 'v': 2 },
    { 'v': 1 },
    { 'v': 1 },
    { 'v': 2 }
];
var values2 = [
    { 'v': 4 },
    { 'v': 3 },
    { 'v': 4 },
    { 'v': 3 },
    { 'v': 1 },
    { 'v': 2 }
];

var it1 = array2iterator( values1 );
var it2 = array2iterator( values2 );

var ctx = {
    'count': 0
};

var it = iterIntersectionByHash( it1, it2, hashFcn, ctx );
// returns <Object>

var v = it.next().value;
// returns { 'v': 2 }

v = it.next().value;
// returns { 'v': 1 }

var bool = it.next().done;
// returns true

bool = ( ctx.count > 0 );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A returned [iterator][mdn-iterator-protocol] internally buffers unique hashes, along with the **first** iterated value resolving to a hash, and, thus, has `O(N)` memory requirements, where `N` is the length of the first [iterator][mdn-iterator-protocol].
-   An iterated value is considered "unique" if a hash function returns a unique hash value for that iterated value. Beware that this _may_ result in unexpected behavior. Namely, only the **first** iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
-   Do **not** provide [iterators][mdn-iterator-protocol] having **infinite** length.
-   If an environment supports `Symbol.iterator` **and** all provided [iterators][mdn-iterator-protocol] are iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-iter-discrete-uniform' );
var iterMap = require( '@stdlib/iter-map' );
var iterIntersectionByHash = require( '@stdlib/iter-intersection-by-hash' );

function mapFcn( v ) {
    return {
        'v': v
    };
}

function hashFcn( v ) {
    return JSON.stringify( v );
}

// Create seeded iterators which can generate 1000 pseudorandom numbers:
var rand1 = discreteUniform( 1, 10, {
    'seed': 1234,
    'iter': 1000
});
var rand2 = discreteUniform( 6, 15, {
    'seed': 1234,
    'iter': 1000
});

// Create iterators which map each number to an object:
var miter1 = iterMap( rand1, mapFcn );
var miter2 = iterMap( rand2, mapFcn );

// Create an iterator which returns the intersection of the above iterators:
var it = iterIntersectionByHash( miter1, miter2, hashFcn );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter-intersection`][@stdlib/iter/intersection]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the intersection of two or more iterators.</span>
-   <span class="package-name">[`@stdlib/iter-unique-by-hash`][@stdlib/iter/unique-by-hash]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values according to a hash function.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-intersection-by-hash.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-intersection-by-hash

[test-image]: https://github.com/stdlib-js/iter-intersection-by-hash/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-intersection-by-hash/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-intersection-by-hash/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-intersection-by-hash?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-intersection-by-hash.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-intersection-by-hash/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-intersection-by-hash/tree/deno
[deno-readme]: https://github.com/stdlib-js/iter-intersection-by-hash/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/iter-intersection-by-hash/tree/umd
[umd-readme]: https://github.com/stdlib-js/iter-intersection-by-hash/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/iter-intersection-by-hash/tree/esm
[esm-readme]: https://github.com/stdlib-js/iter-intersection-by-hash/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/iter-intersection-by-hash/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-intersection-by-hash/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/intersection]: https://github.com/stdlib-js/iter-intersection

[@stdlib/iter/unique-by-hash]: https://github.com/stdlib-js/iter-unique-by-hash

<!-- </related-links> -->

</section>

<!-- /.links -->
