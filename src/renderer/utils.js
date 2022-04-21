/**
 * 创建SVG元素
 * @param {String} type 元素类型
 * @return
 */
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

/**
 * 将 child 节点挂载到 parent 节点上面
 * @param {HTMLElement} parent 父节点
 * @param {HTMLElement} child 子节点
 */
export function mount(parent, child) {
  if (!parent) return;
  parent.appendChild(child);
}

/**
 * 设置元素属性
 * @param {HTMLElement} element 元素
 * @param {Object} attributes 属性
 */
export function setAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
}
