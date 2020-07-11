const primera = new Vue({
   el: '#app',
   data: {
      //Propiedad vinculada al modelo 
      input: '',
      Total: 0,
      Personas: [
         {
            Cantidad: 1,
            Nombre: 'Lunes'
         },
         {
            Cantidad: 2,
            Nombre: 'Lunes'
         },
         {
            Cantidad: 4,
            Nombre: 'Lunes'
         }
      ],
      nuevaPersona: '',
      //PROPS
      Nombre: 'Victor Manuel Velazquez Fuentes',
      Materia: 'Matematicas',
      Profesor: 'Rodrigo Arango',
      Tema: 'La vida es un ciclo y yo no lo reciclo',
      //ARRAYS
      Alumnos: ['Juan','Pepe','Pedro','Angel'],
      //OBJECTS 
      Horas: [
         {
            Turno: 'Matutino',
            Dia: 'Lunes'
         },
         {
            Turno: 'Vespertino',
            Dia: 'Martes'
         },
         {
            Turno: 'Diurno',
            Dia: 'Jueves'
         }
      ]
   },
   methods: {
      agregarAlumno(){
         this.Alumnos.push(this.input)
         this.input= ''
      },
      agregarpersona () {
         this.Personas.push({
           Cantidad: 0, Nombre: this.nuevaPersona
         });
         this.nuevaPersona = ''
       }
      
   },
   computed: {
      sumarPersonas(){
         this.Total=0;
         for(p of this.Personas){
            this.Total += p.Cantidad;
         }
         return this.Total;
      }
   }
})