//Podemos hacer las funciones de flecha de esta manera
const sumar = (num1, num2) =>  num1 + num2
 //O de esta manera 
 const restar = (num1, num2) => 
    num1 - num2
 //o de esta manera 
 const multiplicar = (num1, num2) => (
    num1 * num2
 )
 //o de esta manera
 const dividir = (num1, num2) => {
   return num1 / num2
 }
 //Mandamos llamar esa funcion 
 const suma = sumar(12, 34);
 const resta = restar(30, 15);
 const multiplicacion = multiplicar(2, 4);
 const division = dividir(10, 5);
const sumando = new Vue({
   el: '#IDOperacion', 
   data: {
      RSuma: suma,
      RResta: resta,
      RMultiplicacion: multiplicacion,
      RDivision: division,
      Hablar: {
         Hola: 'Hola',
         Saludo: {
            Saludo1: 'Como estas?',
            Saludo2: 'Como te va?'
         },
         Complemento: {
            complementoFin: {
               Complemento1: 'Ya me voy pues',
               Complemento2: 'Adios y hasta pronto'
            },
            complementoLlegada: 'Te gustaría ir a un lugar?'
         }

      }
   }
   
})