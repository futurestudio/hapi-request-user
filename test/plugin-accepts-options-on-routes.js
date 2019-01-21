'use strict'

const Lab = require('lab')
const Code = require('code')
const Hapi = require('hapi')

const server = new Hapi.Server()

const { describe, test, before } = (exports.lab = Lab.script())

describe('disabled on routes,', () => {
  before(async () => {
    await server.register({
      plugin: require('../lib/index')
    })
  })

  test('test if the plugin can be disabled on routes', async () => {
    const route = {
      path: '/disabled',
      method: 'GET',
      handler: request => {
        // request.user should be "undefined"
        // hapi throws an error when returning undefined
        // that's the reason for the fallback
        return request.user || {}
      },
      config: {
        plugins: {
          'hapi-request-user': {
            enabled: false
          }
        }
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
    Code.expect(payload.email).to.not.exist()
  })

  test('test if the plugin can be enabled on routes', async () => {
    const route = {
      path: '/enabled',
      method: 'GET',
      handler: request => {
        return request.user
      },
      config: {
        plugins: {
          'hapi-request-user': {
            enabled: true
          }
        }
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
