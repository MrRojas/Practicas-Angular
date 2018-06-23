# Host Binders

### Host Binding nos permite editar elementos del DOM o el HTML al que esté asignado desde nuestra directiva. Recibe el atributo del HTML que queremos resaltar.


### ejemplo en clase


import { Directive , HostListener , HostBinding } from '@angular/core';

@Directive({
  selector: 'li[contar-clicks]'
})
export class ContarClicksDirective {
 
 click = 0; 

 @HostBinding('style.opacity') opacidad: number = .1; 

 @HostListener('click'  ) onClick(btn){

  this.opacidad += .1;
  
 }
  constructor() { }

}