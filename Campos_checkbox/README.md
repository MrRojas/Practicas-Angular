# Trabajando con campos checkbox en AngularJS

Explicaciones y prácticas con campos input checkbox con AngularJS, conociendo las directivas ngChecked, ngTrueValue, ngFalseValue, ngChecked.

En el estilo de aplicaciones que se hacen con AngularJS trabajas de manera intensiva con campos de formulario. Puedes
leer este artículo para aprender todo sobre los checkbox y hacer algún ejemplo práctico.

En Angular los campos input checkbox tienen una serie de directivas que podemos usar:

*	ngModel: indica el nombre con el que se conocerá a este elemento en el modelo/scope.
*	ngTrueValue: La utilizas si deseas asignar un valor personalizado al elemento cuando el campo checkbox está
marcado.
*	ngFalseValue: es lo mismo que ngTrueValue, pero en este caso con el valor asignado cuando el campo no está
"checado".
*	ngChange: sirve para indicar expresiones a realizar cuando se produce un evento de cambio en el elemento. Se
dispara cuando cambia el estado del campo, marcado a no marcado y viceversa. Podemos ejecutar nuestra
expresión o llamar a una función en nuestro scope. 