const path = require('path');
module.exports = {
    egg: true,
    framework: 'react',
    devtool: 'source-map',
    entry: {
        include: ['app/web/entry',
            { layout: 'app/web/framework/layout/layout.js?loader=false' },
            { 'spa/ssr': 'app/web/entry/index.js?loader=true' }
        ],
        exclude: ['app/web/page/test']
    },
    resolve: {
        alias: {
            asset: path.resolve(__dirname, 'app/web/asset'),
            component: path.resolve(__dirname, 'app/web/component'),
            framework: path.resolve(__dirname, 'app/web/framework'),
            store: path.resolve(__dirname, 'app/web/store')
        },
        extensions:['*','js','jsx','.ts','.tsx','css','less']
    },
    cssModule: {
        include: 'app/web/page/css/module'
    },
    dll: ['react', 'react-dom'],
    loaders: {
        typescript: true,
        less:true
    },
    module: {
        rules: [
            { test: /\.ts(x?)$/, loader: "ts-loader" }
        ]
    },
    plugins: {},
    
    done() {
        console.log('---webpack compile finish---');
    }
};
