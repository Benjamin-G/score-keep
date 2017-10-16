import React from 'react'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move';

import Player from './Player'

export default class PlayerList extends React.Component{
  renderPlayers(){
    return this.props.players.length===0 ?
    <div className="item"><p className="item__message">
      No Players, Please Add Players</p></div> :
    this.props.players
    .map(player => <Player key={player._id} player={player}/>)
  }

  render(){
    return <FlipMove duration={750} easing="ease-out"
      maintainContainerHeight={true}>
      {this.renderPlayers()}</FlipMove>
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
