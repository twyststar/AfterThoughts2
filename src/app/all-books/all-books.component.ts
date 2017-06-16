import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
  providers: [ BookService ]
})

export class AllBooksComponent implements OnInit {
  books: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private bookService: BookService) { }

  goToDetailPage(clickedBook){
    this.router.navigate(['books', clickedBook.$key]);
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
