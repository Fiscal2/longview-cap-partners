import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'About Us', component: NavbarComponent },
{ path: 'aboutus', pathMatch: 'full' },
{ path: 'Contact', component: ContactComponent  },
{ path: 'contact', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
