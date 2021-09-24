;<template>
  <h2>Home page</h2>
  <TheSlider/>
  <base-spinner v-if="isloading"></base-spinner>
  <book-list v-else :books="books"></book-list>
</template>
<script>
import api from "../utils/api.js"
import BookList from "../components/BookList.vue"
import TheSlider from "../components/TheSlider.vue"
export default {
  components:{
    BookList,TheSlider
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

</style>