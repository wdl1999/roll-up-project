// 将我们编写的源码与依赖的第三方库进行合并
import resolve from "@rollup/plugin-node-resolve";
// 无需手动添加external，自动将外部类声明为external
import externals from "rollup-plugin-node-externals";
// 支持commonjs规范--没体现出来作用
import commonjs from "@rollup/plugin-commonjs";
// 默认集成了对 scss、less、stylus 的支持
import postcss from "rollup-plugin-postcss";
// 支持ts
import typescript from "@rollup/plugin-typescript";
// 去除console.log
import strip from "@rollup/plugin-strip";
import path from "path";

export default {
  input: "src/main.js",
  plugins: [
    commonjs(), // 将commonjs模块转换为es6模块
    resolve(), // 告诉rollup如何查找外部模块
    externals(),
    postcss(),
    // 会先加载tsconfig.json文件的编译选项，以下的编译选项会覆盖tsconfig.json的配置
    typescript({
      outDir: "dist1",
      declaration: true, // 是否生成d.ts文件
      declarationDir: "dist1", //生成声明文件的输出路径
    }),
    strip({ include: "**/*.ts" }),
  ],
  output: {
    // file: "dist7/bundle.js", // 单个chunk时使用
    dir: path.dirname("dist1/bundle.js"), // 生成的包目录
    format: "esm", // 生成的包规范
    name: "bundleTest", // 生成的包名称
    preserveModules: true, // 保留模块结构
    preserveModulesRoot: "src", // 保留模块结构的根目录
    // external: ["lodash-es"], // 告诉rollup不要将lodash-es打包，而是作为外部依赖 以此减小包体积
    sourcemap: true,
  },
};
