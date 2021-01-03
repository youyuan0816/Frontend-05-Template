# 语言按语法分类
    .非形式语言 （中文、英语等）
    .形式语言
        乔姆斯基谱系
            0-型 无限制文法或短语结构文法 包括所有的文法
            1-型 上下文相关文法 生成上下文相关语言
            2-型 上下文无关文法 生成上下文无关语言
            3-型 正则文法 生成正则语言
## 产生式(BNF)
    .用尖括号括起来的名称来表示语法结构名
    .语法结构分成基础结构和需要用其他语法结构定义的符合结构
        .基础结构称终结符
        .符合结构称非终结符
    .引号和中间的字符表示终结符
    .可以有括号
    .*表示重复多次
    .|表示或
    .+表示至少一次

    带括号的四则运算产生式
```
    <MultiplicativeExpression>::=<PrivateExpression>|
    <MulitiplicationExpression> '*' <Number>|
    <MulitiplicationExpression> '/' <Number>|

    <AddtiveExpression>::=<MultiplicativeExpression>|
        <AddtiveExpression> '+' <MulitiplicationExpression>|
        <AddtiveExpression> '-' <MulitiplicationExpression>|
      
    <PrivateExpressio>::=<Number> | '(' <AddtiveExpression> ')'
```