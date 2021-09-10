;<template>
  <h3>Dashboard</h3>
  <base-spinner v-if="isloading"></base-spinner>
  <div class="orderTableContainer" v-else>
    <table >
      <tr>
        <th>Order Id</th>
        <th>Customer Name</th>
        <th>Customer Contact</th>
        <th>Order at</th>
        <th class="text-center">Items</th>
        <th class="text-center">Quantity</th>
        <th>Price</th>
        <th class="text-center">Status</th>
      </tr>
      <order-item v-for="order in orders" :key="order._id" :order="order"></order-item>
    </table>
  </div>
</template>
<script>
import api from "../../utils/api.js"
import OrderItem from "../../components/OrderItem.vue"
export default {
  components:{
    OrderItem
  },
  async created(){
    const opts = {
      headers: {
          'Authorization': "Bearer " + localStorage.getItem("token")
      }
    }
    const res = await api.get("/order",opts)
    this.isloading = false
    this.orders = res.data.data
  },
  data(){
    return {
      orders: [],
      isloading: true
    }
  }
}
</script>

<style scoped>
.orderTableContainer{
  overflow-x:auto;
}
</style>