const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);


function advancedFilter(arr) {
  let resultPlus = arr.filter(item => item > 0);
  let resultMultiples3 = resultPlus.filter(item => item % 3 === 0);
  let resultArr = resultMultiples3.map(item => item * 10);

  return resultArr; 
}
