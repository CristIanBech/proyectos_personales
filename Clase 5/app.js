let funciones = require('./funcionesDeTareas')
let tareas = require('./tareas.json');




[, , operacion, argumento2] = process.argv;

if (operacion === 'loggear'){
    funciones.loggearTareas(tareas);
}else if(operacion === 'añadir'){
    funciones.aniadirTarea(argumento2, tareas);
}else if (operacion === 'filtrar'){
    funciones.loggearTareasPorEstado(argumento2, tareas);
}else if (operacion === 'borrar'){
    funciones.eliminarTarea(argumento2, tareas);
}else if(operacion === 'marcar'){
    funciones.marcarTarea(argumento2, tareas);
} 