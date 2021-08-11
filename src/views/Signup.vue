;<template>
  <auth-container>
    <h2>Signup</h2>
    <form >
      <div class="form-control">
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="abc@mail.com" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Password"   >
      </div>
      <div class="form-control">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" placeholder="Confirm Password">
      </div>
      <button>
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
  }
}
</script>