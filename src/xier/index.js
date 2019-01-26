/*
 * @Author: weiu.cao
 * @Date: 2019-01-26 12:23:53
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-01-26 12:50:59
*/

/**
 * 希尔排序
 * @param {*} needSortArray 
 */
function Shell_Sort(needSortArray=[]){
    const isArray = Object.prototype.toString.call(needSortArray) === '[object Array]',
        isIntArray = needSortArray.every( item => typeof item === 'number');
    if(!isArray || !isIntArray) { // 校验整数数组
        return needSortArray;
    }
    let shell_gap_step = 2,
        arrayLen = needSortArray.length,
        initGap = Math.floor(arrayLen / shell_gap_step);
    //增量gap，并逐步缩小增量
    for(let gap=initGap;gap>0;gap=Math.floor(gap/ shell_gap_step)){
        //从第gap个元素，逐个对其所在组进行直接插入排序操作
        for(let i=gap;i<arrayLen;i++){
            let j = i;
            while(j-gap>=0 && needSortArray[j]<needSortArray[j-gap]){
                //插入排序采用交换法
                let temp = needSortArray[j];
                needSortArray[j] = needSortArray[j-gap];
                needSortArray[j-gap] = temp;
                j-=gap;
            }
        }
    }
    return needSortArray;
}