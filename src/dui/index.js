/*
 * @Author: weiu.cao
 * @Date: 2019-02-21 17:38:11
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-02-24 16:51:48
*/

/**
 * 堆排序
 * @param {*} needSortArray 
 */
function Heap_Sort(needSortArray=[]) {
    const isArray = Object.prototype.toString.call(needSortArray) === '[object Array]',
        isIntArray = needSortArray.every( item => typeof item === 'number');
    if(!isArray || !isIntArray) { // 校验整数数组
        return needSortArray;
    }

    
    return needSortArray;
}