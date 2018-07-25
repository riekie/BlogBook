module.exports = {
    title: "BlogBook",
    description: "Welcome to BlogBook - write poems, stories or any good literatue",
    themeConfig: {
        logo: 'images/blogbook-100x80.png',
        sidebar: [
            {
                title: 'Home',
                collapsable: false,
                children: [
                    '/welcome',
                    '/authors/',
                    '/books/'
                ]
            },
            {
                title: 'Blogs',
                collapsable: false,
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
                collapsable: false,
                children: [
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
