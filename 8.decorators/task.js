//const add = (a, b) => a + b;

function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    let result;
    let key = args.join(',');
    const hash = {key, result}; //cache[key]; //args.join(',');
    let idx = cache.findIndex((itm) => key = itm.key);
  //если элемент наден
  if (idx !== -1){
    console.log("Из кэша: " + cache[idx].result);
    return "Из кэша: " + cache[idx].result;
  } else {
  //вычисляем значение
  result = func(...args);
  hash.result = result;
  //записываем его в кэш
  //cache[key] = result;
  cache.push(hash);
  //if (cache.length > 5){
   // let newCache = cache.filter((cache) => cache[idx] != cache[0])
   // result = newCache[idx]
  //}
  console.log("Вычисляем: " + result);
  //console.log(cache)
  return "Вычисляем: " + result;
}

  //let result = func(...args);
  //cache.push(cache[key]);
  //if (cache.length > 5){
    //let newCache = cache.filter((cache[key]) => cache[key] != cache[0])
    //cache[key] = newCache
  //}
  //cache[key] = result;


}
return wrapper;
}

//const upg = cachingDecoratorNew(add);
//console.log(upg(1,2));
//console.log(upg(1,2));

//function debounceDecoratorNew(func) {
  // Ваш код
//}

//function debounceDecorator2(func) {
  // Ваш код
//}
