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
        <div v-if="isCompleted">
            Completed
        </div>
        <div v-else>
            <button class="confirmOrderBtn">Confirm Order</button>
        </div>
    </td>
  </tr>
</template>
<script>
import OrderItemShow from "./OrderItemShow.vue"
export default {
    components:{
        OrderItemShow
    },
    props:["order"],
    data(){
        return {
            status: this.order.status
        }
    },
    computed:{
        isCompleted(){
            return this.status === "completed"
        },
    }
}
</script>
<style scoped>
table .confirmOrderBtn{
    margin: 0 1rem;
}
</style>