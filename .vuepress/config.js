module.exports = {
    title: 'Toyota Wars',
    description: 'does it work?',
    dest: 'docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Rulebook', link: '/rulebook/'},
            { text: 'Buy Game', link: '/https://amazon.com'},
            { text: 'Print map', link: '/https://drive.google.com'}
        ],
        sidebar: {
            '/rulebook/': [
                '',
                'tables',
                'terms',
            ]
        }
    }
}  