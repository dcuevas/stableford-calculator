import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CoursesService {

  constructor(private http:Http) {  }

  getCourses(): Observable<Course[]> {
    return this.http.get('assets/courses/courses.json')
      .map((response: Response) => response.json() as Course[])
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
