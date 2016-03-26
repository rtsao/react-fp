# react-fp
A functional JSX alternative for React

[![build status][build-badge]][build-href]
[![coverage status][coverage-badge]][coverage-href]
[![dependencies status][deps-badge]][deps-href]
[![npm version][npm-badge]][npm-href]

## Quick Example
```javascript
const {div, h1} = require('react-fp');

const MyComponent = ({title, children}) => (
  div({className: 'foo'}, [
    h1(title),
    ...children
  ])
);

```

## Usage
```javascript
tag();                            // No props or children
tag(child1, child2, ...);         // No props, list of children
tag(childArray);                  // No props, array of children
tag(props);                       // Props only
tag(props, child1, child2, ...);  // Props, list of children
tag(props, childArray);           // Props, array of children
```

#### Components
```javascript
const {component, div} = require('react-fp');
const MyComponent = component(require('./my-component'));

const App = () => (
  div([
    MyComponent('foo')
  ]);
);

```

## See Also
* https://github.com/uber/r-dom
* https://github.com/mlmorg/react-hyperscript
* https://github.com/ohanhi/hyperscript-helpers

## License
MIT

[build-badge]: https://travis-ci.org/rtsao/react-fp.svg?branch=master
[build-href]: https://travis-ci.org/rtsao/react-fp
[coverage-badge]: https://coveralls.io/repos/rtsao/react-fp/badge.svg?branch=master&service=github
[coverage-href]: https://coveralls.io/github/rtsao/react-fp?branch=master
[deps-badge]: https://img.shields.io/badge/dependencies-none-brightgreen.svg
[deps-href]: https://david-dm.org/rtsao/react-fp
[npm-badge]: https://badge.fury.io/js/react-fp.svg
[npm-href]: https://www.npmjs.com/package/react-fp
