import { getDefaultExportFromCjs } from '../_virtual/_commonjsHelpers.js';

console.log("test.cjs内的打印");

var testCjs = {
  text: "hello world!22",
};

var test = /*@__PURE__*/getDefaultExportFromCjs(testCjs);

export { test as default };
//# sourceMappingURL=index.js.map
