// 将我们编写的源码与依赖的第三方库进行合并
import resolve from "@rollup/plugin-node-resolve";
// 无需手动添加external，自动将外部类声明为external
import externals from "rollup-plugin-node-externals";
// 支持commonjs规范
import commonjs from "@rollup/plugin-commonjs";
// 默认集成了对 scss、less、stylus 的支持
import postcss from "rollup-plugin-postcss";
// 支持ts
import typescript from "@rollup/plugin-typescript";
// 去除console.log
import strip from "@rollup/plugin-strip";
import path from "path";

export default {
  input: "src/main.ts",
  plugins: [
    resolve(), // 告诉rollup如何查找外部模块
    externals(),
    commonjs({ include: "**/**/*.cjs" }), // 将commonjs规范的模块转换为es6
    postcss(),
    // typescript(), // ts编译 不需要导出声明文件时使用
    typescript({ outDir: "dist5", declaration: true, declarationDir: "dist5" }), // ts导出声明文件
    strip({ include: "**/*.ts" }),
  ],

  output: {
    // file: "dist2/bundle.cjs", // 单个chunk时使用
    dir: path.dirname("dist5/bundle.cjs"), // 生成的包目录
    format: "cjs", // 生成的包规范
    name: "bundleTest", // 生成的包名称
    preserveModules: true, // 保留模块结构
    preserveModulesRoot: "src", // 保留模块结构的根目录
    external: ["lodash-es"], // 告诉rollup不要将lodash-es打包，而是作为外部依赖 以此减小包体积
  },
};
