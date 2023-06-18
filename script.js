/*variables generarles que hacen referencia a cada proyecto*/
var projects1 = document.getElementById("projects1");
var projects2 = document.getElementById("projects2");

/*ajustar las anclas por el menu de nav fijado*/
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    var targetOffset = targetElement.offsetTop;

    window.scrollTo({
      top: targetOffset - 110,
      behavior: 'smooth'
    });
  });
});

/*----------------------------------función lista tareas-----------------------------------------------*/
var taskForm = document.getElementById('taskForm');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');
var tareas = document.getElementById('tareas');
var app_tareas = document.getElementById('app-tareas');
var button_tareas = document.getElementById('button-tareas-volver');

/*mostrar proyecto tareas*/
tareas.addEventListener('click', () => {
  if (window.innerWidth < 1000) {
    projects1.style.display = "none";
    projects2.style.display = "none";

  }
  app_tareas.style.display = "block"
})

/*ocular div tareas*/
button_tareas.addEventListener('click', () => {
  app_tareas.style.display = "none";
  if (window.innerWidth < 1000) {
    projects1.style.display = "block"
    projects2.style.display = "block"
  }
})
/*funcionamiento tareas*/
let tasks = [];
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(function (task) {
    var taskItem = document.createElement('div');
    taskItem.classList.add('task');
    var taskContent = document.createElement('div');
    taskContent.classList.add('task-text');
    taskContent.textContent = task.description;
    var taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    var editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('actions')
    editButton.addEventListener('click', function () {
      editTask(task);
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.classList.add('actions')
    deleteButton.addEventListener('click', function () {
      deleteTask(task);
    });

    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);
  });
}
function editTask(task) {
  Swal.fire({
    title: 'Editar tarea',
    input: 'text',
    inputValue: task.description,
    showCancelButton: true,
    confirmButtonText: 'Guardar cambios',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      var newDescription = result.value;
      task.description = newDescription;
      renderTasks();
    }
  });
}
function deleteTask(task) {
  Swal.fire({
    title: 'Confirmar eliminación',
    text: '¿Estás seguro de que deseas eliminar esta tarea?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      var taskIndex = tasks.indexOf(task);
      if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
      }
    }
  });
}

taskForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var taskDescription = taskInput.value.trim();
  if (taskDescription !== '') {
    var taskId = tasks.length + 1;
    var task = {
      id: taskId,
      description: taskDescription,
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
});

/*-----------------app contraseñas-----------------------------*/

var pswd = document.getElementById('pswd');
var app_pswd = document.getElementById('app-pswd');
var button_pswd = document.getElementById('button-pswd-volver');


/*mostrar proyecto contraseñas*/
pswd.addEventListener('click', () => {
  if (window.innerWidth < 1000) {
    projects1.style.display = "none";
    projects2.style.display = "none";
  }
  app_pswd.style.display = "block"
})

/*ocular div contraseñas*/
button_pswd.addEventListener('click', () => {
  app_pswd.style.display = "none";
  if (window.innerWidth < 1000) {
    projects1.style.display = "block"
    projects2.style.display = "block"
  }
})

/*Funciones generador contraseña*/
function generarContrasena(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
  var caracteres = '';
  var contrasena = '';

  if (incluirMayusculas) {
    caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (incluirMinusculas) {
    caracteres += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (incluirNumeros) {
    caracteres += '0123456789';
  }
  if (incluirSimbolos) {
    caracteres += '!@#$%^&*()-_=+';
  }

  for (let i = 0; i < longitud; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indice);
  }
  return contrasena;
}

function generarContrasenaSegura() {
  var longitudContrasena = parseInt(document.getElementById('length').value);
  var incluirMayusculas = document.getElementById('uppercase').checked;
  var incluirMinusculas = document.getElementById('lowercase').checked;
  var incluirNumeros = document.getElementById('numbers').checked;
  var incluirSimbolos = document.getElementById('symbols').checked;

  var contrasenaGenerada = generarContrasena(longitudContrasena, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);
  document.getElementById('password').value = contrasenaGenerada;
}
document.getElementById('generate-btn').addEventListener('click', generarContrasenaSegura);

/*********************************app-cv**********************************************/

var cv = document.getElementById('cv');
var app_cv = document.getElementById('app-cv');
var button_cv = document.getElementById('button-cv-volver');

/*mostrar proyecto cv*/
cv.addEventListener('click', () => {
  if (window.innerWidth < 1000) {
    projects1.style.display = "none";
    projects2.style.display = "none";
  }
  app_cv.style.display = "block"
})

/*ocular div cv*/
button_cv.addEventListener('click', () => {
  app_cv.style.display = "none";
  if (window.innerWidth < 1000) {
    projects1.style.display = "block"
    projects2.style.display = "block"
  }
})
document.getElementById("resume-form").addEventListener("submit", function (event) {
  event.preventDefault();
  generateResume();
});

function generateResume() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var experience = document.getElementById("experience").value;
  var education = document.getElementById("education").value;
  var skills = document.getElementById("skills").value;

  document.getElementById("name-section").textContent = name.toUpperCase();
  document.getElementById("contact-section").textContent = email;
  document.getElementById("contact-phone-section").textContent = phone;
  document.getElementById("experience-section").textContent = experience;
  document.getElementById("education-section").textContent = education;
  document.getElementById("skills-section").textContent = skills;

  document.getElementById("generated-resume").style.display = "block";
}

/*------------------------------------app-clima-----------------------------------------*/
var clima = document.getElementById('clima');
var app_clima = document.getElementById('app-clima');
var button_clima = document.getElementById('button-clima-volver');
var searchButton = document.getElementById('search-btn');
var city = document.getElementById('city-select');
var climaInfo = document.getElementById('clima-info');
var apiKey = '06d16ba065d8e818a62f6b48ae807d1c';

/*mostrar proyecto clima*/
clima.addEventListener('click', () => {
  if (window.innerWidth < 1000) {
    projects1.style.display = "none";
    projects2.style.display = "none";
  }
  app_clima.style.display = "block"
})

/*ocular div clima*/
button_clima.addEventListener('click', () => {
  app_clima.style.display = "none";
  if (window.innerWidth < 1000) {
    projects1.style.display = "block"
    projects2.style.display = "block"
  }
})

/*llamada api tiempo*/
searchButton.addEventListener('click', () => {
  if (city) {
    getWeatherData(city.value);
  }
});

/*función consulta tiempo*/
function getWeatherData(location) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location},ES&appid=${apiKey}&lang=ES`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var weatherDescription = data.weather[0].description;
      var temperature = Math.round(data.main.temp - 273.15);
      var humidity = data.main.humidity;

      var weatherData = `Descripción: ${weatherDescription}<br>
                             Temperatura: ${temperature}°C<br>
                             Humedad: ${humidity}%`;

      climaInfo.innerHTML = weatherData;
    })
    .catch(error => {
      console.error('Error al obtener los datos del clima:', error);
      climaInfo.innerHTML = 'Error al obtener los datos del clima';
    });
}

/*----------------------------app-marketing---------------------- */
var marketing = document.getElementById('marketing');
var app_marketing = document.getElementById('app-marketing');
var button_marketing = document.getElementById('button-marketing-volver');

/*mostrar proyecto marketing*/
marketing.addEventListener('click', () => {
  if (window.innerWidth < 1000) {
    projects1.style.display = "none";
    projects2.style.display = "none";
  }
  app_marketing.style.display = "block"
})

/*ocular div marketing*/
button_marketing.addEventListener('click', () => {
  app_marketing.style.display = "none";
  if (window.innerWidth < 1000) {
    projects1.style.display = "block"
    projects2.style.display = "block"
  }
})


/*-------------------------app-desarrollo------------------------------*/
var desarrollo = document.getElementById('desarrollo');
var app_desarrollo = document.getElementById('app-desarrollo');
var button_desarrollo = document.getElementById('button-desarrollo-volver');

/*mostrar proyecto marketing*/
desarrollo.addEventListener('click', () => {
  if (window.innerWidth < 1000) {
    projects1.style.display = "none";
    projects2.style.display = "none";
  }
  app_desarrollo.style.display = "block"
})

/*ocular div marketing*/
button_desarrollo.addEventListener('click', () => {
  app_desarrollo.style.display = "none";
  if (window.innerWidth < 1000) {
    projects1.style.display = "block"
    projects2.style.display = "block"
  }
})
