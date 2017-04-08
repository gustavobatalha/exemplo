import { Component } from '@angular/core'
import { Tarefa, TarefaService } from '../../services/tarefa.service'
import { NavParams, NavController } from 'ionic-angular'
import { Camera } from 'ionic-native'

@Component({
    selector:'pag-detalhe',
    templateUrl:'detalhe.html',
    providers: [TarefaService]
})
export class DetalhePage{
    tarefa: Tarefa;
    constructor(private navParams: NavParams, 
                public tarefaService: TarefaService,
                public navCtrl:NavController){
        this.tarefa = navParams.get('tarefa');        
        console.log(this.tarefa);
    }

    marcar(){
        this.tarefa.checked = !this.tarefa.checked;
        this.tarefaService.update(this.tarefa.id, this.tarefa).subscribe();
    }

    excluir(){
        this.tarefaService.remove(this.tarefa.id)
            .subscribe(()=> this.navCtrl.pop());
    }

    tirarFoto(){
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetHeight: 150,
            targetWidth: 150,
            sourceType: Camera.PictureSourceType.CAMERA

        }).then(imageData => {
            this.tarefa.foto = "data:image/jpeg;base64," + imageData;
            this.tarefaService.update(this.tarefa.id, this.tarefa)
                .subscribe();
        }, err => {
            console.log(err);
        })
    }

}
