const pokemones = []

const pokemones2 = []


fetch('https://pokeapi.co/api/v2/pokemon')
   .then((res)=>{
      return res.json()
   })
   .then((data)=>{
      data.results.forEach(element => {
         pokemones.push(element)
      });
   })
   .catch(error => console.log.error)



//Async await
const getPokemones = async()=>{
  try {
     const res = await fetch('https://pokeapi.co/api/v2/pokemon')
     const data = await res.json()
     //console.log(data.results)
     //Funcion map
     data.results.map(poke => {
        //console.log(poke)
        pokemones2.push(poke)

      });
     //Funcion filter
     const pokebuscado = data.results.filter(poke => poke.name != 'bulbasaur')
      console.log(pokebuscado)
     

  } catch (error) {
     console.log(error);
  }
}

getPokemones()
const sumando = new Vue({
   el: '#IDOperacion', 
   data: {
      Pokemones: pokemones2
   } 
})

