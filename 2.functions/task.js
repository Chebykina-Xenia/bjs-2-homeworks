//заполняем массив от -100 до 100
let arr = [];
for (let i = -100; i <= 100;){
 arr.push(i++);
}

// Задание 1
function getArrayParams(arr) {
  let min = Infinity; 
  let max = -Infinity; 
  let avg = 0; 
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
  };
  
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg};
};

// Задание 2
function worker(arr) {
  let arrSum = 0;
  if(Array.isArray(arr)) {
   let sum = 0;
   for(let j = 0; j < arr.length; j++){
    sum += arr[j];
  }
  arrSum = sum;
} 
return  arrSum
}

function makeWork(arr,func){
  let max = 0;
  let sum = 0;
  for(let i = 0; i < arr.length; ++i){
    sum = func(arr[i]);
    if (sum > max){
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max, min
  let difference = 0;
  let object = {};

  if(Array.isArray(arr)) {
    object = getArrayParams(arr);
    min = object.min;
    max = object.max;
    difference = Math.abs(max - min);          
  }
  return  difference;
}