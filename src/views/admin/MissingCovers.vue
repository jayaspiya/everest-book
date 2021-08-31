;<template>
  <h3>Update Cover</h3>
  <base-spinner v-if="isloading"></base-spinner>
<div v-else>
    <ul>
        <li v-for="book in books" :key="book._id">
            {{book.title}}
            <button @click="uploadCover(book._id)">
                Upload Cover
            </button>
        </li>
    </ul>
</div>
</template>
<script>
import api from "../../utils/api.js"
import Toast from "../../utils/Toast.js"
export default {
    async created(){
        const res = await api.get("/book/books-without-cover",)
        this.isloading = false
        if(res.data.success){
            this.books = res.data.data
        }
        else{
            const toast = new Toast(res.data.message,"","danger")
            toast.show()
        }
    }, 
    data(){
        return{
            books:[],
            isloading: true
        }
    },
    methods:{
        uploadCover(id){
            this.$store.commits("setIntent", id)
            // this.$router.push("UploadCover")
            // Open UploadCover
        }
    }
}
</script>