;<template>
  <h3>Update Cover</h3>
  <base-spinner v-if="isloading"></base-spinner>
<div v-else>
    <table>
        <thead>
            <th>Book</th>
            <th>Action</th>
        </thead>
    
        <tr v-for="book in books" :key="book._id" class="mx-10">
            <td>{{book.title}}</td>
            <td>
            <router-link :to="{ name: 'UploadCover', params: { id: book._id }}">
                <button>Upload Cover</button>
            </router-link>
            </td>

        </tr>
        </table>

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
<style scoped>
.mx-10{
    margin: 5px 0;
}
</style>