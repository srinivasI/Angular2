import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
@NgModule({
  declarations: [ CourseComponent ],
  imports: [ BrowserModule ],
  bootstrap: [CourseComponent]
})
export class AppModule { }
