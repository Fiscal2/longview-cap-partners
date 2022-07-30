import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'About Us', component: NavbarComponent  },
{ path: 'Contact', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
