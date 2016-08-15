var React = require( 'react' );
var Player = require( './Player' );

function PlayerList ( props ) {
  var players = props.players;

  return (
    <div style={{ display: 'flex' }}>
      { players.map(function( player ) {
        return <Player user={ player } />
      })}
    </div>
  );
};

module.exports = PlayerList;