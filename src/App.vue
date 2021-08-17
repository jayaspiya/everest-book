;<template>
  <TheHeader/>
  <main>
    <router-view />
  </main>
</template>

<script>
import "mosha-vue-toastify/dist/style.css"
import TheHeader from "./components/TheHeader.vue"
export default {
  components:{
    TheHeader
  }
}
</script>

<style>
/* Use Variable */
:root {
  --base-color: #2B7498;
  --alt-color: #ffffff;
  --background: #f5f5f5;
}
body{
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}
h1, h2{
  color: var(--base-color);
}
main{
  height: 120vh;
  padding: 0 5rem;
}
button {
  border: 2px solid var(--base-color);
  background-color:var(--base-color) ;
  padding: 3px 10px;
  border-radius: 2px;
  transition: .2s all ease-out;
  text-decoration: none;
  color: var(--alt-color);
  cursor: pointer;
}
button:hover{
  background-color: var(--alt-color);
  color: var(--base-color);
  border: 2px solid var(--base-color) 
}
/* Form Control */
.form-control {
  margin: 0.5rem 0;
}
.form-control input{
  width: 100%;
}
.form-control textarea{
  width: 100%;
}
.form-control label{
  font-weight: bold;
  display: block;
}

.form-control input{
     padding: 1px;
     outline: none;
     transition: .2s all ease-out;   
}
.form-control input:focus{
        border: 2px solid var(--base-color);
}

/* Tablet View */
/* @media only screen and (max-width: 768px) {
}
 */
/* Mobile View */
@media only screen and (max-width: 576px) {
  main{
    padding: 0 2rem;
  }
}
 
</style>
