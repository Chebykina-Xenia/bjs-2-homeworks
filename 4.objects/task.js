let marks = [];

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = marks;
}

//let student1 = new Student("Tony", "male", 37);
//let student2 = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks.length === 0 ) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...mark) {
  if (this.marks.length === 0 ) {
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
}

//возвращаем среднее арифметическое оценок студента
Student.prototype.getAverage = function() {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  avg = (sum / this.marks.length);
  return avg;
}

//исключаем студента
Student.prototype.exclude = function(reason) {
  let avg = this.getAverage();
  if (avg < 4 ) {
   this.excluded = reason;
   delete this.subject;
   delete this.marks;
 }
}

