function tituloTest () {
    alert ("Bienvenido al test de The Mandalorian, recuerda contestar todas las preguntas con la primera letra en Mayúscula")
}
tituloTest();
console.log("Test del Mandalorian.")
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
    }
    realizarTest() {
        for (let i = 0; i < this.preguntas.length; i++) {
            const pregunta = this.preguntas[i].pregunta;
            const respuesta = this.preguntas[i].respuesta;
            const respuestaUsuario = prompt(pregunta);
            if (respuestaUsuario === respuesta) {
            alert("Tu respuesta es correcta! sumas 2 puntos");
            this.puntos += 2;
            console.log("Resultado de la pregunta " + (i + 1) + ": 2 puntos");
            } else {
            alert("Respuesta incorrecta");
            console.log("Resultado de la pregunta " + (i + 1) + ": 0 puntos");
            }
        }
    }
    mostrarResultado() {
        const resultadoSection = document.getElementById("resultado");
        resultadoSection.textContent = "Tu resultado es: " + this.puntos;

        if (this.puntos <= 4) {
            resultadoSection.textContent += " A seguir estudiando joven padawan";
        } else if (this.puntos >= 5 && this.puntos <= 7) {
            resultadoSection.textContent += " Bien hecho! tienes el rango de caballero jedi";
        } else if (this.puntos >= 8 && this.puntos < 10) {
            resultadoSection.textContent += " Eres un maestro Jedi!";
        } else {
            resultadoSection.textContent += " Gran maestro del consejo!";
        }

        console.log("Total de puntos: " + this.puntos);
    }
}
const preguntas = [
    new Pregunta("¿Cuál es el nombre del mandalorian?", "Din Djarin"),
    new Pregunta("¿Cuántas temporadas tiene The Mandalorian actualmente?", "3"),
    new Pregunta("¿Cuál es el nombre real de Baby Yoda", "Grogu"),
    new Pregunta("¿De qué material está hecha la armadura de Mando?", "Beskar"),
    new Pregunta("¿De qué color es el sable que rige a los mandalorianos?", "Negro"),
];
const test = new Test(preguntas);
test.realizarTest();
test.mostrarResultado();