import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TarefasPage } from '../pages/tarefas/tarefas';
import {DetalhePage} from '../pages/detalhe/detalhe'

@NgModule({
  declarations: [
    MyApp,
    TarefasPage,
    DetalhePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TarefasPage,
    DetalhePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
