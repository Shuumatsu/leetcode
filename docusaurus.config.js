module.exports = {
    title: 'Algorithms Notes',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Shuumatsu', // Usually your GitHub org/user name.
    projectName: 'algorithm-notes', // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ['rust'],
            theme: require('prism-react-renderer/themes/oceanicNext'),
        },
        navbar: {
            title: 'Algorithms Notes',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                // {
                //     to: 'docs/',
                //     activeBasePath: 'docs',
                //     label: 'Docs',
                //     position: 'left',
                // },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
}
