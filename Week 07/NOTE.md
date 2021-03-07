# Grammar
    ## Expressions
        .Member
            a.b
            a[b]
            foo`string`
            super.b
            super['b']
            new.target
            new Foo()
        .New
            new Foo
        Example
            new a()() 第一个括号是跟着前面的new运算的
            new new a() 括号会跟第二个new先结合
    ## References
        Object
        key
        delete
        assign
    ## Call
        foo()
        super()
        foo()['b']
        foo().b
        foo()`abc` 
    ## Expressions
        Left Handside & Right Handside
        Update
            a ++
            a --
            -- a
            ++ a
        Unary
            delete a.b
            void foo()
            typeof a
            + a
            - a
            ~ a
            ! a
            await a
        Expressions
            **
        Multiplicative
            */%
        Additive
            + -
        Shift
            << >> >>>
        Relationship
            < > <= >= instanceof in
        Equality
            ==
            !=
            ===
            !==
        Bitwise
            & ^ |
        Logical
            &&
            ||
        Conditional
            ?:
# 类型转换 type Convertion
    装箱操作和拆箱操作

# 运行时相关的概念
    Completion Record
        [[type]]:normal break continue return ot throe
        [[value]]: 基本类型
        [[target]]: label

# 简答语句和复杂语句
    简单语言
    ExpressionStatement
    EmptyStatement
    DebuggerStatement
    ThrowStatement
    CoutinueStatement
    BreakStatement
    RetrunStatement

    复合语句
    BlockStatement
    IfStatement
    SwitchStatement
    IterationStatement
    WithStatement
    LabelledStatement
    TryStatement
    
