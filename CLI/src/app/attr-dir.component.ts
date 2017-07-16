import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import{CuspipePipe} from './cuspipe.pipe';
@Component({
  selector: 'app-attr-dir',
  templateUrl: './attr-dir.component.html',
  styleUrls:['./attr-dir.component.css']
})
export class AttrDirComponent  {

 myclasses={ 'big':true,"red":true,"border":true}
 isSpecial:boolean=false;
 canSave:boolean=true;
dateObj : string= '14-jul-2017';
str:string="Srinivas Pramod";
 onSave():void{
   alert("Onsave Called");
 }
}
