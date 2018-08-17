module.exports = {
    title: "BlogBook",
    description: "Welcome to BlogBook - share your poem or story with us",
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/images/favicon.ico` }]
    ],
    themeConfig: {
        logo: '/images/bb.png',
        //docsDir: 'docs', //github link
        //repo: 'riekie/BlogBook',
        //displayAllHeaders: true, // Default: false
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Home',
                collapsable: true,
                children: [
                    ['/', 'Welcome'],
                    ['/welcome', 'Join Us'],
                    '/authors'
                ]
            },
            {
                title: 'Blogs',
                collapsable: true,
                children: [
                    '/authors/AndriesWillemBrink/',
                    '/authors/AnnerieDuPreez/',
                    '/authors/RiekieBrink/',
                    '/authors/WikusHattingh/',
                    '/authors/Unknown/'
                ]
            },
            {
                title: 'Books',
                collapsable: true,
                children: [
                    '/books/',
                    '/books/simone'
                ]
            }
        ],
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Authors',
                items: [
                    { text: 'Andries Willem Brink', link: '/authors/AndriesWillemBrink/' },
                    { text: 'Annerie du Preez', link: '/authors/AnnerieDuPreez/' },
                    { text: 'Riekie Brink', link: '/authors/RiekieBrink/' },
                    { text: 'Wikus Hattingh', link: '/authors/WikusHattingh/' },
                    { text: 'Unknown', link: '/authors/Unknown/' }
                ]
            },
            { text: 'Books', link: '/books/'},
            { text: 'Admin', link: '/admin/'}
        ]
    }
}
