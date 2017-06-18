import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CurrentPipe } from './current.pipe';
import { PastPipe } from './past.pipe';
import { NewCommentComponent } from './new-comment/new-comment.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    BookDetailComponent,
    UserProfileComponent,
    AdminComponent,
    EditBookComponent,
    EditUserComponent,
    UserListComponent,
    BookListComponent,
    AllBooksComponent,
    NewUserComponent,
    CurrentPipe,
    PastPipe,
    NewCommentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
