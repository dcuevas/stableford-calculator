export class Round {
  id: number;
  course: Course;
  tee: string;
  playHcp: number;
  score: number[];

  constructor() {
    this.score = new Array(18);
  }
}
