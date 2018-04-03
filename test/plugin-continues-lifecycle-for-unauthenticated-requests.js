'use strict'

const Lab = require('lab')
const Code = require('code')
const Hapi = require('hapi')

const server = new Hapi.Server()

const { describe, test, before } = (exports.lab = Lab.script())

describe('unauthenticated requests', () => {
  before(async () => {
    await server.register({
      plugin: require('../lib/index')
    })
  })

  test('continues the request lifecycle', async () => {
    const route = {
      path: '/',
      method: 'GET',
      handler: request => {
        return 'unauthenticated request'
      }
    }

    server.route(route)

    const request = {
      url: route.path,
      method: route.method
    }

    const response = await server.inject(request)

    Code.expect(response.statusCode).to.equal(200)
    Code.expect(response.payload).to.equal('unauthenticated request')
  })
})
