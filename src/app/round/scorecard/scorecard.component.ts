import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {PointsService} from './points/points.service';

@Component({
  selector: 'stc-scorecard',
  templateUrl: 'scorecard.component.html',
  styleUrls: ['scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  @Input() course: Course;
  @Input() playHandicapForPoints: number;
  @Output() onScoreUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private pointsService: PointsService) { }

  ngOnInit() {

  }

  updateScore(score, hole: Hole) {
    this.onScoreUpdate.emit({score: score, hole: hole.number});
    console.log('Score: ', score, hole);
  }

  calculatePoints(hole: Hole) {
    return this.pointsService.getHolePoints(hole.hcp, this.playHandicapForPoints);
  }

  calculatePointsForScore(strokes: number, hole: Hole) {
    return this.pointsService.getPointsForScore(strokes, hole, this.playHandicapForPoints);
  }

  calculateNettScore(strokes: number, hole: Hole) {
    return this.pointsService.getNettScore(strokes, hole.par);
  }

}
