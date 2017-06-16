import { Injectable } from '@angular/core';
import { Book } from './book.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class BookService {
  books: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.books = database.list('books');
  }

  getBooks(){
    return this.books;
  }

  addBook(newBook: Book) {
    this.books.push(newBook);
  }

  getBookById(bookId: string){
    return this.database.object('books/' + bookId);
  }

  updateBook(localUpdatedBook){
    var bookEntryInFirebase = this.getBookById(localUpdatedBook.$key);
    bookEntryInFirebase.update({title: localUpdatedBook.title,
                                author: localUpdatedBook.author,
                                description: localUpdatedBook.description,
                                published: localUpdatedBook.published,
                                current: localUpdatedBook.current,

                              });
  }

  deleteBook(localBookToDelete){
    var bookEntryInFirebase = this.getBookById(localBookToDelete.$key);
    bookEntryInFirebase.remove();
  }
  
}
