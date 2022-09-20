var plugins = [{
      plugin: require('/Users/jawaragordon/Development/code/WesBos/Gatsby/master-gatsby/starter-files/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jawaragordon/Development/code/WesBos/Gatsby/master-gatsby/starter-files/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jawaragordon/Development/code/WesBos/Gatsby/master-gatsby/starter-files/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"zssk3q6x","dataset":"production","watchMode":true,"token":"skMkxqFHoAYntAvmCYxoqXjpV8s30vRIvn80iygqCzLHKSeEl3MI7cj6F6Z2ztdSGwd4U2yj0zOuqFkGSkzHqSlkdShKlqNTWKcUbZEOpWcLi2U1DGWmyex8ipulZlcV9D06LOqpGPHbz53EvDrYkAqOd3EA5TpdR56wMCHDlZZ2hmnyFliu"},
    },{
      plugin: require('/Users/jawaragordon/Development/code/WesBos/Gatsby/master-gatsby/starter-files/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
