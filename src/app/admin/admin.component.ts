import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model'
import { BookService } from '../book.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BookService, UserService]
})
export class AdminComponent implements OnInit {

  constructor(private bookService: BookService,  private userService: UserService) { }

  ngOnInit() {
  }

  submitForm( title: string,  author: string,  description: string,  published: number,  current: boolean){
    var newBook: Book = new Book (title,  author,  description,  published,  current);
    this.bookService.addBook(newBook);
  }

  submitUserForm( name: string,  bio: string,  img: string,  favorites: string, quote: string){
    var newUser: User = new User (name,  bio,  img,  favorites,  quote);
    console.log(newUser);
    this.userService.addUser(newUser);
  }
}
