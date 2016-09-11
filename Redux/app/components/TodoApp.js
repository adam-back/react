var React = require( 'react' );
var PropTypes = React.PropTypes;
var Todo = require( './Todo' );

var TodoApp = React.createClass({
  propTypes: {
    todos: PropTypes.array.isRequired
  },
  getDefaultProps: function() {
    return {
      todos: []
    };
  },
  render: function() {
    return (
      <div>
        <h1>Todo App</h1>
        <input type="text" />
        <ul id='todoList'>
          {
            this.props.todos.map(function( todo ) {
              return <Todo key={ todo.id } text={ todo.text } />
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = TodoApp;