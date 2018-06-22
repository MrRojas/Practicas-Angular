# Directiva ngSwitch

## Ejemplo usado en clases 




<ul>

	<ng-container *ngFor="let lugar of lugares" [ngSwitch]="lugar.cercania" >
	<li>
		{{lugar.nombre}}
		
		<span *ngSwitchCase="1" [ngStyle]=" {color: 'green'}  "> Muy Cerca   </span>
		<span *ngSwitchCase="2" [ngStyle]=" {color: 'black'}  "> Cerca  </span>
		<span *ngSwitchCase="3" [ngStyle]=" {color : 'red'}  "> Lejos   </span>

	</li>
	</ng-container>
</ul>



  lugares:any = [
    { cercania: 1, distancia: 1,    active: true ,  nombre : 'Floreria la Gardenia'},
    { cercania: 1, distancia: 1.8,  active: false , nombre : 'Donas la Pasadita'},
    { cercania: 2, distancia: 5,    active: true ,  nombre : 'Veterinaria UNEFA'},
    { cercania: 3, distancia: 10,   active: true ,  nombre : 'Peluqueria UNEFA'},
    { cercania: 3, distancia: 35,   active: true ,  nombre : 'Confiteria UNEFA'},
    { cercania: 2, distancia: 120,  active: true ,  nombre : 'Planta Industrial UNEFA'}
  ];