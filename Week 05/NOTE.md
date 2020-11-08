# 一、Proxy对象
    用于定义基本操作的自定义行为（属性查找、赋值、枚举、函数调用等）
    语法：new Proxy(target, handler)
        target 被Proxy代理虚拟化的对象，常被作为代理的存储后端。
        handler 包含捕捉器的占位符对象，可译为处理器对象。
        traps 提供属性访问的方法。
    方法
        Proxy.revocable() 创建一个可撤销的Proxy对象。
    Proxy实例的方法
        
