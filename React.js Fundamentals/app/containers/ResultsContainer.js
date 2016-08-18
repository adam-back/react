var React = require( 'react' );
var ResultsList = require( '../components/ResultsList' );
var githubHelpers = require( '../utils/githubHelpers' );

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    };
  },
  componentDidMount: function() {
    githubHelpers.battle( this.props.location.state.playersInfo )
    .then(function( scores ) {
      this.setState({
        scores: scores,
        isLoading: false
      });
    }.bind( this ));
  },
  render: function() {
    return (
      <div>
        <ResultsList scores={ this.state.scores } isLoading={ this.state.isLoading } playersInfo={ this.props.location.state.playersInfo }/>
      </div>
    );
  }
});

module.exports = ResultsContainer;