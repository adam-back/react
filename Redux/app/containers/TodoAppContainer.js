var React = require( 'react' );
var PropTypes = React.PropTypes;
var TodoApp = require( '../components/TodoApp' );

var TodoAppContainer = React.createClass({
  getInitialState: function() {
    return {
      todos: [],
      newTask: '',
      idCounter: 0
    };
  },
  handleAddTodo: function( task ) {
    var newTodo = {
      id: this.state.idCounter,
      text: this.state.newTask
    };
    this.setState({
      todos: [ ...this.state.todos, newTodo ],
      idCounter: ++this.state.idCounter,
      newTask: ''
    });
  },
  handleRemoveTodo: function( event ) {
    this.setState({
      todos: this.state.todos.filter(function( todo ) {
        return ( event.target.value !== todo.id );
      })
    });
  },
  handleUpdateNewTask: function( event ) {
    this.setState({
      newTask: event.target.value
    });
  },
  render: function() {
    return (
      <div>
        <TodoApp
          newTask={ this.state.newTask }
          onAddTodo={ this.handleAddTodo }
          onRemoveTodo={ this.handleRemoveTodo }
          onUpdateNewTask={ this.handleUpdateNewTask }
          todos={ this.state.todos } />
      </div>
    );
  }
});

module.exports = TodoAppContainer;