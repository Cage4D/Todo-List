const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        static: "./dist",
        watchFiles: ["./src/template.html"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
        ]
    },
})