<template>
    <form @submit.prevent="submit">
        <h3>
            Add New Review
        </h3>
        <div>
            Rating: 
        <select @change="setRating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </div>
        <input type="text" placeholder="Type your review here" v-model="description" required>
        <button>Submit</button>
    </form>
</template>
<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
export default {
    data(){
        return{
            rating: 1,
            description: ""
        }
    },
    methods:{
        setRating(event){
            this.rating = event.target.value
        },
        async submit(){
            const review = {
                description: this.description,
                rating: this.rating
            }
            const token = localStorage.getItem("token")
            const opts = {
                headers: {
                    'Authorization': "Bearer " +token
                }
            }
            const res = await api.post("/review/"+this.$route.params.id, review, opts)
            console.log(res)
            if(res.data.success){
                const toast = new Toast(res.data.message)
                toast.show()
                this.description = ""
                this.rating = 1
                this.defaultStar = 1
                this.$emit("new-review")
            }
            else{
                const toast = new Toast(res.data.message,"","danger")
                toast.show()
            }
        }
    }
}
</script>
<style scoped>
input{
    width: 100%;
    padding: 2px 5px;
}
</style>