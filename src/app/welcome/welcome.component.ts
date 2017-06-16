import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [BookService, UserService]
})

export class WelcomeComponent implements OnInit {
  books: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  
  goToDetailPage(clickedBook){
    this.router.navigate(['books', clickedBook.$key]);
  }
  goToProfilePage(clickedUser){
    this.router.navigate(['users', clickedUser.$key]);
  }

  constructor(private router: Router, private bookService: BookService, private userService: UserService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.users = this.userService.getUsers();
  }

}
