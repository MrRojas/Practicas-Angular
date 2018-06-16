# Debo destacar que con el uso de la etiqueta ng-controller estamos creando un nuevo

scope para su ámbito cada vez que es usada. Lo anterior, significa que cuando existan
tres controladores diferentes cada uno tendrá su propio scope y no será accesible a las
propiedades de uno al otro. Por otra parte, los controladores pueden estar anidados unos
dentro de otros, de esta forma también obtendrán un scope nuevo para cada uno, con la
diferencia de que el scope del controlador hijo tendrá acceso a las propiedades del padre
en caso de que no las tenga definidas en sí mismo.
