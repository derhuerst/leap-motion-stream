# leap-motion-stream

**A stream of [Leap Motion](https://www.leapmotion.com/) data.**

[![npm version](https://img.shields.io/npm/v/leap-motion-stream.svg)](https://www.npmjs.com/package/leap-motion-stream)
[![dependency status](https://img.shields.io/david/derhuerst/leap-motion-stream.svg)](https://david-dm.org/derhuerst/leap-motion-stream)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/leap-motion-stream.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install leap-motion-stream
```


## Usage

```js
const motion = require('leap-motion-stream')

const s = motion()
s.enableGestures()
s.on('data', (data) => {
	console.log(data.hands)
	console.log(data.pointables)
	console.log(data.gestures)
})
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location/issues).
