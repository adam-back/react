var React = require( 'react' );
var styles = require( '../styles' );
var Router = require( 'react-router' );
var Link = Router.Link;

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    };
  },
  onUpdateUser: function( event ) {
    this.setState({
      username: event.target.value
    });
  },
  onSubmitUser: function( event ) {
    event.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if ( this.props.routeParams.playerOne ) {
      // go to battle
      console.log( this.context );
    } else {
      // go to player two
      console.log( this.context );
    }
  },
  render: function() {
    return (
      <div style={ styles.columnFlex }>
        <h1>{ this.props.route.header }</h1>
        <form style={ styles.columnFlex } onSubmit={ this.onSubmitUser }>
          <input
            placeholder="GitHub Username"
            type="text"
            onChange={ this.onUpdateUser }
            value={ this.state.username }
            style={ Object.assign( {}, styles.topAndBottomMargin, styles.centerText ) }/>
          <button
            type="submit"
            style={ Object.assign( {}, styles.topAndBottomMargin, styles.centerText, styles.roundGreenButton ) }>
              Continue
          </button>
        </form>
      </div>
    );
  }
});

module.exports = PromptContainer;