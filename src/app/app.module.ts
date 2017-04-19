import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CoursesService } from './courses/courses.service';
import { RoundComponent } from './round/round.component';
import { ScorecardComponent } from './round/scorecard/scorecard.component';
import { HandicapComponent } from './round/handicap/handicap.component';
import { MaterialModule } from './material.module';
import { PointsService } from './round/scorecard/points/points.service';
import {CourseSelectorComponent} from "./round/course/course-selector.component";

@NgModule({
  declarations: [
    AppComponent,
    RoundComponent,
    ScorecardComponent,
    HandicapComponent,
    CourseSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ CoursesService, PointsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
