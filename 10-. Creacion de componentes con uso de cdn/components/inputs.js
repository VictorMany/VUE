Vue.component('inputs', {
   template: //html
   `
   <div>
     <input type="text" v-model="nombre">
     <h4>el nombre es: {{nombre}}</h4>
   </div>
   `,
   data(){
      return{
         nombre: ''
      }
   }
})