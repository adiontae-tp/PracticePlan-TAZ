import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../app.module';
import { StoreService } from '../services/store.service';

@Injectable({
  providedIn: 'root' 
})
export class InitGuard implements CanActivate {
  constructor(
    private store: StoreService,
    private navCtrl: NavController
  ) { }

  async canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      var user = this.store.user.getValue();
      if (user.uid) {
        return resolve(true)
      } else {
        onAuthStateChanged(auth, async user => {
          if (user) {
            await this.store.init(user.uid);
            return resolve(true)
          } else {
            this.navCtrl.navigateRoot('/login')
            return resolve(false)
          }
        })
      }
    })
  }

}
