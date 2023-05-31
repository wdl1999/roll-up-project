// 将我们编写的源码与依赖的第三方库进行合并
import resolve from '@rollup/plugin-node-resolve'
// 无需手动添加external，自动将外部类声明为external
import externals from 'rollup-plugin-node-externals'
// 支持commonjs规范
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/main.ts',
  plugins: [
    resolve(), // 告诉rollup如何查找外部模块
    externals(),
    commonjs() // 将commonjs规范的模块转换为es6
  ],
  output: {
    file: 'dist/bundle.cjs',
    format: 'cjs',
    external: ['lodash'] // 告诉rollup不要将lodash打包，而是作为外部依赖 以此减小包体积
  }
}
