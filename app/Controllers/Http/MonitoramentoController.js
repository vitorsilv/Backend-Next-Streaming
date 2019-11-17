'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with monitoramentos
 */
const Monitoramento = use('App/Models/Monitoramento');
const Maquina = use('App/Models/Maquina');

class MonitoramentoController {
  /**
   * Show a list of all monitoramentos.
   * GET monitoramentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    try{
    const monitoramento = await Monitoramento.query()
      .with('alerta')
      .with('maquina')
    .fetch();

    let response = {
      data: monitoramento,
      result:true,
      message:"Operação OK"
    }
    return response;
    }catch(err){

      let response = {
        data: null,
        result:false,
        message:err.message
      }
      return response;
    }
  }

  /**
   * Create/save a new monitoramento.
   * POST monitoramentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single monitoramento.
   * GET monitoramentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try{
      let maquina = await Maquina.findByOrFail("idStreamer", params.id);
      const idMaquina = maquina.idMaquina;
      const monitoramento = await Monitoramento.query()
        .with('alerta')
        .where('idMaquina', idMaquina)
      .fetch();

      let response = {
        data:monitoramento,
        result:true,
        message:"Operação OK"
      }
      return response;
      }catch(err){

        let response = {
          data: null,
          result:false,
          message:err.message
        }
        return response;
      }
  }

  /**
   * Update monitoramento details.
   * PUT or PATCH monitoramentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a monitoramento with id.
   * DELETE monitoramentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async lastReg({params, request, response}){
    try{
      let maquina = await Maquina.findByOrFail("idStreamer", params.id);
      const idMaquina = maquina.idMaquina;
      const monitoramento = await Monitoramento.query()
        .with('alerta')
        .with('maquina')
        .where('idMaquina', idMaquina)
        .orderBy('idMonitoramento', 'desc')
        .limit(1)
      .fetch();

      let response = {
        data:monitoramento,
        result:true,
        message:"Operação OK"
      }
      return response;
      }catch(err){

        let response = {
          data: null,
          result:false,
          message:err.message
        }
        return response;
      }
  }

  async lastTen({params, request, response}){
    try{
      let maquina = await Maquina.findByOrFail("idStreamer", params.id);
      const idMaquina = maquina.idMaquina;
      const monitoramento = await Monitoramento.query()
        .with('alerta')
        .with('maquina')
        .where('idMaquina', idMaquina)
        .orderBy('idMonitoramento', 'desc')
        .limit(10)
      .fetch();

      let response = {
        data:monitoramento,
        result:true,
        message:"Operação OK"
      }
      return response;
      }catch(err){

        let response = {
          data: null,
          result:false,
          message:err.message
        }
        return response;
      }
  }
}

module.exports = MonitoramentoController
