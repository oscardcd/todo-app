
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5098, hash: '56be3b78d164080b53c7a72db1a786d29941a7a361c9444812ed7b4cbe9fd136', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '877e6cc7e1d39e51b11a3e8837a1c997aa03c10ae4481fb8c3ca1d716b95e38f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M45EAINT.css': {size: 231770, hash: '/dVeW4/Z9Pg', text: () => import('./assets-chunks/styles-M45EAINT_css.mjs').then(m => m.default)}
  },
};
