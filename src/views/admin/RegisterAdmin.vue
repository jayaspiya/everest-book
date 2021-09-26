;<template>
  <h3>Register New Admin</h3>
  <base-card>
    <form @submit.prevent="submit">
        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" name="email" autocomplete="off" v-model="email" required>
        </div>
        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" name="password" autocomplete="off" v-model="password" required>
        </div>
        <div class="form-control">
            <label for="cpassword">Confirm Password</label>
            <input type="password" name="cpassword" autocomplete="off" v-model="cpassword" required>
        </div>
        <div class="form-control">
            <label for="manager">Manager Name</label>
            <input type="text" name="manager" autocomplete="off" v-model="manager" required>
        </div>
        <div class="form-control">
            <label for="branch">Branch Name</label>
            <input type="text" name="branch" autocomplete="off" v-model="branch" required>
        </div>
        <div class="form-control">
            <label for="phone">Contact</label>
            <input type="number" name="phone" autocomplete="off" v-model="phone" required>
        </div>
        <div class="form-control">
            <label for="latitude">Latitude</label>
            <input type="text" name="latitude" autocomplete="off" v-model="latitude" required>
        </div>
        <div class="form-control">
            <label for="longitude">Longitude</label>
            <input type="text" name="longitude" autocomplete="off" v-model="longitude" required>
        </div>
        <label class="custom-checkbox">
            Show new admin on android app
            <input type="checkbox" :checked="showOnMap">
            <span span class="checkmark"></span>
        </label>
        <div class="form-control">
            <button>Submit</button>
        </div>
    </form>
  </base-card>
</template>

<script>
import Toast from "../../utils/Toast.js"
import api from "../../utils/api.js"
export default {
    data(){
        return{
            email: "",
            password:"",
            cpassword: "",
            manager: "",
            branch:"",
            phone: "",
            // Default Store Location
            latitude:"27.695410573378158",
            longitude: "84.42346769727541",
            showOnMap: true
        }
    },
    methods:{
        async submit(){
            // Check password matches or not
            if(this.password === this.cpassword){
                const isConfirmed = confirm("Do you want to create a new admin?")
                if(isConfirmed){
                    const store = {
                        email: this.email,
                        password: this.password,
                        phone: this.phone,
                        manager: this.manager,
                        latitude: this.latitude,
                        longitude: this.longitude,
                        branch: this.branch,
                        showOnMap: this.showOnMap
                    }
                    const res = await api.post("/store/register", store)
                    if(res.data.success){
                        const toast = new Toast("New Store Registered")
                        toast.show()
                        this.$router.push("/")
                    }
                    else{
                        const toast = new Toast("Failed", res.data.message, "danger")
                        toast.show()
                    }
                }
            }
            else{
                const toast = new Toast("Failed", "Password & Confirm Password does not match", "danger")
                toast.show()
            }
        }
    }
}
</script>