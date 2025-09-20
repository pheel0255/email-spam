import { Component } from '@angular/core';
import { Email } from '../../services/email';

@Component({
  selector: 'app-email-checker',
  standalone: false,
  templateUrl: './email-checker.html',
  styleUrl: './email-checker.css'
})
export class EmailChecker {

   emailText: string = '';
  result: any = null;
  loading = false;

  constructor(private emailService: Email) {}

  checkSpam() {
    this.loading = true;
    this.result = null;

    this.emailService.checkSpam(this.emailText).subscribe({
      next: (res) => {
        this.result = res;
        this.loading = false;
      },
      error: (err) => {
        this.result = { error: 'Something went wrong!' };
        this.loading = false;
      }
    });
  }

 refresh() {
  if (confirm('Are you sure you want to clear everything?')) {
    this.emailText = '';
    this.result = null;
    this.loading = false;
  }
}

}
