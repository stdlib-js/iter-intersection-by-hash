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

# iterIntersectionByHash

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

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

-   **v**: the current iterated value

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-intersection-by-hash.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-intersection-by-hash

[test-image]: https://github.com/stdlib-js/iter-intersection-by-hash/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter-intersection-by-hash/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-intersection-by-hash/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-intersection-by-hash?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-intersection-by-hash.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-intersection-by-hash/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-intersection-by-hash/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
