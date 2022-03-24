class AlarmClock {
  constructor() {
    this.alarmCollection = [];   //массив звонков
    this.timerId = null;
  }

  addClock(time, func, id) {
    //если id не передан
    if (isNaN(id)) {
      throw new Error ("Параметр id не передан");
    }

    let arr = this.alarmCollection;
    if (arr.some(obj => obj.id === id)){
     console.error("Будильник с таким id уже существует")
     return null;
   }

   let obj = {
    time: time,
    func: func,
    id: id
  }  

  this.alarmCollection.push(obj);
  return obj;
}

removeClock(id) {
  let firstLength = this.alarmCollection.length;
  let arr = this.alarmCollection;
  let lasrArr = arr.filter(obj => obj.id != id);
  let lastLength = lasrArr.length;
  if (firstLength > lastLength){
    this.alarmCollection = lasrArr;
    return true;
  }
  return false;
}

getCurrentFormattedTime() {
 let date = new Date();
 let time = date.toTimeString().substr(0, 5);
 return time;
}

  //функция проверки, принимает звонок
  checkClock(phoneObj){
    let sysdate = this.getCurrentFormattedTime();
    let timePhone = phoneObj.time;
    if (sysdate === timePhone){
      return phoneObj.func();
    }
  }

  //запускает все звонки
  start (){ 
    let arr = this.alarmCollection;
    if (this.timerId === null){
      this.timerId = setInterval (() => {arr.forEach (obj => this.checkClock(obj))}, 1000);
    } 
  }

  stop(){
    if (this.timerId != null){
      clearInterval (this.timerId);
      this.timerId = null;
    }
  }

  printAlarms () {
    let arr = this.alarmCollection;
    arr.forEach (obj => console.log("Будильник № " + obj.id + " заведён на " + obj.time));
  }

  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }
}

