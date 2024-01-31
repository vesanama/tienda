// 1- Pedirle el nombre de usuario al alumno.

let nombreAlumno= prompt("Ingrese el nombre del alumno")

// 2- Pedir el nombre de las materias.

let materia= prompt("Ingrese el nombre de la materia")


// 3- Pedir las tres notas del usuario


let nota1= parseFloat(prompt("Ingrese la primera nota (de 0 a 10)"))


let nota2= parseFloat(prompt("Ingrese la segunda nota (de 0 a 10)"))
let nota3= parseFloat(prompt("Ingrese la tercera nota (de 0 a 10)"))


// 4- Corroborar que las notas esten dentro del rango valido (0 a 10)

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    alert("Porfavor, ingrese una nota valida, en el rango de 0 a 10.")
   
} else { // 5- Una vez corroborado todas las condiciones, realizamos el promedio
     console.log("NOTA1..." + nota1)
    console.log("NOTA2..." + nota2)
    console.log("NOTA3..." + nota3)
    let promedio= (nota1+nota2+nota3) / 3
    console.log("PROMEDIO..."+ promedio)

    // 6- Una vez tenemos el promedio corroboramos si es mayor o igual a 7. 

    if (promedio>=7){ 
        console.log(`Felicidades ${nombreAlumno}, la materia ${materia} , la aprobaste correctamente con un promedio de ${promedio}.`)
    } else{
        console.log(`Muchas gracias por tu esfuerzo ${nombreAlumno}, desafortunadamente tu promedio es ${promedio} y no es suficiente para aprobar la materia.`)

    }
}
