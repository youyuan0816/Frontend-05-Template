## 盒模型
    HTML代码中可以书写开始标签，结束标签，和自封闭标签
    一对起止标签表示一个元素
    DOM树中存储的是元素和其他类型的节点(Node)
    CSS选择器选中的是元素
    排版和渲染的基本单位是盒
    css选择器选中的元素，在排版时可能产生多个盒
### 盒模型说明
    every box is composed of four parts(or areas), defined by their respective edges: the content edge, padding edge, border edge and margin edge.
    the content area, bounded by the content edge, contains the 'real' content of the element, such as text, an image, or a video player. Its dimensions are the content width (or content-box width) and the content height (or content-box height). It often has a background color or background image.

    if the box-sizing property is set to content-box(default) and is the element is a block element, the content area's size can be explicitly defined with the width, min-width, max-width, height, min-height, max-height properties.

    the padding area, bounded by the padding edge, extends the content area to include the element's padding. Its dimensions are the padding-box width and the padding-box height.
    (padding-top, padding-right, padding-bottom, padding-left)

    the border area, bounded by the border edge, extends the padding area to include the element's borders. Its dimensions are the border-box width and the border-box height.
    
    if the box sizing property is set to border-box, the border area's size can be explicitly defined with the width, min-width, max-width, height, min-height, max-height properties.When there is a background (background-color or background-image) set on a box, it extends to the outer edge of the border


    the margin area, bounded by the margin edge, extends the boder area to include an empty area used to separate the element from its neighbors. Its dimentsions are the margin-box width and the margin-box height.
    (maring-top, maring-right, margin-bottom, margin-left)

![avatar](https://mdn.mozillademos.org/files/8685/boxmodel-(3).png)
    
# CSS排版
    3代排版，1代基于正常流的排版 2代基于flex的排版 3代基于grid的排版
    3.5代 CSS Houdini完全自由的js可以干预的排版

### 古典正常流
    机制复杂，能力最差
    正常流排版
        收集盒和文字进行（hang）
        计算盒在行中的排布
        计算行的排布
#### 正常流的行级排布
    基线对齐规则（每个国家基线不同）
    行模型
        line-top 字体大小不变，基本不变（由font-size最大的决定）
        text-top 文字顶缘
        base-line 基线（英文为主）
        text-bottom 文字底缘
        line-bottom 字体大小不变，基本不变
        盒的先后顺序和盒的尺寸会影响line-top和line-bottom
    正常流的块级排布
        float和clear
            float基本规则：
                将元素排到页面的某个特定位置（正常流），再将 元素按照指定位置移动，调整其他元素
            float受到其他float元素的影响
            clear属性
                找一个干净的空间执行浮动操作
        margin折叠
            正常流 BFC 中两个元素的margin发生折叠，呈现一个margin的距离，两个margin没有相加

        BFC合并
            Block
                .Block Container: 里面有BFC的
                    .能容纳正常流的盒，里面就有BFC
                     block
                     inline-block
                     tabel-cell
                     flex item
                     grid cell
                     tabel-caption
                .Block-level Box: 外面有BFC的
                    inline-block
                    inline-flex
                    inline-table
                    inline-grid
                .Block Box = Block Container + Block-level Box:
                    里外都有BFC的
                    floats
                    absolutely positioned elements
                    block containers(such as inline-blocks, table-cells, and table-captions) that are not block boxes.
                        .flex items
                        .grid cell
                        ...
                    block boxed width 'overflow' other than 'visible'

            BFC合并
                block box && overflow: visible
                    .BFC合并与float

                    .BFC合并与边距折叠

### flex排版
    收集盒进行
    计算盒在主轴方向的排布
    计算盒在交叉轴方向的排布
    分行：
        根据主轴尺寸，把元素分进行
        若设置no-wrap，则强行分配进第一行
    计算主轴方向：
        找出所有flex元素
        把主轴方向的剩余尺寸按比例分配给这些元素
        若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

    计算交叉轴方向：
        根据每一行中最大元素尺寸计算行高
        根据行高flex-align和item-align，确定元素具体位置