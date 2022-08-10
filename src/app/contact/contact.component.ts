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
    this.emailSender.emailBuilder(formDataToEmail).subscribe((response) => {
      const alertPlaceholder = document.getElementById('liveAlert');
      const contactForm = document.getElementById('contactForm');

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
    });
  }
}
