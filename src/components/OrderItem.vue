;<template>
  <tr>
    <td>{{order._id}}</td>
    <td>{{order.user.firstname}} {{order.user.lastname}}</td>
    <td>{{order.user.phone}}</td>
    <td>{{new Date(order.createdAt).toLocaleDateString()}}</td>
    <td>
        <order-item-show :orderBook="order.orderBook"></order-item-show>
    </td>
    <td class="text-center">{{order.totalQuantity}}</td>
    <td>{{order.totalAmount}}</td>
    <td class="text-center">
        <div v-if="isPending">
                        <p>Confirm order?</p>
            <button class="btnView" @click="confirmOrder">
                <i class="fas fa-check"></i>
            </button>
            <button class="btnDelete" @click="cancelOrder">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div v-else class="text-center">
            {{status}}
        </div>
    </td>
  </tr>
</template>
<script>
import OrderItemShow from "./OrderItemShow.vue"
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
export default {
    components:{
        OrderItemShow
    },
    created(){
        this.status = this.order.status
    },
    props:["order"],
    data(){
        return {
            status: ""
        }
    },
    computed:{
        isPending(){
            return this.status === "pending"
        },
    },
    methods:{
        async confirmOrder(){
            const opts = {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("token")
                }
            }
            const orderId = this.order._id
            const res = await api.put("/order/complete/"+ orderId, opts)
            if(res.data.success){
                this.status = "completed"
                const toast = new Toast("Order Confirmed")
                toast.show()
            }
            else{
                const toast = new Toast(res.message,"","danger")
                toast.show()
            }
        },
        async cancelOrder(){
            const opts = {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("token")
                }
            }
            const orderId = this.order._id
            const res = await api.put("/order/cancel/"+ orderId, opts)
            if(res.data.success){
                this.status = "canceled"
                const toast = new Toast("Order Canceled")
                toast.show()
            }
            else{
                const toast = new Toast(res.message,"","danger")
                toast.show()
            }
        }
    }
}
</script>
<style scoped>
table .confirmOrderBtn{
    margin: 0 1rem;
}
table .cancelOrderBtn{
    background: var(--danger);
}
p{
    font-size: .8rem;
}
.text-center{
    text-align: center;
}
</style>