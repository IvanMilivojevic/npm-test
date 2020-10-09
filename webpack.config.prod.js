const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/custom.js",
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "app.js",
        publicPath: "dist/js/"
    },
    devtool: "cheap-source-map",
    plugins: [
        new CleanWebpackPlugin()
    ]
};
