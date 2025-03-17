
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/todo-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 988, hash: '14bbc6407e1b41cb403b8c38f81a3e9a40093c313f98b775cdf91ebd8d08683a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1217, hash: '0e995c05c4931a1f6772c2e1d4fffb108c5d08e23b5650f72dc15b5820dceba2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-32DGMBZE.css': {size: 159, hash: 'yw15ZFrMsZ4', text: () => import('./assets-chunks/styles-32DGMBZE_css.mjs').then(m => m.default)}
  },
};
