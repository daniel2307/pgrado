import { User } from './../../models/user';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {

    console.log(this.email, this.password);
    if (!this.email || !this.password) {
      return;
    }
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Datos incorrectos',
      subTitle: 'Los datos ingresados son incorrectos.',
      buttons: ['OK']
    });
    alert.present();
  }

  // loginWithGoogle() {
	// 	this.auth.signInWithGoogle()
	// 		.then(
	// 			() => this.navCtrl.setRoot(HomePage),
	// 			error => console.log(error.message)
	// 		);
	// }

}
