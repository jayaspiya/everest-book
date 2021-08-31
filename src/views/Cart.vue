;<template>
  <h3>Cart</h3>
  <base-spinner v-if="isloading"></base-spinner>
  <book-list v-else :books="cartBooks"></book-list>
</template>
<script>
import api from "../utils/api.js"
import BookList from "../components/BookList.vue"
import Toast from "../utils/Toast.js"
export default {
    components:{
        BookList
    },
    async created(){
        const token = localStorage.getItem("token")
        const res = await api.get("/user/cart",{
            headers: {
                'Authorization': "Bearer " +token
            }
        })
        this.isloading = false
        if(res.data.success){
            this.cartBooks = res.data.data
        }
        else{
            const toast = new Toast(res.data.message,"","danger")
            toast.show()
        }
    }, 
    data(){
        return{
            cartBooks:[],
            isloading: true
        }
    }
}
</script>