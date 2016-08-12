'use strict';

var test = require('tape');
var React = require('react');

var fp = require('../');
var ComponentClass = require('./fixtures/component');
var componentFactory = fp.createFactory(ComponentClass);

test('no props or children (div)', function(t) {
  t.deepEqual(
    fp.div(),
    React.createElement('div'),
    'matches expected'
  );
  t.end();
});

test('no props or children (component)', function(t) {
  t.deepEqual(
    componentFactory(),
    React.createElement(ComponentClass),
    'matches expected'
  );
  t.end();
});

test('no props and single child (div)', function(t) {
  t.deepEqual(
    fp.div('foo'),
    React.createElement('div', null, 'foo'),
    'matches expected'
  );
  t.end();
});

test('no props and single child (component)', function(t) {
  t.deepEqual(
    componentFactory('foo'),
    React.createElement(ComponentClass, null, 'foo'),
    'matches expected'
  );
  t.end();
});

test('no props and multiple children (div)', function(t) {
  t.deepEqual(
    fp.div('foo', 'bar'),
    React.createElement('div', null, 'foo', 'bar'),
    'matches expected'
  );
  t.deepEqual(
    fp.div('foo', 'bar', 'baz'),
    React.createElement('div', null, 'foo', 'bar', 'baz'),
    'matches expected'
  );
  t.end();
});

test('no props and multiple children (component)', function(t) {
  t.deepEqual(
    componentFactory('foo', 'bar'),
    React.createElement(ComponentClass, null, 'foo', 'bar'),
    'matches expected'
  );
  t.deepEqual(
    componentFactory('foo', 'bar', 'baz'),
    React.createElement(ComponentClass, null, 'foo', 'bar', 'baz'),
    'matches expected'
  );
  t.end();
});

test('no props and child array (div)', function(t) {
  t.deepEqual(
    fp.div(['foo']),
    React.createElement('div', null, 'foo'),
    'matches expected with array containing single child'
  );
  t.deepEqual(
    fp.div(['foo', 'bar']),
    React.createElement('div', null, 'foo', 'bar'),
    'matches expected with array containing multiple children'
  );
  t.end();
});

test('no props and child array (component)', function(t) {
  t.deepEqual(
    componentFactory(['foo']),
    React.createElement(ComponentClass, null, 'foo'),
    'matches expected with array containing single child'
  );
  t.deepEqual(
    componentFactory(['foo', 'bar']),
    React.createElement(ComponentClass, null, 'foo', 'bar'),
    'matches expected with array containing multiple children'
  );
  t.end();
});

test('props and no children (div)', function(t) {
  t.deepEqual(
    fp.div({foo: 'foo'}),
    React.createElement('div', {foo: 'foo'}),
    'matches expected'
  );
  t.end();
});

test('props and no children (component)', function(t) {
  t.deepEqual(
    componentFactory({foo: 'foo'}),
    React.createElement(ComponentClass, {foo: 'foo'}),
    'matches expected'
  );
  t.end();
});

test('props and single child (div)', function(t) {
  t.deepEqual(
    fp.div({foo: 'foo'}, 'foo'),
    React.createElement('div', {foo: 'foo'}, 'foo'),
    'matches expected'
  );
  t.end();
});

test('props and single child (component)', function(t) {
  t.deepEqual(
    componentFactory({foo: 'foo'}, 'foo'),
    React.createElement(ComponentClass, {foo: 'foo'}, 'foo'),
    'matches expected'
  );
  t.end();
});

test('props and multiple children (div)', function(t) {
  t.deepEqual(
    fp.div({foo: 'foo'}, 'foo', 'bar'),
    React.createElement('div', {foo: 'foo'}, 'foo', 'bar'),
    'matches expected'
  );
  t.deepEqual(
    fp.div({foo: 'foo'}, 'foo', 'bar', 'baz'),
    React.createElement('div', {foo: 'foo'}, 'foo', 'bar', 'baz'),
    'matches expected'
  );
  t.end();
});

test('props and multiple children (component)', function(t) {
  t.deepEqual(
    componentFactory({foo: 'foo'}, 'foo', 'bar'),
    React.createElement(ComponentClass, {foo: 'foo'}, 'foo', 'bar'),
    'matches expected'
  );
  t.deepEqual(
    componentFactory({foo: 'foo'}, 'foo', 'bar', 'baz'),
    React.createElement(ComponentClass, {foo: 'foo'}, 'foo', 'bar', 'baz'),
    'matches expected'
  );
  t.end();
});

test('props and child array (div)', function(t) {
  t.deepEqual(
    fp.div({foo: 'foo'}, ['foo']),
    React.createElement('div', {foo: 'foo'}, 'foo'),
    'matches expected with array containing single child'
  );
  t.deepEqual(
    fp.div({foo: 'foo'}, ['foo', 'bar']),
    React.createElement('div', {foo: 'foo'}, 'foo', 'bar'),
    'matches expected with array containing multiple children'
  );
  t.end();
});

test('props and child array (component)', function(t) {
  t.deepEqual(
    componentFactory({foo: 'foo'}, ['foo']),
    React.createElement(ComponentClass, {foo: 'foo'}, 'foo'),
    'matches expected with array containing single child'
  );
  t.deepEqual(
    componentFactory({foo: 'foo'}, ['foo', 'bar']),
    React.createElement(ComponentClass, {foo: 'foo'}, 'foo', 'bar'),
    'matches expected with array containing multiple children'
  );
  t.end();
});
