import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { ViewnewsComponent } from './viewnews/viewnews.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


const myroutes=[
  {path:"",component:AddnewsComponent},
  {path:"viewnews",component:ViewnewsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddnewsComponent,
    ViewnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
