CracoLessPlugin = require('craco-less')
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars 测试primary主题：'@primary-color': '#000'
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ]
}