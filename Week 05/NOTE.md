# 一、Proxy对象
    用于定义基本操作的自定义行为（属性查找、赋值、枚举、函数调用等）
    语法：new Proxy(target, handler)
        target 被Proxy代理虚拟化的对象，常被作为代理的存储后端。
        handler 包含捕捉器的占位符对象，可译为处理器对象。
        traps 提供属性访问的方法。
    方法
        Proxy.revocable() 创建一个可撤销的Proxy对象。
    Proxy实例的方法
    handler常见使用方法:
        get(target, prototype, receiver) 用于拦截某个属性的读取操纵
            target 目标对象
            property 被获取的属性名
            receiver Proxy 或者 继承Proxy的对象
            返回值
                可以返回任何值
            拦截目标对象的以下操作
                访问属性: proxy[foo]和proxy.bar
                访问原型链上的属性: Object.create(proxy)[foo]
                Reflect.get()
            抛出TypeError
                访问的目标属性是不可写以及不可配置的
                访问的目标属性没有配置访问方法（get方法是undefined，则返回值必须回为undefined）
```
        let p = new Proxy({}, {
            get(target, prop, receiver) {
                return target[prop]
            }
        })
```
                        
<!-- ![avatar](https://github.com/youyuan0816/Frontend-05-Template/blob/master/Week%2005/image/Proxy.png?raw=true) -->