Vue.component('padre',{
   template: 
   `
   <div class="p-5 bg-danger text-white">
      <h1>{{datos}}</h1>
      <input type="text" v-model="nombre">
      <hijo :nombrehijo="nombre"><hijo/>
   </div>
   `,
   data(){
      return{
         datos: 'Componente Padre',
         nombre: ''
      }
   }
})