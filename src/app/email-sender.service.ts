import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      senderPhone: emailDataToSend.phone,
      senderCompany: emailDataToSend.company,
      senderMessage: emailDataToSend.message
    });

    return this.http.post<any>(endpoint, body, { observe: 'response' })
  }
}
