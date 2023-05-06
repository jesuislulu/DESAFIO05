import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { formatCourse } from '../interface/course';

@Injectable({
  providedIn: 'root'
})
export class GetCourseService {

  private data: formatCourse[] = [
    { id: 1, name: 'Historia del Renacimiento' },
    { id: 2, name: 'Tipografía' },
    { id: 3, name: 'Motion Graphics' },
    { id: 4, name: 'HTML y CSS' },
    { id: 5, name: 'UX Writing' }
  ];

  constructor() { }
  
  getCourses(): Observable<formatCourse[]> {
    return of(this.data)
  }
}
