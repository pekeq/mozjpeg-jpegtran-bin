# mozjpeg-jpegtran-bin ![GitHub Actions Status](https://github.com/pekeq/mozjpeg-jpegtran-bin/actions/workflows/test.yml/badge.svg?branch=master)

> [mozjpeg](https://github.com/mozilla/mozjpeg) is a production-quality JPEG encoder that improves compression while maintaining compatibility with the vast majority of deployed decoders

You probably want [`imagemin-mozjpeg-jpegtran`](https://github.com/pekeq/imagemin-mozjpeg-jpegtran) instead.


## Install

```
$ npm install mozjpeg-jpegtran-bin
```


## Usage

```js
const {execFile} = require('child_process');
const mozjpeg = require('mozjpeg-jpegtran-bin');

execFile(mozjpeg, ['-outfile', 'output.jpg', 'input.jpg'], err => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global mozjpeg-jpegtran-bin
```

```
$ mozjpeg-jpegtran --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
