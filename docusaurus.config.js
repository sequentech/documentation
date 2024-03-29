// If you are using dotenv (https://www.npmjs.com/package/dotenv)
require('dotenv').config();

module.exports = {
  title: 'Documentation',
  tagline: 'Sequent Tech project is an Open Source, End-to-End Verifiable Online Voting Platform For Elections.',
  url: process.env.URL || 'https://sequentech.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sequentech', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      //title: 'Start',
      logo: {
        alt: 'Sequent',
        src: 'img/sequent_docs_logo.png',
      },
      items: [
        {
          href: 'https://sequentech.io/',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/sequentech/roadmap/discussions',
          label: 'Forums',
          position: 'right',
        },
        {
          label: 'Chat',
          href: 'https://discord.gg/WfvSTmcdY8',
          position: 'right',
        },
        {
          href: 'https://github.com/sequentech/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Sequent`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sequentech/documentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
