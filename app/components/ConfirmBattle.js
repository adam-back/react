var React = require( 'react' );
var RestartButton = require( './RestartButton' );

function puke ( obj ) {
  return <pre>{JSON.stringify( obj, null, ' ' ) }</pre>
};

function ConfirmBattle ( props ) {
  if ( props.isLoading === true ) {
    return (
      <div> LOADING </div>
    );
  } else {
    return (
      <div>
        <div>CONFIRM BATTLE: { puke( props ) }</div>
        <RestartButton />
      </div>
    );
  }
};

module.exports = ConfirmBattle;