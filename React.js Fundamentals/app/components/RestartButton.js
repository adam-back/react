var React = require( 'react' );
var Router = require( 'react-router' );
var Link = Router.Link;
var styles = require( '../styles' );

var RestartButton = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      text: 'Restart'
    };
  },
  render() {
    return (
      <Link to='/playerOne'>
        <button id='reset' type='button' style={ Object.assign( styles.defaultButton, styles.redBg ) }>{ this.props.text }</button>
      </Link>
    );
  }
});

module.exports = RestartButton;