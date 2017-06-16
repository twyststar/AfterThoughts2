import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component'
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AllBooksComponent } from './all-books/all-books.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'all-books',
    component: AllBooksComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  },
  {
    path: 'users/:id',
    component: UserProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
