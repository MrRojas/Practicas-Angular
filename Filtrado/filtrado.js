angular.module('Lsg', []).controller('filtradoController', filtrado )


function filtrado ($scope , $http ){

	v = this 

	v.titulo = "Registrar Persona"
	v.titulo2 = "Controles para el Filtrado"

	v.footer = "Armando José Rojas Querales - 2018"


	v.ocupacion = [

		{texto : 'Programador'},
		{texto : 'Maestro'},
		{texto : 'Mantenido'}
	];


	v.personas = [
		
		{
			cedula : '26059573',
			nombre : 'Armando',
			apellido: 'Rojas',
			ocupacion_id : 0
		},
		{
			cedula : '12964334',
			nombre : 'Norkis',
			apellido: 'Querales',
			ocupacion_id : 1
		}

	];


	v.asignarNuevaOcupacion = function(){

		v.ocupacion.push({ texto : v.agregarOcupacion   });
		v.agregarOcupacion = ''
	}	


	v.asignarNuevaPersona = function(){

		v.personas.push({ 

			nombre : v.nombre,
			apellido : v.apellido,
			cedula : v.cedula,
			ocupacion_id : v.ocupacion_id 
		 })

		v.nombre = ''
		v.apellido = ''
		v.cedula = ''
		
	}


}
