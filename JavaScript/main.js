// Test de conocimiento del mandalorian.



let pregunta1 = prompt( " ¿Cuál es el nombre del mandalorian?: ");
if (pregunta1 === "Din Djarin" || pregunta1 === "din djarin"){
    alert("Tu respuesta es correcta! sumas 2 puntos" )
    pregunta1 = 2
    console.log( "Resultado de la pregunta 1: " + pregunta1);
    
}
else{
    alert("Respuesta incorrecta")
    pregunta1 = 0
    console.log( "Resultado de la pregunta 1: " + pregunta1);;
}



let pregunta2 = parseInt(prompt( " ¿Cuántas temporadas tiene The Mandalorian actualmente?: ")); 

if (pregunta2 == 3) {
    alert("Tu respuesta es correcta! sumas 2 puntos" )
    pregunta2 = 2
    console.log( "Resultado de la pregunta 2: " + pregunta2);
    
} 
else{
    alert("Respuesta incorrecta")
    pregunta2 = 0
    console.log( "Resultado de la pregunta 2: " + pregunta2);;
}

let pregunta3  = prompt( "¿Cuál es el nombre real de Baby Yoda: ");

if (pregunta3 === "Grogu" || pregunta3 === "grogu" ) {
    alert("Tu respuesta es correcta! sumas 2 puntos" )
    pregunta3 = 2
    console.log( "Resultado de la pregunta 3: " + pregunta3);
}
else{
    alert("Respuesta incorrecta")
    pregunta3 = 0
    console.log( "Resultado de la pregunta 3: " + pregunta3);;
} 

let pregunta4 = prompt( " ¿De qué material está hecha la armadura de Mando?: ") 

if (pregunta4 === "Beskar" || pregunta4 === "beskar" ) {
    alert("Tu respuesta es correcta! sumas 2 puntos" )
    pregunta4 = 2
    console.log( "Resultado de la pregunta 4: " + pregunta4);
} 
else{
    alert("Respuesta incorrecta")
    pregunta4 = 0
    console.log( "Resultado de la pregunta 4: " + pregunta4);;
} 

let pregunta5 = prompt( " ¿De qué color es el sable que rige a los mandalorianos?: " )

if (pregunta5 === "Negro" || pregunta5 === "negro" ) {
    alert("Tu respuesta es correcta! sumas 2 puntos" )
    pregunta5 = 2;
    console.log( "Resultado de la pregunta 5: " + pregunta5)
} 
else{
    alert("Respuesta incorrecta")
    pregunta5 = 0
    console.log( "Resultado de la pregunta 5: " + pregunta5);;
} 

let resultado = pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5 ;
console.log( "El resultado del test es: " + resultado )

if (resultado <= 4){
    alert( "Tu resultado es: " + resultado + " A seguir estudiando joven padawan" )
} else if (resultado >= 5 && resultado <= 7 ){
    alert( "Tu resultado es: " + resultado + " Bien hecho! tienes el rango de caballero jedi" )
}else if(resultado >= 8 && resultado < 10){
    alert( "Tu resultado es: " + resultado + " Eres un maestro Jedi!" )
}else{
    alert( "Tu resultado es: " + resultado + " Gran maestro del consejo!" )
}
