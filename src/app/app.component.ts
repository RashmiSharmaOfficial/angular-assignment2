import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2';
  buttonClick() {
    alert('clicked')
  }

  bColor = true;
  changeToPink() {
    this.bColor = true;
  }
  changeToOrange() {
    this.bColor = false;
  }

  //------------- ngStyle
  strColor = "green";
  strFontSize = "20";

  //------------- ngFor
  userList = [
    { uid: 1, name: 'alex', pwd: 'abc' },
    { uid: 2, name: 'john', pwd: '12c' },
    { uid: 3, name: 'sima', pwd: '123' },
    { uid: 4, name: 'oogy', pwd: '56y' },
    { uid: 5, name: 'payal', pwd: '78gh' }

  ]

  //------------- ngFor
  empList = [
    { eid: 1, ename: 'alexa', dept: 'ece', designation: 'hr', location: 'delhi' },
    { eid: 2, ename: 'johns', dept: 'cse', designation: 'tr', location: 'srinagar' },
    { eid: 3, ename: 'seema', dept: 'me', designation: 'hr', location: 'rajasthan' },
    { eid: 4, ename: 'oogy', dept: 'eee', designation: 'manager', location: 'maharastra' },
    { eid: 5, ename: 'payal', dept: 'cse', designation: 'tech', location: 'up' }

  ]

  auth = false;
  msgColor = "red"
  message: string = "";
  logOreg: string = "Login";
  btnStatus: string = "Login"
  userName: string = "Username";
  userPwd: string = "Password"
  linkMsg: string = "Register now!"
  verify(username: string, password: string) {
    if (username == 'Rashmi' && password == 'password') {
      this.auth = true;
      this.message = "Valid user"
      this.logOreg = "Login"
      this.msgColor = "green"
      this.linkMsg = "Register now!"

    }
    else {
      this.auth = false;
      this.message = "Invalid user"
      this.msgColor = "red"
      this.linkMsg = "Register now!"

    }
  }

  regis() {
    this.logOreg = "Register Now"
    this.userName = "Full Name"
    this.userPwd = "Password"
    this.btnStatus = "Register"
    this.linkMsg = "Login now!"
  }


  //------------ ngIF
  bMorning = false;
  bEvening = false;
  goodMorning() {
    this.bMorning = true
    this.bEvening = false
  }
  goodEvening() {
    this.bMorning = false
    this.bEvening = true
  }

  // //ngSwitch
  // strData = 1
}
