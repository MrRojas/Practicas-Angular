# Host Listener

Los host listeners nos ayudan a escuchar los eventos de manera muy sencilla, tiene tres parámetros, el evento, el objetivo del evento y el código a ejecutar cuando se ejecute el evento.


## Paso 1: importar HostListener

import {Directive , HostListener } from "@angular/core"

## paso 2: Colocar el selector 

@Directive({
	selector: 'a[contar-clicks]'
})

## Paso 3: Exportar la clase 

export class ContarClciksDirective{
	
	Click = 0;


}

## Paso 4: dentro de la exportacion de la clase debemos agregar el elemento @HostListener 

el cual posee 3 parametros: 

*	evento (click, mouseover , ... )

*	Arreglo del objecto a interactuar, para el ejercicio se uso ['$event.target']

*  Evento a disparar, en el ejemplo se usa onClick 


@HostListener('click' , [$event.target] ). onClock(btn){
	
}


## Paso 5: Declararlo en app.module 

## Ejemplo de la clase 


import { Directive , HostListener } from '@angular/core';

@Directive({
  selector: 'a[contar-clicks]'
})
export class ContarClicksDirective {
 
 click = 0; 
 @HostListener('click'  ) onClick(btn){

 	alert(this.click++);
 	
 }
  constructor() { }

}

##################################



	<ng-container *ngFor="let lugar of lugares" [ngSwitch]="lugar.cercania">
	
	<li  [resaltar]="lugar.plan"  >
		<a contar-clicks >
		{{lugar.nombre}}
		
		<span *ngSwitchCase="1" [ngStyle]=" {color: 'green'}  "> Muy Cerca   </span>
		<span *ngSwitchCase="2" [ngStyle]=" {color: 'black'}  "> Cerca  </span>
		<span *ngSwitchCase="3" [ngStyle]=" {color : 'red'}  "> Lejos   </span>
</a>
	</li>
	
	</ng-container>

##################################



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

// directiva 
import { ResaltarDirectiva } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirectiva,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIz'
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }