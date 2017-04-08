import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TarefasPage } from '../pages/tarefas/tarefas';
import {DetalhePage} from '../pages/detalhe/detalhe';
import { FacebookPage } from '../pages/facebook/facebook';
import { GooglePage } from '../pages/google/google';

@NgModule({
  declarations: [
    MyApp,
    TarefasPage,
    DetalhePage,
    FacebookPage,
    GooglePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TarefasPage,
    DetalhePage,
    FacebookPage,
    GooglePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
