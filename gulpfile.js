
/*En el packaje.json tenemos la ubicacion del archivo y donde se van a almacenar los que ya han sido compilados, pero podemos extraer un par de funciones que hacen el mismo proceso. En este caso src busca y accede el archivo y dest es la ubicacion final de los archivos procesados 

"sass": "sass --watch src(src/scss):dest(build/css)"

*/
import {src, dest} from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

//Esto es una tarea. Aca indicamos a gulp con "done" que la tarea ha sido finalizada, de lo contrario nos marcara una advertencia de que no se ha dicho en que momento finaliza esa tarea
export function css( done ) {
    //Aca buscamos el archivo, luego ejecutamos la siguiente funcion a traves de pipes son funciones que toman el flujo de entrada y lo devuelven a otro pipe como salida para mantener el flujo de las tareas. El resultado de una tarea se convierte automáticamente en la entrada de la siguiente tarea
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css'))
    done()
}