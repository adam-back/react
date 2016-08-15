var React = require( 'react' );
var Router = require( 'react-router' );
var Link = Router.Link;

var RestartButton = React.createClass({
  render: function() {
    return (
      <Link to='/playerOne'>
        <button type='button'>Reselect Players</button>
      </Link>
    );
  }
});

module.exports = RestartButton;