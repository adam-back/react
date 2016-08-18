var React = require( 'react' );
var Player = require( './Player' );
var RestartButton = require( './RestartButton' );
var FlexContainer = require( '../containers/FlexContainer' );
var Loading = require( '../components/Loading' );

function ResultsList ( props ) {
  if ( props.isLoading ) {
    return (
      <FlexContainer>
        <Loading/>
      </FlexContainer>
    );
  } else {
    return (
      <FlexContainer>
        <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%' }}>
          { props.playersInfo.map(function( player, index ) {
            return <Player score={ props.scores[ index ] } user={ player } key={ player.login } />
          }) }
        </div>
        <RestartButton text='Restart Game'/>
      </FlexContainer>
    );
  }
};

ResultsList.propTypes = {
  scores: React.PropTypes.array.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  isLoading: React.PropTypes.bool
};

module.exports = ResultsList;