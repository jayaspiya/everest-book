<template>
    <tr v-if="!isDeleted"> 
        <td>
            <h3>
            {{book.title}}
            </h3>
            <div class="btns">
            <button class="btnView">
                <router-link :to="'/view/'+book._id">
                    <i class="far fa-eye"></i>
                </router-link>
            </button>
            <button class="btnDelete" @click="deleteItem">
                <i class="fas fa-times-circle"></i>
            </button>
            </div>

        </td>
        <td class="cart-image-container"><div class="flex">
            <img :src="book.cover.front"/>
            <img :src="book.cover.back"/>
        </div></td>
        <td>{{book.price}}</td>
        <td>
            <div class="quantity-container">
                <button @click="increament">+</button>
                <p class="quantity">{{quantity}}</p>
                <button @click="decreament">-</button>
            </div>
        </td>
        <td >
            {{total}}
        </td>
    </tr>
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
    computed:{
        total(){
            return this.quantity * this.book.price
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
table .quantity{
    margin: 0 10px;
}
table img{
    height: 130px;
}
/* Tablet View */
@media only screen and (max-width: 768px) {
  table img{
    height: 80px;
}
table img:nth-child(2){
    display: none;
}
.quantity-container{
    display: flex;
    align-items: center;
    flex-direction: column;
}
}
/* Mobile View */
@media only screen and (max-width: 576px) {
    table img{
        display: none;
    }
}
.quantity-container{
    display: flex;
    align-items: center;
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
        background: var(--danger);
    border: 1px solid  var(--danger);
    color: #ffffff;
}
.btns{
    margin: 5px 0;
}
.hide{
    display: none;
}
</style>