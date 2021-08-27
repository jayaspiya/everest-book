;<template>
  <h3>User Profile</h3>
  {{user}}
</template>
<script>
import api from "../utils/api.js"
export default {
    async mounted(){
        const token = this.$store.getters.token
        const res = await api.get("/user/profile",{
            headers: {
                'Authorization': "Bearer " +token
            }
        })
        this.user = res.data.data[0]
    },
    data(){
        return{
            user:{}
        }
    }
}
</script>