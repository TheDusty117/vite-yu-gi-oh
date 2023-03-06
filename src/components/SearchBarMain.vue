<!-- //CREAZIONE COMPONENTE BARRA DI RICERCA -->
<script>
//.1 importo lo store in modo da poterlo utilizzare
import store from '../store'

export default {
  data() {
    return {
      store,
      search: '',
    };
  },
  methods:{
    onEnter() {
      console.log('enter funziona!!!')
      this.$emit('onSearch')
    }
  }
};

</script>

<template>
  <div>
    <!-- 2. creo un input text, che on keyup enter, attivera' una funzione che fara' il fetchCArds per cercare le carte in base ad un determinato parametro, e avra' un v-model che si collega allo store dove ci sono le carte in modo tale da filtrarle-->
    <input type="text" @keyup.enter="$emit('onSearch')" v-model="store.search" placeholder="cerca la carta" >
  </div>
</template>




<style lang="scss" scoped>
@use '../style/partials/variables' as*;



</style>