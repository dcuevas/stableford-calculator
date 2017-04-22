import { Component, OnInit } from '@angular/core';
import { Round } from '../shared/model/round';
import {PointsService} from "./scorecard/points/points.service";

@Component({
  selector: 'stc-round',
  templateUrl: './round.component.html',
  styleUrls: ['round.component.scss']
})
export class RoundComponent implements OnInit {
  round: Round = new Round();

  constructor(private pointService: PointsService) {

  }

  ngOnInit(): void {

  }

  updateScore(scoreAndHole) {
    this.round.score[Number(scoreAndHole.hole) - 1] = scoreAndHole.score;
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

  totalPoints() {
    return this.round.score.reduce(((previousValue, currentValue, index) => {
      return previousValue + this.pointService.getPointsForScore(currentValue, this.round.course.holes[index], this.round.playHcp);
    }), 0);
  }

}
