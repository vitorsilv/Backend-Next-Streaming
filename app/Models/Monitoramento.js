'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Monitoramento extends Model {
  static get table(){
    return 'monitoramento';
  }
  static get incrementing () {
    return true
  }
  static get primaryKey(){
    return 'idMonitoramento';
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
  alerta () {
    return this
      .hasOne('App/Models/Alerta', 'idAlerta', 'idAlerta')
  }
  maquina(){
    return this
      .hasOne('App/Models/Maquina', 'idMaquina', 'idMaquina')
  }

  streamer(){
    return this.manyThrough('App/Models/Maquina', 'streamer','idMaquina','idMaquina')
  }
}

module.exports = Monitoramento
