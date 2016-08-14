var React = require( 'react' );

var Main = React.createClass({
  render: function() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }} className='main-container'>
        { this.props.children }
      </div>
    );
  }
});

module.exports = Main;