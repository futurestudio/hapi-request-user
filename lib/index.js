'use strict'

function register (server) {
  server.decorate('request', 'user')

  server.ext('onPostAuth', (request, h) => {
    if (request.auth.credentials) {
      request.user = request.auth.credentials
    }

    return h.continue
  })
}

exports.plugin = {
  register,
  once: true,
  pkg: require('../package.json')
}
