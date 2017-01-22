'use strict'

const ws = require('websocket-stream')
const through = require('through2')

const parse = (data, _, cb) => {
	cb(null, JSON.parse(data.toString('utf8')))
}

const motion = () => {
	const device = ws('ws://localhost:6437/v6.json')
	const out = device.pipe(through.obj(parse))
	device.on('error', (err) => {
		out.emit('error', err)
		out.close()
	})

	out.enableGestures = () => {
		device.write('{"enableGestures": true}')
	}
	out.disableGestures = () => {
		device.write('{"enableGestures": false}')
	}

	device.write('{"background": true}')

	return out
}

module.exports = motion
