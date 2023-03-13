//Задание 1

class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.type = null;
      this.currentState = 100;
  };

  fix() {
      return this.state *= 1.5;
  }; 

  set state (newState) {
    if (newState < 0){
        this.currentState = 0;
    } else if (newState > 100) {
        this.currentState = 100;
    } else {
        this.currentState = newState;
    }
};

  get state () {
      return this.currentState;
  }  
}  

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
            this.type = 'magazine';
    }
  }

  class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
  }

  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
  }

  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
  }

  //Задание 2

  class Library {
    constructor(name, books) {
      this.name = name;
      this.books = [];
    }

    addBook(book) {
      if(book.state > 30) {
        this.books.push(book);
      }
    }
    
    findBookBy (type, value){
      for (let book of this.books) {
        for (let prop in book) {
          if (prop === type && book[prop] === value){
            return book;
          } 
        }
      }
      return null;
    }

    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++){
        for (let prop in this.books[i]){
          if(this.books[i][prop] === bookName){
            return this.books.splice(i, 1)[0];
          } 
        }
      }
      return null;
    }
}

// создаем библиотеку
const library = new Library("Библиотека имени Ленина");


// добавляем печатные издания разных типов
//1
library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
//2
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
//3
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
//4
library.addBook(new Magazine("Мурзилка", 1924, 60));
//5
library.addBook(new DetectiveBook("Таинственный автор", "Таинственное название", 1919, 897))

// выдаем книгу 
let picnik = library.giveBookByName("Пикник на обочине");

//повреждаем книгу
picnik.state = 25;

//восстанавливаем книгу
picnik.fix();

// возвращаем книгу в библиотеку
library.addBook(picnik);

//Задание 3

class Student {
  constructor (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return 
    }
    if(this.marks.hasOwnProperty(subject)){
      this.marks[subject].push(mark);
    } else {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject (subject) {
    if(!this.marks.hasOwnProperty(subject)) {
      return 0;
    } else {
      return this.marks[subject]
      .reduce((acc, item) => acc + item, 0) / this.marks[subject].length;
    }
  }

  getAverage () {
    let subjectsNames = Object.keys(this.marks); // для общего кол-ва предметов 
    let marksSum = 0;
    for (let i of subjectsNames){
      marksSum += this.getAverageBySubject(i);
    }
    return marksSum / subjectsNames.length;
  }
}
