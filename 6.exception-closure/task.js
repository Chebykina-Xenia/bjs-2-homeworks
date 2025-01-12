//ЗАДАЧА 1
function parseCount(value) {
  let pars = Number.parseInt(value);
  if (isNaN(pars)){
    throw new Error ("Невалидное значение");
  } 
  return pars
}

function validateCount(value) {
  try {
    let pars = parseCount(value);
    return pars;
  } catch (err){
    return err;
  }
}

//ЗАДАЧА 2
let error = new Error(); 
class Triangle {
  constructor(a, b, c ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ((this.a + this.b) < this.c || 
      (this.a + this.c) < this.b || 
      (this.c + this.b) < this.a){
      throw new Error ("Треугольник с такими сторонами не существует");
  }
}
  //периметр
  getPerimeter (){
    let p = this.a + this.b + this.c;
    return p; 
  }

//площадь
  getArea(){
    let p = this.getPerimeter() / 2;
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
  }
}

function getTriangle(a, b, c){
  let ogjTriangle;
  try{
    ogjTriangle = new Triangle(a, b, c);
    return ogjTriangle;
  } catch (err) {
    return {
    getArea: function() {
      return "Ошибка! Треугольник не существует";
    },
    
    getPerimeter: function() {
      return "Ошибка! Треугольник не существует";
    }
  } 
  }
}