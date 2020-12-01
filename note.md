# cat-blog
## css
### 小技巧
+ 获取元素的样式
1. el.style.样式
这可以获取到内联样式，但是获取不到其他的
2. window.getComputedStyle(el, null)[样式名]
可以获取到所有的样式
