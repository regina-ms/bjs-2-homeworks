'use strict'

function parseCount(value) {
    if(isNaN(Number.parseFloat(value))) {
      throw new Error("Невалидное значение");
    } else {
      return Number.parseFloat(value);
    }
   }

function validateCount(valueToPars) {
  try{
    parseCount(valueToPars);
  } catch (error) {
    return error;
  }
  return parseCount(valueToPars);
}

class Triangle {
    constructor(a, b, c){
      if(a + b < c || a + c < b || b + c < a) {
        throw new Error ("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
    get perimeter(){
      return this.a + this.b + this.c;
    }
  
    get area() {
      let p = 0.5 * this.perimeter;
      return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
  }
  
  class NullTriangle extends Triangle {
    constructor(a, b, c){
      super(a, b, c)
    }
    get perimeter(){
      return "Ошибка! Треугольник не существует";
    }
  
    get area() {
      return "Ошибка! Треугольник не существует";
    }
  }
  
  function getTriangle (a, b, c) {
    try {
      return new Triangle (a, b, c);
    } catch (error) {
      return new NullTriangle;
    }
  }