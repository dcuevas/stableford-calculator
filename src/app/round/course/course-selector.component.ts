import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CoursesService } from '../../courses/courses.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'stc-course',
  templateUrl: 'course-selector.component.html',
  styleUrls: ['course-selector.component.scss']
})
export class CourseSelectorComponent implements OnInit {
  @Output() onCourseSelected: EventEmitter<Course> = new EventEmitter();
  @Output() onTeeSelected: EventEmitter<string> = new EventEmitter();
  courses: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  selectCourse($event) {
    console.log('selectCourse: ', $event);
    this.onCourseSelected.emit($event);
  }

  selectTee($event) {
    console.log('selectTee: ', $event);
    this.onTeeSelected.emit($event);
  }

}
