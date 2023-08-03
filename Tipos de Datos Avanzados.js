// objeto literal
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 45,
  sabeManejar: true,
  hijo: {
    nombre: "Pepe",
    apellido: "Perez",
    edad: 10,
  },
};

console.log(persona.edad);
console.log(persona["apellido"]);
console.table(persona.hijo);
console.table(persona.hijo.nombre);

//arrays o arreglos o vectores o matrices unidimensionales
let arregloNumero = [1, 4, 7, 23, 42];
console.table(arregloNumero);
console.log(arregloNumero[0]);
console.log(arregloNumero[1]);
console.log(arregloNumero[2]);
console.log(arregloNumero[3]);
console.log(arregloNumero[4]);
console.log(arregloNumero[5]);

let estudiante = {
  nombre: "juancito",
  apellido: "Acosta",
  notas: [7, 5, 8],
};

console.table(estudiante.notas); 

let sumar = function(a,b){
  console.log(a+b);
}

sumar(4,5)