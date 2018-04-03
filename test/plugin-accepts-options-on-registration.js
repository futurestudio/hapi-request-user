'use strict'

const Lab = require('lab')
const Code = require('code')
const Hapi = require('hapi')

const server = new Hapi.Server()

const { describe, test, before } = (exports.lab = Lab.script())

describe('add-user-to-request register plugin', () => {
  before(async () => {
    await server.register({
      plugin: require('../lib/index'),
      options: {
        enabled: false
      }
    })
  })

  test('test plugin', async () => {
    const route = {
      path: '/',
      method: 'GET',
      handler: request => {
        return request.user || {}
      }
    }

    server.route(route)

    const request = {
      url: route.path,
      method: route.method,
      credentials: {
        email: 'marcus@futurestud.io'
      }
    }

    // inject request with "credentials", even though the plugin is disabled
    const response = await server.inject(request)
    const payload = JSON.parse(response.payload || '{}')

    // expect that the response does not contain the credentials
    Code.expect(response.statusCode).to.equal(200)
    Code.expect(payload.email).to.not.exist()
  })
})
