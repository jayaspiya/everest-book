;<template>
  <header :class="{headerScroll:scrollHeader}">
    <h1>Everest Book</h1>
    <nav>
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
      scrollHeader: false
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
    color: #ffffff;
  
  }
</style>