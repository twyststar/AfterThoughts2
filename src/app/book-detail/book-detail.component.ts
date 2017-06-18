import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Comment } from '../comment.model';
import { CommentService} from '../comment.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService, CommentService, UserService]
})

export class BookDetailComponent implements OnInit {
  comments: FirebaseListObservable<any[]>;
  bookId: string;
  commentBook = null;
  bookToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private bookService: BookService, private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
    this.route.params.forEach((urlParameters) => {
      this.bookId = urlParameters['id'];
    });
    this.bookToDisplay = this.bookService.getBookById(this.bookId);
  }

  showCommentForm(bookToComment){
    this.commentBook = bookToComment;
  }
}
