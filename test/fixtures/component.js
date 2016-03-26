var React = require('react');

module.exports = React.createClass({

  displayName: 'MockComponent',

  propTypes: {
    foo: React.PropTypes.string
  },

  render: function() {
    return (
      React.createElement('div', null,
        this.props.foo,
        this.props.children
      )
    );
  }

});
