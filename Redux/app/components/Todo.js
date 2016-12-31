var React = require( 'react' );
var PropTypes = React.PropTypes;

var Todo = function( props ) {
  return (
    <li onClick={ props.onRemoveTodo } value={ props.id }>{ props.text }</li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

module.exports = Todo;