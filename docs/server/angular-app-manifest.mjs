
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/todo-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5259, hash: '773e6f5391553afefb6f4abeb8570d06cad73307b226dd2fb4a06626da0869cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1217, hash: 'a66c195332854526c2b4ec0288889e90335e47e02c36a3a6bffa05762abdb8db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M45EAINT.css': {size: 231770, hash: '/dVeW4/Z9Pg', text: () => import('./assets-chunks/styles-M45EAINT_css.mjs').then(m => m.default)}
  },
};
