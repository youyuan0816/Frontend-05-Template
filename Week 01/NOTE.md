学习笔记
# 1. document API
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