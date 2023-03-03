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
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
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
      <ul>
        <li v-for="card in cards" :key="card.id" >
          <img :src="card.card_images.image_url_cropped" alt="">
          <h2>{{ card.name }}</h2>
          <h3></h3>
        </li>
      </ul>
    </div>
  </main>
</template>


<style lang="scss" scoped>

.container{
  background-color: teal;
  padding: 100px 0px;
}

</style>