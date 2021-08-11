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
