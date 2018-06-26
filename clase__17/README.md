# Usando routerLink para hacer SPA y Resaltando el link activo con CSS para indicar visualmente en que componente nos encontramos

##  Ejemplo 

    <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">PlatziSquare!</a>
    
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li routerLinkActive="active" ><a routerLink="detalle" class="waves-effect waves-light"  > Detalle </a></li>
            <li routerLinkActive="active" ><a routerLink="lugares" class="waves-effect waves-light"  > Lugares  </a></li>
            
          </ul>
        </div>
      </nav>


# Url con parametros 

## Paso 1 : Agregar dentro de las rutas el parametro con ':' ejemplo: 

    { path : 'lugares/:id' , component : LugaresComponent },        


## Paso 2: Capturar el parametro en el constructor del componente e importar la clase ActivatedRoute ejemplo: 


import { ActivatedRoute } from '@angular/router';

## Paso 3: Recibirlo en el constructor de la clase que se exporta 

     export class DetalleComponent {
      id: any = ''
     constructor(private route:ActivatedRoute  ){
       this.id = this.route.snapshot.params['id']
     } 
    }     	  

## Ejemplo en clase 

### detalle.components.ts 
    import { Component } from  '@angular/core';
    
    import { ActivatedRoute } from  '@angular/router';
    
      
    
    @Component({
    



    selector: 'app-detalle',
    
    templateUrl: './detalle.component.html'
    
    })
    
    export  class  DetalleComponent {
    
    id:  any  =  ''
    
      
    
    constructor(private  route:ActivatedRoute ){
    
    this.id =  this.route.snapshot.params['id']
    
      
    
      
    
     }
    }

### detalle.component.html

    <div  class="container">
    
    <div  class="row">
    
    <ng-container *ngFor="let lugar of lugares" >
    
    <ng-container *ngIf="lugar.id == id " >
    
    <h1  class="center-align"> {{lugar.nombre}}</h1>
    
    </ng-container>
    
    </ng-container>
    
    </div>
    
    </div>


