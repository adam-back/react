import React from 'react'
var PropTypes = React.PropTypes;

export default React.createClass({
  propTypes: {
    params: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      repoName: PropTypes.string.isRequired
    })
  },
  render() {
    return (
      <div>
        <h2>{ this.props.params.userName }</h2>
        <h3>{ this.props.params.repoName }</h3>
      </div>
    )
  }
})