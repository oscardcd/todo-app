
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/todo-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5107, hash: '673dd2c3633b4d52462addcf22bfc5fffae917556e17db1d46a4436687964b99', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: '0c0e424b3ddd183f015606bbea391839158b77c8142a5ad9bf2906bc860158a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M45EAINT.css': {size: 231770, hash: '/dVeW4/Z9Pg', text: () => import('./assets-chunks/styles-M45EAINT_css.mjs').then(m => m.default)}
  },
};
