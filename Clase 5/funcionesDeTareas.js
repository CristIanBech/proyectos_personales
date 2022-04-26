let fs = require('fs')

function loggearTareas(tareas) {
    for (let i = 0; i < tareas.length; i++) {
        console.log(tareas[i].title, tareas[i].estado)
    }
}

function aniadirTarea(tarea, tareas){
    let nuevaTarea = {
        title: tarea,
        estado: "pendiente"
    }
    tareas.push(nuevaTarea);
    fs.writeFileSync("./tareas.json", JSON.stringify(tareas));
}

function loggearTareasPorEstado(estado, tareas){
    let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);
    loggearTareas(tareasFiltradas);
}

function eliminarTarea(title, tareas){
    let tareaFiltrada = tareas.filter(tarea => tarea.title !== title);
    console.log(tareaFiltrada);
    fs.writeFile("./tareas.json", JSON.stringify(tareaFiltrada), (err) => {
        if(err) console.log(err)
    });
}

function marcarTarea(title, tareas){
    tareas.map( (tarea)=>{
         if (tarea.title === title) tarea.estado = 'terminado';
         return tarea;
    });
    fs.writeFileSync("./tareas.json", JSON.stringify(tareas));
}

module.exports = {loggearTareas, aniadirTarea, loggearTareasPorEstado, eliminarTarea, marcarTarea}