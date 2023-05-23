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
        this.reiniciarBtn.addEventListener("click", () => {
            this.reiniciarTest();
            restaurarFondo();
        });
    }

    realizarTest() {
        for (let i = 0; i < this.preguntas.length; i++) {
            const { pregunta, respuesta } = this.preguntas[i];

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
                const puntos = respuestaUsuario === respuesta ? 2 : 0;

                alert(puntos > 0 ? "Tu respuesta es correcta. Sumas 2 puntos" : "Respuesta incorrecta");

                this.puntos += puntos;
                console.log(`Resultado de la pregunta ${i + 1}: ${puntos} puntos`);

                respuestaContainer.style.display = "none";
                this.mostrarResultado();
            });

            this.container.appendChild(respuestaContainer);
        }

        document.body.appendChild(this.container);
    }

    reiniciarTest() {
        this.puntos = 0;
        this.container.innerHTML = "";
        this.realizarTest();
        const resultadoSection = document.getElementById("resultado");
        resultadoSection.textContent = "";
    }

    mostrarResultado() {
        const resultadoSection = document.getElementById("resultado");
        resultadoSection.textContent = "Tu resultado es: " + this.puntos;

        if (this.puntos <= 4) {
            resultadoSection.textContent += " A seguir estudiando joven padawan";
            document.body.style.backgroundImage = "url('./img/padawan.webp')";
        } else if (this.puntos >= 5 && this.puntos <= 7) {
            resultadoSection.textContent += " Bien hecho! tienes el rango de caballero jedi";
            document.body.style.backgroundImage = "url('./img/caballero.jpg')";
        } else if (this.puntos >= 8 && this.puntos < 10) {
            resultadoSection.textContent += " Eres un maestro Jedi!";
            document.body.style.backgroundImage = "url('./img/maestro.jpg')";
        } else {
            resultadoSection.textContent += " Gran maestro del consejo!";
            document.body.style.backgroundImage = "url('./img/granmaestro.jpg')";
        }

        console.log("Total de puntos: " + this.puntos);

        // Almacenamiento local (localStorage)
        const testResult = {
            puntos: this.puntos,
            fecha: new Date().toLocaleDateString()
        };

        localStorage.setItem("testResult", JSON.stringify(testResult));
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
test.realizarTest();

function restaurarFondo() {
    document.body.style.backgroundImage = "url('https://indiehoy.com/wp-content/uploads/2020/11/star-wars.jpg')";
}
