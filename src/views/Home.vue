;<template>
  <h2>Home page</h2>
  <base-spinner v-if="isloading"></base-spinner>
  <div class="book-grid" v-else>
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
      books:[],
      isloading: true
    }
  },
  async mounted(){
    const res = await api.get("/book")
    this.books = res.data
    this.isloading = false
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