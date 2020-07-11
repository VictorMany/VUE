const primera = new Vue({
   el: '#app',
   data: {
      //Propiedad vinculada al modelo 
      input: '',
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
      }
   }
})