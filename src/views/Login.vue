;<template>
  <auth-container>
    <h2>Login</h2>
    <form >
      <div class="form-control">
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="abc@mail.com" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Password"   >
      </div>
      <button>
        Submit
      </button>
      
    </form>
    <p>New to Everest Book? <router-link to="/signup">Join Now</router-link></p>
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

<style scoped>
p{
  font-size: .9rem;
}
</style>