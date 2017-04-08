import { Injectable } from '@angular/core'
import {RESTClient, BaseUrl, DefaultHeaders, Produces, GET, DELETE, POST, PUT, Path, Body } from 'ng2-http'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable';


@Injectable()
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
@BaseUrl('http://192.168.207.89:3000/tarefas')
export class TarefaService extends RESTClient{

    constructor(http:Http){ super(http)}

    @GET('/')
    @Produces<Tarefa[]>()
    get(): Observable<Tarefa[]> {return null;}

    @DELETE('/{id}')
    remove( @Path('id') id: number ):Observable<any> {return null;}

    @POST('/')
    @Produces<Tarefa>()
    add( @Body tarefa: Tarefa ):Observable<Tarefa>{return null}

    @PUT('/{id}')
    @Produces<Tarefa>()
    update( @Path('id') id: number, @Body tarefa: Tarefa):Observable<Tarefa>{ return null }
}

export interface Tarefa{
    id?: number,
    title: string
    checked: boolean,
    foto?: string

}