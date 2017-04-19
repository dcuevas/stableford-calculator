import {Component, OnInit, Input} from '@angular/core';
import {PointsService} from "./points/points.service";

@Component({
  selector: 'stc-scorecard',
  templateUrl: 'scorecard.component.html',
  styleUrls: ['scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  @Input() course: Course;
  @Input() playHandicapForPoints: number;

  constructor(private pointsService: PointsService) { }


  // ngOnChanges(changes: SimpleChanges): void {
  //   this.points = this.pointsService.getHolePoints(this.hole.hcp, this.playHandicap);
  // }

  ngOnInit() {
    console.log(this.course);

  }

  calculatePoints(hole: Hole) {
    return this.pointsService.getHolePoints(hole.hcp, this.playHandicapForPoints);
  }

  calculatePointsForScore(strokes: number, hole: Hole) {
    //console.log(strokes, hole);
    //console.log(this.pointsService.getPointsForScore(strokes, hole, this.playHandicapForPoints));
    return this.pointsService.getPointsForScore(strokes, hole, this.playHandicapForPoints);
  }

}
