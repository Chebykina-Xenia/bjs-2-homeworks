// тут вы можете вызывать функции из task.js

//создаём объект класса AlarmClock
let phoneAlarm = new AlarmClock();

phoneAlarm.addClock("13:56", () => console.log("Пора вставать!"), 1);

phoneAlarm.addClock("13:57", () => console.log("Иди умываться!"), 2);

//phoneAlarm.removeClock(2);

phoneAlarm.addClock("13:58", () => console.log("Вставай, а то проспишь!"), 3);

//phoneAlarm.printAlarms();

//phoneAlarm.start();