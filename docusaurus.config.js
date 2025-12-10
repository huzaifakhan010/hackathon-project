const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Physical AI & Humanoid Robotics – Hands-On Guide to Building Voice-Controlled Humanoids (2025 Capstone Edition)',
  tagline: 'Build Voice-Controlled Humanoids with Open Source AI',
  url: 'https://api.githubcopilot.com', // Replace <username> with actual GitHub username for deployment
  baseUrl: '/mcp/project-robotic/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'panaversity', // GitHub org/user name.
  projectName: 'project-robotic', // Repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/panaversity/project-robotic/edit/main/',
          showLastUpdateTime: true,
          editCurrentVersion: true,
        },
        blog: false, // Disable blog for this book project
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Humanoid Robot Logo',
          src: 'img/logo.svg', // Will need to add a proper logo
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'doc',
            docId: 'module-1-robotic-nervous-system/spec',
            label: 'Module 1',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'module-2-digital-twin/spec',
            label: 'Module 2',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'module-3-ai-robot-brain-nvidia-isaac/spec',
            label: 'Module 3',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'module-4-vision-language-action/spec',
            label: 'Module 4',
            position: 'left',
          },
          {
            href: 'https://github.com/panaversity/project-robotic',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              {
                label: 'Module 1: Robotic Nervous System',
                to: '/docs/module-1-robotic-nervous-system/spec',
              },
              {
                label: 'Module 2: Digital Twin',
                to: '/docs/module-2-digital-twin/spec',
              },
              {
                label: 'Module 3: AI Robot Brain - NVIDIA Isaac',
                to: '/docs/module-3-ai-robot-brain-nvidia-isaac/spec',
              },
              {
                label: 'Module 4: Vision-Language-Action',
                to: '/docs/module-4-vision-language-action/spec',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'ROS 2 Documentation',
                href: 'https://docs.ros.org/en/humble/',
              },
              {
                label: 'NVIDIA Isaac Documentation',
                href: 'https://nvidia-isaac-ros.github.io/',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/panaversity/project-robotic',
              },
              {
                label: 'Spec-Kit Plus',
                href: 'https://github.com/panaversity/spec-kit-plus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Book Project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
