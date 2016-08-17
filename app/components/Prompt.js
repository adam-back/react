var React = require( 'react' );
var styles = require( '../styles' );
var PropTypes = React.PropTypes;
var FlexContainer = require( '../containers/FlexContainer' );

function Prompt ( props ) {
  return (
    <FlexContainer>
      <h1>{ props.header }</h1>
      <form style={ styles.columnFlex } onSubmit={ props.onSubmitUser }>
        <input
          placeholder="GitHub Username"
          type="text"
          onChange={ props.onUpdateUser }
          value={ props.username }
          style={ Object.assign( styles.topAndBottomMargin, styles.centerText, styles.inputStyle ) }/>
        <button
          type="submit"
          style={ Object.assign( styles.defaultButton, styles.greenBg ) }>
            Continue
        </button>
      </form>
    </FlexContainer>
  );
};

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
},

module.exports = Prompt;