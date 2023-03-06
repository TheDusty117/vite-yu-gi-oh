<script>
//1___importo axios per effettuare le chiamate all'api
import axios from 'axios'

import store from '../store'

import CardMain from './CardMain.vue'

import SearchBarMain from './SearchBarMain.vue'

export default {
  components:{
    CardMain,
    SearchBarMain,
  },

  data() {
    return {
      cards:[],
      store,
      //store: store
    }
  },


  methods: {
    fetchCards() {
      console.log('fetching data')
      //qui viene fatta chiamata in get a endopoint:
      axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        //uso arrow function per poter avere un this dove accedere alle informazioni interne
        .then((res)=> {
          console.log(res.data.data)
          // this.cards = res.data.data
          this.store.cards = res.data.data
          
          console.log(this.store)
        })
    },
    //FUNZIONE DI RICERCA CARTE CON CRITERIO TESTO INSERITO
    onSearchFunction(){
      this.fetchCards()
      console.log(this.onSearchFunction)
    }
  },
  created(){
    this.fetchCards()
    console.log(this.store)
  },
}
</script>


<template>
  <main>
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-10">
          <div>
            <!--componente BARRA DI RICERCA-->
            <SearchBarMain/>
          </div>
          <div class="card-counter">
            <h2>Carte trovate: {{ store.cards.length }}</h2>
          </div>
          <ul class="cards-list p-2">
            <!-- <li v-for="card in cards" :key="card.id" class="d-flex flex-column align-items-center" >
              <img :src="card.card_images[0].image_url" alt="">
              <h2>{{ card.name }}</h2>
              <h3>{{ card.archetype }}</h3>
            </li> -->
            <CardMain v-for="element in store.cards" :key="element.id" :card="element" />
          </ul>

        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>

.container{
  background-image: url(/images/background-card.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: teal;
  padding: 0px 0px;
}

.card-counter{
  background-color: darkgray;
}
.cards-list{
  display: grid;
  align-items: baseline;
  grid-template-columns: repeat(5,1fr);
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  // background-color: white;
  border: 10px solid black;
}

</style>