function leerTareas(arregloDeTareas) {
  arregloDeTareas.forEach((tareas) => {
    console.log(tareas.Titulo);
  });
}

function agregarTareas() {}
function borrarTareas() {}
function filtrarTareas() {}

module.exports = { leerTareas, agregarTareas, borrarTareas, filtrarTareas };
