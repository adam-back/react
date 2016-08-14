var React = require( 'react' );

var PromptContainer = React.createClass({
  render: function() {
    return (
      <div>
        <h1>SOME TEXT</h1>
        <div>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              placeholder="GitHub Username"
              type="text" />
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = PromptContainer;