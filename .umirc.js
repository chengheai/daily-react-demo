// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        less: true,
        dva: {
          immer: true,
        },
        dynamicImport: false,
        default: 'zh-CN',
        baseNavigator: false,
        title: 'daily-react-demo',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  cssLoaderOptions: {
    localIdentName: '[local]',
  },
  alias: {
    '@utils': 'src/utils',
  },
  proxy: {
    '/api': {
      target: 'https://dog.ceo/',
      changeOrigin: true,
    },
    '/mock': {
      target: 'http://localhost:8000/',
      changeOrigin: true,
    },
  },
  history: 'hash',
  publicPath: './',
  // exportStatic: true,
  outputPath: '/docs',
  theme: './src/theme.js',
};
