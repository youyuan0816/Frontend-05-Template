/*
 * @Description: 
 * @version: 
 * @Author: youyuan
 * @Date: 2020-11-29 16:23:30
 * @LastEdited: 
 * @LastEditTime: 2020-11-29 16:25:39
 */
function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === 'a') {
        return foundB;
    } else {
        return start;
    }
}
function foundB(c) {
    if (c === 'b') {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if (c === 'a') {
        return foundB2;
    } else {
        return start(c);
    }
}
function foundB2(c) {
    if (c === 'b') {
        return foundA3;
    } else {
        return start(c);
    }
}
function foundA3(c) {
    if (c === 'a') {
        return foundB3;
    } else {
        return start(c);
    }
}
function foundB3(c) {
    if (c === 'b') {
        return foundX;
    } else {
        return start(c);
    }
}
function foundX(c) {
    if (c === 'x') {
        return end;
    } else {
        return start(c);
    }
}

function end(c) {
    return end;
}