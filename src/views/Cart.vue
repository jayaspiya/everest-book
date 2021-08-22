;<template>
  <h3>Cart</h3>
  <base-spinner v-if="isloading"></base-spinner>
  <book-list v-else :books="cartBooks"></book-list>
</template>
<script>
import api from "../utils/api.js"
import BookList from "../components/BookList.vue"
export default {
    components:{
        BookList
    },
    async created(){
        const token = localStorage.getItem("accessToken")
        const res = await api.get("/user/cart",{
            headers: {
                'Authorization': token
            }
        })
        this.isloading = false
        this.cartBooks = res.data.data
    }, 
    data(){
        return{
            cartBooks:[],
            isloading: true
        }
    }
}
</script>