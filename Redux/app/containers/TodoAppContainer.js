var React = require( 'react' );
var PropTypes = React.PropTypes;
var TodoList = require( '../components/TodoApp' );

var TodoAppContainer = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    };
  },
  render: function() {
    return (
      <div>
        <TodoList todos={ this.state.todos }/>
      </div>
    );
  }
});

module.exports = TodoAppContainer;