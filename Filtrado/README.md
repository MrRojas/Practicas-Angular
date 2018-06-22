# El filtrado 

## nos sirve para hacer una búsqueda dentro de los elementos de la colección que tenemos en un array o en un objeto en nuestro modelo. 


## Se indica con la palabra filter, seguida por ":" y la cadena o variable donde está la cadena que nos sirve para filtrar.

ng-repeat="cerveza in vm.cervezas | filter:'pale' "
Esto nos mostrará solo aquellas cervezas que tienen la palabra "pale" escrita por algún lado. Por supuesto, en lugar de un literal de cadena para el filtrado, puedes usar una variable de tu modelo. 


## Orden de los elementos en la repetición

Ahora veamos cómo expresar el orden de visualización de los elementos en la repetición. Para ello usamos la palabra
"ordenBy", seguido de ":" y el campo sobre el que se debe ordenar. Opcionalmente colocamos después si el orden es
ascendente o descendente.
ng-repeat="cerveza in vm.cervezas | orderBy:'name':true"


## Variables de la repetición en el scope local


Como hemos dicho existe un scope local que nos expone el elemento actual de nuestra repetición. Pero además tenemos
una serie de variables que AngularJS nos ofrece de manera adicional. Son variables que resultarán muy útiles para tus
necesidades habituales en recorridos.
Por ejemplo en el scope actual tenemos la variable $index, que nos indica el índice actual en la iteración. El primer
índice recuerda que es cero, el segundo será uno, etc. Para mostrar ese índice hacemos como con cualquier otro dato que
exista en el scope, meterlo dentro de una expresión encerrada con dobles llaves.


<p ng-repeat="elem in elementos">
 El elemento actual es {{ $index }} y su valor es {{ elem }}
</p>

### Junto con el $index, este es el conjunto de variables inyectadas automáticamente en el scope local:

*	$index, numércico. Es el índice de la iteración.
*	$first, boleano, tendrá el valor true para el primer elemento de la iteración.
*	$middle, boleano, será true en los elementos que no sean primero o último.
*	 $last, boleano, solo será true en el último elemento.
*	$even, boleano, será true en caso que ese elemento sea impar en la lista de repetición.
*	$odd, boleano, será true en caso que el elemento sea de índice par
