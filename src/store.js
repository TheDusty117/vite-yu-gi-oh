//importo reactive from vue
import { reactive } from "vue";

// creo variabile store con oggetto
const store = reactive({
//passiamo l'oggetto che ci interessa
  cards: [],
  search:'',
})

//questo oggetto va esportato con il classico export default

export default store

