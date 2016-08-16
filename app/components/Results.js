var React = require( 'react' );

function Results ( prop ) {
  return (
    <div>
    </div>
  );
};

Results.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  scores: React.PropTypes.array.isRequired,
  playersInfo: React.PropTypes.array.isRequired
};

module.exports = Results;