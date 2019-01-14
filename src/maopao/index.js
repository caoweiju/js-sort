/*
 * @Author: weiu.cao
 * @Date: 2019-01-14 11:51:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-01-14 14:56:19
*/

/**
 * 冒泡排序方法 先把大的数据冒泡上去[升序]
 * @param {*} needSortArray 是一个待排序的init 数组【未校验】
 */
function Bubble_Sort(needSortArray=[]) {
    const isArray = Object.prototype.toString.call(needSortArray) === '[object Array]',
        isIntArray = needSortArray.every( item => typeof item === 'number');
    if(!isArray || !isIntArray) { // 校验整数数组
        return needSortArray;
    }
    const arrayLen = needSortArray.length;
    let okFlag = false;
    for(let i=0; i<arrayLen-1 && !okFlag; i++) {
        okFlag = true; // 假设已经OK
        for(let j=0; j<arrayLen-i-1; j++) {
            let beforeNum = needSortArray[j],
                afterNum = needSortArray[j+1];
            if(beforeNum > afterNum) {
                needSortArray[j] = afterNum;
                needSortArray[j+1] = beforeNum;
                okFlag = false; // 如果有变化说明排序还没完成
            }
        }
    }
    return needSortArray;
}