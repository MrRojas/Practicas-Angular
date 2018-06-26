# Router en Angular 4 

## Paso 1: Definir rutas en App.module.ts y tambien importar la clase asi: 

import { Routes } from '@angular/router';

const appRoutes : Routes;


## Paso 2: Definir las rutas en la constante declarada

const appRoutes : Routes = [ 
  { path : '' , component : AppComponent }
  { path : 'lugares' , component : AppComponent }

];

## Paso 3: Para que funcione con mas de 2 componentes 


## En la clase para practicar las rutas se creo 2 nuevo componentes 

### Importar Router Module en app.module 

import { Routes , RouterModule } from '@angular/router';

### En ngModule, en la key imports agregar 

RouterModoule.forRoot(appRoutes)

#### Donde appRoutes es una constante declarada 

### Dentro de app.components.html anexar la etiqueta 

<router-outlet> </router-outlet>

#### Dentro de esa etiqueta de carga los componentes 


## Paso 4: Para Crear componentes, dentro de app se crea una carpeta con el nombre del componente

### En la clase el nombre del componente a crear se nombro 'detalle' 

por lo tanto la carpeta se nombro asi, y el html detalle.component.html y el typescript detalle.component.ts 



## Ejemplo en clase: 


### app.module 


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// componentes 
import { AppComponent } from './app.component';

import { DetalleComponent } from './detalle/detalle.component';

// google maps

import { AgmCoreModule } from '@agm/core';

// directiva 
import { ResaltarDirectiva } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes , RouterModule } from '@angular/router';

const appRoutes : Routes = [ 
  { path : '' , component : AppComponent }
  { path : 'lugares' , component : AppComponent }
  { path : 'detalle' , component : DetalleComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ResaltarDirectiva,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPoZ87fQAyXWN9mEudB9OaZ7E7RBlwvyw'
    }),
     RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


### detalle.component.html 

<h1> detalle </h1>


### detalle.component.ts


import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
  
})
export class DetalleComponent {
  
}


### app.component.html 


<h1>Armando </h1>

<agm-map [latitude]="lat" [longitude]="lng">
  <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
</agm-map>



<hr>

<router-outlet> </router-outlet>


<div class="container">
<ul class="list-group" >

	<ng-container *ngFor="let lugar of lugares">
	<li *ngIf="lugar.active"  class="list-group-item"  >
		{{lugar.nombre}}
	</li>
	</ng-container>
</ul>
</div>






