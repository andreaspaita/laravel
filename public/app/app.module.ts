import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TaskService} from './task.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, RequestOptions } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule


  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
