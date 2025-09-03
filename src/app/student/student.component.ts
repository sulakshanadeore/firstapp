import { Component } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
studentGrade:string="D";

studentName:string='Arti';

city:string[]=['Pune','Mumbai','Hyderabad','Bangalore','Chennai'];
selectedCity:string;


gender:string;

isNri:boolean=true;
isNonNri:boolean=false;
nationality:string;

subjects:string[]=['Maths','Science','Geography','History','Electronics','Computer'];
selectedSubjects:string[];

selectNri()
{
  this.isNri=true;
  this.isNonNri=false;
  this.nationality="Non Indian";
}

selectNonNri()
{
   this.isNri=false;
  this.isNonNri=true;
  this.nationality="Indian";
}

}
