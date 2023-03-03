<script>
//1___importo axios per effettuare le chiamate all'api
import axios from 'axios'

export default {
  data() {
    return {
      cards:[]
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
          this.cards = res.data.data
        })
    }
  },
  created(){
    this.fetchCards()
  },
}
</script>


<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">

          <ul class="cards-list px-4">
            <li v-for="card in cards" :key="card.id" >
              <img :src="card.card_images.image_url_small" alt="">
              <h2>{{ card.name }}</h2>
              <h3>{{ card.archetype }}</h3>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>

.container{
  background-color: teal;
  padding: 100px 0px;
}

.cards-list{
  display: grid;
  grid-template-columns: repeat(5,1fr);
    li{
      width: 100px;
    }
}

</style>