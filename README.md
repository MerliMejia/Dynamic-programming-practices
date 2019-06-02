
# Dynamic-programming-practices
In this repository I will upload a series of algorithms and solutions using different techniques to achieve the best performance.

## [Reversal sentences](https://github.com/MerliMejia/Dynamic-programming-practices/tree/master/Reversal%20sentences "Reversal sentences")

**This was the first algorithm that I set out to solve:**

You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

**input: arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
'm', 'a', 'k', 'e', 's', ' ',
'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', ' ',
'm', 'a', 'k', 'e', 's', ' ',
'p', 'e', 'r', 'f', 'e', 'c', 't' ]**

I spend 1H:45MM trying to solve this algorithm in the most efficient manner. The final result runs on O(N2). You can read the code [HERE](https://github.com/MerliMejia/Dynamic-programming-practices/blob/master/Reversal%20sentences/src/main.java) 

## [2D Array - DS](https://github.com/MerliMejia/Dynamic-programming-practices/tree/master/2D%20Array%20-%20DS/javaScript)

Given a **6x6** 2D Array, :

|1| 1| 1| 0| 0| 0|
|-|-|-|-|-|-|
|0|1 |0| 0 |0| 0|
|1| 1| 1| 0| 0| 0|
|0| 0| 0| 0| 0 |0|
|0| 0| 0| 0| 0 |0|
|0| 0| 0| 0| 0 |0|

We define an **A** hourglass in  to be a subset of values with indices falling in this pattern in **arr**'s graphical representation:

|a |b |c|
| - | - | -
|  | d|
|e| f| g|

There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

For example, given the 2D array:

|-9| -9| -9|  1| 1| 1|
| - | - | - | - | - | - | 
| 0| -9|  0|  4| 3| 2|
|-9| -9| -9|  1| 2| 3|
| 0|  0|  8|  6| 6| 0|
| 0|  0|  0| -2| 0| 0|
| 0|  0|  1|  2| 4| 0|
We calculate the following 16 hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18

Our highest hourglass value is 28 from the hourglass:

|0 |4| 3|
|-|-|-
| | 1|
|8| 6| 6|

hourglassSum has the following parameter(s):

arr: an array of integers

**Input Format**

Each of the  lines of inputs  contains  space-separated integers .

Print the largest (maximum) hourglass sum found in arr.

**Sample Input**

|1 |1| 1 |0| 0 |0|
|-|-|-|-|-|-|
|0 |1 |0 |0 |0 |0|
|1 |1 |1 |0 |0 |0|
|0 |0 |2 |4 |4 |0|
|0 |0 |0 |2 |0 |0|
|0| 0 |1| 2 |4| 0|

**Sample Output**

19

Explanation

 contains the following hourglasses:

![Sample hourglasses](https://s3.amazonaws.com/hr-assets/0/1534256743-35b846ad4a-hourglasssum.png)

The hourglass with the maximum sum () is:

|2 |4 |4|
|-|-|-|
|  |2| |
|1| 2 |4|

**Solution Time complexity analysis**

![enter image description here](https://scontent.flrm1-1.fna.fbcdn.net/v/t1.15752-9/61583884_664046847399563_7414027878418874368_n.png?_nc_cat=111&_nc_ht=scontent.flrm1-1.fna&oh=afdf4bf57536faf011d6b073aac06a3b&oe=5D5BFB71)

Based on the graphic you can see how the worst possible scenario will be O=(n)

[**Algorithm source**](https://www.hackerrank.com/challenges/2d-array/problem?h_r=profile)

[**Solution code**]([https://github.com/MerliMejia/Dynamic-programming-practices/blob/master/2D%20Array%20-%20DS/javaScript/main.js](https://github.com/MerliMejia/Dynamic-programming-practices/blob/master/2D%20Array%20-%20DS/javaScript/main.js))
