/**
 * 
 * @param {*} el 元素
 * @param {*} attr 获取的样式名
 * @param {*} pseudoClass 
 */
export function getStyle(el,attr, pseudoClass = null){
  return window.getComputedStyle(el,pseudoClass)[attr]
}
export function getStyleNumer(el,attr,pseudoClass = null){
    let classNum = window.getComputedStyle(el,pseudoClass)[attr]
    return parseFloat(classNum)
}