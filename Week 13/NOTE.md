# HTML 数据描述语言
## XML SGML
    SGML (Standard Generalized Markup Language, SGML) 现时常用的超文本格式的最高层次标准，是可以定义标记语言的元语言，甚至可以定义不采用<>的常规方式。但由于它的负责，难以普及。
    它是一个ISO标准，有非常强大的适应性。HTML和XML同样派生于它：
        XML可以被认为是它的一个子集，而HTML是它的一个应用。
        XML的产生就是为了简化SGML，以便用于更加通用的目的，比如语义web。已经应用于大量场合，例如：XHTML, RSS, XM-RPC和SOAP
    XML (Extendible Markup Language) 可扩展标记语言
        标记指计算机所能理解的信息符号，通过此种标记，计算机之间可以处理包含各种信息的文章等。
        XML是从SGML中简化修改出来的，它主要用到的有可扩展标记语言、可扩展样式语言(XSL)、XBRL和XPath等。
        用途：
            设计用来传送及携带数据信息，不用来表现或展示数据，HTML则用来表现数据，所以XML用途的焦点是它说明数据是什么，以及携带数据信息
            .富文档(Rich Documents) - 自定义文件描述并使其更丰富
                属于文件为主的XML技术应用
                标记是用来定义一份资料应该如何呈现
            .元数据(Metadata) - 描述其它文件或网络资讯
                属于资料为主的XML技术应用
                标记是用来说明一份资料的意义
            .配置文档(Configuration Files) - 描述软件设置的参数

## DTD与XML namespace
    字符
        nbsp (no break space)
        连接两个词的时候，会认为是一个词，排版时会出现分词的问题
        需要记住的：
        quot ""
        amp &
        lt <
        gt >

## HTML语法
    合法元素
        Element: <tagname>...</tagname>
        Text: text
        Comment: <!-- comments -->
        DocumentType: <!Doctype html>
        ProcessingInstruction: <?a 1?>
        CDATA:<![CDATA[]]>
    字符引用
        &#161;
        &amp;
        &lt;
        &quot;

## 浏览器API
    DOM
    BOM 浏览器对象模型
### DOM API
    四个部分
        traversal系列的API 废弃
        节点部分API(最重要的部分)
        事件部分(浏览器交互)
        Range API 更精确的操作DOM元素 应用于编辑器

    事件API
        target.addEventListener(type, listener [, options]);
        target.addEventListener(type, listener [, useCapture]);
        target.addEventListener(type, listener [, useCapture, wantsUntrusted ]); // Gecko/Mozilla only

        type
            A case-sensitive string representing the event type to listen for.
        listener
            The object that receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be an object implementing the EventListener interface, or a JavaScript function. See The event listener callback for details on the callback itself.
        options
            An options object specifies characteristics about th event listner. The available options are:
            
            capture
                A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
            once
                A Boolean indicating that the listner should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
            passive
                A Boolean that, if true, indicates that the function specified by listenner will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning.
            

            Event：冒泡和捕获
                捕获： 从外到内，一层一层计算，到底事件发生在哪个元素上
                冒泡：已经算出点到了哪个元素上，层层向外去触发，然后让这个元素去响应这个事件（默然是冒泡监听）
                


    
#### 资料来源
[SGML 维基百科 SGML](https://zh.wikipedia.org/wiki/SGML)    
[XML 维基百科 XML 简介 用途](https://zh.wikipedia.org/wiki/XML)