
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://hopcago.github.io/vocago/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/vocago"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 463, hash: 'd05cfc6e3ed77fe00c8f719a3c66d07d07f944e7dd08e22149f431950837f60e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: '00aeead900a4e7961ef3c0c66bde371bbed790ff9135e7602ff06d396f4a342b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21592, hash: '0f90ced8d6a2e71760a6847923ad0493fc474bb451d43b2e1078c2c8a025c8c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
