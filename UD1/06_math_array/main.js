function doCalculation(array) {
    let suma = 0;
    let max = array[0];  // Inicializamos el valor máximo con el primer elemento
    let min = array[0];  // Inicializamos el valor mínimo con el primer elemento

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        suma += array[i];

        // Para calcular el max
        if (array[i] > max) {
            max = array[i];
        }

        // Para calcular el mínimo si la posicion del array es menor que min 
        if (array[i] < min) {
            min = array[i];
        }
    }

    console.log(`La suma del array es ${suma}`);
    console.log(`La media del array es ${suma / array.length}`);
    console.log(`El elemento más grande es ${max}`);
    console.log(`El elemento más pequeño es ${min}`);
}

// Llamadas a la función
doCalculation([1, 2, 3, 4]);
doCalculation([5, 5, 5, 5]);
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]);
