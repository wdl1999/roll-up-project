// 判断被el包含的元素总宽度是否超过el元素宽度
// 传入el dom元素
export function textRange(el) {
  // 包含框宽度
  const textContent = el;
  const targetW = textContent.getBoundingClientRect().width;
  // 内容宽度
  const range = document.createRange();
  range.setStart(textContent, 0);
  range.setEnd(textContent, textContent.childNodes.length);
  const rangeWidth = range.getBoundingClientRect().width;

  return rangeWidth > targetW;
}
