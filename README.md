<h1 align="center">Random Float</h1>
<p align="center">
Random Float package provides functionality to generate a random float value.
</p>

<p align="center">
<a href="https://github.com/glowyjs/random-float/releases"><img alt="Version" src="https://img.shields.io/github/release/glowyjs/random-float.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@glowyjs/dd"> <a href="https://github.com/glowyjs/random-float"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a> <img src="https://github.com/glowyjs/random-float/actions/workflows/tests.yml/badge.svg">

## Install

```
$ npm install --save @glowyjs/random-float
```

## Usage

```js
import randomFloat from '@glowyjs/random-float';

randomFloat();
//=> -120920142888.5024

randomFloat(0, 10);
//=> 7.6913

randomFloat(0, 10, 6);
//=> 7.691312
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/glowyjs/random-float/blob/master/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
