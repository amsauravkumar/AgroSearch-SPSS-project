import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NewComponentComponent } from './new-component/new-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HammenuComponent } from './hammenu/hammenu.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { IctComponent } from './ict/ict.component';
import { CareersComponent } from './careers/careers.component';
import { NocontentComponent } from './nocontent/nocontent.component';
import { SchemeComponent } from './scheme/scheme.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    DashboardComponent,
    HammenuComponent,
    FooterComponent,
    ProfileComponent,
    IctComponent,
    CareersComponent,
    NocontentComponent,
    SchemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
