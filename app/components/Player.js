var React = require( 'react' );
var styles = require( '../styles' );

function Player ( props ) {
  var user = props.user;
  var displayCompany = 'none';
  var displayLocation = 'none';
  var companyUrl;

  if ( user.company ) {
    displayCompany = 'block';
    companyUrl = 'https://github.com/' + user.company.slice( 1 );
  }

  if ( user.location ) {
    displayLocation = 'block';
  }

  return (
    <div style={ styles.columnFlex }>
      <h2>{ user.name }</h2>
      <img src={ user.avatar_url } style={ styles.squarePhoto } />
      <div>Username: { user.login }</div>
      <div style={{ display: displayLocation }}>Location: { user.location }</div>
      <div style={{ display: displayCompany }}>Company:
        <a href={ companyUrl } >{ user.company }</a>
      </div>
    </div>
  );
};

module.exports = Player;