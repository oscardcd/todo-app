
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 980, hash: 'cbb55d2c561ba72590a72311f10cf353b511cf3c14334fcdf5f62146612b284f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1209, hash: '46011c74b5304ca9b5bbde37593020ed8a8e56531646b9b2fbbc4cff9d5cb775', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-32DGMBZE.css': {size: 159, hash: 'yw15ZFrMsZ4', text: () => import('./assets-chunks/styles-32DGMBZE_css.mjs').then(m => m.default)}
  },
};
