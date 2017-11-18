import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {LoginComponent} from './sign/login.component';
import {JoinComponent} from './sign/join.component';
import {ProfileComponent} from './profile/profile.component';

const appRoutes  = [
  {path : '', component: LoginComponent},
  {path : 'join', component: JoinComponent},
  {path : 'profile', component: ProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoinComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only : true
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
