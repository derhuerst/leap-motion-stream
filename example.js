'use strict'

const motion = require('.')

const s = motion()
s.enableGestures()
s.on('data', (data) => {
	console.log(data.hands)
	console.log(data.pointables)
	console.log(data.gestures)
})
