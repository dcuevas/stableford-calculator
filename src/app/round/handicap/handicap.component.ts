import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'stc-handicap',
  templateUrl: 'handicap.component.html',
  styleUrls: ['handicap.component.scss']
})
export class HandicapComponent {
  @Input() course: Course;
  playerHandicap: number;
  playHandicap: number = null;
  @Output() updatePlayHcpEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }

  calculatePlayHandicap($event) {
    if (this.playerHandicap) {
      this.playHandicap = Math.round(($event * (this.course.slope.yellow / 113)) + (this.course.value.yellow - this.course.par.yellow));
    } else {
      this.playHandicap = null;
    }
    //console.log('emit ', this.playHandicap);
    this.updatePlayHcpEvent.emit(this.playHandicap);
  }

}
