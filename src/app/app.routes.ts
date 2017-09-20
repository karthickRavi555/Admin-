import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent} from './auth/signup/signup.component'
import {RegisterComponent} from './register/register.component'

export const Approute:Routes = [

     
    
    {
        path:'dashboard',
        component:DashboardComponent
    },
     {
        path:'users',
        component:UsersComponent
    }
];