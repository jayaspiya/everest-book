;<template>
  <base-card>
    <h2>Update User</h2>
    <base-spinner v-if="isloading"></base-spinner>
<div v-else>
    <form @submit.prevent="updateUser" >
      <div class="form-control">
        <label for="fname">First Name</label>
        <input type="text" name="fname" v-model="firstname" required>
      </div>
      <div class="form-control">
        <label for="lname">Last Name</label>
        <input type="text" name="lname" v-model="lastname" required>
      </div>
      <div class="form-control">
        <label for="address">Address</label>
        <input type="text" name="address" v-model="address" required>
      </div>
      <div class="form-control">
        <label for="phone">Contact Number</label>
        <input type="number" name="phone" v-model="phone" required>
      </div>
      <div class="form-control">
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="abc@mail.com" autocomplete="off" :value="email">
      </div>
      <button >
        Update Profile
      </button>
    </form>
</div>

  </base-card>
</template>

<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
export default {
  components:{
  },
  data(){
    return {
      email: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      isloading: true
    }
  }, 
  async mounted(){
    const token = localStorage.getItem("token")
    const res = await api.get("/user/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    this.isloading = false
    if (res.data.success) {
        this.isloading = false
        const user = res.data.data
        this.email = user.email
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.address = user.address
        this.phone = user.phone
    } else {
      const toast = new Toast(res.data.message, "", "danger")
      toast.show()
    } 
  },
  methods:{
    async updateUser(){
        try {
          const token = localStorage.getItem("token")
          const opts ={
            headers: {
                Authorization: "Bearer " + token,
            },
          }
          const res = await api.put("user/", {
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            phone: this.phone,
          }, opts)
          console.log(res.data)
          if(res.data.success){
            this.$router.push("profile")
            const toast = new Toast(res.data.message)
            toast.show()
          }
          else{
            const toast = new Toast("Something went wrong", "", "danger")
            toast.show()
          }
        } catch (error) {
          alert(error)
        }
    }
  }
}
</script>