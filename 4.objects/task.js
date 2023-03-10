'use strict'

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks) {
      this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(!this.marks) {
      return 0
  } else {
      return this.marks
      .reduce((prev, item, index, array) => prev + item / array.length, 0);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
