var React = require( 'react' );

var RestartButton = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  onClick: function() {
    this.context.router.push( '/' );
  },
  render: function() {
    return (
      <button onClick={ this.onClick }>Restart</button>
    );
  }
});

module.exports = RestartButton;