import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  constructor(private http: HttpClient) { }

  public emailBuilder(emailDataToSend: any) {
    const endpoint = "";

    const body = JSON.stringify({
      senderEmail: emailDataToSend.email,
      senderName: emailDataToSend.name,
      senderCompany: emailDataToSend.company,
      senderMessage: emailDataToSend.message
    });

    return this.http.post<any>(endpoint, body, { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
