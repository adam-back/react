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
      // update state
      this.setState({
        playersInfo: githubInfo,
        isLoading: false
      })
    }.bind( this ) );
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },
  render: function() {
    return (
      <div>
        <ConfirmBattle
          isLoading={ this.state.isLoading }
          playersInfo={ this.state.playersInfo }
          onInitiateBattle={ this.handleInitiateBattle }
        />
      </div>
    );
  }
});

module.exports = ConfirmBattleContainer;