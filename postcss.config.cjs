module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "custom-properties": true,
      },
    }),
  ],
};
