// webpack.mix.js
let mix = require('laravel-mix');	

/* Prende Laravel Mix e lo salva all’interno della variabile mix */

mix

// .js('src/app.js', 'js') // Prende il file dalla cartella search, lo compila e mette il nuovo in dist\js
.ts('./src/index.ts', 'js')
.sass ('style.scss', 'css')
.setPublicPath('public')


/* Importante: disabilita la compilazione automatica degli url immagine */

.options({
    processCssUrls: false
})


mix.disableNotifications();