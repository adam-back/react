var React = require( 'react' );
var styles = require( '../styles' );

var Prompt = React.createClass({
  render: function() {
    return (
      <div style={ styles.columnFlex }>
        <h1>{ this.props.header }</h1>
        <form style={ styles.columnFlex } onSubmit={ this.props.onSubmitUser }>
          <input
            placeholder="GitHub Username"
            type="text"
            onChange={ this.props.onUpdateUser }
            value={ this.props.username }
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

module.exports = Prompt;