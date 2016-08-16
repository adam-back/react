var React = require( 'react' );
var PropTypes = React.PropTypes;
var styles = require( '../styles' );

function Player ( props ) {
  var user = props.user;

  return (
    <div style={ styles.columnFlex }>
      {props.score && <h2>Score: { props.score }</h2>}
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

Player.propTypes = {
  score: PropTypes.number,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    'avatar_url': PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    location: PropTypes.string,
    company: PropTypes.string
  })
};

module.exports = Player;