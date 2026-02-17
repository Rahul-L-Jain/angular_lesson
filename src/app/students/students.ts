import { Component } from '@angular/core';
import { StudentList } from './student-list/student-list';
import { StudentDetail } from './student-detail/student-detail';

@Component({
  selector: 'app-students',
  imports: [StudentList, StudentDetail],
  templateUrl: './students.html',
  styleUrls: ['./students.css'],
})
export class Students {

}
