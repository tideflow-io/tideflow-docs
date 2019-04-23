/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Tideflow Docs', // Title for your website.
  tagline: 'Tideflow Docs',
  url: 'https://docs.tideflow.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'tideflow-docs',
  cname: 'docs.tideflow.io',
  organizationName: 'tideflow-io',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { href: "/", label: "Home" },
    { href: "/docs/introduction", label: "Docs" },
    { blog: true, label: "Blog" },
    { href: "mailto:tideflowio@gmail.com", label: "Get In Touch" },
    { href: "https://github.com/tideflow-io", label: "Github" },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/tf_logo.png',
  footerIcon: 'img/tf_logo.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#444444',
    secondaryColor: '#A7EDFF',
  },

  /* Custom fonts for website */
  fonts: {
    mainFont: [
      "Lato",
      "Times New Roman",
      "Serif"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Jose Constela`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: false,

  // Show documentation's last update time.
  enableUpdateTime: false,

  editUrl: 'https://github.com/tideflow-io/tideflow-docs/edit/master/docs/',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/tideflow-io/tideflow',
};

module.exports = siteConfig;
