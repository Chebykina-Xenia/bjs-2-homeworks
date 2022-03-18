class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state = this.state * 1.5;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (value <= 0) {
      this._state = 0;
    }
    if (value >= 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.state = 100;
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.state = 100;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.state = 100;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.state = 100;
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.state = 100;
    this.type = "detective";
  }
}

class Library {
  constructor(name){
    this.name = name;
    this.books = []
  }
  
  addBook(book){
    if (this.state > 30){
    this.books.push(book);
    }
  }
}