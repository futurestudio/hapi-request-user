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
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://travis-ci.org/futurestudio/hapi-request-user"><img src="https://travis-ci.org/futurestudio/hapi-request-user.svg?branch=master" alt="Build Status" data-canonical-src="https://travis-ci.org/futurestudio/hapi-request-user.svg?branch=master" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/hapi-request-user"><img src="https://img.shields.io/npm/v/hapi-request-user.svg" alt="hapi-request-user Version" data-canonical-src="https://img.shields.io/npm/v/hapi-request-user.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/hapi-request-user"><img src="https://img.shields.io/npm/dm/hapi-request-user.svg" alt="Monthly downloads"></a>
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
{
  method: 'GET',
  path: '/authenticated-user',
  handler: (request, h) => {
    return request.user  // instead of "request.auth.credentials"
  }
}
```


## Requirements
> **hapi v17** and **Node.js v8 (or newer)**

This plugin requires **hapi v17** (or later) and uses async/await which requires **Node.js v8 or newer**.


## Installation
Add `hapi-request-user` as a dependency to your project:

```bash
npm i hapi-request-user
```


## Usage
Register the `hapi-request-user` plugin and you’re done:

```js
await server.register({
  plugin: require('hapi-request-user'),
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
