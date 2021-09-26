;<template>
        <h2>Hello {{ user.firstname }} {{ user.lastname }}</h2>
    <base-spinner v-if="isloading"></base-spinner>
  <div v-else>
      <img :src="user.profile" class="profile" />
          <div>
        <label for="files" class="btn">
            Change Profile Picture
        </label>
        <input id="files" style="visibility:hidden;" type="file" @change="uploadProfile">
    </div>
      <p><strong>Email: </strong>{{user.email}}</p>
      <p><strong>Phone: </strong>{{user.phone}}</p>
      <p><strong>Address: </strong>{{user.address}}</p>
      <p><strong>Total Reviews: </strong>{{user.reviews}}</p>
      <p><strong>Total Orders: </strong>{{user.orders}}</p>
      <button>
        <router-link to="/order"> View Order </router-link>
      </button>
      <button>
        <router-link to="/edit-profile"> Edit Profile </router-link>
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
    this.getUserProfile()
  },
  data() {
    return {
      user: "",
      isloading: true,
    }
  },
  methods:{
    async uploadProfile(e){
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      const file = files[0]
      const formData = new FormData();
      formData.append("profile", file);
      const uri  = "/user/profile"
      const token = localStorage.getItem("token")
      const opts = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': "Bearer " +token
        }
      }
      this.isloading = true
      await api.patch(uri,formData, opts)
      this.getUserProfile()
    },
    async getUserProfile(){
      const token = localStorage.getItem("token")
      const res = await api.get("/user/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      this.isloading = false
      if (res.data.success) {
        this.user = res.data.data
      } else {
        const toast = new Toast(res.data.message, "", "danger")
        toast.show()
      }
    }
  }
}
</script>
<style scoped>
.profile {
  width: 184px;
}
</style>