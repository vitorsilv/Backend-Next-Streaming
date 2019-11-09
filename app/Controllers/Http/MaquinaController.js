'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with maquinas
 */
const Maquina = use('App/Models/Maquina')
const Monitoramento = use('App/Models/Monitoramento')

class MaquinaController {
  /**
   * Show a list of all maquinas.
   * GET maquinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try{

      const maquina = await Maquina.query()
        .with('monitoramento')
      .fetch();

      let response = {
        data: maquina,
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
   * Create/save a new maquina.
   * POST maquinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single maquina.
   * GET maquinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try{

      const maquina = await Maquina.findByOrFail("idStreamer", params.id)

      let response = {
        data: maquina,
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
   * Update maquina details.
   * PUT or PATCH maquinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a maquina with id.
   * DELETE maquinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MaquinaController
