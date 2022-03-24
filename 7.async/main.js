// тут вы можете вызывать функции из task.js

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("21:06", () => console.log("Пора вставать!"), 1);
phoneAlarm.addClock("21:07", () => console.log("Иди умываться!"), 2);
phoneAlarm.addClock("21:08", () => console.log("Вставай, а то проспишь!"), 3);
phoneAlarm.printAlarms();
phoneAlarm.start();