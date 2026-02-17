import { Component, Input } from '@angular/core';
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
  selector: 'app-student-detail',
  imports: [CommonModule],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css',
})
export class StudentDetail {
  @Input() student: Student | null = null;

  getGrade(marks: number): string {
    if (marks >= 90) return 'A';
    if (marks >= 80) return 'B';
    if (marks >= 70) return 'C';
    if (marks >= 60) return 'D';
    return 'F';
  }

  getSubjectGradeClass(marks: number): string {
    const grade = this.getGrade(marks);
    return 'grade-' + grade.toLowerCase();
  }

  getAverageMarks(): number {
    if (!this.student || !this.student.subjects || this.student.subjects.length === 0) {
      return 0;
    }
    const sum = this.student.subjects.reduce((acc, subject) => acc + subject.marks, 0);
    return Math.round(sum / this.student.subjects.length);
  }
}
