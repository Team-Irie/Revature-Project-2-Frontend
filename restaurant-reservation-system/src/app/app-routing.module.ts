import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomepageComponent } from './components/homepage/homepage.component';
=======
>>>>>>> 3a086c42ef0ade3e53e03b0e10e50d22e379c72d
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 {path: '', component: HomepageComponent},
 {path: 'login', component: LoginComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
