;<template>
  <h3>User Profile</h3>
  <base-spinner v-if="isloading"></base-spinner>
<div v-else>
    <img :src="user.profile" >
        <h4>Hello Mr.{{user.firstname}} {{user.lastname}}</h4>
    <p>
        <b>UserJson</b>:{{user}}
    </p>
    </div>
</template>
<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
export default {
    async mounted(){
        const token = localStorage.getItem("token")
        const res = await api.get("/user/profile",{
            headers: {
                'Authorization': "Bearer " + token
            }
        })
        this.isloading = false
        if(res.data.success){
            const resJson = res.data.data[0]
        this.isloading = false
        this.user = resJson
        }
        else{
            const toast = new Toast(res.data.message,"","danger")
            toast.show()
        }
        
    },
    data(){
        return{
            user:"",
            isloading: true 
        }
    }
}
</script>
<style scoped>
img{
    height: 150px;
}
</style>