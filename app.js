const data= [2, 8, 4, 1, 3, 0, 15, 99, 65]

function bubbleSort(arr, indx=arr.length) {
  if(!indx) return
  
  for (var i = 0; i < indx; i++) {
    if(arr[i] > arr [i+1]) {
      let temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
    }
  }
  bubbleSort(arr, indx-1)
  return arr
}
console.log("Bubble sort:",bubbleSort(data));
