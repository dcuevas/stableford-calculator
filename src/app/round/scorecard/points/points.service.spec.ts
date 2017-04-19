import { TestBed, inject } from '@angular/core/testing';

import { PointsService } from './points.service';

fdescribe('PointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointsService]
    });
  });

  const holes = [
    { par: 4, hcp: 1 },
    { par: 3, hcp: 2 },
    { par: 4, hcp: 3 },
    { par: 5, hcp: 4 },
    { par: 3, hcp: 5 },
    { par: 4, hcp: 6 },
    { par: 5, hcp: 7 },
    { par: 4, hcp: 8 },
    { par: 4, hcp: 9 },
    { par: 5, hcp: 10 },
    { par: 3, hcp: 11 },
    { par: 4, hcp: 12 },
    { par: 4, hcp: 13 },
    { par: 4, hcp: 14 },
    { par: 4, hcp: 15 },
    { par: 5, hcp: 16 },
    { par: 3, hcp: 17 },
    { par: 4, hcp: 18 },
  ];
  describe('getHolePoints', () => {
    it('should return 0 points for play handicap 0 and any hole', inject([PointsService], (service: PointsService) => {
      holes.forEach((hole) => expect(service.getHolePoints(hole.hcp, 0)).toBe(0));
    }));

    it('should return 1 points for play handicap 18 and any hole', inject([PointsService], (service: PointsService) => {
      holes.forEach((hole) => expect(service.getHolePoints(hole.hcp, 18)).toBe(1));
    }));

    it('should return 1 points for 9 more difficult holes and 0 rest when play handicap 9', inject([PointsService], (service: PointsService) => {
      holes.forEach((hole, index) => {
        if (index < 9) {
          expect(service.getHolePoints(hole.hcp, 9)).toBe(1);
        } else {
          expect(service.getHolePoints(hole.hcp, 9)).toBe(0);
        }
      });
    }));

    it('should return 2 points for play handicap 36 on any hole', inject([PointsService], (service: PointsService) => {
      holes.forEach((hole) => expect(service.getHolePoints(hole.hcp, 36)).toBe(2));
    }));

    it('should return 2 points for play handicap 22 on hole hcp 4', inject([PointsService], (service: PointsService) => {
      expect(service.getHolePoints(4, 22)).toBe(2);
    }));

    it('should return 1 points for play handicap 22 on hole hcp 5', inject([PointsService], (service: PointsService) => {
      expect(service.getHolePoints(5, 22)).toBe(1);
    }));
  });

});
