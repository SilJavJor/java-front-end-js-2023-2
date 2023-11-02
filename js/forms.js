/* <script>       */

(function () {
  'use strict'
 
  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll('.needs-validation')
 
  // Recorremos los forms y evitamos en envío sin validacion
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {            
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          alert('Formulario enviado correctamente')
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


/* funcion que permite limpiar el formulario de Bootstrap desde el que se ejecuta el boton Limpiar */
// Obtén todos los botones de limpieza por su clase
var botonLimpiar = document.querySelectorAll(".limpiar");

// Asigna un controlador de eventos a cada botón de limpieza
botonLimpiar.forEach(function(boton) {
    boton.addEventListener("click", function() {
        // Obtiene el formulario asociado al botón de limpieza actual
        let formularioId = this.closest("form");

        // Llama a la función limpiarFormulario y pasa el formulario como argumento
        limpiarFormulario(formularioId);
    });
});

// Función para limpiar el/los formularios de Bootstrap
function limpiarFormulario(formularioId) {
  // Limpia los mensajes de error y clases 'is-invalid'
  let invalidElements = formularioId.querySelectorAll("invalid-feedback");

  invalidElements.forEach(function(invalidElement) {
    // 
    //var feedbackElement = invalidElement. .nextElementSibling;
    //     if (feedbackElement.classList.contains("invalid-feedback")) {
    //         feedbackElement.textContent = ""; // Limpia el contenido del elemento 'invalid-feedback'
    //     }
    //     element.classList.remove("is-invalid"); // Elimina la clase 'is-invalid' del elemento
  });

  // Limpia los valores de los campos de entrada (inputs)
  let inputElements = formularioId.querySelectorAll("input");

  inputElements.forEach(function(inputElement) {
     // Establece el valor del campo de entrada como una cadena vacía
      inputElement.value = "";
  });
}