import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Email {

   private apiUrl = 'https://machine-learning-5vmi.onrender.com/predict'; // Your FastAPI URL

  constructor(private http: HttpClient) {}

  checkSpam(text: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { text });
  }
  
}
