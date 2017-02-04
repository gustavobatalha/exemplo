import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tarefa, TarefaService } from '../../services/tarefa.service'
import { AlertController } from 'ionic-angular'

@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
  providers: [TarefaService]
})
export class TarefasPage {
  
  items: Tarefa[];

  constructor(private tarefaService: TarefaService, public alertCtrl: AlertController) {
    this.items = tarefaService.getItens();

  }

  itemTapped(event, item) {
    
    item.checked = !item.checked;
    
  }

  addTarefa(){
    let prompt = this.alertCtrl.create({
      title: 'Adicionar Tarefa',
      inputs: [{name:'tarefa',placeholder:'Digite sua tarefa'}],
      buttons:[
        {text: "Cancelar"},
        {
          text:"Salvar",
          handler: data => {
            this.tarefaService.addTarefa({title: data.tarefa, checked:false}) ;
            this.items = this.tarefaService.getItens();
          }
        }
      ]
    });
    prompt.present();
  }
}
