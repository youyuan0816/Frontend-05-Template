/*
 * @Description: 
 * @version: 
 * @Author: youyuan
 * @Date: 2020-10-28 18:49:47
 * @LastEdited: 
 * @LastEditTime: 2020-11-29 16:46:00
 */
function kmp(source, pattern) {
    // 计算table
    let table = new Array(pattern.length).fill(0);
    {
        let i = 1, j = 0;
        while (i < pattern.length) {
            if (pattern[i] === pattern[j]) {
                ++j, ++i;
                table[i] = j;
            } else {
                if (j > 0)
                    j = table[j];
                else {
                    ++i;
                }
            }
        }
    }
    {
        let i = 0, j = 0;
        while (i < source.length) {
            if (pattern[j] === source[i]) {
                ++i, ++j;
            } else {
                if (j > 0)
                    j = table[j];
                else 
                    ++i;
            }
            if (j === pattern.length)
                return true;
        }
        return false;
    }
}
console.log(kmp('hello', 'll'));