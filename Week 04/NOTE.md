# 字符串分析算法
* 字典树（trie树 单词查找树）   
    * 大量高重复字符串的存储与分析  
    是一种hash树的变种，用于快速检索的多叉树结构。典型应用是用于统计和排序大量的字符串（但不仅限于字符串）。  
    优点：最大限度地减少无谓的字符串比价，查询效率比哈希表高。  
    核心思想：空间换时间，利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。  
    缺点：内存消耗大  
    三个基本特点：  
    1. 根节点不包含字符，除根节点外每一个节点都只包含一个字符。
    2. 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串。
    3. 每个节点的所有子节点包含的字符都不相同。
* KMP   
    * 在长字符串里找模式  
    核心：部分匹配表(Partial Match Table)的数组。  
    KMP算法的操作流程：  
    。 假设现在文本传S匹配到i位置，模式串P匹配到j位置
    。 如果j = -1， 或者当前字符匹配成功，令i++, j++ ， 继续匹配下一个字符
    。 如果j != -1 且当前字符匹配失败，令i不变，j = table[j]。失配时，模式串P相对于文本串S向右移动了j - table[j]位  
    leedcode 28题  
    ```
    var strStr = function(haystack, needle) {
        var table = new Array(needle.length).fill(0);
        {
            let i = 1, j= 0;
            while (i < needle.length) {
                if (needle[i] === needle[j]) {
                    ++j,++i;
                    table[i] = j;
                } else {
                    if (j > 0) {
                        j = table[j];
                    } else {
                        ++i;
                    }
                }
            }
        }
        {
            var i = 0, j = 0;
            var site = 0;
            while (i < haystack.length) {
                if (haystack[i] === needle[j]) {
                    site = i - j;
                    ++i, ++j;
                } else {
                    if (j > 0) {
                        j = table[j]
                    } else {
                        ++i;
                    }
                }
                if (j === needle.length) {
                    return site;
                }
            }
            if (haystack === '' && haystack === needle) {
                return site;
            }
            return -1;
        }
    } 


* Wildcard   
    * 带通配符的字符串模式  
    最后一个星号之前的星号，尽量少的匹配的，最后的星号尽可能多的匹配。
* 正则   
    * 字符串通用模式匹配
* 状态机   
    * 通用的字符串分析
* LL LR   
    * 字符串多层级结构分析