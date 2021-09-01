;<template>
  <h3>Update Cover</h3>
  <base-spinner v-if="isloading"></base-spinner>
<div v-else>
    <ul>
        <li v-for="book in books" :key="book._id">
            {{book.title}}
            <router-link :to="{ name: 'UploadCover', params: { id: book._id }}">
                <button>Upload Cover</button>
            </router-link>
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
}
</script>