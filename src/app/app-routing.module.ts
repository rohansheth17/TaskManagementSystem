import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { TaskserviceComponent } from './taskservice/taskservice.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'tasks',component:TaskserviceComponent,canActivate:[AuthGuard]},
  {path:'**',component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
