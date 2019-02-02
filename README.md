# js-sort
>所有的代码都是在`chrome`测试，没有对`es6+`进行编译；所有的测试结构都在`test.html`；直接在`chrome`查看`test.html`，查看`console`里面的结果对比。

JavaScript排序相关内容
````
├── LICENSE
├── README.md
├── imgs
│   ├── maopao.gif
│   ├── paixufenlei.png
│   └── paixufuzadu.png
├── src
│   └── maopao // 排序方法
│       ├── index.js
│       └── readme.md
└── test.html  // 测试文件
````

![排序方法](./imgs/paixufenlei.png)

![排序算法复杂度](./imgs/paixufuzadu.png)

## 排序算法
1. 非线性时间比较类排序：通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此称为非线性时间比较类排序。

2. 线性时间非比较类排序：不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此称为线性时间非比较类排序。 


相关概念：
* 稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面。

* 不稳定：如果a原本在b的前面，而a=b，排序之后 a 可能会出现在 b 的后面。

* 时间复杂度：对排序数据的总的操作次数。反映当n变化时，操作次数呈现什么规律。

* 空间复杂度：是指算法在计算机内执行时所需存储空间的度量，它也是数据规模n的函数。 
### 冒泡排序
冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。 

`src/maopao/index.js`中是冒泡排序的实现，添加了标志位，在完成排序的时候可以提前结束冒泡。

### 选择排序
冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

`src/xuanze/index.js`中是选择排序的实现。
### 插入排序
插入排序（`Insertion-Sort`）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

`src/charu/index.js`中是选择排序的实现。
### 希尔排序
希尔排序是希尔（`Donald Shell`）于1959年提出的一种排序算法。希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序，同时该算法是冲破O(n2）的第一批算法之一。本文会以图解的方式详细介绍希尔排序的基本思想及其代码实现。
`src/xier/index.js`中是选择排序的实现。
### 归并排序
归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。
### 快速排序


### 堆排序
