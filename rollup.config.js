import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/xCharts.js',
      format: 'cjs', // nodejs,打包成 commonjs
    },
    {
      file: 'esm/xCharts.js',
      format: 'es', // 浏览器,打包成 ES module
    },
    {
      file: 'dist/xCharts.min.js',
      name: 'xCharts',
      format: 'umd', // Nodejs和浏览器，打包成混合模式
    },
  ],
  plugins: [
    resolve(),
    babel(),
  ],
};
