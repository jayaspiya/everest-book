;<template>
  <h2>Home page</h2>
  <div class="book-grid">
    <TheBook v-for="book in books" :key="book._id" :book="book"/>
  </div>
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

<style scoped>
.book-grid{
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
</style>