;<template>
  <h2>Add Book Page</h2>
  <base-card>
    <form @submit.prevent="addBook">
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
            <label for="synopsis">Synopsis</label>
            <textarea name="synopsis" cols="30" rows="10" v-model="synopsis"></textarea>
        </div>
        <button>
            Add Book
        </button>
    </form>
  </base-card>
</template>

<script>
import api from "../api.js"
export default {
    data(){
        return {
            title: "",
            author: "",
            isbn: "",
            price: 0,
            synopsis: "",
            releasedYear: 2020
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
                releasedYear: this.releasedYear
            }
            await api.post("book/", book)
            alert("Book added")
        }
    }
}
</script>