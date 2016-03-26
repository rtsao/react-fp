'use strict';

var React = require('react');

Object.keys(React.DOM).forEach(function(tag) {
    module.exports[tag] = helper(tag);
});

module.exports.component = helper;

function helper(type) {
    return function createElement(arg1, arg2) {
        var len = arguments.length;
        if (len === 0) {
            return React.createElement(type);
        }
        if (len === 1) {
            if (isRenderable(arg1)) {
                return React.createElement(type, null, arg1);
            } else if (Array.isArray(arg1)) {
                return React.createElement.apply(null, [type, null].concat(arg1));
            }
            return React.createElement(type, arg1);
        }
        if (len === 2) {
            if (isRenderable(arg1)) {
                return React.createElement(type, null, arg1, arg2);
            } else if (Array.isArray(arg2)) {
                return React.createElement.apply(null, [type, arg1].concat(arg2));
            }
            return React.createElement(type, arg1, arg2);
        }
        // Avoid V8 de-optimization relating to arguments leaking
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
        var args = Array(len);
        for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
        }
        if (isRenderable(arg1)) {
            return React.createElement.apply(null, [type, null].concat(args));
        }
        return React.createElement.apply(null, [type].concat(args));
    }
}

function isRenderable(arg) {
    var type = typeof arg;
    return type === 'string' || type === 'number' || React.isValidElement(arg);
}
