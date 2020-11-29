/*
 * @Description: 
 * @version: 
 * @Author: youyuan
 * @Date: 2020-11-28 21:03:04
 * @LastEdited: 
 * @LastEditTime: 2020-11-28 21:09:57
 */
function findTargetChart(str, target) {
    let site = 0;
    let targetArr = target.split('');
    for (let i of str) {
        if (i === targetArr[site] && site !== target.length - 1) {
            site++;
        } else if (i === targetArr[site] && site === target.length - 1) {
            return true;
        } else {
            site = 0;
        }
    }
}
findTargetChart('sdfabcdef', 'abcdef');