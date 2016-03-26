# react-fp
A functional JSX alternative for React

## Quick Example
```javascript
const {div, h1} = require('react-fp');

const MyComponent = ({title, description}) => (
  div({className: 'foo'}, [
    h1(title)
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
