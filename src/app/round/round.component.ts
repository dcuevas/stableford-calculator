import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { CoursesService } from '../courses/courses.service';
import { Observable } from 'rxjs';
import { Round } from "../shared/model/round";

@Component({
  selector: 'stc-round',
  templateUrl: './round.component.html',
  styleUrls: ['round.component.scss']
})
export class RoundComponent implements OnInit, OnChanges {
  courses: Observable<Course[]>;
  round: Round = new Round();

  constructor(private coursesService: CoursesService) {
    this.round.tee = 'yellow';
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes: ', changes);
  }

  updatePlayHandicapForPoints($event) {
    this.round.playHcp = $event;
  }

}
