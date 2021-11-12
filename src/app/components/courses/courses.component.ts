import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../services/student.service';
import { ScoreFromCourse } from '../../models/score-from-course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'lastName'];
  displayedColumnsScore: string[] = ['code', 'course', 'score'];

  studentList: Student[] = [];

  studentCode: number = 0;
  studentSelected: Student = new Student();

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.findAll();
    this.findByCode();
  }

  findAll(): void {
    this.studentService.findAll().subscribe(students => {
      this.studentList = students;
    });
  }

  findByCode(): void {
    this.studentService.findById(this.studentCode).subscribe(student => {
      this.studentSelected = student;
    })
  }

}
