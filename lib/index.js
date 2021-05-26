'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/imagemin/mozjpeg-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}macos/jpegtran`, 'darwin')
	.src(`${url}linux/jpegtran`, 'linux')
	.src(`${url}win/jpegtran.exe`, 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'jpegtran.exe' : 'jpegtran');
