
export default {
  basePath: 'https://hopcago.github.io/vocago',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
