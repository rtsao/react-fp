'use strict';

var test = require('tape');
var React = require('react');

var fp = require('../');
var TestComponent = require('./fixtures/component');
var testComponent = fp.component(TestComponent);

test('no props or children (div)', function(t) {
  t.deepEqual(fp.div(), React.createElement('div'), 'matches expected');
  t.end();
});

test('no props or children (component)', function(t) {
  t.deepEqual(testComponent(), React.createElement(TestComponent), 'matches expected');
  t.end();
});

test('no props and single child (div)', function(t) {
  t.deepEqual(fp.div('foo'), React.createElement('div', null, 'foo'), 'matches expected');
  t.end();
});

test('no props and single child (component)', function(t) {
  t.deepEqual(testComponent('foo'), React.createElement(TestComponent, null, 'foo'), 'matches expected');
  t.end();
});

test('no props and multiple children (div)', function(t) {
  t.deepEqual(fp.div('foo', 'bar'), React.createElement('div', null, 'foo', 'bar'), 'matches expected');
  t.deepEqual(fp.div('foo', 'bar', 'baz'), React.createElement('div', null, 'foo', 'bar', 'baz'), 'matches expected');
  t.end();
});

test('no props and multiple children (component)', function(t) {
  t.deepEqual(testComponent('foo', 'bar'), React.createElement(TestComponent, null, 'foo', 'bar'), 'matches expected');
  t.deepEqual(testComponent('foo', 'bar', 'baz'), React.createElement(TestComponent, null, 'foo', 'bar', 'baz'), 'matches expected');
  t.end();
});

test('no props and child array (div)', function(t) {
  t.deepEqual(fp.div(['foo']), React.createElement('div', null, 'foo'), 'matches expected with array containing single child');
  t.deepEqual(fp.div(['foo', 'bar']), React.createElement('div', null, 'foo', 'bar'), 'matches expected with array containing multiple children');
  t.end();
});

test('no props and child array (component)', function(t) {
  t.deepEqual(testComponent(['foo']), React.createElement(TestComponent, null, 'foo'), 'matches expected with array containing single child');
  t.deepEqual(testComponent(['foo', 'bar']), React.createElement(TestComponent, null, 'foo', 'bar'), 'matches expected with array containing multiple children');
  t.end();
});

test('props and no children (div)', function(t) {
  t.deepEqual(fp.div({foo: 'foo'}), React.createElement('div', {foo: 'foo'}), 'matches expected');
  t.end();
});

test('props and no children (component)', function(t) {
  t.deepEqual(testComponent({foo: 'foo'}), React.createElement(TestComponent, {foo: 'foo'}), 'matches expected');
  t.end();
});

test('props and single child (div)', function(t) {
  t.deepEqual(fp.div({foo: 'foo'}, 'foo'), React.createElement('div', {foo: 'foo'}, 'foo'), 'matches expected');
  t.end();
});

test('props and single child (component)', function(t) {
  t.deepEqual(testComponent({foo: 'foo'}, 'foo'), React.createElement(TestComponent, {foo: 'foo'}, 'foo'), 'matches expected');
  t.end();
});

test('props and multiple children (div)', function(t) {
  t.deepEqual(fp.div({foo: 'foo'}, 'foo', 'bar'), React.createElement('div', {foo: 'foo'}, 'foo', 'bar'), 'matches expected');
  t.deepEqual(fp.div({foo: 'foo'}, 'foo', 'bar', 'baz'), React.createElement('div', {foo: 'foo'}, 'foo', 'bar', 'baz'), 'matches expected');
  t.end();
});

test('props and multiple children (component)', function(t) {
  t.deepEqual(testComponent({foo: 'foo'}, 'foo', 'bar'), React.createElement(TestComponent, {foo: 'foo'}, 'foo', 'bar'), 'matches expected');
  t.deepEqual(testComponent({foo: 'foo'}, 'foo', 'bar', 'baz'), React.createElement(TestComponent, {foo: 'foo'}, 'foo', 'bar', 'baz'), 'matches expected');
  t.end();
});

test('props and child array (div)', function(t) {
  t.deepEqual(fp.div({foo: 'foo'}, ['foo']), React.createElement('div', {foo: 'foo'}, 'foo'), 'matches expected with array containing single child');
  t.deepEqual(fp.div({foo: 'foo'}, ['foo', 'bar']), React.createElement('div', {foo: 'foo'}, 'foo', 'bar'), 'matches expected with array containing multiple children');
  t.end();
});

test('props and child array (component)', function(t) {
  t.deepEqual(testComponent({foo: 'foo'}, ['foo']), React.createElement(TestComponent, {foo: 'foo'}, 'foo'), 'matches expected with array containing single child');
  t.deepEqual(testComponent({foo: 'foo'}, ['foo', 'bar']), React.createElement(TestComponent, {foo: 'foo'}, 'foo', 'bar'), 'matches expected with array containing multiple children');
  t.end();
});
