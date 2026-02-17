import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Subject {
  name: string;
  marks: number;
}

interface Student {
  id: number;
  name: string;
  marks: number;
  subjects: Subject[];
}

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: Student[] = [
    { 
      id: 1, 
      name: 'Raj Kumar', 
      marks: 95,
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
      marks: 88,
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
      marks: 92,
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
      marks: 85,
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
      marks: 90,
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
}
