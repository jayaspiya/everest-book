<template>
<div class="cover">
    <img :src="book.imageUrl" :alt="book.title" loading="lazy" v-if="book.imageUrl">
    <img :src="book.cover.front" :alt="book.title" loading="lazy" v-else>
    <div>
         <h3 class="title">
            {{book.title}}
        </h3>
        <p class="author">{{book.author}}</p>
        <p class="price">{{book.price}}</p>
        <div class="flex">
            <router-link :to="{ name: 'Book', params: { id: book._id }}">
                <button>View</button>
            </router-link>
            <button @click="addItem" :disabled="btnDisabled" v-if="isAuth">{{btnText}}</button>
        </div>

    </div>
</div>
</template>
<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
export default {
    props:[
        "book"
    ],
    data(){
        return{
            btnText: "Add to cart",
            btnDisabled: false,
            isAuth: false
        }
    },
    mounted(){
        const token = localStorage.getItem("token")
        if(token && token != ""){
            this.isAuth = true
        }
    },
    methods:{
        async addItem(){
            const token = localStorage.getItem("token")
            const url = "/user/addtocart/"+this.book._id
            this.btnText = "Adding"
            const res = await api.post(url,
                {
                    headers: {
                        'Authorization': `Bearer ${token}` 
                    }
                }
            )
            if(res.data.success){
                this.btnText = "In Cart"
                this.btnDisabled = true
                const toast  = new Toast(res.data.message)
                toast.show()
            }
            else{
                this.btnText = "Add to Cart"
                const toast  = new Toast(res.data.message,"", "danger")
                toast.show()
            }
            
        },
    }
}
</script>

<style scoped>
.flex{
    justify-content: space-evenly;
}
.cover{
    padding: 10px;
    margin: 10px;
    max-width: 185px;
    background: var(--alt-color);
    width: fit-content;
    cursor: pointer;
}
img{
    height:200px;
    width: 125px;
    margin: 0 20px;
}
.price::before{
    content: "Rs.";
}
.author , .title{
    color: var(--base-color);
}
</style>