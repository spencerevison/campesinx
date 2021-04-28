module.exports = {
  siteMetadata: {
    title: "Campesinx Womb Care",
    siteUrl: "https://www.campesinxwombcare.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
    },
    {
      resolve: "gatsby-plugin-sharp",
    },
    {
      resolve: "gatsby-plugin-image",
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: "gatsby-transformer-remark",
    },
    {
      resolve: "gatsby-transformer-sharp",
    },
    {
      resolve: "gatsby-plugin-postcss",
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "43f6a861f086ee1580cfb1f1f5d72b",
      },
    },
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          components: "src/components",
          pages: "src/pages",
          images: "static/images",
          svg: "static/images/svg",
          "site.config.json": "src/site.config.json",
          styles: "src/styles",
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Manrope:200,400,600,800"],
        display: "swap",
      },
    },
  ],
};
