'use strict'

const Lab = require('@hapi/lab')
const Code = require('@hapi/code')
const Hapi = require('@hapi/hapi')
const HapiRequestUser = require('../lib/index')

const server = new Hapi.Server()

const { describe, test, before } = (exports.lab = Lab.script())

describe('add-user-to-request register plugin', () => {
  before(async () => {
    await server.register(HapiRequestUser)
  })

  test('test plugin', async () => {
    server.route({
      path: '/',
      method: 'GET',
      handler: request => {
        return request.user
      }
    })

    const request = {
      method: 'GET',
      url: '/',
      auth: {
        strategy: 'default',
        credentials: {
          email: 'marcus@futurestud.io'
        }
      }
    }

    const response = await server.inject(request)
    const payload = response.result || {}

    Code.expect(response.statusCode).to.equal(200)
    Code.expect(payload.email).to.equal('marcus@futurestud.io')
  })
})
