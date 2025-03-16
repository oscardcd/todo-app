
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/todo-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5107, hash: '7887c61d193a7852acf969b62768803912c69df5c8d144abeb1d66e275cc8797', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: 'e99c4740708e397762f40318b892236e0b8fa0d05fb5a8d78f9339cd0750d622', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M45EAINT.css': {size: 231770, hash: '/dVeW4/Z9Pg', text: () => import('./assets-chunks/styles-M45EAINT_css.mjs').then(m => m.default)}
  },
};
