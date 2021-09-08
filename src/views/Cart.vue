;<template>
  <h3>Cart</h3>
  <base-spinner v-if="isloading"></base-spinner>
  <div v-else>
      <ul>
          <li v-for="book in orderBook" :key="book._id">{{book}}</li>
      </ul>
      <cart-item v-for="(book,index) in cartBooks" :key="book._id" :index="index" :book="book"></cart-item>
      <button>Checkout</button>
  </div>
</template>
<script>
import api from "../utils/api.js"
import CartItem from "../components/CartItem.vue"
import Toast from "../utils/Toast.js"
export default {
    components:{
        CartItem
    },
    provide(){
        return {
            orderBookProvide: this.orderBook
        }
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
            this.cartBooks.forEach(book => {
                this.orderBook.push({_id: book._id, qty: 1})
            });
        }
        else{
            const toast = new Toast(res.data.message,"","danger")
            toast.show()
        }
    }, 
    data(){
        return{
            cartBooks:[],
            orderBook: [],
            isloading: true
        }
    }
}
</script>