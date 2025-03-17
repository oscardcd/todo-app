
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 935, hash: '2c8e06c78ed7261a2305175ff507474d083c63a270aefd05f3fe74f281a1caaa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1173, hash: '1254a8ad20ca2d598c72a6cc91767d8b4f49060fcc3a5942f2c643b357671d4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles.css': {size: 159, hash: 'yw15ZFrMsZ4', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
