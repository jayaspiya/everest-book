<template>
    <form @submit.prevent="submit">
        Add New Review
        <star-rating-input :grade="defaultStar" @setStar="getStar"></star-rating-input>
        <input type="text" placeholder="Type your review here" v-model="description">
        <button>Submit</button>
    </form>
</template>
<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
import StarRatingInput from "./UI/StarRatingInput.vue"
export default {
    components:{
        StarRatingInput
    },
    data(){
        return{
            stars: 1,
            defaultStar: 1,
            description: ""
        }
    },
    methods:{
        getStar(n){
            this.stars = n
        },
        async submit(){
            const review = {
                book: this.$route.params.id,
                description: this.description,
                rating: this.stars
            }
            const token = localStorage.getItem("token")
            const opts = {
                headers: {
                    'Authorization': "Bearer " +token
                }
            }
            const res = await api.post("/review",review, opts)
            if(res.data.success){
                // TODO: Live COmment Add
                const toast = new Toast(res.data.message)
                toast.show()
                this.description = ""
                this.stars = 1
                this.defaultStar = 1
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