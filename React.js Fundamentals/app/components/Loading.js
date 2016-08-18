var React = require( 'react' );

var handleDots = function ( message ) {
  var dots = message.match( /\./g );
  if ( Array.isArray( dots ) ) {
    var numDots = dots.length;
    if ( numDots < 3 ) {
      return message + '.';
    } else {
      return message.slice( 0, message.length - 3 );
    }
  } else {
    return message + '.';
  }
};

var Loading = React.createClass({
  propTypes: {
    speed: React.PropTypes.number,
    text: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      speed: 300,
      text: 'Loading'
    }
  },
  getInitialState() {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    };
  },
  componentDidMount() {
    this.dotdotdot = setInterval(function( that ) {
      that.setState({
        text: handleDots( that.state.text )
      });
    }, this.props.speed, this );
  },
  componentWillUnmount() {
    clearInterval( this.dotdotdot );
  },
  render() {
    return (
      <div>
        <h1>{ this.state.text }</h1>
      </div>
    );
  }
});

module.exports = Loading;