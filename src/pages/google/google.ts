import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';


@Component({
  selector: 'page-google',
  templateUrl: 'google.html',
  providers: [GooglePlus]
})
export class GooglePage {
  
  perfil: any;

  constructor(private google: GooglePlus, private navParams: NavParams, public navCtrl: NavController) {
  }

  logar() {

    this.google.login({})
      .then((res) => { this.perfil = res})
      .catch(e => console.log('Erro', e));
  }

  sair(){

    this.google.login({})
      .then((res) => { this.perfil = undefined})
      .catch(e => console.log('Erro', e));
      
  }

}
