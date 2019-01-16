/*
 * @Author: weiu.cao
 * @Date: 2019-01-16 11:05:55
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-01-16 11:29:31
*/

/**
 * 插入排序
 * @param {*} needSortArray 待排序数组
 */
function Insertion_Sort(needSortArray=[]) {
    const isArray = Object.prototype.toString.call(needSortArray) === '[object Array]',
        isIntArray = needSortArray.every( item => typeof item === 'number');
    if(!isArray || !isIntArray) { // 校验整数数组
        return needSortArray;
    }
    let minIndex = 0,
        arrayLen = needSortArray.length;
    for(let i=1; i<arrayLen; i++) {
        let currInsertNum = needSortArray.splice(i, 1)[0];
        for(let j=i-1; j>=0; j--) {
            if(currInsertNum > needSortArray[j]) {
                needSortArray.splice(j+1, 0, currInsertNum);
                break;
            } else if(j===0) {
                needSortArray.unshift(currInsertNum);
            }
        }
    }
    return needSortArray;
}