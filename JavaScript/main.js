function tituloTest() {
alert("Bienvenido al test de The Mandalorian, recuerda contestar todas las preguntas con la primera letra en mayúscula");
}

tituloTest();
console.log("Test del Mandalorian.");

class Pregunta {
constructor(pregunta, respuesta) {
    this.pregunta = pregunta;
    this.respuesta = respuesta;
}
}

class Test {
constructor(preguntas) {
    this.preguntas = preguntas;
    this.puntos = 0;
    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.reiniciarBtn = document.getElementById("reiniciarBtn");
    this.resultadoSection = document.getElementById("resultado");

    this.reiniciarBtn.addEventListener("click", () => {
    this.reiniciarTest();
    restaurarFondo();
    });

    this.realizarTest();
    this.mostrarResultado();
}

realizarTest() {
    for (let i = 0; i < this.preguntas.length; i++) {
    const pregunta = this.preguntas[i].pregunta;
    const respuesta = this.preguntas[i].respuesta;

    const respuestaContainer = document.createElement("div");
    respuestaContainer.classList.add("respuesta-container");

    const preguntaElement = document.createElement("p");
    preguntaElement.textContent = pregunta;
    preguntaElement.classList.add("pregunta");
    respuestaContainer.appendChild(preguntaElement);

    const respuestaInput = document.createElement("input");
    respuestaInput.type = "text";
    respuestaInput.classList.add("respuesta-input");
    respuestaContainer.appendChild(respuestaInput);

    const verificarBtn = document.createElement("button");
    verificarBtn.textContent = "Verificar";
    verificarBtn.classList.add("verificar-btn");
    respuestaContainer.appendChild(verificarBtn);

    verificarBtn.addEventListener("click", () => {
        const respuestaUsuario = respuestaInput.value;
        if (respuestaUsuario === respuesta) {
        alert("Tu respuesta es correcta. Sumas 2 puntos");
        this.puntos += 2;
        console.log("Resultado de la pregunta " + (i + 1) + ": 2 puntos");
        } else {
        alert("Respuesta incorrecta");
        console.log("Resultado de la pregunta " + (i + 1) + ": 0 puntos");
        }
        respuestaContainer.style.display = "none";
        this.guardarResultado();
        this.mostrarResultado();
    });

    this.container.appendChild(respuestaContainer);
    }

    document.body.appendChild(this.container);
}

guardarResultado() {
    const resultado = {
    puntos: this.puntos,
    preguntas: this.preguntas
    };

    localStorage.setItem("resultado", JSON.stringify(resultado));
}

reiniciarTest() {
    this.puntos = 0;
    this.container.innerHTML = "";
    this.realizarTest();
    this.mostrarResultado();

    this.resultadoSection.textContent = "";
    localStorage.removeItem("resultado");
}

mostrarResultado() {
    const resultadoGuardado = localStorage.getItem("resultado");
    if (resultadoGuardado) {
    const resultado = JSON.parse(resultadoGuardado);
    this.puntos = resultado.puntos;
    this.preguntas = resultado.preguntas;
    }

    this.resultadoSection.textContent = "Tu resultado es: " + this.puntos;

    if (this.puntos <= 4) {
    this.resultadoSection.textContent += " A seguir estudiando joven padawan";
    document.body.style.backgroundImage = "url('./img/padawan.webp')";
    } else if (this.puntos >= 5 && this.puntos <= 7) {
    this.resultadoSection.textContent += " Bien hecho! tienes el rango de caballero jedi";
    document.body.style.backgroundImage = "url('./img/caballero.jpg')";
    } else if (this.puntos >= 8 && this.puntos < 10) {
    this.resultadoSection.textContent += " Eres un maestro Jedi!";
    document.body.style.backgroundImage = "url('./img/maestro.jpg')";
    } else {
    this.resultadoSection.textContent += " Gran maestro del consejo!";
    document.body.style.backgroundImage = "url('./img/granmaestro.jpg')";
    }

    console.log("Total de puntos: " + this.puntos);
}
}

const preguntas = [
new Pregunta("¿Cuál es el nombre del mandalorian?", "Din Djarin"),
new Pregunta("¿Cuántas temporadas tiene The Mandalorian actualmente?", "3"),
new Pregunta("¿Cuál es el nombre real de Baby Yoda", "Grogu"),
new Pregunta("¿De qué material está hecha la armadura de Mando?", "Beskar"),
new Pregunta("¿De qué color es el sable que rige a los mandalorianos?", "Negro")
];

const test = new Test(preguntas);

function restaurarFondo() {
document.body.style.backgroundImage = "url('https://indiehoy.com/wp-content/uploads/2020/11/star-wars.jpg')";
}
