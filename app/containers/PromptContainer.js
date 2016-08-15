var React = require( 'react' );
var styles = require( '../styles' );

var PromptContainer = React.createClass({
  render: function() {
    return (
      <div style={ styles.columnFlex }>
        <h1>{ this.props.route.header }</h1>
        <form style={ styles.columnFlex }>
          <input
            placeholder="GitHub Username"
            type="text"
            style={ Object.assign( {}, styles.topAndBottomMargin, styles.centerText ) }/>
          <button
            type="submit"
            style={ Object.assign( {}, styles.topAndBottomMargin, styles.centerText, styles.roundGreenButton ) }>
              Continue
          </button>
        </form>
      </div>
    );
  }
});

module.exports = PromptContainer;