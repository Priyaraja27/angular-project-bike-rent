import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reviews } from '../componets/reviews/reviewtable';


@Injectable({
  providedIn: 'root'
})
export class FsService {


  constructor(private http:HttpClient) { }

  rurl:string='http://localhost/8080/addData';

addreviews(review:Reviews):Observable<Reviews>{

    return this.http.post<Reviews>(this.rurl,review);
}
}