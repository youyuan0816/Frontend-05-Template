/*
 * @Description: 
 * @version: 
 * @Author: youyuan
 * @Date: 2020-11-22 16:18:29
 * @LastEdited: 
 * @LastEditTime: 2020-11-22 16:42:02
 */
function StringToNumber(str) {
    if (str.startswith('0X') || str.startswith('0X')) {
        return parseInt(str.substring(2), 16);
    } else if (str.startswith('0o') || str.startswith('0O')) {
        return parseInt(str.substring(2), 8);
    } else if (str.startswith('0b') || str.startswith('0B')) {
        return parseInt(str.substring(2), 2);
    } else {
        return parseInt(str, 10);
    }

}

function NumberToString(num, scale) {
    if (scale === 2) {
        return '0B' + num.toString(2);
    } else if (scale === 8) {
        return '0O' + num.toString(8);
    } else if (scale === 16) {
        return '0X' + num.toString(16);
    } else {
        return num.toString();
    }
}