# Two Way Data Binding

Two Way Data Binding engloba a los otros tipos de bindeo, es decir me permite hacer comunicación en dos vías.


## En el ejercicion en app.module.ts

se debe importar FormsModule, por lo tanto quedaria de la siguiente manera 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// esto se agrega 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // esto se agrega
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

## Ejemplo sencillo 


<input type="text"  placeholder="Ingresa tu Nombre" [(ngModel)]="nombre" >

<h1>
	¡Hola! {{nombre}}
</h1>


## Ejemplo en Clases


<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>

  <h2>
    {{ num1 + num2 }}

  </h2>

<button [disabled]="!listo"  (click)="hacerAlgo()"  > Click Aqui </button>


<hr>

<input type="text"  placeholder="Ingresa tu Nombre" [(ngModel)]="nombre" >
<br>

<h1>
	¡Hola! {{nombre}}
</h1>


</div>