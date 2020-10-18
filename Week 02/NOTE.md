学习笔记
# 1. 数组API
    Array.prototype.fill(value[, start[, end]]) 用一个固定值填充一个数组中从索引起到种植索引内的全部元素（不包含终止索引）

# 2. 浏览器API
## localStorage
    允许你访问一个，对应当前源的sessionStorage对象，存储在sessionStorage里面的数据会在页面会话结束时被清除
        页面会话在浏览器打开期间一直保持，重新加载或恢复页面仍会保持原来页面会话
        在新标签或窗口打开一个页面时会复制顶级浏览器会话的上下文作为新会话的上下文
        打开多个相同URL的Tabs页面，会创建各自的sessionStorage
        关闭对应浏览器窗口(window)/tab，会清除对应的sessionStorage
        语法
        sessionStorage.setItem()
        sessionStorage.getItem()
        sessionStorage.removeItem()
        sessionStorage.clear()
## sessionStorage
    只读的localStorage属性允许访问一个Document源的对象Storage，存储的数据将保存在浏览器会话中
        存储在localStorage中的数据可以长期保留
        语法
        localStorage.setItem()
        localStorage.getItem()
        localStorage.removeItem()
        localStorage.clear()

# 寻路问题 广度优先搜索
    思路：记录从起点到当前节点的最短路径长度，每次到达阶段时，走过的路径比他现在记录的值短就更新它
    通过记录从哪个格子到当前格子才能得到这个最小值，依次回溯，找到最短路径。
    采用队列数据结构，将起点设置为0，放如队列中，开始检查它上 下 左 右（检测是否是障碍，是否被走过，没走过更新格子上的值和前驱格子入队列，走过，则看当前格子出发到这个格子是否是最短路径，是，更新格子上的值和前驱格子入队列）
# 深度优先算法
    
# 数据结构 队列 堆栈
    队列
        先进后出的一种特殊的线性表
        js如何实现队列？
            1）使用内置的Array对象
            入队操作
                push()
            出队操作
                pop()
            2）链式队列的实现
                function LikedQueue() {
                    let Node = function(ele) {
                        this.ele = ele;
                        this.next = null;
                    }
                    let length = 0,
                        font,
                        rear;
                    this.push = function (ele) {
                        let node = new Node(ele),
                            temp;
                        if (length === 0) {
                            front = node;
                        } else {
                            temp = rear;
                            temp.next = node;
                        }
                        rear = node;
                        length++;
                        return true;
                    }
                    this.pop = function() {
                        let temp = front;
                        front = front.next;
                        length--;
                        temp.next = null;
                        return temp;
                    }
                    this.size = function() {
                        return length;
                    }
                    this.getFront = function() {
                        return front;
                    }
                    this.getRear = function() {
                        return rear;
                    }
                    this.toString = function() {
                        let string = '',
                            temp = front;
                        while(temp) {
                            string += temp.ele + '';
                            temp = temp.next;
                        }
                        return string;
                    }
                    this.clear = function() {
                        front = null;
                        rear = null;
                        length = 0;
                        return true;
                    }
                }


# 启发式寻路
# sorted 数据结构 堆 二叉树都可以实现

# 二叉堆
    二叉树：一种树形结构，特点是每个节点最多只有两个节点分支，一棵二叉树通常由跟节点 分支节点 叶子节点组成
    二叉堆：由一个完全二叉树来表示其结构，满足性质
        1 二叉堆的父节点的键值总是大于或等于（小于后等于）任何一个子节点的键值
        2 当父节点的键值大于后等于（小于或等于）它的每一个子节点的键值时，称为最大（最小）堆
