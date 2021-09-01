;<template>
  <base-card>
  <h2>Edit Book</h2>
    <base-spinner v-if="isloading"></base-spinner>
    <form v-else>
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" name="title" autocomplete="off" v-model="title" required>
        </div>
        <div class="form-control">
            <label for="author">Author</label>
            <input type="text" name="author" autocomplete="off" v-model="author" required>
        </div>
        <div class="form-control">
            <label for="isbn">isbn</label>
            <input type="text" name="isbn" autocomplete="off" v-model="isbn" required>
        </div>
        <div class="form-control">
            <label for="price">Price</label>
            <input type="number" name="price" autocomplete="off" v-model="price" required>
        </div>
        <div class="form-control">
            <label for="releasedYear">Released Year</label>
            <input type="number" name="releasedYear" autocomplete="off" v-model="releasedYear" required>
        </div>
        <div class="form-control">
            <label for="tags">Tags</label>
            <input type="text" name="tags" autocomplete="off" v-model="tagName" placeholder="Write Tags and press <Space>" @keyup.space="addTag">
            <ul v-if="tags.length > 0">
                <li v-for="(tag, index) in tags" :key="index" class="align-center tag">
                    <span>{{tag}}</span>
                </li>
                <button class="remove" @click="removeTag()" type="button">
                        Reset Tags
                </button>
            </ul>
        </div>
        <div class="form-control">
            <label for="synopsis">Synopsis</label>
            <textarea name="synopsis" cols="30" rows="10" v-model="synopsis"></textarea>
        </div>
        <button>
            Update Book
        </button>
          <router-link :to="{ name: 'UploadCover', params: { id }}">
                <button type="button">Change Cover</button>
        </router-link>
        <button type="button" class="btn-danger" @click="deleteBook">
            Delete Book
        </button>
    </form>
  </base-card>
</template>

<script>
import api from "../../utils/api.js"
import Toast from "../../utils/Toast.js"
export default {
  async created(){
    const id = this.$route.params.id
    const res = await api.get("book/view/"+ id)
    const book = res.data.data[0]
    this.id = book._id
    this.tags = [...book.tags]
    this.title = book.title
    this.author = book.author
    this.isbn = book.isbn
    this.price = book.price
    this.releasedYear = book.releasedYear
    this.synopsis = book.synopsis
    this.isloading = false
  },
    data(){
        return {
            tagName:"",
            id: "",
            title: "",
            author: "",
            isbn: "",
            price: 0,
            synopsis: "",
            tags: [],
            releasedYear: 2020,
            isloading: true
        }
    },
    methods:{
        async addBook(){
            const book = {
                title: this.title,
                author: this.author,
                isbn: this.isbn,
                price: this.price,
                synopsis: this.synopsis,
                releasedYear: this.releasedYear,
                tags: this.tags
            }
            const res = await api.post("book/", book)
            this.$router.push("/")
            Toast(res.data.message).show()
        },
        addTag(){
            if(this.tagName.trim() !== ""){
                this.tags.push(this.tagName.toLowerCase())
                this.tagName = ""
            }
        },
        removeTag(){
            this.tags = []
        },
        async deleteBook(){
          const isConfirmed = confirm("Do you want to delete the book?")
          if(isConfirmed){
            this.isloading = true
            const res = await api.delete("book/"+this.id)
            this.isloading = false
            if(res.data.success){
              const toast = new Toast(res.data.message)
              toast.show()
              this.$router.push("/")
            }
            else{
              const toast = new Toast(res.data.message, "", "danger")
              toast.show()
            }
          }
        }
    }
}
</script>

<style scoped>
ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
li{
    color: var(--base-color);
    border: 2px solid var(--base-color);
    border-radius: 10px;
    padding: 2px 5px;
    margin: 1px 5px;
}
button{
  margin: 0 10px;
}
.btn-danger {
  border: 2px solid #ff3c38;
  background-color:#ff3c38 ;
  padding: 3px 10px;
  border-radius: 2px;
  transition: .2s all ease-out;
  text-decoration: none;
  color: var(--alt-color);
  cursor: pointer;
}
.btn-danger:hover{
  background-color: var(--alt-color);
  color: #ff3c38;
  border: 2px solid#ff3c38 
}
</style>