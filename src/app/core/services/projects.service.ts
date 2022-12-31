import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(type: string, featured?: boolean): Observable<Project[]> {
    let projects$ = this.http.get<Project[]>('assets/json/projects.json');


    return projects$.pipe(
      mergeAll(),
      filter(project => (project.featured == featured 
        || project.featured) 
        && project.type == type),
      toArray()
    );
  }
}

