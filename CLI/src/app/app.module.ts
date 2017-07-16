import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { AttrDirComponent } from './attr-dir.component';
import { InterestComponent } from './interest/interest.component';
import { CuspipePipe } from './cuspipe.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@NgModule({
  declarations: [ CourseComponent, OtherComponent, AnotherComponent,AttrDirComponent, InterestComponent, CuspipePipe ],
  imports: [ BrowserModule,FormsModule],
  bootstrap: [AttrDirComponent]
})
export class AppModule { }
