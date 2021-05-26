'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const test = require('ava');
const execa = require('execa');
const tempy = require('tempy');
const binCheck = require('bin-check');
const binBuild = require('bin-build');
const compareSize = require('compare-size');
const mozjpeg = require('..');

const cpuNumber = os.cpus().length;

test('rebuild the mozjpeg binaries', async t => {
	const temporary = tempy.directory();
	const cfg = [
		'cmake -S . -B . -D ENABLE_SHARED=OFF'
	].join(' ');

	await binBuild.file(path.resolve(__dirname, '../vendor/source/mozjpeg.tar.gz'), [
		cfg,
		`make --jobs=${cpuNumber}`,
		'strip jpegtran-static',
		`cp jpegtran-static "${temporary}/jpegtran"`
	]);

	t.true(fs.existsSync(path.join(temporary, 'jpegtran')));
});

test('return path to binary and verify that it is working', async t => {
	t.true(await binCheck(mozjpeg, ['-version']));
});

test('minify a JPG', async t => {
	const temporary = tempy.directory();
	const src = path.join(__dirname, 'fixtures/test.jpg');
	const dest = path.join(temporary, 'test.jpg');
	const args = [
		'-outfile',
		dest,
		src
	];

	await execa(mozjpeg, args);
	const result = await compareSize(src, dest);

	t.true(result[dest] < result[src]);
});
