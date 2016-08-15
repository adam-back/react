var React = require( 'react' );
var styles = require( '../styles' );

function Player ( props ) {
  var user = props.user;

  return (
    <div style={ styles.columnFlex }>
      <h2>{ user.name }</h2>
      <img src={ user.avatar_url } style={ styles.squarePhoto } />
      <div>Username: { user.login }</div>
      {user.location && <div>Location: { user.location }</div>}
      {user.company && <div>Company:
        <a href={ 'https://github.com/' + user.company.slice( 1 ) } target="_blank">{ user.company }</a>
      </div>}
    </div>
  );
};

module.exports = Player;