import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import LIST_OF_PROJECT_DOCS from './constants';

// GitHub constants
const GH_ORGANIZATION_NAME: string = "CollinRoboticsClub";
const GH_REPOSITORY_NAME: string = "documentation";

// GitHub constants derived from provided constants (i.e: you probably don't need to touch these)
const GH_DOCS_REPO_URL: string = `https://github.com/${GH_ORGANIZATION_NAME}/${GH_REPOSITORY_NAME}`
const GH_ORG_URL: string = `https://github.com/${GH_ORGANIZATION_NAME}`
const GH_PAGES_URL: string = `https://${GH_ORGANIZATION_NAME.toLowerCase()}.github.io`;

// Various user-facing strings
const TITLE: string = "CRC Documentation";
const TAGLINE: string = ""
const SITE_LOGO_ALT_TEXT = 'CRC Logo';

// URLs that may need to be changed at a later date
const DISCORD_SERVER_LINK: string = 'https://discord.gg/SKMkTTSBrB';
const COUGAR_CONNECT_LINK: string = "https://collin.campuslabs.com/engage/organization/collin-robotics-club";

// File paths
const paths = {
    ts: {
        SIDEBAR: './sidebars.ts',
    },
    images: {
        FAVICON: 'img/favicon.ico',
        SOCIAL_CARD: 'img/logo.png',
        SITE_LOGO: 'img/logo.svg',
    },
    CUSTOM_CSS: './src/css/custom.css',
} as const;

const navbarItems = [];
for (const project of LIST_OF_PROJECT_DOCS) {
    navbarItems.push({
        type: 'docSidebar',
        sidebarId: project.sidebarID,
        position: 'left',
        label: project.label,
    })
}

const START_PATH: string = '/start-here/Intro' as const;
const config: Config = {
    customFields: {
        startPath: START_PATH
    },

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

                    // Remove this to remove the "edit this page" links.
                    editUrl: (GH_DOCS_REPO_URL + '/tree/main/packages/create-docusaurus/templates/shared/')
                },
                theme: {
                    customCss: paths.CUSTOM_CSS,
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: paths.images.SOCIAL_CARD,
        colorMode: {
            respectPrefersColorScheme: true
        },
        navbar: {
            title: TITLE,
            logo: {
                alt: SITE_LOGO_ALT_TEXT,
                src: paths.images.SITE_LOGO,
            },
            items: [
                ...navbarItems,
                {
                    href: GH_ORG_URL,
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
                            label: 'Start Here',
                            to: START_PATH,
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'CougarConnect',
                            href: COUGAR_CONNECT_LINK,
                        },
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
                            href: GH_ORG_URL,
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

	// Enable experimental performance features.
	// Technically "experimental", but Docusaurus uses it in prod and says it's robust.
	future: {
		experimental_faster: {
			swcJsLoader: true,
			swcJsMinimizer: true,
			swcHtmlMinimizer: true,
			lightningCssMinimizer: true,

			// Was breaking hot-reload for me when running via `pnpm start`
			rspackBundler: false,

			mdxCrossCompilerCache: true,
		},
	},

};

export default config;
