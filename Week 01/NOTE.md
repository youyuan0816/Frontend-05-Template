学习笔记
# 1. document APId
document.createElement()
创建一个由标签名称tagName指定的HTML元素

DOMTokenList接口表示一组空格分隔的标记
DOMTokenList.add(token[, token1, ...tokenN])
添加一个或多个标记到DOMTokenList列表中
# 2. 复习js的异步编程，实现异步编程，可以使用setTimeout, Promise,
# async/await, 还可以使用生成器模拟。
# promise版本 
function sleep(t) {
    return new Promise((resolve, reject) => {
        setTimeOut(resolve, t)
    })
}
# async / await
async function go() {
    await sleet(t)
    // 下一步
}
# 生成器
function* go() {
    yield sleep(t)
    // 下一步
} 
# 