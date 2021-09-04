;<template>
  <TheHeader/>
  {{token}}
  <main>
    <transition name="route" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>
import "mosha-vue-toastify/dist/style.css"
import TheHeader from "./components/TheHeader.vue"
export default {
  components:{
    TheHeader
  },
  created(){
    this.$store.commit("setToken", localStorage.getItem("accessToken"))
  },
  data(){
    return{
      token: this.$store.getters.token
    }
  }
}
</script>

<style>
/* reset */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Use Variable */
:root {
  --base-color: #2B7498;
  --alt-color: #ffffff;
  --background: #f5f5f5;
}

nav a{
    border: 2px var(--base-color) solid;
    padding: 2px 10px;
    border-radius: 2px;
    text-transform: uppercase;
    transition: .2s all ease-out;
      text-decoration: none;
      color: var(--base-color);
}
nav a:hover,
nav a.router-link-active
{
  background:var(--base-color);
  color: var(--alt-color);
}

/* Nav */
nav > ul{
  display: flex;
  list-style: none;
}
nav li{
  margin: 5px 10px;
}
/* Trasition */
.route-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}


/* Global */
body{
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}
h1, h2, h3, h4{
  color: var(--base-color);
}
main{
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
.flex{
  display: flex;
}
.center{
  display: flex;
  justify-content: center;
}
.align-center{
  display: flex;
  align-items: center;
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

/* Form Control */

/* Custom Checkbox */
.custom-checkbox {
  display: flex;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 18px;
  line-height: 25px;
  user-select: none;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

.custom-checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: var(--base-color);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
/* Custom Checkbox */

/* Star Rating */
.rating {
color: #b7b7b7;
}
.rating .list {
padding: 0;
}
.rating-input .list:hover .star {
color: #ffe100;
}
.rating .list .star {
display: inline-block;
font-size: 20px;
transition: all 0.2s ease-in-out;
cursor: pointer;
}
.rating .list .star:hover ~ .star:not(.active) {
color: inherit;
}
.rating .list .star.active {
color: #ffe100;
}
/* Star Rating */

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
