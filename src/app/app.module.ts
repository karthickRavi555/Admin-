import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownDirective} from './shared/dropdown.directive';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UsersComponent } from './users/users.component';
import { Approute} from './app.routes';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent, 
    SigninComponent,
    SignupComponent,
    RegisterComponent,
    DashboardComponent,
    DropdownDirective,
    TopBarComponent,
    SideBarComponent,
    UsersComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Approute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
