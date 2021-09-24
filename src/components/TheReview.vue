<template>
<base-card>
    <div class="align-center">
        <img :src="user.profile">
        <div>
            <p class="username">{{user.firstname}}</p>
            <div v-if="editMode">
            Rating: 
            <select @change="setEditRating" v-model="editRating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
            <star-rating :grade="rating" v-else></star-rating>
        </div>
    </div>
    <div  v-if="editMode">
        <input type="text" placeholder="Type your review here" required v-model="editDescription">
    </div>
    <p v-else>{{description}}</p>
    <button v-if="editMode" class="btnUpdate" @click="updateReview">Update Review</button>
    <button v-if="editMode" class="btnDelete" @click="deleteReview">Delete Review</button>
    <button @click="toggleEditMode" v-if="isUserSame"><i class="far fa-edit"  ></i>{{editText}}</button>

</base-card>
</template>
<script>
import api from "../utils/api.js"
import StarRating from "../components/UI/StarRating.vue"
export default {
    components:{
        StarRating
    },
    created(){
        this.userId = localStorage.getItem("uid")
    },
    data(){
        return {
            editMode: false,
            editDescription: "",
            editRating: 1,
            editText: "Edit",
            userId: ""
        }
    },
    methods:{
        toggleEditMode(){
            this.editMode = !this.editMode
            this.editDescription = this.description
            this.editRating = this.rating
            if(this.editMode){
                this.editText = "Cancel"
            }
            else{
                this.editText = "Edit"
            }
        },
        setEditRating(event){
            this.editRating = event.target.value
        },
        async updateReview(){
            const isConfirmed = confirm("Do you want to update the book?")
            if(isConfirmed){
                const token = localStorage.getItem("token")
                const opts = {
                    headers: {
                        'Authorization': "Bearer " +token
                    }
                }
                const res = await api.put("/review/"+ this.id,{
                    description: this.editDescription,
                    rating: this.editRating
                }, opts)
                console.log(res)
                this.toggleEditMode()
                this.$emit("review-update")
            }
        },

        async deleteReview(){
            const isConfirmed = confirm("Do you want to delete the book?")
            if(isConfirmed){
                const token = localStorage.getItem("token")
                const opts = {
                    headers: {
                        'Authorization': "Bearer " +token
                    }
                }
                const res = await api.delete("/review/"+ this.id, opts)
                console.log(res)
                this.toggleEditMode()
                this.$emit("review-update")
            }
        }
        
    },
    computed:{
        isUserSame(){
            return this.userId === this.user._id
        }
    },
    props:["user", "rating", "description" ,"id"],
    emits: ["review-update"]
}
</script>

<style scoped>
img{
    margin-right: 10px;
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50px;
}
.username{
    color: var(--base-color);
    font: bolder;
    font-size: 1.5rem;
    text-transform: capitalize;
}
input{
    width: 100%;
    padding: 2px 5px;
}
.btnUpdate{
    background: var(--success);
    border: 1px solid  var(--success);
}
.btnUpdate:hover{
    background: var(--alt-color);
    color: var(--success);
}
</style>