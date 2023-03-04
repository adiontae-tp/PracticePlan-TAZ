import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'src/app/app.module';
import { User } from 'src/app/classes/user';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private fs: FirestoreService,
  ) { }

  email = ''
  password = ''
  fname = ''
  lname = ''
  isLoading = false;
  ngOnInit() {
  }

  register() {
    this.isLoading = true
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(async (result) => {
        var user = new User();
        user.fname = this.fname;
        user.lname = this.lname;
        user.email = this.email;
        user.path = 'users/' + result.user.uid;
        user.uid = result.user.uid
        await this.fs.addUser(user);
        this.isLoading = false
        this.navCtrl.navigateForward('/')

      }).catch(error => { alert(error.message); this.isLoading = false })
  }
}
