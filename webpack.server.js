const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";
const USE_DOTENV = process.env.USE_DOTENV || false;

const conf = {
  entry: "./src/server/index.tsx",

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve("server-build"),
    publicPath: "/",
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(svg|jpg|jpeg|png|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash:8].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{from: "build/index.html", to: "index.html"}],
    }),
  ],
};

if (USE_DOTENV || NODE_ENV !== "production") {
  conf.plugins.push(
    new Dotenv({
      systemvars: true,
    }),
  );
}

module.exports = conf;
