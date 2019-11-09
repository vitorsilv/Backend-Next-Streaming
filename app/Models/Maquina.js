'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Maquina extends Model {
  static get table(){
    return 'maquina';
  }
  static get incrementing () {
    return true
  }
  static get primaryKey(){
    return 'idMaquina';
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }

  monitoramento () {
    return this.hasMany('App/Models/Monitoramento','idMaquina', 'idMaquina')
  }

  streamer () {
    return this.belongsTo('App/Models/Streamer','idStreamer','idStreamer')
  }
}

module.exports = Maquina
