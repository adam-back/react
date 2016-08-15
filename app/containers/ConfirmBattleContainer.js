var React = require( 'react' );
var ConfirmBattle = require( '../components/ConfirmBattle' );
var githubHelpers = require( '../utils/githubHelpers' );

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    };
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    var boundSetState = this.setState.bind( this );
    // fetch info from GitHub
    githubHelpers.getPlayersInfo( [ query.playerOne, query.playerTwo ] )
    .then(function( githubInfo ) {
      this.setState({
        playersInfo: githubInfo,
        isLoading: false
      })
    }.bind( this ) );
    // update state
  },
  render: function() {
    return (
      <div>
        <ConfirmBattle
          isLoading={ this.state.isLoading }
          playersInfo={ this.state.playersInfo }
        />
      </div>
    );
  }
});

module.exports = ConfirmBattleContainer;