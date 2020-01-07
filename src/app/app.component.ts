import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homekrafts';
  constructor(private router:Router) {

  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
