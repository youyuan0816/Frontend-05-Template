/*
 * @Description: 
 * @version: 
 * @Author: youyuan
 * @Date: 2020-11-28 17:20:50
 * @LastEdited: 
 * @LastEditTime: 2020-11-28 21:03:00
 */
function findTargetChart(str, target) {
    for (let i of str) {
        if (i === target) {
            return true;
        }
    }
}
findTargetChart('sdfass', 'a');