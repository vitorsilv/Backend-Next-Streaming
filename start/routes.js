'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
//STREAMER
Route.resource("/api/streamer/","StreamerController").apiOnly();
Route.post("/api/streamer/login","StreamerController.login");
//MONITORAMENTO
Route.resource("/api/monitoramento/","MonitoramentoController").apiOnly();
Route.get("/api/monitoramento/lastReg/:id","MonitoramentoController.lastReg")
Route.get("/api/monitoramento/lastTen/:id","MonitoramentoController.lastTen")
//MAQUINA
Route.resource("/api/maquina/","MaquinaController").apiOnly();
