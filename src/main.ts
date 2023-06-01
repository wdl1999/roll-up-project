import testScss from "./testScss/index.ts";
import { sum } from "lodash-es";
const test = require("./testCjs/index.cjs");

export default function () {
  console.log(testScss);
  console.log(sum([1, 2, 3]));
  console.log(test.text);
}
