# RegExp.prototype.exec(str)
        在指定字符串中执行一个搜索匹配，返回一个结果数组(成功)或null(失败，并将lastIndex重置为0)
    在设置global或sticky标志位的情况下，js RegExp对象是有状态的。他们会将上次成功匹配的位置记录在lastIndex
    属性中。
        exec()可用来对单个字符创中的多次匹配结果进行逐条的遍历（包括捕获到的匹配）。
    返回的值参数

| 属性/索引 | 描述 |
-:|:-
| [0] | 匹配的全部字符串 |
| [1],...[n] | 括号中的分组捕获 |
| index | 匹配到的字符位于原始字符串的基于0的索引值 |
| input | 原始字符串 |

[MDNRegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)