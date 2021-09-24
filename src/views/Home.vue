;<template>
  <h2>Home page</h2>
  <base-spinner v-if="isloading"></base-spinner>
  <div v-else>
    <TheSlider/>
    <book-list :books="books"></book-list>
  </div>
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