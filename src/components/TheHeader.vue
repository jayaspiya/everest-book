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