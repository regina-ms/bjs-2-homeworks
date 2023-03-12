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
  
    const sherlock = new PrintEditionItem(
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    );