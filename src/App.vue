;<template>
  <TheHeader/>
  <main>
    <router-view />
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
export default {
  components:{
    TheHeader
  }
}
</script>

<style>
/* Use Variable */
body{
  background: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
}

h1, h2{
    color: #2B7498;
  }

  main{
    height: 120vh;
    padding: 0 5rem;
  }

  button {
    border: 2px solid #2B7498;
    background-color:#2B7498 ;
    padding: 3px 10px;
    border-radius: 2px;
    transition: .2s all ease-out;
      text-decoration: none;
      color: #ffffff;
      cursor: pointer;
      
  }
  button:hover{
        background-color: #ffffff;
        color: #2B7498;
        border: 2px solid #2B7498
    }

/* Tablet View */
/* @media only screen and (max-width: 768px) {
} */
/* Mobile View */
@media only screen and (max-width: 576px) {
  main{
    padding: 0 2rem;
  }
}

</style>
