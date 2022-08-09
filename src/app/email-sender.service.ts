import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  constructor() { }

  public emailBuilder(emailDataToSend: any) {
    const endpoint = "<ENDPOINT>";

    const body = JSON.stringify({
      senderEmail: emailDataToSend.email,
      senderName: emailDataToSend.name,
      senderCompany: emailDataToSend.company,
      senderMessage: emailDataToSend.message
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
        console.log("Email sent successfully!");
      })
      .catch((error) => {
        console.log(`An unkown error occured.${error}`);
      });
  }
}
