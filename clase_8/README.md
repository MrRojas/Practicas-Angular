# ngIf y ng-container

### Directiva ngIf es una directiva estructural, ésta directiva nos permite mostrar elementos de HTML de acuerdo a una condición que definamos.

### ng-container es una etiqueta html utilizada para las directivas, ya que no permite mas de una directiva en una misma etiqueta html 

## Ejemplo de la clase 


export class AppComponent {
  
  title = 'PlatziSquare'; 

  // array que acepta todo tipo de objecto 
  lugares:any = [
    {active: true , nombre : 'Floreria la Gardenia'},
    {active: false , nombre : 'Donas la Pasadita'},
    {active: true , nombre : 'Veterinaria UNEFA'}
  ];

}



<h1>Armando </h1>
<ul>

	<ng-container *ngFor="let lugar of lugares">
	<li *ngIf="lugar.active"  >
		{{lugar.nombre}}
	</li>
	</ng-container>
</ul>