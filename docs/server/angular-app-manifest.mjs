
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/todo-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5259, hash: '8b987329eac2ce7c099b93fb39767609154e2323519bc4d574bf90fe3c5b7690', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1217, hash: '16601fcff7449167d3e482ecec6b776d251b22aa1f53160f4d46d73a937be21f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M45EAINT.css': {size: 231770, hash: '/dVeW4/Z9Pg', text: () => import('./assets-chunks/styles-M45EAINT_css.mjs').then(m => m.default)}
  },
};
