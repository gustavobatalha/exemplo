import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tarefa, TarefaService } from '../../services/tarefa.service'
import { AlertController } from 'ionic-angular'
import {Observable} from 'rxjs/Observable';
import {DetalhePage} from '../detalhe/detalhe'

@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
  providers: [TarefaService]
})
export class TarefasPage {
  
  items: Observable<Tarefa[]>;

  constructor(private tarefaService: TarefaService, 
              public alertCtrl: AlertController,
              public navCtrl: NavController) {
    

  }

  ionViewWillEnter(){
    this.items = this.tarefaService.get();
  }

  itemTapped(tarefa) {
    
    tarefa.checked = !tarefa.checked;
    this.tarefaService.update(tarefa.id, tarefa).subscribe();
    
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
            this.tarefaService.add({title: data.tarefa, checked:false})
              .subscribe(()=> this.items = this.tarefaService.get());
            
          }
        }
      ]
    });
    prompt.present();
  }

  removerTarefa(ev, tarefa: Tarefa){
    this.tarefaService.remove(tarefa.id)
      .subscribe(()=> this.items = this.tarefaService.get());
    ev.stopPropagation();      
  }

  detalhe(ev, tarefa: Tarefa){
    
    this.navCtrl.push(DetalhePage, {tarefa: tarefa});
    ev.stopPropagation();      
  }
}
