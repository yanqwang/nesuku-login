import { Component } from '@angular/core';
import { AlertController, Loading, LoadingController, IonicPage, NavController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HelloIonicPage } from '../../pages/hello-ionic/hello-ionic';
import { RegisterPage } from '../../pages/register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController ) {
  }

  public createAccount() {
    this.navCtrl.push(RegisterPage);
  }

  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed) {
        this.navCtrl.push(HelloIonicPage);
      }
      else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      }
    );
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait ... ',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
