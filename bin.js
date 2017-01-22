#!/usr/bin/env node
'use strict'

const ndjson = require('ndjson')

const pkg = require('./package.json')
const motion = require('.')

const args = process.argv.slice(2).join(' ').trim()

if (args === '-h' || args === '--help') {
	process.stdout.write('Writes raw leap motion data to stdout.\n')
	process.exit(0)
}
if (args === '-v' || args === '--version') {
	process.stdout.write(pkg.version + '\n')
	process.exit(0)
}

const src = motion()
src.pipe(ndjson.stringify()).pipe(process.stdout)

process.on('SIGINT', () => process.exit(0))
