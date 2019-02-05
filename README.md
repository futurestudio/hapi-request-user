<div align="center">
  <img width="471" style="max-width:100%;" src="https://raw.githubusercontent.com/futurestudio/hapi-request-user/master/media/hapi-request-user.png" alt="hapi-request-user logo">

  <br/>
  <br/>

  <p>
    hapi plugin that shortcuts “request.auth.credentials” to “request.user”
  </p>
  <br/>
  <p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#usage"><strong>Usage</strong></a> ·
    <a href="#plugin-registration-options"><strong>Plugin Options</strong></a>
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://travis-ci.org/futurestudio/hapi-request-user"><img src="https://travis-ci.org/futurestudio/hapi-request-user.svg?branch=master" alt="Build Status" data-canonical-src="https://travis-ci.org/futurestudio/hapi-request-user.svg?branch=master" style="max-width:100%;"></a>
    <a href="https://snyk.io/test/github/futurestudio/hapi-request-user"><img src="https://snyk.io/test/github/futurestudio/hapi-request-user/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/futurestudio/hapi-request-user" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/hapi-request-user"><img src="https://img.shields.io/npm/v/hapi-request-user.svg" alt="hapi-request-user Version" data-canonical-src="https://img.shields.io/npm/v/hapi-request-user.svg" style="max-width:100%;"></a>
    <a href="https://greenkeeper.io/" rel="nofollow" class="rich-diff-level-one"><img src="https://badges.greenkeeper.io/futurestudio/hapi-request-user.svg" alt="Greenkeeper badge" data-canonical-src="https://badges.greenkeeper.io/futurestudio/hapi-request-user.svg" style="max-width:100%;"></a>

  </p>
  <p>
    <em>Follow <a href="http://twitter.com/marcuspoehls">@marcuspoehls</a> for updates!</em>
  </p>
</div>

------

<p align="center"><sup>Development of this hapi plugin is supported by <a href="https://futurestud.io">Future Studio University 🚀</a></sup>
<br><b>
Join the <a href="https://futurestud.io/university">Future Studio University and Skyrocket in Node.js</a></b>
</p>

------


## Introduction
A hapi plugin that shortcuts access to the authenticated user from `request.auth.credentials` to `request.user`.

Access the authenticated user in request lifecycle methods, like this:

```js
(request, h) => {
  const user = request.user  // instead of "request.auth.credentials"

  // use the user object
}
```


## Requirements
> **hapi v17** and **Node.js v8 (or newer)**

This plugin requires **hapi v17** (or later) and uses async/await which requires **Node.js v8 or newer**.


## Installation
Add `hapi-request-user` as a dependency to your project:

```bash
# NPM v5 users, this way is yours
npm i hapi-request-user

# you’re using NPM v4:
npm i -S hapi-request-user

```


## Usage
**`hapi-request-user` is enabled by default.**

The most straight forward way to register the `hapi-request-user` plugin:

```js
await server.register({
  plugin: require('hapi-request-user'),
})
```


## Plugin Registration Options
The following plugin options allow you to customize the default behavior of `hapi-request-user`:

- **enabled**: `(boolean)`, default: `true` — by default, the plugin is enabled and decorates `request.user` with the authenticated user credentials

```js
await server.register({
  plugin: require('hapi-request-user'),
  options: {
    enabled: true
  }
})
```


## Route Handler Options
The following plugin options on individual route handlers allow you to customize the behavior of `hapi-request-user`:

- **enabled**: `(boolean)` — tells the plugin to disable (`false`) `request.user` decoration for this route handler

The plugin configuration can be customized for single routes using the `hapi-request-user` key:

```js
server.register({
  plugin: require('hapi-request-user') // enabled by default
})

// Within your route handler functions, you can access the location like this
server.route({
  method: 'GET',
  path: '/',
  config: {
    plugins: {
      'hapi-request-user': {
        enabled: false
      }
    },
    handler: (request, h) => {
      const user = request.user
      // "user" will be undefined when disabling "hapi-request-user"

      return { your: 'value' }
    }
  }
})
```


## Feature Requests
Do you miss a feature? Please don’t hesitate to
[create an issue](https://github.com/futurestudio/hapi-request-user/issues) with a short description of your desired addition to this plugin.


## Links & Resources

- [hapi tutorial series](https://futurestud.io/tutorials/hapi-get-your-server-up-and-running) with 100+ tutorials


## Contributing

1.  Create a fork
2.  Create your feature branch: `git checkout -b my-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request 🚀


## License

MIT © [Future Studio](https://futurestud.io)

---

> [futurestud.io](https://futurestud.io) &nbsp;&middot;&nbsp;
> GitHub [@futurestudio](https://github.com/futurestudio/) &nbsp;&middot;&nbsp;
> Twitter [@futurestud_io](https://twitter.com/futurestud_io)
