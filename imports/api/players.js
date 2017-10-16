import {Mongo} from 'meteor/mongo'
import numeral from 'numeral'

export const Players = new Mongo.Collection('players')

export const calculatePlayerPositions = (players) => {
  let rank = 1

  return players.map((player, index)=> {
    index!==0 && players[index-1].score > player.score ? rank++ : null

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    }
  })
}
