;<template>
  <header :class="{headerScroll:scrollHeader}">
    <h1>Everest Book</h1>
    <nav :class="{navActive:openNav}">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/discover"> Discover </router-link>
        </li>
        <li>
          <router-link to="/about"> About Us </router-link>
        </li>
        <li v-if="isAuth && isAdmin">
          <router-link to="/admin" >Admin</router-link>
        </li>
        <li v-if="isAuth && !isAdmin">
          <router-link to="/profile"> Profile </router-link>
        </li>
        <li v-if="isAuth && !isAdmin">
          <router-link to="/cart">Cart</router-link>
        </li>
        <li v-if="!isAuth">
          <router-link to="/login"> Login </router-link>
        </li>
        <li v-if="isAuth">
              <a @click="logoutUser" href="#">Logout</a>
        </li>
      </ul>
    </nav>
    <span @click="toggleMenu" class="menu">
      <hamburger-menu :navActive="openNav"></hamburger-menu>
    </span>
  </header>
  <div class="header-cover"></div>
</template>

<script>
// import api from "../utils/api.js"
export default {
  async created () {
    window.addEventListener('scroll', this.handleScroll);
    const token = localStorage.getItem("token")
    const userType = localStorage.getItem("userType")
    // if(token){
    // const res = await api.get("/user/profile",{
    //     headers: {
    //         'Authorization': "Bearer " + token
    //     }
    // })
    // if(res.data.success){
      if(token && token != "" ){
        this.isAuth = true
      }
      if(userType && userType === "ADMIN" ){
        this.isAdmin = true
      }
      // localStorage.setItem("user",res.data.data._id)
    // }
    // else{
    //   this.logoutUser()
    // }
    // }
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data(){
    return{
      scrollHeader: false,
      openNav: false,
      isAuth: false,
      isUser: false,
      isAdmin: false
    }
  },
  methods: {
    handleScroll () {
      if (scrollY > 30){
        this.scrollHeader = true
      }
      else{
        this.scrollHeader = false
      }
    },
    toggleMenu(){
      this.openNav = !this.openNav
    },
    logoutUser(){
      localStorage.clear()
      this.$router.push("login")
      window.location.reload()
    }
  }
}
</script>

<style scoped>
header{
  z-index: 100;
    position: fixed;
    padding: 0 3rem;
    background: var(--background);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    transition: .2s all ease-out;
  }
  .header-cover{
    min-height: 10vh;
  }
  .headerScroll{
    height: 8vh;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  }
  nav{
    display: block;
  }
  .menu{
    display: none;
    z-index: 100;
  }
  /* Tablet View */
@media only screen and (max-width: 768px) {
  .header{
    padding: 0 1rem;
  }
  .menu{
    display: block;
  }
  nav{
    position: absolute;
    background: var(--alt-color);
    padding-top: 8vh;
    right: -200px;
    top: 0;
    height: 100vh;
    transition: all .3s ease-out;
    padding-right: 40px;
  }
  .navActive{
    right: 0;
  }
  nav > ul{
    flex-direction: column;
    z-index: 10;
  }
  nav li{
      margin:10px;
  }
}
</style>