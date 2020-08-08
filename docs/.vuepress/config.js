module.exports = {
    title: 'Some random docs',
    description: 'Simple and Naive',
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'RaspberryPi', link: '/raspberrypi/' },
        ],
        sidebar: {
            '/RaspberryPi/': [
                {
                    title: "RaspberryPi",
                    collapsable: false,
                    sidebarDepth: 5,
                    children: [
                        '',
                        'Documents'
                    ]
                }
            ],
            '/Others/': [
                ''
            ],
            '/': [
                ''
            ]
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true]
    ]
}
