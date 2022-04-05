module.exports = {
  title: 'documentation',
  tagline: 'Sequent Tech Project Admin Manual by Sequent',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sequent', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'Admin Manual',
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
          href: 'https://sequentech.io/blog/',
          label: 'Blog', 
          position: 'right'
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
              label: 'GitHub',
              href: 'https://github.com/sequent',
	    },
            {
              label: 'Discord',
              href: 'https://discord.gg/BSqF8Cbr',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sequent_com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://sequentech.io/blog/',
            },
            {
              label: 'GitHub',
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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/sequent/sequent-com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
