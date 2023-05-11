import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { responseModel, linkModel } from '../model';

@Injectable({ providedIn: 'root' }) //ประกาศด้วยวิธีนี้ (2)
export class httpRequestService {
    // private posts: Post[] = [];
    private postsUpdated = new Subject()
    mockIP = "http://localhost:3000"
    constructor(private http: HttpClient) {
    }
    getRequest(part:string): Observable<any> {
        let getUrl = this.mockIP + part
       return  this.http.get<responseModel>(getUrl).pipe(map((resData) => {
            return resData.data
        }))
       
    }
  
    postRequest(part:string, data) {
        let postUrl = this.mockIP + part     
        return this.http.post<responseModel>(postUrl,data).pipe(map((resData) => {
           return resData.data
       }))
    }
    deleteRequest(part:string) {
        let postUrl = this.mockIP + part 
        return this.http.delete<responseModel>(postUrl)
    }
}