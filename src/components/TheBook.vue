<template>
<div class="cover">
    <img :src="book.imageUrl" :alt="book.title" loading="lazy" v-if="book.imageUrl">
    <img src="../assets/no-front.png" :alt="book.title" loading="lazy" v-else>

    <div>
        <h3 class="title">
            {{book.title}}
        </h3>
        <p class="author">{{book.author}}</p>
        <p class="price">{{book.price}}</p>
        <button @click="addItem">{{btnText}}</button>
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
        }
    },
    methods:{
        async addItem(){
            const token = localStorage.getItem("accessToken")
            const url = "/user/addtocart/"+this.book._id
            this.btnText = "Adding"
            const res = await api.post(url,
                {
                    headers: {
                        'Authorization': `Bearer ${token}` 
                    }
                }
            )
            this.btnText = "In Cart"
            const toast  = new Toast(res.data.message)
            toast.show()
        }
    }
}
</script>

<style scoped>
button{
    width: 80%;
    margin: 0 auto;
}
.cover{
    padding: 10px;
    margin: 10px;
    background: var(--alt-color);
    width: fit-content;
}
img{
    max-height:250px;
    margin: 0 10px;
}
.price::before{
    content: "Rs.";
}
.author , .title{
    color: var(--base-color);
}
</style>