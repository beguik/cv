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

var cv = document.getElementById('cv');
var cvextendido = document.getElementById('cvextendido');
var botonsopaletras = document.getElementById('botonsopaletras');
var resolver = document.getElementById('resolver');



window.addEventListener('load', function () {
    reloj();
    cvextendido.addEventListener('click', jugar);
    botonsopaletras.addEventListener('click', jugarletras);
    resolver.addEventListener('click', resolverjuego);
    document.getElementById('volverPanel').addEventListener('click', volverPanel);

});

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
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> El martes es el día idal para terminar <br> todo lo que no hiciste el lunes';
            break;
        case 3:
            document.getElementById('despedida').innerHTML = 'Gracias por tu tiempo, y recuerda: <br/> ¡Ya es miércoles!, la semana pasa más rápido de lo que piesnas, disfrútala!!';
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
    document.getElementById('despedida').style.fontFamily = "Tiza";
    document.getElementById('despedida').style.fontSize = "xx-Large";
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
        document.getElementById('reloj').style.display = 'block';
        document.getElementById('tablacv').style.marginTop = '1%'
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
                celda.setAttribute('onmouseup', 'levanto(this)');
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
        tablero=true;
    }
}

function presiono(objeto) {
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
    }
}

function muevo() {
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
                console.log(palabras[i])
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
    for (i = 0; i < palabras.length; i++) {
        document.getElementById(palabras[i]).style.display = 'block';
    }
}

function volverPanel() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('panelJuegos').style.display = 'block';
    for (i = 0; i < palabras.length; i++) {
        console.log(palabras[i])
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
