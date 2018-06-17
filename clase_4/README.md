# Event Binding

Event binding funciona de forma muy similar a property binding es decir comunicamos información desde HTML hacia TypeSCript con la diferencia de que ahora vamos a esperar una acción especifica del usuario, por ejemplo un clic

## Ejemplo sencillo 

<button (click)="hacerAlgo()"  > Click Aqui </button>

export class AppComponent {
  
  hacerAlgo(){

  	alert('Que lastima me dolio, me despido de ti y me voy...')
  }

}




## Ejemplo en clase dentro de app.component.html y app.components.ts 

<button [disabled]="!listo"  (click)="hacerAlgo()"  > Click Aqui </button>


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Platzi Square';

  num1 = 5 
  num2 = 3
  // variable de control para el boton
  listo = false

  constructor(){

  	setTimeout( ()=>{
  		this.listo = true 
  	}, 3000)
  }


  hacerAlgo(){

  	alert('Que lastima me dolio, me despido de ti y me voy...')
  }

}