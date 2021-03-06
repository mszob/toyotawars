module.exports = {
    
    plugins: [
        ['flexsearch'],
      ],

    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Holtwood+One+SC&display=swap' }],
        ['link', { rel: "shortcut icon", href: "/images/favicon.ico"}],
      ],

    title: 'TW Handbook',
    description: 'Hassan Djamous FTW!',
    dest: 'docs',
    
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Rulebook', link: '/rulebook/'},
            { text: 'History Corner', link: '/history/'},
            { text: 'Buy Game', link: 'https://boardgamegeek.com/boardgame/8322/chad-toyota-wars-1979-1988'},        ],
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