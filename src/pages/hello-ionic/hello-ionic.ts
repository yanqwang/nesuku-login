import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../../pages/login/login';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  username = '';
  email = '';

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }
}
