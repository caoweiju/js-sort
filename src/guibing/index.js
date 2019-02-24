/*
 * @Author: weiu.cao
 * @Date: 2019-02-21 17:38:18
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-02-24 16:49:47
*/

/**
 * 归并排序
 * @param {*} needSortArray 待排序数组
 */
function Merge_Sort(needSortArray=[]) {
    const isArray = Object.prototype.toString.call(needSortArray) === '[object Array]',
        isIntArray = needSortArray.every( item => typeof item === 'number');
    if(!isArray || !isIntArray) { // 校验整数数组
        return needSortArray;
    }

    const merge = (left, right) => {
        let result = [];
 
        while (left.length>0 && right.length>0) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        // 把多余的直接追加
        result.push(...left);
        result.push(...right);
    
        return result;
    }
    
    let len = needSortArray.length;
    if (len < 2) {
        return needSortArray;
    }
    let middle = Math.floor(len / 2),
        left = needSortArray.slice(0, middle),
        right = needSortArray.slice(middle);
    return merge(Merge_Sort(left), Merge_Sort(right));
    // return needSortArray;
}