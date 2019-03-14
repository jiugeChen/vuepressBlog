module.exports = {
    title: 'Chen\' Jia',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'manifest', href: '' }],
      ['link', { rel: 'apple-touch-icon', href: '' }],
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
    
      nav:[ // 导航栏配置
        {text: '学习笔记', link: '/notes/fe/' },
        {text: '生活随笔', link: '/MyLife/'},
        {text: '社交账号',
        items:[
          {text: 'github', link: 'https://github.com/jiugeChen'},
          {text: '简书', link: 'https://www.jianshu.com/u/58878ba08e20' },
        ]
      }      
      ],
      sidebar:{
        '/MyLife/':[
          {
            title: '生活记录',
            collapsable: true,
            children: [
              '/MyLife/',
              '/MyLife/life',
              
            ]
          }
        ],
        "/notes/" :[
        {
          title: '前端',
          collapsable: true,
          children: [
           
            '/notes/fe/',
            '/notes/fe/js',
            '/notes/fe/es6',
            '/notes/fe/vue',
            '/notes/fe/mobile',
            '/notes/fe/data',
            
          ]
        },
      
        {
          title: '后端',
          collapsable: true,
          children: [
            // '/notes/be/php',
            '/notes/be/node',
          ]
        },
        {
          title: '其他',
          collapsable: true,
          children: [
            '/notes/other/',
            '/notes/other/git',
          ]
        },
        {
          title: '遇到再说哈',
          collapsable: true,
          children: [
            '/'
          ]
        },
      ],
      // sidebar: 'auto', // 侧边栏配置
      // sidebarDepth: 2, // 侧边栏显示2级
      displayAllHeaders:false 
    }
  }
  };