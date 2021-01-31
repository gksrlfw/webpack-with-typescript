// // https://www.youtube.com/watch?v=rI37HS-Vj8A&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=3

const path = require('path');

module.exports = {
    mode: 'development', // 'production'
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
};