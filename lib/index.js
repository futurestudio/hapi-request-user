'use strict'

function register (server, options) {
  const defaults = {
    enabled: true
  }

  const config = Object.assign({}, defaults, options)

  // decorate the request with a "user" property
  // this passes responsibility to hapi that
  // no other plugin uses "request.user"
  server.decorate('request', 'user', undefined)

  server.ext('onPostAuth', (request, h) => {
    // get the configuration that is assigned to a route
    const settings = request.route.settings.plugins['hapi-request-user'] || {}

    let enabled = config.enabled

    if (typeof settings.enabled !== 'undefined') {
      enabled = settings.enabled
    }

    if (!enabled) {
      return h.continue
    }

    // user successfully authenticated?
    if (request.auth.credentials) {
      // assign user object to request by using its credentials
      request.user = request.auth.credentials
    }

    // continue request lifecycle
    return h.continue
  })
}

exports.plugin = {
  register,
  pkg: require('../package.json')
}
