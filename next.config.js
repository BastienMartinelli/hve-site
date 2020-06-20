const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });

    if (!isServer) {
      config.node = {
        fs: "empty",
        path: "empty",
      };
    }

    return config;
  },
  target: "serverless",
});
