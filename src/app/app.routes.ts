import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'todos', component: AppComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];
