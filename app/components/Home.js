var React = require( 'react' );
var styles = require( '../styles' );
var Router = require( 'react-router' );
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div style={ styles.columnFlex }>
        <h1>Hello from Home!</h1>

        <Link to='/playerOne'>
          <button id="pageOne" type='button' style={ Object.assign( styles.defaultButton, styles.greenBg ) }>Get Started</button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;