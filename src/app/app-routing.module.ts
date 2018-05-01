import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { IctComponent } from './ict/ict.component';
import { CareersComponent } from './careers/careers.component';
import { NocontentComponent } from './nocontent/nocontent.component';
import { SchemeComponent } from './scheme/scheme.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path: 'dashboard', component:DashboardComponent },
  {path:'profile',component:ProfileComponent},
  {path:'ict',component:IctComponent},
  {path:'careers',component:CareersComponent},
  {path:'scheme',component:SchemeComponent},
  {path:"**",redirectTo:'404'},
  {path:'404',component:NocontentComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
