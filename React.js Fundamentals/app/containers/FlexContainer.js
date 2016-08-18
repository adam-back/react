var React = require( 'react' );
var styles = require( '../styles' );

function FlexContainer ( props ) {
  return (
    <div style={ styles.columnFlex }>
      { props.children }
    </div>
  );
};

module.exports = FlexContainer;