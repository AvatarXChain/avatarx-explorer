export default {
  plugins: ['umi-plugin-dva', 'umi-plugin-locale', 'umi-plugin-es5-imcompatible-versions'],
  locale: {
    enable: true, // default false
    default: 'zh-CN', // default zh-CN
    baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
    antd: true, // use antd, default is true
  },
  singular: false, // when singular is not true, use locales as the resources folder
}
