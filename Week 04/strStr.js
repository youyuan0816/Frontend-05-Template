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
        if (haystack === '' && needle === '') {
            return site;
        }
        return -1;
    }
}

console.log(strStr('hello', "ll"))