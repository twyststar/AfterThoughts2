import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../comment.model';
import { CommentService} from '../comment.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
  providers: [ CommentService, UserService, BookService ]
})
export class NewCommentComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  books: FirebaseListObservable<any[]>;
  bookId: string;
  bookToComment;

  constructor(private commentService: CommentService, private userService: UserService, private bookService: BookService, private route: ActivatedRoute, private location: Location) { }


  ngOnInit() {
    this.users = this.userService.getUsers();
    this.route.params.forEach((urlParameters) => {
      this.bookId = urlParameters['id'];
    });
    this.bookToComment = this.bookService.getBookById(this.bookId);

  }

  submitCommentForm (commentText: string, userName: string ){

    var newComment: Comment = new Comment (commentText, this.bookId,  userName);
    this.commentService.addComment(newComment);


  }

}
