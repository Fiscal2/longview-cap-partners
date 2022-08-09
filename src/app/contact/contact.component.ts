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
    const form = document.querySelector("form") as HTMLFormElement;
    form.onsubmit = () => {
      const formData = new FormData(form);

      const text = formData.get('name') as string;
      console.log(text);
      console.log(formData);
      return false;
    };
    // form?.addEventListener("submit", (event) => {
    //   // const { name, email, company, message } = event.target as HTMLInputElement;
    //   event.preventDefault();
    //   const emailTarget = event.target;
    //   console.log(event)
    //   console.log(emailTarget)
    // });
  }
}
