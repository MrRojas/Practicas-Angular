
//Todo esto se lo puede ver en https://www.npmjs.com/package/angular2-materialize

//Luego de haber instalado anguar 4 con angular cli intalamos estos paquetes :

    npm install materialize-css --save
    
    npm install angular2-materialize --save
    
    npm install jquery@^2.2.4 --save
    
    npm install hammerjs --save

// Ahora anadimos algunas lineas en nuestra configuracion de .angular-cli.json

    "styles": [
    
    "styles.css",
    
    "../node_modules/materialize-css/dist/css/materialize.css" // se anade esto
    
    ],
    
    "scripts": [
    
    "../node_modules/jquery/dist/jquery.js", // esto se anade
    
    "../node_modules/hammerjs/hammer.js",// esto se anade
    
    "../node_modules/materialize-css/dist/js/materialize.js"// esto se anade
    
    ],

//Ahora en app.mudule.ts anadimos el siguiente import :

    import { MaterializeModule } from 'angular2-materialize';

// y tambien o agregamos al import del @NgModule

// y por ultimo agregamos esta linea al index.html principal

    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
