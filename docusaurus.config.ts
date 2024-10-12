import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const GH_ORGANIZATION_NAME: string = "CollinRoboticsClub";
const GH_REPOSITORY_NAME: string = "documentation";
const GH_URL: string = `https://github.com/${GH_ORGANIZATION_NAME}/${GH_REPOSITORY_NAME}`

const TITLE: string = "Collin College Robotics Club Documentation";
const TAGLINE: string = ""

const GH_PAGES_URL: string = `https://${GH_ORGANIZATION_NAME.toLowerCase()}.github.io`;

const paths = {
  ts: {
    SIDEBAR: './sidebars.ts',
  },
  images: {
    FAVICON: 'img/favicon.ico',

    // FIXME:
    SOCIAL_CARD: 'img/docusaurus-social-card.jpg',
    SITE_LOGO: 'img/logo.svg',
  },
  CUSTOM_CSS: './src/css/custom.css',
}

const config: Config = {
  title: TITLE,
  tagline: TAGLINE,
  favicon: paths.images.FAVICON,

  // Set the production url of your site here
  url: GH_PAGES_URL,

  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/' + GH_REPOSITORY_NAME + '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: GH_ORGANIZATION_NAME,
  projectName: GH_REPOSITORY_NAME,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: paths.ts.SIDEBAR,
          // TESTME: Remove this to remove the "edit this page" links.
          editUrl: (GH_URL + '/tree/main/packages/create-docusaurus/templates/shared/'),
        },
        theme: {
          customCss: paths.CUSTOM_CSS,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: paths.images.SOCIAL_CARD,
    navbar: {
      title: TITLE,
      logo: {
        alt: 'My Site Logo',
        src: paths.images.SITE_LOGO,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: GH_URL,
          label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          // FIXME:
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: GH_URL,
            },
          ],
        },
      ],
      // FIXME:
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
