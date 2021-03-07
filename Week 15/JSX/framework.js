/*
 * @Description: 
 * @version: 
 * @Author: youyuan
 * @Date: 2021-01-17 22:49:52
 * @LastEdited: 
 * @LastEditTime: 2021-01-24 17:17:07
 */
export function createElement(type, attributes, ...children) {
    let element;
    if (typeof type === 'string')
        element = new ElementWrapper(type);
    else
        element = new type;
    for (let name in attributes) {
        element.setAttribute(name, attributes[name])
    }
    for (let child of children) {
        if (typeof child === 'string') {
            child = new TextWrapper(child);
        }
        element.appendChild(child)
    }
    return element
}

export class Component{
    constructor(type) {
        // this.root = this.render();
        console.log(this.root)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(child) {
        child.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class ElementWrapper extends Component{
    constructor(type) {
        this.root = document.createElement(type)
    }
}
class TextWrapper extends Component{
    constructor(content) {
        this.root = document.createTextNode(content)
    }
}