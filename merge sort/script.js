// functioning example of the merge sort algorithm. 

let testArray = ["cats", "animals", "zebra", "frog", "elephant"];

function sortArrays(leftarray, rightarray) {
    let sortedArray = [];
    while (leftarray.length && rightarray.length) {
        if (leftarray[0] < rightarray[0]) {
            sortedArray.push(leftarray.shift());
        } else {
            sortedArray.push(rightarray.shift());
        }
    }
    return [ ...sortedArray, ...leftarray, ...rightarray ];
}

function mergeSort(testArray) {

    let halfway = testArray.length / 2;
    
    if (testArray.length < 2) {
        return testArray;

    }
        
    const lefthalf = testArray.splice(0, halfway);
    return sortArrays(mergeSort(lefthalf), mergeSort(testArray));
};

console.log(mergeSort(testArray));

// function merge_Arrays(left_sub_array, right_sub_array) {
//     let array = []
//     while (left_sub_array.length && right_sub_array.length) {
//        if (left_sub_array[0] < right_sub_array[0]) {
//           array.push(left_sub_array.shift())
//        } else {
//           array.push(right_sub_array.shift())
//        }
//     }
//     return [ ...array, ...left_sub_array, ...right_sub_array ]
//  }
//  function merge_sort(unsorted_Array) {
//     const middle_index = unsorted_Array.length / 2
//     if(unsorted_Array.length < 2) {
//        return unsorted_Array
//     }
//     const left_sub_array = unsorted_Array.splice(0, middle_index)
//     return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array))
//  }
//  unsorted_Array = [39, 28, 44, 4, 10, 83, 11];

//  console.log(merge_sort(unsorted_Array));