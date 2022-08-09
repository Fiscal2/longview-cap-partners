import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.SendEmail();
  }

  SendEmail() {
    const form = document.querySelector("form") as HTMLInputElement | null;
    form?.addEventListener("submit", (event) => {
      // const { name, email, company, message } = event.target as HTMLInputElement;
      event.preventDefault();
      const emailTarget = event.target as HTMLInputElement;
      console.log(event)
      console.log(emailTarget.value)
    });
  }
}
