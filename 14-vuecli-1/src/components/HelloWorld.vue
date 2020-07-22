<template>
  <div>
    <h1>Numero: {{numero}}</h1>
    
  </div>
</template>

<script>

import { mapMutations } from 'vuex';
import { mapState } from 'vuex';

export default {
  name: 'UserAccount',
  computed: {
    ...mapState(['numero'])
  },
  methods:{
    ...mapMutations(['cambiarModo', 'aumentar'])   
  }
};
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->