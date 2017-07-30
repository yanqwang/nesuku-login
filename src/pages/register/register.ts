import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials= {email: '', password: ''};

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController) {
  }

  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if(success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      }
      else {
        this.showPopup("Error", "Problem creating account");
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if(this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
