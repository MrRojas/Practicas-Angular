#  Property Binding

## Property binding es la comunicación desde HTML hacia TypeScript.


### Ejemplo en la view 

<button [disabled]=true > OK </button>

### Ejemplo utlizado en clases 

#### Ubicado en app.component.ts

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

}



<button [disabled]=!listo > OK </button>