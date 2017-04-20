'use strict'

let path = require('path');

let __root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__root].concat(args));
}

exports.root = root;