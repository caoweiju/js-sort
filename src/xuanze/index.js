/*
 * @Author: weiu.cao
 * @Date: 2019-01-15 11:37:18
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-01-15 12:00:04
*/

/**
 * 选择排序
 * @param {*} needSortArray 待排序整形数组
 */
function Select_Sort(needSortArray=[]) {
    const isArray = Object.prototype.toString.call(needSortArray) === '[object Array]',
        isIntArray = needSortArray.every( item => typeof item === 'number');
    if(!isArray || !isIntArray) { // 校验整数数组
        return needSortArray;
    }
    let minIndex = 0,
        arrayLen = needSortArray.length;
    for(let i=0; i<arrayLen-1; i++) {
        minIndex = i;
        for(let n=i+1; n<arrayLen; n++) {
            needSortArray[minIndex] > needSortArray[n] && (minIndex=n);
        }
        if(i !== minIndex) {
            let temp = needSortArray[i];
            needSortArray[i] = needSortArray[minIndex];
            needSortArray[minIndex] = temp;
        }
    }
    return needSortArray;
}