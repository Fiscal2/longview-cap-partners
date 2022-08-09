import { Component, OnInit } from '@angular/core';
import { EmailSenderService } from '../email-sender.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailSender: EmailSenderService) { }

  ngOnInit(): void {
  }

  SendEmail(formDataToEmail: any) {
    this.emailSender.emailBuilder(formDataToEmail).subscribe(email => console.log(email));
    console.log(formDataToEmail);
    // const form = document.querySelector("form") as HTMLFormElement;
    // form.onsubmit = () => {
    //   return false;
    // };
  }
}
