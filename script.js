var mostrar = false;
var tabla = document.getElementById('sopaletras');
var letras = [
    ['i', 'c', 's', 's', 'n', 'g', 'h', 't', 'm', 'l', 'd', 'j', 's', 'r'],
    ['n', 'j', 'j', 'q', 'u', 'e', 'r', 'y', 'r', 'i', 'p', 't', 'p', 'o'],
    ['p', 'd', 'b', 'o', 'x', 'e', 'x', 'b', 'h', 'e', 'b', 's', 'q', 'l'],
    ['b', 'p', 'h', 'p', 'o', 't', 'a', 'b', 'a', 'x', 'e', 'l', 'p', 'k'],
    ['m', 'o', 'x', 'b', 'm', 'v', 'x', 'e', 'u', 'h', 'r', 'f', 'p', 'l'],
    ['h', 'd', 'j', 'u', 'n', 'l', 'o', 'o', 'p', 'y', 't', 'h', 'o', 'n'],
    ['i', 'o', 'r', 'e', 'j', 't', 'b', 'd', 'j', 't', 'u', 'k', 'r', 'y'],
    ['q', 'j', 'a', 'v', 'a', 'y', 'p', 'h', 'l', 'n', 'q', 'l', 'z', 'r'],
    ['i', 'w', 'k', 'd', 'j', 'a', 's', 'q', 'l', 'f', 'v', 'z', 'r', 'c'],
    ['l', 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', 'g', 'a', 'x'],
    ['h', 'o', 'n', 't', 'j', 'w', 'w', 'o', 'i', 'j', 'a', 'm', 'a', 'o'],
    ['e', 'w', 'o', 'r', 'd', 'p', 'r', 'e', 's', 's', 'g', 'e', 'a', 'e'],
    ['r', 'e', 'd', 'e', 's', 's', 'o', 'c', 'i', 'a', 'l', 'e', 's', 'p'],
    ['s', 'z', 's', 'x', 'c', 'r', 'l', 'j', 'c', 'j', 'z', 'g', 'i', 't'],
];
var palabras = ['javascript', 'html', 'css', 'jquery', 'php', 'java', 'sql', 'wordpress', 'redessociales', 'python', 'git']
var claves = []
var solucion = ""
var continuar = false;
var tablero = false;
var tableroMemori = false;
var habilidades = ['Creatividad', 'Empatía', 'Asertividad', 'Flexibilidad', 'Gestión del Tiempo', 'Curiosidad', 'Planificación', 'Trabajo en Equipo',
    'Creatividad', 'Empatía', 'Asertividad', 'Flexibilidad', 'Gestión del Tiempo', 'Curiosidad', 'Planificación', 'Trabajo en Equipo'];
var diccionario = {};
diccionario['Creatividad'] = "La rueda ya se inventó, no es necesario volverla a inventar, pero se puede adaptar y mejorar a las necesidades de cada momento. Para mi eso es la creatividad, la capacidad de crear un producto nuevo adaptando las ideas, concepto y experiencias que hemos ido recogiendo a lo largo del camino, si bien es cierto que una persona creativa se compone de muchas otras aptitudes que la propia experiencia, algunas quedán recogidas en este pequeño juego."
diccionario['Empatía'] = "Es importante el desarrollo de esta habilidad para atender a las necesidades de clientes o de posibles clientes y también es importante cuando trabajamos en equipo. Ver el mundo desde la perspectiva de la persona que tenemos en frente nos ayuda a entender sus necesidades. "
diccionario['Asertividad'] = "Una comunicación asertiva es importante en todo equipo de trabajo, es necesario saber expresar opiniones de forma eficaz."
diccionario['Flexibilidad'] = "Siempre ocurren hechos puntuales que modifican nuestra hoja de ruta y es necesario saber encajarlos en nuestro ritmo de trabajo; Igualmente siempre hay que estar abierto a una posible opinión que mejore nuestro proceso."
diccionario['Gestión del Tiempo'] = "Es importante en un trabajo ser consciente del tiempo que dedicamos a cada tarea y como organizarlas de forma que sea lo más rentable posible. "
diccionario['Curiosidad'] = "La curiosidad me llevó a aprender esta profesión, y una de las cosas que me encanta de ella es, que existen tantos lenguajes y herramientas que siempre hay algo nuevo que aprender."
diccionario['Planificación'] = "No soy nada sin una lista!! Sin una buena planificación el tiempo vuela, cada cosa tiene su momento y es necesario establecer unos limites temporales a determinadas tareas, aunque con una buena razón las listas pueden romperse y volverse a crear. "
diccionario['Trabajo en Equipo'] = "Una de las cosas más enriquecedoras de un trabajo es el equipo que lo conforma, con un equipo competente se aprende más, y se trabaja más rápido y mejor. "
diccionario['Resuelto'] = " ¡Has ganado! Espero que te haya resultado útil y te hayas divertido."
var contadorMemori = 0;
var cv = document.getElementById('cv');
var cvextendido = document.getElementById('cvextendido');
var botonsopaletras = document.getElementById('botonsopaletras');
var resolver = document.getElementById('resolver');
var memori = document.getElementById('memori');
var valoresMemori = [];




window.addEventListener('load', function () {
    reloj();

    cvextendido.addEventListener('click', jugar);
    botonsopaletras.addEventListener('click', jugarletras);
    memori.addEventListener('click', jugarMemori);
    resolver.addEventListener('click', resolverjuego);
    document.getElementById('mostrarPalabras').addEventListener('click', mostrarPalabras);
    document.getElementById('volverEmpezarSopa').addEventListener('click', volverEmpezarSopa);
    document.getElementById('volverEmpezarMemori').addEventListener('click', volverEmpezarMemori);
    document.getElementById('volverSopa').addEventListener('click', volverPanel);
    document.getElementById('volverMemori').addEventListener('click', volverPanel);


});

function jugarMemori() {

    document.getElementById('divMemori').style.display = "block"
    if (!tableroMemori) {
        montartableroMemori()
        tableroMemori = true
    }
    document.getElementById('panelJuegos').style.display = 'none'
    mostrar = true;
    document.location.href = "#divMemori";

}

function montartableroMemori() {

    habilidades.sort(function () { return Math.random() - 0.5 });

    var tablaM = document.getElementById('panelMemori')
    var fila = document.createElement('tr');
    fila.style.width = '100%'
    tablaM.appendChild(fila)
    for (i = 1; i <= habilidades.length; i++) {
        var celda = document.createElement('td');
        celda.style.width = '150px';
        celda.style.height = '150px';
        var button = document.createElement('button');
        button.setAttribute("class", "card");
        button.setAttribute('value', habilidades[i - 1]);
        button.setAttribute('name', habilidades[i - 1]);
        button.setAttribute('onclick', 'destapar(this)');
        celda.appendChild(button);
        fila.appendChild(celda);
        if (screen.width < 1024) {
            if (!(i % 2)) {
                var fila = document.createElement('tr');
                fila.style.width = '100%';
                tablaM.appendChild(fila);
            }
        } else {
            if (!(i % 4)) {
                var fila = document.createElement('tr');
                fila.style.width = '100%';
                tablaM.appendChild(fila);
            }
        }

    }
}

function destapar(objeto) {
    var elementos = document.getElementsByClassName('card');
    if (valoresMemori.length >= 2) {
        valoresMemori = []
        for (i = 0; i < elementos.length; i++) {
            if (elementos[i].value != 'resuelto')
                elementos[i].innerHTML = ""
        }
    }
    if (objeto.value != 'resuelto') {
        objeto.innerHTML = objeto.name;
        objeto.style.color = "#faff80";
        objeto.style.paddingTop = "40%";
        valoresMemori.push(objeto.name);
    }

    if (valoresMemori.length == 2) {
        if (valoresMemori[0] == valoresMemori[1]) {
            for (i = 0; i < elementos.length; i++) {
                if (elementos[i].name == objeto.name) {
                    elementos[i].style.background = "#0DA2AC";
                    elementos[i].setAttribute('value', 'resuelto');

                }
            }
            Swal.fire({
                title: objeto.name,
                text: diccionario[objeto.name],
            })
            contadorMemori++
        }
    }
    if (contadorMemori == 8) {
        Swal.fire({
            icon: 'success',
            title: '¡Has ganado!',
            text: diccionario['Resuelto'],
        })
    }

}

function reloj() {
    let date = new Date();
    switch (date.getDay()) {
        case 11:
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> Hoy es el último día de la semana, disfrútalo <br/>¡Feliz Domingo!';
            break;
        case 1:
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> Hoy es Lunes, la primera oportunidad <br/>que te brinda la semana para ser feliz';
            break;
        case 2:
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> El martes es el día ideal para terminar <br> todo lo que no hiciste el lunes';
            break;
        case 3:
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> ¡Ya es miércoles!, la semana pasa rápido, <br/> disfrútala!!';
            break;
        case 4:
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> Haz que este jueves brille <br/>gracias a tu sonrisa';
            break;
        case 5:
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> Hoy no podía haber amanecido mejor.... ¡es viernes!, asi que a disfrutarlo';
            break;
        case 0:
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> Hoy es sábado, y el día debería de de tener al menos 48 horas para disfrutarlas';
            break;
    }

    document.getElementById('despedida').style.fontSize = "xx-Large";
    document.getElementById('despedida').style.fontFamily = "Tiza";
    document.getElementById('despedida').style.color = "#faff80";

}

function jugar() {
    if (!mostrar) {
        document.getElementById('panelJuegos').style.display = 'block';
        document.getElementById('presentacion').style.display = 'none';
        document.getElementById('reloj').style.display = 'none';
        document.getElementById('tablacv').style.marginTop = '10%'
        mostrar = true;
    } else {
        document.getElementById('panelJuegos').style.display = 'none';
        document.getElementById('presentacion').style.display = 'block';
        document.getElementById('tablacv').style.marginTop = '1%'
        document.getElementById('container').style.display = 'none';
        document.getElementById('divMemori').style.display = 'none';
        if (screen.width > 1280) {
            document.getElementById('reloj').style.display = 'block';
        }

        mostrar = false;
    }
}

function jugarletras() {
    document.getElementById('container').style.display = 'block';
    document.getElementById('panelJuegos').style.display = 'none'
    mostrar = true;
    document.location.href = "#sopa";
    montartablero();
}

function montartablero() {
    if (!tablero) {
        tabla.style.margin = 'auto';
        for (i = 0; i < letras.length; i++) {
            var fila = document.createElement('tr');
            var fil = 'fil_' + i;
            fila.setAttribute('id', fil);
            for (x = 0; x < letras[i].length; x++) {
                var celda = document.createElement('th');
                var cel = 'cel_' + i + '_' + x;
                celda.setAttribute('id', cel);
                celda.setAttribute('onmousedown', 'presiono(this)');
                celda.setAttribute('ontouchstart', 'presiono(this)')
                celda.setAttribute('onmouseup', 'levanto(this)');
                celda.setAttribute('ontouchEnd', 'levanto(this)');
                celda.style.background = '#d3f5ed';
                celda.style.width = '25px';
                celda.style.height = '25px';
                celda.style.color = '#0DA2AC';
                celda.style.border = '1px solid #0DA2AC';
                celda.style.textAlign = 'center';
                celda.innerHTML = letras[i][x];
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
        tablero = true;
    }
}

function presiono(objeto) {
    console.log('entro');
    valores = objeto.id.split('_');
    var fila = valores[1];
    var columna = valores[2];
    objeto.style.background = "#0DA2AC";
    solucion += objeto.innerHTML;
    claves.push(objeto.id)
    continuar = true;
    for (e = 1; e <= 14; e++) {
        var capa = "cel_" + Number(fila) + "_" + e;
        crearEvento(document.getElementById(capa), 'mouseover', muevo);
        crearEvento(document.getElementById(capa), 'touchmove', muevo);
    }
}

function muevo() {
    console.log('muevo')
    if (continuar) {
        this.style.background = '#0DA2AC'
        solucion += this.innerHTML;
        claves.push(this.id)
    }
}

function levanto(objeto) {
    continuar = false;
    exito = false;
    var valor = claves[0].split('_');
    var fila = Number(valores[1]);
    var columna = Number(valores[2]);
    for (i = 0; i <= palabras.length; i++) {
        if (palabras[i] == solucion) {
            exito = true;
            for (i = 0; i < palabras.length; i++) {
                document.getElementById(palabras[i]).style.display = 'none'
            }
            document.getElementById(solucion).style.display = 'block'
            for (j = columna; j < (columna + claves.length); j++) {
                document.getElementById('sopaletras').rows[fila].cells[j].style.backgroundColor = '#d3f5ed'
                document.getElementById('sopaletras').rows[fila].cells[j].style.color = '#07656b'
            }
        }
    }
    if (!exito) {
        for (j = columna; j < (columna + claves.length); j++) {
            document.getElementById('sopaletras').rows[fila].cells[j].style.backgroundColor = '#d3f5ed'
        }
    }
    solucion = ''
    claves = []
}

function resolverjuego() {
    document.getElementById("scroll").style.display = "block";
    document.getElementById("scroll").style.height = "450px";
    document.getElementById("scroll").style.overflow = "scroll";
    document.getElementById("sopa").style.height = "auto";
    document.getElementById("sopa").style.width = "100%";

    for (i = 0; i < palabras.length; i++) {
        document.getElementById(palabras[i]).style.display = 'block';
    }
}

function volverEmpezarSopa() {
    var elementos = document.getElementsByClassName('lenguajes');
    for (i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }
    document.getElementById("scroll").style.overflow = "visible";
    document.getElementById("scroll").style.display = "none";
}

function volverEmpezarMemori() {
    var panel = document.getElementById('panelMemori')
    while (panel.firstChild) {
        console.log('hola')
        panel.removeChild(panel.firstChild)
    }
    montartableroMemori()
}

function mostrarPalabras() {

    if (!document.getElementById('divlista')) {
        var divlista = document.createElement('div');
        divlista.setAttribute('id', 'divlista')
        var sopa = document.getElementById('sopa');
        divlista.setAttribute('class', 'lenguajes')
        var lista = document.createElement('ul');

        for (i = 0; i < palabras.length; i++) {
            var palabra = document.createElement('li');
            palabra.innerHTML = palabras[i];
            lista.appendChild(palabra)
        }
        divlista.appendChild(lista);
        sopa.appendChild(divlista);
        divlista.style.display = 'block';
    } else {
        document.getElementById('divlista').style.display = 'block';
    }
    document.getElementById('scroll').style.display = 'block';

}

function volverPanel() {
    volverEmpezarMemori();
    volverEmpezarSopa();
    document.getElementById('container').style.display = 'none';
    document.getElementById('divMemori').style.display = 'none';
    document.getElementById('panelJuegos').style.display = 'block';
    for (i = 0; i < palabras.length; i++) {
        document.getElementById(palabras[i]).style.display = 'none'
    }
    mostrar = false;
}

var crearEvento = function (elemento, evento, mifuncion) {
    function w3c_crearEvento(elemento, evento, mifuncion) {
        if (elemento) {
            elemento.addEventListener(evento, mifuncion, false);
        }
    }
    function ie_crearEvento(elemento, evento, mifuncion) {
        var fx = function () {
            mifuncion.call(elemento);
        };
        elemento.attachEvent('on' + evento, fx);
    }
    if (typeof window.addEventListener !== 'undefined') {
        return w3c_crearEvento;
    } else if (typeof window.attachEvent !== 'undefined') {
        return ie_crearEvento;
    }
}();
