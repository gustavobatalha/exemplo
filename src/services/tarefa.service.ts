import { Injectable } from '@angular/core'

@Injectable()
export class TarefaService{
    private itens: Tarefa[] = [
        {title: 'Item 1', checked:false},
        {title: 'Item 2', checked:false},
        {title: 'Item 3', checked:false}
    ];

    getItens(){
        return this.itens;
    }
    addTarefa(tarefa: Tarefa){
        this.itens.push(tarefa);
    }

    removerTarefa(tarefa: Tarefa){
        let i = this.itens.indexOf(tarefa);
        if(i > -1){
            this.itens.splice(i,1);
        }
    }
}

export interface Tarefa{
    title: string
    checked: boolean
}