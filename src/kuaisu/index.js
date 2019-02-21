/*
 * @Author: weiu.cao
 * @Date: 2019-02-07 23:15:45
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-02-21 22:58:51
*/

/**
 * 快速排序[单路]
 * @param {*} needSortArray 待排序数组
 */
function Quick_Sort_Single(needSortArray=[], left, right) {
    const isArray = Object.prototype.toString.call(needSortArray) === '[object Array]',
        isIntArray = needSortArray.every( item => typeof item === 'number');
    if(!isArray || !isIntArray) { // 校验整数数组
        return needSortArray;
    }

    let arrayLen = needSortArray.length,
        partitionIndex;
    typeof left === 'number' || (left = 0);
    typeof right === 'number' || (right = arrayLen - 1);
    
    if (left < right) {
        let pivot = left,                      // 设定基准值（pivot）
            index = pivot + 1,
            temp;
        for (let i = index; i <= right; i++) {
            if (needSortArray[i] < needSortArray[pivot]) {
                temp = needSortArray[index];
                needSortArray[index] = needSortArray[i];
                needSortArray[i] = temp;
                index++;
            }       
        }
        partitionIndex = index-1;
        temp = needSortArray[partitionIndex];
        needSortArray[partitionIndex] = needSortArray[pivot];
        needSortArray[pivot] = temp;
        Quick_Sort_Single(needSortArray, left, partitionIndex-1);
        Quick_Sort_Single(needSortArray, partitionIndex+1, right);
    }
    return needSortArray;
}



/**
 * 快速排序[双路]
 * @param {*} needSortArray 待排序数组
 */
function Quick_Sort_Double(needSortArray=[], left, right) {
    const isArray = Object.prototype.toString.call(needSortArray) === '[object Array]',
        isIntArray = needSortArray.every( item => typeof item === 'number');
    if(!isArray || !isIntArray) { // 校验整数数组
        return needSortArray;
    }

    let arrayLen = needSortArray.length,
        partitionIndex;
    typeof left === 'number' || (left = 0);
    typeof right === 'number' || (right = arrayLen - 1);
    
    if (left < right ) {
        let pivot = left,          // 设定基准值（pivot）为左侧第一个
            currPivotValue= needSortArray[pivot],
            leftPoint = pivot + 1, // 左路探针
            rightPoint = right, // 右路探针 左侧第一个是基准，先移动右路探针
            temp,
            rightPointFirstCount = 0, // 右侧探针第一次扫描
            rightPointHasEverFindValue = false;
        while(leftPoint < rightPoint) {
            // 右侧探针移动 找到小于基准值位置为止
            while(currPivotValue <= needSortArray[rightPoint] && leftPoint < rightPoint) {
                rightPoint--;
            }
            // 检测右侧探针是否第一趟直接和左侧探针汇合都没有找到合适的元素
            rightPointFirstCount++;
            rightPointFirstCount === 1 && (leftPoint < rightPoint) && (rightPointHasEverFindValue=true);
            // 左侧探针移动 找到大于基准值位置为止
            while(currPivotValue >= needSortArray[leftPoint] && leftPoint < rightPoint) {
                leftPoint++;
            }
            // 交换左右指针的值 【如果左右探针汇合了 其实可以不交换】
            temp = needSortArray[leftPoint];
            needSortArray[leftPoint] = needSortArray[rightPoint];
            needSortArray[rightPoint] = temp;
        }
        // [交换值的时候都要考虑需不需要交换，如果是右侧探针第一趟直接和左侧探针汇合都没有找到合适的元素就不能更换]
        // 如果是右侧探针第一趟直接和左侧探针汇合都没有找到合适的元素就不能更换则不换位置  否则基准和左侧指针交换值
        // 如果还没有进行比较，生成探针的时候左右探针就已经重合了需要手动对比基准值和左探针值
        if(rightPointHasEverFindValue || needSortArray[leftPoint] < currPivotValue) {
            needSortArray[pivot] = needSortArray[leftPoint];
            needSortArray[leftPoint] = currPivotValue;
        } else {
            leftPoint = left; // 如果没有交换 说明当前基准已经是正确的基准 把做指针指向基准
        }
        Quick_Sort_Double(needSortArray, left, leftPoint-1);
        Quick_Sort_Double(needSortArray, leftPoint+1, right);
    }
    return needSortArray;
}