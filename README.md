# react-fp
A functional JSX alternative for React

[![build status][build-badge]][build-href]
[![coverage status][coverage-badge]][coverage-href]
[![dependencies status][deps-badge]][deps-href]
[![npm version][npm-badge]][npm-href]

What `React.createElement` should have been.

## Quick Example
```javascript
import {div, h1} from 'react-fp'

const Panel = ({title, children}) => (
  div({className: 'panel'}, [
    h1(title),
    children
  ])
)
```

## Install
```
npm install react-fp --save
```

## Usage

#### Elements
```javascript
// `tag` can be any supported HTML or SVG tag
import {tag} from 'react-fp'

tag()                                 // No props or children
tag(child1, child2, ...rest)          // No props, list of children
tag([child1, child2, ...rest])        // No props, array of children
tag(props)                            // Props only
tag(props, child1, child2, ...rest)   // Props, list of children
tag(props, [child1, child2, ...rest]) // Props, array of children
```

#### Components
Pass a `ReactClass` or `ReactFunctionalComponent` into the provided `fp` function to create a `React.createElement` helper for the given component with interface above.

##### Example

```js
// button.js
import {fp} from 'react-fp'

const Button = (props) => {
  /* ... */
}

export default fp(Button)      // Export the React.createElement helper as default
export {Button as ButtonClass} // Export the underlying ReactClass in case it is needed (optional)
```

```js
// app.js
import {div, h1} from 'react-fp'
import MyButton from './button.js'

const App = () => (
  div([
    h1('hello world'),
    MyButton('click me')
  ])
)
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
