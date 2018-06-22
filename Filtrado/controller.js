   angular.module('armando',[])
   .controller('miControlador', controlador)


 function controlador($scope , $http) {
    

    v = this 

    v.title = 'Uso de Listas'
    v.title2 = 'Orden By'


    v.lista = [

    	{nombre: 'Armando' , status : true },
    	{nombre: 'Norkis' , status : true },
    	{nombre: 'Leonardo' , status : true },
    	{nombre: 'Karyna' , status : false }
    ];


}
    