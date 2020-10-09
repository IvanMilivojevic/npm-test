const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/custom.js",
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "app.js",
        publicPath: "dist/js/"
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new CleanWebpackPlugin()
    ]
};
