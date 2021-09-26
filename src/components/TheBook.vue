<template>
<div class="cover">
    <img :src="book.cover.front" :alt="book.title" loading="lazy">
    <div class="detail">
        <div class="desc">
         <h3 class="title">
            {{book.title}}
        </h3>
        <p class="author">{{book.author}}</p>
        <h4 v-if="book.quantity === 0">Out of Stock</h4>
        <div v-else>
            <p v-if="book.discount>0">
            <span class="price">Rs.{{book.price}}</span>
            <span class="discount" > Rs.{{(100+book.discount)*book.price/100}}</span>
        </p>
        <p v-else>
            <span class="price">Rs.{{book.price}}</span>
        </p>
        </div>
        </div>

        <div class="flex action">
            <router-link :to="{ name: 'Book', params: { id: book._id }}">
                <button>View</button>
            </router-link>
            <div v-if="isAuth">
                <router-link :to="{ name: 'EditBook', params: { id: book._id }}" v-if="isAdmin">
                    <button>
                        <i class="far fa-edit"></i>Edit Book</button>
                </router-link>
                <div v-else>
                    <button v-if="book.quantity === 0">
                        <i class="fas fa-heart-broken"></i>No Stock
                    </button>
                    <button @click="addItem" :disabled="btnDisabled" v-else >
                        <i class="fas fa-shopping-bag"></i>{{btnText}}
                    </button>
                </div>
                
            </div>
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
            isAuth: false,
            isAdmin: false
        }
    },
    mounted(){
        const token = localStorage.getItem("token")
        const isAdmin = localStorage.getItem("userType") === "ADMIN"
        if(token && token != ""){
            this.isAuth = true
        }
        if(isAdmin){
            this.isAdmin = true
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
    max-width: 185px;
    height: 305px;
    width: fit-content;
    border: 1px solid rgb(146, 146, 146);
    cursor: pointer;
    transition: .2s all ease-out;
}
.cover:hover{
    border: 1px solid #222222;
}
img{
    height:200px;
    width: 125px;
    margin: 0 20px;
}
.detail{
    position: relative;
    height: 80px;
}
.cover:hover .desc{
    bottom: 25px;
} 
.cover:hover .action{
    opacity: 1;
} 
.action{
    position: absolute;
    bottom: 0px;
    z-index: 2;
    opacity: 0;
    width: 100%;
    transition: all .3s ease-out;
}
.desc{
    position: absolute;
    bottom: 0;
    z-index: 3;
    width: 100%;
    background: #ffffff;
    transition: all .2s ease-out;
}
.price{
    font-size: 1.2rem;
}
.author , .title{
    color: var(--base-color);
}
.discount{
    color: #555555;
    text-decoration: line-through; 
    font-size: .9rem;
}
</style>