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