// https://eslint.org/docs/user-guide/configuring

module.exports = {
    //用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    //用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    parserOptions: {
        parser: 'babel-eslint'
    },
    //指定环境的全局变量，下面的配置指定为浏览器环境
    env: {
        browser: true,
    },
    //用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // 用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here\
    // 规则
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": ["error", 4]
    },
}
