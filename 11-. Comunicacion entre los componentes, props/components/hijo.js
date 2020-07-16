Vue.component('hijo', {
   template: 
   `
   <div class="bg-success p-3">
     <p>Componente hijo</p>
     <h4>el nombre es: {{nombrehijo}}</h4>
   </div>
   `,
   data(){
      return{
         nombre: ''
      }
   },
   props: ['nombrehijo']
})