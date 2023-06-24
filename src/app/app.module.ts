import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DospuntosComponent } from './formularios/dospuntos/dospuntos.component';
import { MenuComponent } from './formularios/menu/menu.component';
import { ResistenciasComponent } from './formularios/resistencias/resistencias.component';

@NgModule({
  declarations: [
    AppComponent,
    DospuntosComponent,
    MenuComponent,
    ResistenciasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
