import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../model/categiries.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  basicSubject = new Subject<{name:string,sal:number}>()

  constructor(private http:HttpClient) { 

  }

  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>("https://staging3.elpisitsolutions.com/api/category")
  }
}
