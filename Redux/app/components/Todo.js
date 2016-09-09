var React = require( 'react' );
var PropTypes = React.PropTypes;

var Todo = function( props ) {
  return (
    <li>{ props.text }</li>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

module.exports = Todo;