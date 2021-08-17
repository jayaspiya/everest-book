;<template>
  <h2>Home page</h2>
  <TheBook v-for="book in books" :key="book._id" :book="book"/>
</template>
<script>
import api from "../utils/api.js"
import TheBook from "../components/TheBook.vue"
export default {
  components:{
    TheBook
  },
  data(){
    return{
      books:[]
    }
  },
  async mounted(){
    const res = await api.get("/book")
    this.books = res.data
  }
}
</script>