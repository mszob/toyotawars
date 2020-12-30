module.exports = {
    title: 'Toyota Wars',
    description: 'does it work?',
    dest: 'docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Rulebook', link: '/rulebook/'},
            { text: 'Buy Game', link: 'https://boardgamegeek.com/boardgame/8322/chad-toyota-wars-1979-1988'},
        ],
        sidebar: {
            '/rulebook/': [
                '',
                'play',
                'tables',
                'terms',
            ]
        }
    }
}  