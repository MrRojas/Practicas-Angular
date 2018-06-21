#  Directiva ngInit

Esta directiva nos sirve para inicializar datos en nuestra aplicación, por medio de expresiones que se evaluarán en el
contexto actual donde hayan sido definidas. Dicho de otra manera, nos permite cargar cosas en nuestro modelo, al
inicializarse la aplicación. 

<div ng-app ng-init="miArrayDatos = [];">

Con esto consigues que tu aplicación inicialice en el scope un dato llamado miArrayDatos como un array vacío. Pero no
le prestes demasiada atención al hecho de haber colocado la directiva ngInit dentro de la misma etiqueta que inicializa
la aplicación, pues podría ir en cualquier otra etiqueta de tu HTML. Realmente, colocarla en esa división marcada con
ngApp es considerado una mala práctica. Ten en cuenta lo siguiente cuando trabajes con ngInit:
El único caso apropiado donde se debería de usar ngInit es en enlace de propiedades especiales de ngRepeat. Si lo que
quieres es inicializar datos en tu modelo para toda la aplicación, el lugar apropiado sería en el controlador. Enseguida
vemos un ejemplo de uso apropiado, cuando conozcamos la directiva ngRepeat