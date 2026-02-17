import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css'],
})
export class StudentList {
  students: Student[] = [
    { 
      id: 1,
      name: 'Raj Kumar',
      age: 14,
      gender: 'male',
      subjects: [
        { name: 'Mathematics', marks: 98 },
        { name: 'Physics', marks: 92 },
        { name: 'Chemistry', marks: 95 },
        { name: 'English', marks: 94 },
        { name: 'Computer Science', marks: 96 }
      ]
    },
    { 
      id: 2,
      name: 'Priya Singh',
      age: 14,
      gender: 'female',
      subjects: [
        { name: 'Mathematics', marks: 90 },
        { name: 'Physics', marks: 85 },
        { name: 'Chemistry', marks: 88 },
        { name: 'English', marks: 88 },
        { name: 'Computer Science', marks: 86 }
      ]
    },
    { 
      id: 3,
      name: 'Amit Patel',
      age: 14,
      gender: 'male',
      subjects: [
        { name: 'Mathematics', marks: 94 },
        { name: 'Physics', marks: 91 },
        { name: 'Chemistry', marks: 92 },
        { name: 'English', marks: 91 },
        { name: 'Computer Science', marks: 93 }
      ]
    },
    { 
      id: 4,
      name: 'Sarah Johnson',
      age: 14,
      gender: 'female',
      subjects: [
        { name: 'Mathematics', marks: 87 },
        { name: 'Physics', marks: 83 },
        { name: 'Chemistry', marks: 85 },
        { name: 'English', marks: 87 },
        { name: 'Computer Science', marks: 84 }
      ]
    },
    { 
      id: 5,
      name: 'David Lee',
      age: 14,
      gender: 'male',
      subjects: [
        { name: 'Mathematics', marks: 92 },
        { name: 'Physics', marks: 89 },
        { name: 'Chemistry', marks: 90 },
        { name: 'English', marks: 91 },
        { name: 'Computer Science', marks: 89 }
      ]
    },
  ];

  selectedStudent: Student | null = null;

  selectStudent(student: Student) {
    this.selectedStudent = student;
  }

  getTotalMarks(student: Student): number {
    return student.subjects.reduce((sum, s) => sum + (s.marks || 0), 0);
  }

  getAverageMarks(student: Student): number {
    if (!student.subjects.length) return 0;
    return Math.round(this.getTotalMarks(student) / student.subjects.length);
  }

  trackByStudentId(index: number, student: Student) {
    return student.id;
  }
}
