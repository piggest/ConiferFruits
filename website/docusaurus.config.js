// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DocMDTest',
  tagline: 'ドキュメントサイト',
  favicon: 'img/favicon.ico',

  url: 'https://norifumi-okumura.github.io',
  baseUrl: '/DocMDTest/',

  organizationName: 'norifumi-okumura',
  projectName: 'DocMDTest',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DocMDTest',
        items: [
          {
            href: 'https://github.com/norifumi-okumura/DocMDTest',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} DocMDTest`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

export default config;
