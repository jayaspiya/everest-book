;<template>
  <h2>Home page</h2>
  <base-spinner v-if="isloading"></base-spinner>
  <book-list v-else :books="books"></book-list>
</template>
<script>
import api from "../utils/api.js"
import BookList from "../components/BookList.vue"
export default {
  components:{
    BookList
  },
  data(){
    return{
      books:[],
      isloading: true
    }
  },
  async mounted(){
    const res = await api.get("/book")
    this.books = res.data.data
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