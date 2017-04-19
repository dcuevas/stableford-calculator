import { Component, OnInit } from '@angular/core';
import { Round } from '../shared/model/round';

@Component({
  selector: 'stc-round',
  templateUrl: './round.component.html',
  styleUrls: ['round.component.scss']
})
export class RoundComponent implements OnInit {
  round: Round = new Round();

  constructor() {}

  ngOnInit(): void {

  }

  updatePlayHandicap(playHcp) {
    this.round.playHcp = playHcp;
  }

  updateCourse(course) {
    console.log(course);
    this.round.course = course;
  }

  updateTee(tee) {
    console.log(tee);
    this.round.tee = tee;
  }

}
