<template>
   <div>

   </div>
</template>
<script>
import Vue from 'vue'
import Vuex, { mapState, mapMutations } from 'vuex'

Vue.use(Vuex)

export default new Vuex({
   name: 'Lista',
   computed: {
     ...mapState(['cursos'])
   },
   methods: {
     ...mapMutation([''])
   }
})

</script>
<style lang="stylus" scoped>

</style>