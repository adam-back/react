var React = require( 'react' );
var styles = require( '../styles' );

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container' style={ styles.helvetica }>
        { this.props.children }
      </div>
    );
  }
});

module.exports = Main;