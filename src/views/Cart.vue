;<template>
  <h2>Cart</h2>
  <base-spinner v-if="isloading"></base-spinner>
  <div v-else >
      <div v-if="isCartEmpty">
            <h3>
                No Item on Cart
            </h3>
        </div>
        <div v-else>
      <table>
        <tr>
            <th>Book</th>
            <th class="cart-image-container">Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        
        <cart-item v-for="(book,index) in cartBooks" :key="book._id" :index="index" :book="book"></cart-item>
        <tr>
            <td></td>
            <td class="cart-image-container"></td>
            <td><strong>Total</strong></td>
            <td>{{totalQuantity}}</td>
            <td class="price">{{totalAmount}}</td>
        </tr>
      </table>
      <div class="center ">
        <button @click="checkout" class="btnCheckout">Checkout</button>
      </div>
      </div>
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
                this.orderBook.push({_id: book._id, qty: 1, price: book.price})
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
            isloading: true,
        }
    },
    methods:{
        checkout(){
            console.log(this.orderBook)
        }
    },
    computed:{
        totalQuantity(){
            let totalQty = 0
            if(this.orderBook.length>0){
                const qtyList = this.orderBook.map((order)=>{
                    return order.qty
                })
                totalQty = qtyList.reduce((total, qty)=>{
                    return total + qty
                })
            }
            return totalQty
        },
        totalAmount(){
            if(this.orderBook.length>0){
                const rateList = this.orderBook.map((order)=>{
                    return order.price
                })
                const qtyList = this.orderBook.map((order)=>{
                    return order.qty
                })
                let total = 0
                qtyList.forEach((qty, index) => {
                    total += qty * rateList[index]
            });
            return total}
            return 0
        },
        isCartEmpty(){
            return this.cartBooks.length === 0
        }
    }
}
</script>
<style scoped>
.btnCheckout{
    font-size: 1.5rem;
    margin: 1rem 0;
}
.price::before{
    content: "Rs."
}
</style>