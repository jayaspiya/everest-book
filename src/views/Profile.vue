;<template>
  <h3>User Profile</h3>
  <div class="center">
    <base-spinner v-if="isloading"></base-spinner>
  <base-card v-else>
      <img :src="user.profile" />
      <h2>Hello {{ user.firstname }} {{ user.lastname }}</h2>
      <p><i class="fas fa-envelope"></i>{{user.email}}</p>
      <p><i class="fas fa-phone-square"></i>{{user.phone}}</p>
      <p><i class="far fa-map"></i>{{user.address}}</p>
      <h3>Recently Viewed</h3>
      <recently-viewed :books="user.recentlyViewed"></recently-viewed>
  </base-card>
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
img {
  height: 150px;
}
</style>