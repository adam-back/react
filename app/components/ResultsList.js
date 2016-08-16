var React = require( 'react' );
var styles = require( '../styles' );
var Player = require( './Player' );
var RestartButton = require( './RestartButton' );

function ResultsList ( props ) {
  if ( props.isLoading ) {
    return (
      <div style={ styles.columnFlex }>
        <h1>LOADING...</h1>
      </div>
    );
  } else {
    return (
      <div style={ styles.columnFlex }>
        <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%' }}>
          { props.playersInfo.map(function( player, index ) {
            return <Player score={ props.scores[ index ] } user={ player } key={ player.login } />
          }) }
        </div>
        <RestartButton />
      </div>
    );
  }
};

ResultsList.propTypes = {
  scores: React.PropTypes.array.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  isLoading: React.PropTypes.bool
};

module.exports = ResultsList;