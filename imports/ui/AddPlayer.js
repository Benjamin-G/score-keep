import React from 'react'

import {Players} from './../api/players'


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value
    const makePlayer = (name, score = 0) => {return {name: name, score: score}}

    e.preventDefault()//prevents default event action

    if(playerName){
      e.target.playerName.value = '' //clears value on screen
      Players.insert(makePlayer(playerName))
    }
  }

  render() {
    return(
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player Name"/>
          <button className="button">Add Players</button>
        </form>
      </div>
    )
  }
}
