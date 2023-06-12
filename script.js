/*app-clima*/
const clima = document.getElementById('clima');
const app_clima = document.getElementById('app-clima');
const button_clima = document.getElementById('button-clima-volver');
const searchButton = document.getElementById('search-btn');
const city = document.getElementById('city-select');
const climaInfo = document.getElementById('clima-info');
const apiKey = '06d16ba065d8e818a62f6b48ae807d1c';

/*mostrar proyecto*/
clima.addEventListener('click',()=>{
    console.log("entra")
    app_clima.style.display="block"
})
/*ocular div*/
button_clima.addEventListener('click',()=>{
    app_clima.style.display="none";
})
/*llamada api tiempo*/
searchButton.addEventListener('click', () => {
    if (city) {
      getWeatherData(city.value);
    }
  });

/*función consulta tiempo*/
function getWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location},ES&appid=${apiKey}&lang=ES`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherDescription = data.weather[0].description;
        const temperature = Math.round(data.main.temp - 273.15);
        const humidity = data.main.humidity;
  
        const weatherData = `Descripción: ${weatherDescription}<br>
                             Temperatura: ${temperature}°C<br>
                             Humedad: ${humidity}%`;
  
        climaInfo.innerHTML = weatherData;
      })
      .catch(error => {
        console.error('Error al obtener los datos del clima:', error);
        climaInfo.innerHTML = 'Error al obtener los datos del clima';
      });
  }
/*función lista tareas*/
var taskForm = document.getElementById('taskForm');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

var tareas = document.getElementById('tareas');
var app_tareas = document.getElementById('app-tareas');
var button_tareas = document.getElementById('button-tareas-volver');


/*mostrar proyecto*/
tareas.addEventListener('click',()=>{
    app_tareas.style.display="block"
})
/*ocular div*/
button_tareas.addEventListener('click',()=>{
    app_tareas.style.display="none";
})

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

    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
        const taskId = tasks.length + 1;
        const task = {
            id: taskId,
            description: taskDescription,
        };

        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
});