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
      title: 'Start',
      logo: {
        alt: 'Sequent',
        src: 'img/sequent_logo.png',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'deployment/guide',
          label: 'Docs',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'file-formats/introduction',
          label: 'File Formats',
        },
        {
          href: 'https://github.com/sequentech/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://sequentech.io/',
          label: 'Powered By Sequent',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Deployment',
              to: 'docs/deployment/guide',
            },
            {
              label: 'Translation',
              to: 'docs/translation/guide',
            },
            {
              label: 'E2E Integration Testing',
              to: 'docs/testing/e2e',
            },
            {
              label: 'Advanced Topics',
              to: 'docs/advanced-elections/introduction',
            },
            {
              label: 'Contribute',
              to: 'docs/contribute/guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '@sequentech GitHub',
              href: 'https://github.com/sequentech',
	          },
            {
              label: '@sequentTech Twitter',
              href: 'https://twitter.com/sequentech',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/sequentech/documentation',
            },
          ],
        },
      ],
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
