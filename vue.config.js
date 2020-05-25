const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('assets', resolve('./src/assets'))
            .set('common', resolve('./src/common'))
            .set('network', resolve('./src/network'))
            .set('views', resolve('./src/views'))
            //set第一个参数：设置的别名，第二个参数：设置的路径

        //发布时在main-prod
        config.when(process.env.NODE_ENV === 'production', config => {
                config.entry('app').clear().add('./src/main-prod.js')
            })
            //开发时
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')
        })　　　　

        // config.set('externals', {
        //     vue: 'Vue',
        //     'vue-router': 'VueRouter',
        //     axios: 'axios',
        //     vuex: 'vuex',
        //     'vue-lazyload': 'vueLazyload'
        // })
    },
}