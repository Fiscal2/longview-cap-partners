import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  constructor() { }

  // public emailBuilder(emailEvent: EventTarget) {
  //   const endpoint = "<ENDPOINT>";

  //   const body = JSON.stringify({
  //     senderEmail: email.value,
  //     senderName: name.value,
  //     senderCompany: company.value,
  //     senderMessage: message.value
  //   });

  //   const requestOptions = {
  //     method: "POST",
  //     body
  //   };

  //   fetch(endpoint, requestOptions)
  //     .then((response) => {
  //       if (!response.ok) throw new Error("Error in fetch");
  //       return response.json();
  //     })
  //     .then((response) => {
  //       return "Email sent successfully!";
  //     })
  //     .catch((error) => {

  //       return "An unkown error occured.";
  //     });
  // });
}
