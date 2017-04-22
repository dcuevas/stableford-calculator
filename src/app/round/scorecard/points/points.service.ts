import { Injectable } from '@angular/core';

@Injectable()
export class PointsService {

  constructor() { }

  getHolePoints(hcp, playHcp) {
    let points = 0;
    let remainingPlayHcp = playHcp;

    while (remainingPlayHcp >= hcp) {
      ++points;
      remainingPlayHcp -= 18;
    }

    return points;
  }

  getPointsForScore(strokes: number, hole: Hole, playHcp: number) {
    const totalShots = strokes - this.getHolePoints(hole.hcp, playHcp);

    return this.getPoints(totalShots, hole.par);
  }

  getNettScore(strokes, par) {
    const nettScore = strokes - this.getPoints(strokes, par);
    return nettScore > 0 ? nettScore : '-';
  }

  private getPoints(strokes, par) {
    if (strokes > 0) {
      if (strokes === par) {
        return 2;
      } else if (strokes + 1 === par) {
        return 3;
      } else if (strokes + 2 === par) {
        return 4;
      } else if (strokes + 3 === par) {
        return 5;
      } else if (strokes - 1 === par) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

}


