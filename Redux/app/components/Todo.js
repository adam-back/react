import { PropTypes } from 'React';

var Todo = function( props ) {
  return (
    <li onDoubleClick={ props.onRemoveTodo } value={ props.id }>{ props.text }</li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

module.exports = Todo;