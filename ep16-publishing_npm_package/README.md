# Memo Watcher

A simple package to monitor your server RAM.

## Usage


```js

const memo = require('memo-watcher');

// thw watcher will start to nofify the user once memory usage goes above 60%
const watcher = memo(60);

// start the watcher
watcher.start();

// stop the watcher
watcher.stop();


```


## License
MIT
