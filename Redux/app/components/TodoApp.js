var React = require( 'react' );
var PropTypes = React.PropTypes;
var Todo = require( './Todo' );

var TodoApp = function( props ) {
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={ props.newTask } onChange={ props.onUpdateNewTask }/>
      <button onClick={ props.onAddTodo }>Add Todo</button>
      <ul id='todoList'>
        {
          props.todos.map(function( todo ) {
            return <Todo key={ todo.id } text={ todo.text } />
          })
        }
      </ul>
    </div>
  );
};

TodoApp.PropTypes = {
  todos: PropTypes.array.isRequired,
  newTask: PropTypes.string.isRequired,
  onUpdateNewTask: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired
};

module.exports = TodoApp;