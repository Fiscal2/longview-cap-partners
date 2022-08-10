import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  SendEmail(formDataToEmail: NgForm) {
    this.emailSender.emailBuilder(formDataToEmail.value).subscribe((response) => {
      const alertPlaceholder = document.getElementById('liveAlert');

      const alert = (message: string, type: string) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
        alertPlaceholder?.append(wrapper)
      }

      if (response.status === 200) {
        alert('Email successfully sent!', 'success');
      } else {
        alert('Error sending email, Try Again!', 'danger');
      }
      formDataToEmail.resetForm();
    });
  }
}
