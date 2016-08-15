var React = require( 'react' );
var styles = require( '../styles' );
var PropTypes = React.PropTypes;

function Prompt ( props ) {
  return (
    <div style={ styles.columnFlex }>
      <h1>{ props.header }</h1>
      <form style={ styles.columnFlex } onSubmit={ props.onSubmitUser }>
        <input
          placeholder="GitHub Username"
          type="text"
          onChange={ props.onUpdateUser }
          value={ props.username }
          style={ Object.assign( {}, styles.topAndBottomMargin, styles.centerText ) }/>
        <button
          type="submit"
          style={ Object.assign( styles.greenBg, styles.defaultButton ) }>
            Continue
        </button>
      </form>
    </div>
  );
};

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
},

module.exports = Prompt;