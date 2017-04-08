import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
  providers: [Facebook]
})
export class FacebookPage {

  permissoes = ['public_profile', 'user_friends', 'email', 'user_about_me'];
  loginResponse: FacebookLoginResponse;
  perfil: any;

  constructor(private fb: Facebook, private navParams: NavParams, public navCtrl: NavController) {
  }

  logar() {
    this.fb.login(this.permissoes)
      .then((res: FacebookLoginResponse) => {
        this.loginResponse = res;
        this.fb.api('/me?fields=picture,name', this.permissoes).then((o) => {
          this.perfil = o;
        });
      }).catch(e => console.log('Erro', e));
  }

  sair(){
      this.fb.logout()
      .then(()=>{
          this.perfil = undefined;
          this.loginResponse = undefined;
      }).catch(e => console.log('Erro', e));
  }

}
