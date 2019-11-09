'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alerta extends Model {
  static get table(){
    return 'alerta';
  }
  static get incrementing () {
    return true
  }
  static get primaryKey(){
    return 'idAlerta';
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = Alerta
