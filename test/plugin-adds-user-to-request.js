'use strict'

const Lab = require('@hapi/lab')
const Code = require('@hapi/code')
const Hapi = require('@hapi/hapi')

const server = new Hapi.Server()

const { describe, test, before } = (exports.lab = Lab.script())

describe('add-user-to-request register plugin', () => {
  before(async () => {
    await server.register({
      plugin: require('../lib/index')
    })
  })

  test('test plugin', async () => {
    const route = {
      path: '/',
      method: 'GET',
      handler: request => {
        return request.user
      }
    }

    server.route(route)

    const request = {
      url: route.path,
      method: route.method,
      auth: {
        strategy: 'default',
        credentials: {
          email: 'marcus@futurestud.io'
        }
      }
    }

    const response = await server.inject(request)
    const payload = JSON.parse(response.payload || '{}')

    Code.expect(response.statusCode).to.equal(200)
    Code.expect(payload.email).to.equal('marcus@futurestud.io')
  })
})
