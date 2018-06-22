# ngClass y ngStyle

## ejemplo usado en clases 


	<ng-container *ngFor="let lugar of lugares">
	<li [ngStyle]="{color: (lugar.active) ? 'black' : 'red'  }" >
		{{lugar.nombre}}
	</li>
	</ng-container>