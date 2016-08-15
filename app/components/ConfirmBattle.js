var React = require( 'react' );

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
      <div> CONFIRM BATTLE: { puke( props ) } </div>
    );
  }
};

module.exports = ConfirmBattle;