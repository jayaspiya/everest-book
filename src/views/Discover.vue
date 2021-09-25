;<template>
  <div class="justify-between">
  <h2>Discover Page</h2>
      <form class="flex search" @submit.prevent="searchBook">
      <input type="text" placeholder="Search.." v-model="pattern" required>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
   <base-spinner v-if="isloading"></base-spinner>
  <div v-else>
    <div v-if="books.length ===0 ">
      <div class="center" >
      <img src="../assets/empty.png"/>
      </div>
      <h2 class="center">{{message}}</h2>
      </div>
    <book-list :books="books" v-else></book-list>
  </div>
</template>
<script>
import api from "../utils/api.js"
import BookList from "../components/BookList.vue"
export default {
  components:{
    BookList
  },
  data(){
    return {
      message: "Search your book",
      pattern: "",
      books:[],
      isloading: false
    }
  },
  methods:{
    async searchBook(){
      this.isloading = true
      const slugPattern = this.pattern.split(" ").join("-")
      const url = "book/search?pattern="+slugPattern
      const res = await api.get(url)
      console.log(res.data.data)
      this.books = res.data.data
      this.isloading = false
      this.message = "No Books Found"
    }
  }
}
</script>
