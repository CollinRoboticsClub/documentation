import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import LIST_OF_PROJECT_DOCS from './constants';

// GitHub constants
const GH_ORGANIZATION_NAME: string = "CollinRoboticsClub";
const GH_REPOSITORY_NAME: string = "documentation";

// GitHub constants derived from provided constants (i.e: you probably don't need to touch these)
const GH_URL: string = `https://github.com/${GH_ORGANIZATION_NAME}/${GH_REPOSITORY_NAME}`
const GH_PAGES_URL: string = `https://${GH_ORGANIZATION_NAME.toLowerCase()}.github.io`;

// Various user-facing strings
const TITLE: string = "Collin College Robotics Club Documentation";
const TAGLINE: string = ""
const SITE_LOGO_ALT_TEXT = 'My Site Logo';

// URLs that may need to be changed at a later date
const DISCORD_SERVER_LINK = 'https://discord.gg/SKMkTTSBrB';

// File paths
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
};

const navbarItems = [];
for (const project of LIST_OF_PROJECT_DOCS) {
    navbarItems.push({
        type: 'docSidebar',
        sidebarId: project.sidebarID,
        position: 'left',
        label: project.label,
    })
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
                    // Enable 'docs-only' mode for Docusaurus since we're only doing docs, not blogs and stuff.
                    routeBasePath: '/',

                    sidebarPath: paths.ts.SIDEBAR,

                    // TESTME: Remove this to remove the "edit this page" links.
                    editUrl: (GH_URL + '/tree/main/packages/create-docusaurus/templates/shared/')
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
                alt: SITE_LOGO_ALT_TEXT,
                src: paths.images.SITE_LOGO,
            },
            items: [
                ...navbarItems,
                {
                    href: GH_URL,
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        // FIXME:
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
                    title: 'Community',
                    items: [
                        // FIXME: add CougarConnect link, and any other social media (do we have instagram?)
                        {
                            label: 'Discord',
                            href: DISCORD_SERVER_LINK,
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
            // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
