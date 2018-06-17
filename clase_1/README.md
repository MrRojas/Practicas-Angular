# Para qué nos sirven los Módulos y Componentes
Los modulos son las piezas mas grandes en las que se puede dividir una aplicación de Angular 4, son piezas que podemos reutilizar dentro de nuestro proyecto pero también podemos usarlas en otros proyectos.
Angular nos ofrece módulos nativos como HTTP, Browser, Forms, Reactive Forms.

## Módulos:

*   Nativos: los propios de Angular 4.
De terceros: realizados por otras personas y que nosotros podemos usar, siendo libres o pago.

*   Propios: los que realicemos.
Para anotar nuestro módulos y además -> src/app/app.module.ts

## Componentes de un modulo: 

*   Imports: módulos externos a importar.
*   Providers: servicios necesarios.
*   Bootstrap: con que componente vamos a iniciar.
*   Un módulo en un app, tiene una entidad propia y puede estar compuesto por más cosas como componentes.

Cada vista debería ser un componente, y está puede o no, componerse por otros componentes, dependiendo de la complejidad, profundidad y la reutilización de código.

Es importante mencionar que en los módulos también se pueden agregar un atributo que se llama entryComponents que sirve para agregar componentes que pueden ser inicializados de forma dinámica

## Al codigo...

*   @NgModule: Palabra reservada para declarar un Modulo, contiene 4 arrays:

declarations: Lista de componentes
imports: Lista de modulos
providers: Lista de servicios
boostrap: Componente de inicio

*   @Component: Palabra reservada para declarar un componente, contiene varios elementos:

selector: Tag de HTML para insertar el componente
templateUrl: Archivo HTML que va a usar el componente
styleUrls: Archivos CSS que usará el template


## Definicion de un componente...

Imagina que tu app funciona para una compañía entera, los de contabilidad usarán la funcionalidad del módulo de contabilidad, los de contratación usarán el módulo de selección y contratación y así con cada área. Estos serían los módulos, grandes piezas de software en las que se dividirá tu app según lo que estés haciendo.

Un componente, es una pieza de código que está dentro de algún módulo, por ejemplo, supongamos que al ingresar al módulo de contabilidad mostrará una página de inicio con las opciones de ese módulo: esa pantalla sería un componente llamado HomeContabilidadComponent (por ejemplo) y en ella tienes un menú con diferentes opciones que redireccionan a otras vistas de ese módulo. Cada vista, es un componente.

Un template, es una “plantilla” de código HTML, cada componente, viene con su propio template de HTML.

