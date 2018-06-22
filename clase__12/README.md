# Creacion de Directivas 

## Paso 1 por convencion dentro de la carpeta src/app crear una carpeta, nombrarla como directives

## Paso 2 crear el archivo con la directiva, ejemplo: resaltar.directive.ts

## Paso 3 dentro del archivo se debe importar directive asi:

import {Directive} from '@angular/core'

@Directive({
	
})

## Luego Exportamos para ser usado y a su vez importamos la clase OnInit para arrancar la aplicacion, por lo tanto quedaria asi: 


import {Directive , OnInit} from '@angular/core'

@Directive({
	
})

export class ResaltarDirectiva implements OnInit{
	
	constructor(){

	}


	ngOnInit(){

	}
}

## Paso 4: Vamos a manipular el DOM, y esto se realiza a traves de ElementRef por lo tanto debemos importarla y agregarla al constructor dentro de la exportacion


import {Directive , OnInit , ElementRef} from '@angular/core'

@Directive({
	
})

export class ResaltarDirectiva implements OnInit{
	
	constructor(private elRef: ElementRef){

	}


	ngOnInit(){

	}
}

## Paso 5: Para manipular los elementos CSS usamos Renderer2 por lo tanto queda asi 


import {Directive , OnInit , ElementRef , Renderer2} from '@angular/core'

@Directive({
	selector: '[resaltar]'
})

export class ResaltarDirectiva implements OnInit{
	
	constructor(private elRef: ElementRef , private renderer : Renderer2 ){

	}


	ngOnInit(){

	}
}


## Paso 6 Agregar Funcionalidad en la cual podemos destacar ciertos metodos como son:

*	this.renderer.setStyle(this.elRef.nativeElement /*elemento*/ , 'background: /*atributo*/ , 'red' /*valor*/  )



### tambien debemos importar Input para seleccionar el elemento 


import {Directive , OnInit , ElementRef , Renderer2, Input} from '@angular/core'

@Directive({
	selector: '[resaltar]'
})

export class ResaltarDirectiva implements OnInit{
	
	@Input('resaltar') plan : string = ''



	constructor(private elRef: ElementRef , private renderer : Renderer2 ){}

	ngOnInit(){
		if (this.plan === 'pagado'){

			this.renderer.setStyle(this.elRef.nativeElement, 'background' , 'green')
		}
	}
}


## Paso 7: Para usar nuestra nueva directiva debemos ir a app.module.ts para importar esta nueva directiva de esta forma: 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

// directiva 
import { ResaltarDirectiva } from './directives/resaltar.directive';

@NgModule({
  declarations: [
    AppComponent,

	// directiva 

    ResaltarDirectiva
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPoZ87fQAyXWN9mEudB9OaZ7E7RBlwvyw'
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }