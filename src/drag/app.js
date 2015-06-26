/*
 拖拽功能分解
 1、鼠标在浮层元素按下时，标记浮层元素可以拖动
 2、鼠标移动时，先检测浮层元素是否可以拖动
 3、鼠标松开，标记元素不可拖动
 */


// 获取元素对象
function g(id) {
  return document.getElementById(id)
}

// 自动居中 —— 登录浮层 ( )
/**
 * el = element
 * 函数式编程，一个函数就是一个功能，可以给 el 追加多种功能的组合
 *
 *
 * todo: 解答 js 实现比 css 实现更有优势吗？
 */
function autoCenter(el) {
  // 获取可视宽高
  var bodyW = document.documentElement.clientWidth
  var bodyH = document.documentElement.clientHeight

  // 获取元素的实际宽高
  var elW = el.offsetWidth;
  var elH = el.offsetHeight

  el.style.left = ( bodyW - elW ) / 2 + 'px'
  el.style.top = ( bodyH - elH ) / 2 + 'px'

}

// 自动全屏 —— 遮罩
function fillToBody(el) {
  // 最后要记得加单位
  // 用像素替代百分比的好处是不依赖父元素的宽高
  el.style.width = document.documentElement.clientWidth + 'px'
  el.style.height = document.documentElement.clientHeight + 'px'
}






