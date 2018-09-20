import { TabsPage } from './../tabs/tabs';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    name: 'user',
    pw: 'user'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(){
    this.authProvider.login(this.user.name, this.user.pw)
      .then(success=>{
        if(success){
          this.navCtrl.setRoot(TabsPage);
        }else{
          let alert = this.alertCtrl.create({
            title: 'Login Failed',
            message: 'Please check your credentials',
            buttons: ['OK']
          });
          alert.present();
        }
      })
  }

}
