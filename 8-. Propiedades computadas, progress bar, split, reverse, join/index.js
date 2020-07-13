const app = new Vue({
   el: '#app',
   data: {
     Mensaje: 'hola message',
     contador: 0
   },
   computed: {
    Invertido(){
      return this.Mensaje.split('').reverse().join('');
    },
    color(){
      return {
        'bg-success': this.contador <= 10,
        'bg-warning': this.contador > 10 && this.contador<=50,
        'bg-danger': this.contador > 50
      }
    }
  }
})