import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  constructor() { }

  public emailBuilder(emailEvent: FormData) {
    const endpoint = "<ENDPOINT>";

    const body = JSON.stringify({
      senderEmail: emailEvent.get('email'),
      senderName: emailEvent.get('name'),
      senderCompany: emailEvent.get('company'),
      senderMessage: emailEvent.get('message')
    });

    const requestOptions = {
      method: "POST",
      body
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        return "Email sent successfully!";
      })
      .catch((error) => {

        return "An unkown error occured.";
      });
  }
}
