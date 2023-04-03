function agregarTarea() {
    var nombreTarea = document.getElementById("nombreTarea").value;
    var fechaTarea = document.getElementById("fechaTarea").value;
    var descripcionTarea = document.getElementById("descripcionTarea").value;
    
    var tablaTareas = document.getElementById("tablaTareas");
    var nuevaFila = tablaTareas.insertRow(tablaTareas.rows
    )}

function agregarTarea() {
  var nombreTarea = document.getElementById("nombreTarea").value;
  var fechaTarea = document.getElementById("fechaTarea").value;
  var descripcionTarea = document.getElementById("descripcionTarea").value;
  
  var tablaTareas = document.getElementById("tablaTareas");
  var nuevaFila = tablaTareas.insertRow(tablaTareas.rows.length);

  var celdaID = nuevaFila.insertCell(0);
  celdaID.innerHTML = Math.floor(Math.random() * 30) + 1;

  var celdaNombreTarea = nuevaFila.insertCell(1);
  celdaNombreTarea.innerHTML = nombreTarea;

  var celdaFechaTarea = nuevaFila.insertCell(2);
  celdaFechaTarea.innerHTML = fechaTarea;

  var celdaDescripcionTarea = nuevaFila.insertCell(3);
  celdaDescripcionTarea.innerHTML = descripcionTarea;

  var celdaEstadoTarea = nuevaFila.insertCell(4);
  celdaEstadoTarea.innerHTML = "Pendiente";
}