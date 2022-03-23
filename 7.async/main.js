// тут вы можете вызывать функции из task.js

//создаём объект класса AlarmClock
let phoneAlarm = new AlarmClock();

phoneAlarm.addClock("08:28", () => console.log("Пора вставать!"), 1);

phoneAlarm.addClock("08:29", () => console.log("Иди умываться!"), 2);

phoneAlarm.removeClock(2);

phoneAlarm.addClock("08:30", () => console.log("Вставай, а то проспишь!"), 3);

phoneAlarm.printAlarms();

phoneAlarm.start();