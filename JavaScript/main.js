console.log("Test del Mandalorian.")



const preguntas = [
    {
        pregunta: "¿Cuál es el nombre del mandalorian?",
        respuesta: "Din Djarin"
    },
    {
        pregunta: "¿Cuántas temporadas tiene The Mandalorian actualmente?",
        respuesta: "3"
    },
    {
        pregunta: "¿Cuál es el nombre real de Baby Yoda", 
        respuesta: "Grogu"
    },
    {
        pregunta: " ¿De qué material está hecha la armadura de Mando?", 
        respuesta: "Beskar",
    },
    {
        pregunta: "¿De qué color es el sable que rige a los mandalorianos?", 
        respuesta: "Negro"
    }
    ];
    let puntos = 0;
    for (let i = 0; i < preguntas.length; i++) {
    const pregunta = preguntas[i].pregunta;
    const respuesta = preguntas[i].respuesta;
    const respuestaUsuario = prompt(pregunta);
    if (respuestaUsuario === respuesta) {
        alert("Tu respuesta es correcta! sumas 2 puntos");
        puntos += 2;
        console.log("Resultado de la pregunta " + (i + 1) + ": 2 puntos");
        } else {
        alert("Respuesta incorrecta");
        console.log("Resultado de la pregunta " + (i + 1) + ": 0 puntos");
        }
    }
    if (puntos <= 4){
        alert( "Tu resultado es: " + puntos + " A seguir estudiando joven padawan" )
        console.log("Total de puntos: " + puntos);
    } else if (puntos >= 5 && puntos <= 7 ){
        alert( "Tu resultado es: " + puntos + " Bien hecho! tienes el rango de caballero jedi" )
        console.log("Total de puntos: " + puntos);
    }else if(puntos >= 8 && puntos < 10){
        alert( "Tu resultado es: " + puntos + " Eres un maestro Jedi!" )
        console.log("Total de puntos: " + puntos);
    }else{
        alert( "Tu resultado es: " + puntos + " Gran maestro del consejo!" )
        console.log("Total de puntos: " + puntos);
    }
    