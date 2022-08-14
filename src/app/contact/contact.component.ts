import { HttpResponse } from '@angular/common/http';
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

  OnSubmit(emailForm: NgForm) {
    this.FormButton('on');
    this.SendEmail(emailForm);
  }

  FormButton(status: string) {
    const submitButton = document.getElementById('submitBtn');
    const loadingSpinner = document.getElementById('loadSpin');
    if (status == 'on') {
      loadingSpinner?.classList.remove('d-none');
      submitButton?.classList.add('disabled');
    } else {
      loadingSpinner?.classList.add('d-none');
      submitButton?.classList.remove('disabled');
    }
  }

  AlertBuilder(message: string, type: string) {
    const alertPlaceholder = document.getElementById('liveAlert');
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
      `   <div>${message}</div>`,
      '   <button id="close" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
    alertPlaceholder?.append(wrapper);
  }

  ShowAlert(form: NgForm, httpResponse: HttpResponse<any>) {
    if (httpResponse.status === 200) {
      this.AlertBuilder('Email successfully sent!', 'success');
    } else {
      this.AlertBuilder('Error sending email, Try Again!', 'danger');
      console.error(httpResponse);
    }
    form.resetForm();
    setTimeout(() => {
      document.getElementById("close")?.click();
    }, 6000);
  }

  SendEmail(emailData: NgForm) {
    this.emailSender.emailBuilder(emailData.value).subscribe((response) => {
      this.ShowAlert(emailData, response);
      this.FormButton('off');
    });
  }
}
