# ng-Style , ng-Class , Intalando Libreria con NPM...

## En el curso usamos libreria google maps 


### Primero ir al link de la libreria 

https://angular-maps.com/guides/getting-started/

### Instalar con el comando


npm install @agm/core --save


### luego importar las librerias como sale en la documentacion 


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


// esto se copia 
import { AgmCoreModule } from '@agm/core';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // esto se copia
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
    //----------------
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


### Luego buscar la API KEY de esa libreria en 

https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key


https://www.youtube.com/watch?v=FZ1dUklcobk

https://console.developers.google.com/apis/credentials?hl=ES&project=armando-1529633347959


