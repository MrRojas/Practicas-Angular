# Directivas en Angular 4,  ngFor

Las directivas son una forma elegante y rápida de manipular la información, contamos con 3 tipos de directivas:

*	COMPONENTES: Son directivas que siempre tienen asignados templates de HTML.

*	ESTRUCTURALES: Nos permiten modificar el DOM, es decir manipular elementos de HTML.

*	ATRIBUTOS: A estas directivas les indicamos a través de HTML cómo se deben comportar de acuerdo con ciertas condiciones que definimo


## Ejemplo en clase 


export class AppComponent {
  
  title = 'PlatziSquare'; 

  // array que acepta todo tipo de objecto 
  lugares:any = [
    {nombre : 'Floreria la Gardenia'},
    {nombre : 'Donas la Pasadita'},
    {nombre : 'Veterinaria UNEFA'}
  ];

}


<h1>Armando </h1>
<ul>
	<li *ngFor="let lugar of lugares">
		{{lugar.nombre}}
	</li>
</ul>