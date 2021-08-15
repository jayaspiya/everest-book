;<template>
  <auth-container>
    <h2>Signup</h2>
    <form @submit.prevent="registerUser">
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
import AuthContainer from "../components/UI/AuthContainer.vue"
export default {
  components:{
    AuthContainer
  },
  data(){
    return {
      email: "",
      password: "",
      confirmPassword: ""
    }
  }, 
  methods:{
    registerUser(){
      if(this.password === this.confirmPassword){
        console.log("User register")
        this.$router.push("home")
      }
      else{
        alert("The password and confirm password doesn't match")
      }
    }
  }
}
</script>