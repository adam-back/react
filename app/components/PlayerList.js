var React = require( 'react' );
var Player = require( './Player' );

function PlayerList ( props ) {
  var players = props.players;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%' }}>
      { players.map(function( player ) {
        return <Player user={ player } key={ player.name } />
      })}
    </div>
  );
};

module.exports = PlayerList;