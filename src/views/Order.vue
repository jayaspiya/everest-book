;<template>
  <h2>Orders</h2>
    <base-spinner v-if="isloading"></base-spinner>
    <div v-else>
        <div v-if="orders.length === 0">
            <h3>There are no orders</h3>
            <div class="center">
                <img src="../assets/empty.png"/>
            </div>
        </div>
        <base-card v-for="order in orders" :key="order._id">
            <h3>Order ID: {{order._id}}</h3>
            <h4>Status: {{order.status}}</h4>
            <div class="orderTableContainer">
            <table>
                <thead>
                    <tr>
                        <td><strong>Book</strong></td>
                        <td><strong>Author</strong></td>
                        <td><strong>Price</strong></td>
                        <td><strong>Qty</strong></td>
                        <td><strong>Total</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ord in order.orderBook" :key="ord">
                        <td>{{ord.bookId.title}}</td>
                        <td>{{ord.bookId.author}}</td>
                        <td>{{ord.price}}</td>
                        <td>{{ord.qty}}</td>
                        <td>{{ord.price * ord.qty}}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{order.totalQuantity}}</td>
                    <td>{{order.totalAmount}}</td>
                </tfoot>
            </table>
            </div>
        </base-card>
    </div>
</template>
<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
export default {
    data(){
        return{
            orders: [],
            loading: true
        }
    },
    async created(){
        const token = localStorage.getItem("token")
        const res = await api.get("/order/user", {
        headers: {
            Authorization: "Bearer " + token,
        },
        })
        this.isloading = false
        if (res.data.success) {
        this.isloading = false
        this.orders = res.data.data
        console.log(this.orders)
        } else {
        const toast = new Toast(res.data.message, "", "danger")
        toast.show()
        }
    }
}
</script>
