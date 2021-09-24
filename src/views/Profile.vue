;<template>
        <h2>Hello {{ user.firstname }} {{ user.lastname }}</h2>
    <base-spinner v-if="isloading"></base-spinner>
  <div v-else>
      <img :src="user.profile" class="profile" />
      <p><strong>Email: </strong>{{user.email}}</p>
      <p><strong>Phone: </strong>{{user.phone}}</p>
      <p><strong>Address: </strong>{{user.address}}</p>
      <p><strong>Total Reviews: </strong>{{user.reviews}}</p>
      <p><strong>Total Orders: </strong>{{user.orders}}</p>
      <button>
        <router-link to="/order"> View Order </router-link>
      </button>
      <h3>Recently Viewed</h3>
      <recently-viewed :books="user.recentlyViewed"></recently-viewed>
  </div>
</template>
<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
import RecentlyViewed from "../components/RecentlyViewed.vue"
export default {
    components:{
        RecentlyViewed
    },
  async mounted() {
    const token = localStorage.getItem("token")
    const res = await api.get("/user/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    this.isloading = false
    if (res.data.success) {
      this.isloading = false
      this.user = res.data.data
    } else {
      const toast = new Toast(res.data.message, "", "danger")
      toast.show()
    }
  },
  data() {
    return {
      user: "",
      isloading: true,
    }
  },
}
</script>
<style scoped>
.profile {
  height: 150px;
}
</style>