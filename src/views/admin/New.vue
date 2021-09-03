;<template>
  <base-card>
  <h2>Add Book Page</h2>
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
            Add Book
        </button>
    </form>
  </base-card>
</template>

<script>
import api from "../../utils/api.js"
import Toast from "../../utils/Toast.js"
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
            const token = localStorage.getItem("token")
            const opts = {
                headers: {
                    'Authorization': "Bearer " +token
                }
            }
            const res = await api.post("book/", book, opts)
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
</style>