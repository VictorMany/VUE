const app = new Vue({
   el: '#app',

   data: {
     Mensaje: 'Ciclo de vida de vue'
   },
   beforeCreate(){
     
    console.log('before Created')
   },
   created(){
     //Al crear los metodos, observadores y eventos, pero aun ol accede al dom.
     //Aun no se puede acceder a el 
    console.log('created')
   },
   beforeMount(){
     //Se ejecuta antes de insertar el dom 
    console.log('before mount')
   },
   mounted(){
    //Se ejecuta al insertar el dom 
    console.log('mounted')
   },
   beforeUpdate(){
     //Al detectar un cambio 
    console.log('before update')
   },
   updated(){
     //Al reaizar un cambio
    console.log('Updated')
   }, 
   beforeDestroy(){
     //Antes de destruir la instancia
    console.log('before Destroy')
   },
   destroyed(){
     //Se destruye tod La instancia
    console.log('Destroyed')
   },
   methods: {
     destruir(){
       this.$destroy();
     }
   }

})