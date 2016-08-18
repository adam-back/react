var axios = require( 'axios' );

var id = 'YOUR_CLIENT_ID';
var secret = 'YOUR_SECRET_ID';
var param = '?client_id' + id + '&client_secret=' + secret;

function getUserInfo ( username ) {
  // fetch some data from GitHub
  return axios.get( 'https://api.github.com/users/' + username + param );
};

function getRepos ( username ) {
  // fetch username repos
  return axios.get( 'https://api.github.com/users/' + username + '/repos' + param );
};

function getStars ( repos ) {
  return repos.data.reduce(function( accumulator, repo ) {
    return accumulator + repo.stargazers_count;
  }, 0);
};

function getPlayerScoreInfo ( player ) {
  var username = player.login;
  return getRepos( username )
  .then( getStars )
  .then(function( totalStars ) {
    return {
      totalStars,
      followers: player.followers
    };
  });
};

function calculateScores ( playerOne, playerTwo ) {
  return [
    playerOne.followers * 3 + playerOne.totalStars,
    playerTwo.followers * 3 + playerTwo.totalStars
  ];
};

var helpers = {
  getPlayersInfo: function( players ) {
    return axios.all(players.map(function( username ) {
      return getUserInfo( username );
    }))
    .then(function( info ) {
      return info.map(function( user ) {
        return user.data;
      });
    })
    .catch(function( error ) {
      console.error( 'Error in getPlayersInfo', error );
    });
  },
  battle: function( players ) {
    return axios.all(players.map(function( player ) {
      return getPlayerScoreInfo( player );
    }))
    .then(function( repoData ) {
      return calculateScores( repoData[ 0 ], repoData[ 1 ] );
    })
    .catch(function( error ) {
      console.error( 'Error in battle', error );
    });
  }
};

module.exports = helpers;