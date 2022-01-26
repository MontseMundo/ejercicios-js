 const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const esPrimo = num => {
  for (let i = 2; i < num; i++) {
    if(num % i == 0); 
  }
  return true;
}

ejercicio1.forEach(num => {
  console.log("%s", num, esPrimo(num));
}) 

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

ejercicio2.forEach((item) => {
  if (item.edad >= 18 && item.esFamiliar) {
    console.log(`${[item.nombre]} es invitado`);
  }
});

// ciclos

/*function numero (numero)
{
  let numeros=[0,1];
  for (let i = 2; i < numero; i++) {
    numeros[i] = numeros[1 - 2] + numeros[i - 1];
  }
  return numeros;
}

console.log(`los números fibonacci son ${numero}`);*/

function fibonacci(numero)
{
  let numeros=[1, 1];
  for (let i = 2; i < numero; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
  }
  return numeros;
}

console.log(fibonacci(50));

/*for (let numeros = 1; numeros< 50; numeros++){
  console.log(`Los números fibonacci son ${numeros}`)
};*/
