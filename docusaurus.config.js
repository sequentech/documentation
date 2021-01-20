module.exports = {
  title: 'admin-manual',
  tagline: 'Agora Voting Project Admin Manual by nVotes',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/admin-manual/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'agoravoting', // Usually your GitHub org/user name.
  projectName: 'admin-manual', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Admin Manual',
      logo: {
        alt: 'nVotes',
        src: 'img/nvotes_logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://nvotes.com/blog/',
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/agoravoting/',
          label: '@agoravoting on GitHub',
          position: 'right',
        },
        {
          href: 'https://nvotes.com/',
          label: 'Powered by nVotes',
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
              to: 'docs/',
            },
            {
              label: 'Translation',
              to: 'docs/translation-guide',
            },
            {
              label: 'Election Testing',
              to: 'docs/testing/bulk',
            },
            {
              label: 'Advanced Elections',
              to: 'docs/advanced-election-management-guide',
            },
            {
              label: 'Contribute',
              to: 'docs/contribute',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/agoravoting',
	    },
            {
              label: 'Discord',
              href: 'https://discord.gg/BSqF8Cbr',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nvotes_com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://nvotes.com/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/agoravoting/admin-manual',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} nVotes`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/agoravoting/admin-manual/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/nvotes/nvotes-com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
