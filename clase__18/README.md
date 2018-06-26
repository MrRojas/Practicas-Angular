# Query en los parametros 

## Paso 1: Implementar el query en donde se encuenta la directiva routerLink , ejemplo: 


    <div  class="container">
    
    <ul  class="collection" >
    
      
    
    <ng-container *ngFor="let lugar of lugares">
    
      
    
    <li *ngIf="lugar.active"  class="collection-item" >
    
    <a  routerLink="/detalle/{{lugar.id}}" [queryParams]="{action:'views', find:'google' }" > {{lugar.nombre}} </a>
    
    </li>
    
    </ng-container>
    
      
    
    </ul>
    
    </div>


## En el componente se utiliza asi :

    export  class  DetalleComponent {
    
    id:  any  =  ''
    
    query  :  any  =  ''
    
    constructor(private  route:ActivatedRoute ){
    
    this.id =  this.route.snapshot.params['id']
    
    this.query  =  this.route.snapshot.queryParams;
    
      
    
    console.log(this.route.snapshot.queryParams['action'])
    
    console.log(this.route.snapshot.queryParams['find'])
    
      
    
      
    
    }

