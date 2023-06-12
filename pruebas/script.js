// Función para agregar una experiencia laboral
function agregarExperiencia() {
  const empresa = document.getElementById('empresa').value;
  const puesto = document.getElementById('puesto').value;
  const periodo = document.getElementById('periodo').value;

  const experienciaHTML = `<div>
    <h3>${empresa}</h3>
    <p>${puesto} (${periodo})</p>
  </div>`;

  document.getElementById('cv-experiencia').insertAdjacentHTML('beforeend', experienciaHTML);

  // Limpiar los campos
  document.getElementById('empresa').value = '';
  document.getElementById('puesto').value = '';
  document.getElementById('periodo').value = '';
}

// Función para agregar una educación
function agregarEducacion() {
  const titulo = document.getElementById('titulo').value;
  const institucion = document.getElementById('institucion').value;
  const anio = document.getElementById('anio').value;

  const educacionHTML = `<div>
    <h3>${titulo}</h3>
    <p>${institucion} (${anio})</p>
  </div>`;

  document.getElementById('cv-educacion').insertAdjacentHTML('beforeend', educacionHTML);

  // Limpiar los campos
  document.getElementById('titulo').value = '';
  document.getElementById('institucion').value = '';
  document.getElementById('anio').value = '';
}

// Función para generar el currículum
function generarCV() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;

  const datosHTML = `<h2>Datos Personales</h2>
    <p>Nombre: ${nombre} ${apellido}</p>
    <p>Email: ${email}</p>`;

  document.getElementById('cv-datos').innerHTML = datosHTML;

  // Mostrar el currículum generado
  document.getElementById('cv-container').classList.remove('hidden');
}

// Asociar el evento de clic al botón "Agregar Experiencia"
document.getElementById('agregar-experiencia-btn').addEventListener('click', agregarExperiencia);

// Asociar el evento de clic al botón "Agregar Educación"
document.getElementById('agregar-educacion-btn').addEventListener('click', agregarEducacion);

// Asociar el evento de clic al botón "Generar Currículum"
document.getElementById('generar-cv-btn').addEventListener('click', generarCV);
