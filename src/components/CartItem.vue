<template>
<div v-if="!isDeleted">
    <base-card>
    <div class="cart" >
        <div class="desc">
            <h3 class="title">
                {{book.title}}
            </h3>
            <p class="author">{{book.author}}</p>
            <p class="price">{{book.price}}</p>
            <div class="align-center">
                <button @click="increament">+</button>
                <p class="quantity">{{quantity}}</p>
                <button @click="decreament">-</button>
            </div>
            <div class="btns">
            <button class="btnView">
                <router-link :to="'/view/'+book._id">View</router-link>
            </button>
            <button class="btnDelete" @click="deleteItem">
                Delete
            </button>
            </div>
        </div>
        <div>
            <img :src="book.cover.front"/>
            <img :src="book.cover.back"/>
        </div>
    </div>
    </base-card>
    </div>
</template>
<script>
import api from "../utils/api.js"
import Toast from "../utils/Toast.js"
export default {
    props:[
        "book",
        "index"
    ],
    inject:["orderBookProvide"],
    data(){
        return{
            quantity: 1,
            isDeleted: false
        }
    },
    methods:{
        increament(){
            this.quantity++
            this.orderBookProvide[this.index].qty = this.quantity
        },
        decreament(){
            if(this.quantity>=2){
            this.quantity--
            this.orderBookProvide[this.index].qty = this.quantity
            }
        },
        async deleteItem(){
            const isConfirmed = confirm("Do you want to delete the book from your cart?")
            if(isConfirmed){
                const token = localStorage.getItem("token")
                const url = "/user/deletefromcart/"+this.book._id
                const response = await api.delete(url,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}` 
                        }
                    }
                )
                if(response.data.success){
                    this.isDeleted = true
                    const toast = new Toast(response.data.message)
                    toast.show()
                }
            }
        }
    }
}
</script>

<style scoped>
.quantity{
    margin: 0 10px;
}
img{
    height: 130px;
}
.cart{
    display: flex;
    justify-content: space-between;
}
.desc{
    margin: auto 0 ;
}
.btnView a{
    color: white;
    text-decoration: none;
}
.btnView{
    background: var(--blue);
    border: 1px solid  var(--blue);
}
.btnDelete{
    background: var(--danger);
    border: 1px solid  var(--danger);
}
.btnDelete:hover{
    background: var(--alt-color);
    color: var(--danger);
}
.btns{
    margin: 5px 0;
}
.hide{
    display: none;
}
</style>