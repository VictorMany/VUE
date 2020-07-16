Vue.component('contador',{
   template: //html
   `
   <div>
      <h1>El numero es: {{numero}}</h1>
      <button @click="numero++">+</button>
      <button @click="numero--">-</button>
   </div>
   `,
   data(){
      return{
         numero: 0
      }
   }
})