;<template>
  <auth-container>
    <h2>Signup</h2>
    <form @submit.prevent="registerUser">
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
        <input type="email" name="email" placeholder="abc@mail.com" autocomplete="off" v-model="email" required>
      </div>
      <div class="form-control">
        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Password" v-model="password" required>
      </div>
      <div class="form-control">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword" required>
      </div>
      <button >
        Submit
      </button>
    </form>
    <p>Already on LinkedIn? <router-link to="/login">Login</router-link></p>

  </auth-container>
</template>

<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
import AuthContainer from "../components/UI/AuthContainer.vue"
export default {
  components:{
    AuthContainer
  },
  data(){
    return {
      email: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      password: "",
      confirmPassword: ""
    }
  }, 
  methods:{
    async registerUser(){
      if(this.password === this.confirmPassword){
        try {
          const res = await api.post("user/register/", {
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            phone: this.phone,
            password: this.password,
            confirmPassword: this.confirmPassword,
          })
          if(res.status === 201){
            this.$router.push("home")
            const toast = new Toast("New User registered")
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
      else{
        const toast = new Toast("Password and Confirm passsword doesnot match", "", "danger")
        toast.show()
      }
    }
  }
}
</script>