module.exports = {
  title: 'U Tool',
  description: '常用的工具函数集合',
  base: '/u-tool/',
  head: [
    ['script', { src: '/u-tool.js' }],
    ['script', { src: 'https://gw.alipayobjects.com/os/lib/antv/g6/4.3.11/dist/g6.min.js' }],
  ],
  themeConfig: {
    sidebar: [
      {
        title: '上手',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
    ],
    nav: [
      { text: 'Github', link: 'https://github.com/w2xi/utool' },
    ]
  }
}