import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  email = ''
  password = ''

  ngOnInit() {
  }

  x(value: string){
    alert(value)
  }
}