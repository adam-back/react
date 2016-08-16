var React = require( 'react' );
var RestartButton = require( './RestartButton' );
var PlayerList = require( './PlayerList' );
var styles = require( '../styles' );

function ConfirmBattle ( props ) {
  if ( props.isLoading === true ) {
    return (
      <div style={ styles.columnFlex }>
        <h1>LOADING...</h1>
      </div>
    );
  } else {
    return (
      <div style={ styles.columnFlex }>
        <h1>CONFIRM BATTLE</h1>
        <PlayerList players={ props.playersInfo } />
        <button type="button" onClick={ props.onInitiateBattle } style={ Object.assign( styles.defaultButton, styles.greenBg ) }>Initiate Battle</button>
        <RestartButton />
      </div>
    );
  }
};

ConfirmBattle.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  onInitiateBattle: React.PropTypes.func.isRequired
};

module.exports = ConfirmBattle;