
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            // {
            //     use: ['style-loader', 'css-loader'],
            //     test: /\.css$/
            // },
            {
                // use and loader are synonyms.  loader is legacy
                // loaders preprocess prior to bundling. Plugins work outside the webpack pipeline 
                    // therefore they can make a file that is not in the bundle.
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 40000}
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        // gets all the code from the loaders in the ExtraTextPlugin.extract method and puts into a separate file
            // in this case style.css
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;