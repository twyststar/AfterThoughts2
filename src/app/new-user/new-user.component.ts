import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitUserForm( name: string,  bio: string,  img: string,  favorites: string, quote: string){
    var newUser: User = new User (name,  bio,  img,  favorites,  quote);
    console.log(newUser);
    this.userService.addUser(newUser);
  }
}
