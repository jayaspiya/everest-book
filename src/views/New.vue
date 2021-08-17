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
            <label for="tags">Tags</label>
            <input type="text" name="tags" autocomplete="off" v-model="tagName" placeholder="Write Tags and press Enter" @keyup.space="addTag">
            <ul>
                <li v-for="(tag, index) in tags" :key="index">
                    {{tag}}
                </li>
            </ul>
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
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
export default {
    data(){
        return {
            tagName:"",
            title: "",
            author: "",
            isbn: "",
            price: 0,
            synopsis: "",
            tags: [],
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
                releasedYear: this.releasedYear,
                tags: this.tags
            }
            await api.post("book/", book)
            const toast = new Toast("Book added")
            toast.show()
        },
        addTag(){
            if(this.tagName.trim() !== ""){
                this.tags.push(this.tagName)
                this.tagName = ""
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
    background: var(--base-color);
    border-radius: 10px;
    color: var(--alt-color);
    padding: 3px 5px;
    margin: 1px 5px;
}
</style>