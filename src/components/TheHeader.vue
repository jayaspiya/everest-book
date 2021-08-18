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
          <router-link to="/new"> Add Book </router-link>
        </li>
        <li>
          <router-link to="/login"> Login </router-link>
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
export default {
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data(){
    return{
      scrollHeader: false,
      openNav: false
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
    }
  }
}
</script>

<style scoped>
header{
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
  nav > ul{
    display: flex;
    list-style: none;
  }
  nav li{
      margin: 0 10px;
  }
  a{
    border: 2px var(--base-color) solid;
    padding: 2px 10px;
    border-radius: 2px;
    text-transform: uppercase;
    transition: .2s all ease-out;
      text-decoration: none;
      color: var(--base-color);
  }
  a:hover,
  a.router-link-active
  {
     background:var(--base-color);
    color: var(--alt-color);
  
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