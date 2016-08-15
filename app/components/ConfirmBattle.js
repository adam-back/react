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
      <div style={ Object.assign( {}, styles.columnFlex ) }>
        <h1>CONFIRM BATTLE</h1>
        <PlayerList players={ props.playersInfo } />
        <RestartButton />
      </div>
    );
  }
};

module.exports = ConfirmBattle;